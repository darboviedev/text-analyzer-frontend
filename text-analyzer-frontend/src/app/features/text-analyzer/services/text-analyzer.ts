import {Injectable} from '@angular/core';
import vowels from '../ressources/vowels.json';
import {AnalysisRequest} from '../models/interfaces/analysis-request';
import {AnalysisResult} from '../models/interfaces/analysis-result';
import {AnalysisMode} from '../models/enums/analysis-mode';
import {ConnectionMode} from '../models/enums/connection-mode';
import {ResultProvider} from './result-provider';
import {catchError, map, Observable, of, throwError} from 'rxjs';
import {AnalysisHttpResponse} from '../models/interfaces/analysis-http-response';
import {HttpService} from '../../../core/http-service';
import {environment} from '../ressources/environment-constants';
import {AlertService} from '../../../core/alert-service';
import {ErrorMessages} from '../ressources/error-messages';

@Injectable({
  providedIn: 'root'
})
export class TextAnalyzer {

  constructor(private resultProvider: ResultProvider, private httpService: HttpService,
  private alertService: AlertService) {}

// List of vowels is imported from vowels.json
  private vowelSet = new Set(vowels.vowels);

  public analyze(request: AnalysisRequest) {

    if (request.connectionMode === ConnectionMode.OFFLINE) {
      this.resultProvider.setResult(this.analyzeOffline(request));
    } else {
      const online$ = this.analyzeOnline(request).pipe(
        catchError(err => {
          this.alertService.showError(err.message);
          return throwError(() => err);
        })
      );

      this.resultProvider.setResult(online$);
    }
  }

  analyzeOnline(request: AnalysisRequest): Observable<AnalysisResult> {
    return this.httpService.post<AnalysisHttpResponse>(environment.httpEndpointAnalysis, request).pipe(
      map(response => ({
        letterCount: new Map<string, number>(Object.entries(response.letterCounts)),
        analysisMode: request.analysisMode,
        connectionMode: request.connectionMode,
        analysisText: request.analysisText
      })),
      catchError(() => {
        return throwError(() => new Error(ErrorMessages.ONLINE_ANALYSIS_FAILED));
      })
    );
  }

  analyzeOffline(request: AnalysisRequest): Observable<AnalysisResult> {
    const letters = new Map<string, number>();
    const lowerCaseText = request.analysisText.toLowerCase().match(/\p{L}/gu) || [];
    lowerCaseText.sort();
    lowerCaseText.forEach(letter => {
      const isVowel = this.vowelSet.has(letter);
      if (
        (request.analysisMode === AnalysisMode.VOWELS && isVowel) ||
        (request.analysisMode === AnalysisMode.CONSONANTS && !isVowel)
      ) {
        letters.set(letter.toUpperCase(), (letters.get(letter.toUpperCase()) || 0) + 1);
      }
    });

    const result: AnalysisResult = {
      letterCount: letters,
      analysisMode: request.analysisMode,
      connectionMode: request.connectionMode,
      analysisText: request.analysisText
    };

    return of(result);
  }
}
