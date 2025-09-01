import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AnalysisResult} from '../../models/interfaces/analysis-result';
import {ResultProvider} from '../../services/result-provider';
import {AsyncPipe, KeyValuePipe} from '@angular/common';

@Component({
  selector: 'app-analyzer-result',
  imports: [
    AsyncPipe,
    KeyValuePipe
  ],
  templateUrl: './analyzer-result.html',
  styleUrl: './analyzer-result.css'
})
export class AnalyzerResult implements OnInit{

  result$: Observable<AnalysisResult | null>;

  constructor(private analyzerResultProvider: ResultProvider) {
    this.result$ = this.analyzerResultProvider.result$;
  }

  ngOnInit() {}

}
