import {Injectable} from '@angular/core';
import vowels from '../ressources/vowels.json';
import {AnalysisRequest} from '../models/interfaces/analysis-request';
import {AnalysisResult} from '../models/interfaces/analysis-result';
import {AnalysisMode} from '../models/enums/analysis-mode';
import {ConnectionMode} from '../models/enums/connection-mode';
import {ResultProvider} from './result-provider';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextAnalyzer {


  constructor(private resultProvider: ResultProvider) {}

// List of vowels is imported from vowels.json
  private vowelSet = new Set(vowels.vowels);

  public analyze(request: AnalysisRequest) {
    if (request.connectionMode === ConnectionMode.OFFLINE) {
      const result = this.analyzeOffline(request);
      this.resultProvider.setResult(result);
    }
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
      connectionMode: request.connectionMode
    };

    return of(result);
  }
}
