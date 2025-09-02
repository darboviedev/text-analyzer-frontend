import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {AnalysisResult} from '../models/interfaces/analysis-result';

@Injectable({
  providedIn: 'root'
})
export class ResultProvider {
  private resultSubject = new BehaviorSubject<AnalysisResult | null>(null);
  result$ = this.resultSubject.asObservable();

  private historySubject = new BehaviorSubject<AnalysisResult[]>([]);
  history$ = this.historySubject.asObservable();

  setResult(result$: Observable<AnalysisResult>) {
    result$.subscribe(result => {
      this.resultSubject.next(result);
      this.historySubject.next([result, ...this.historySubject.value]);
    });
  }
  public reset() {
    this.resultSubject.next(null);
    this.historySubject.next([]);
  }
}
