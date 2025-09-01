import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AnalysisResult} from '../../models/interfaces/analysis-result';
import {ResultProvider} from '../../services/result-provider';
import {AsyncPipe, KeyValuePipe} from '@angular/common';

@Component({
  selector: 'app-analyzer-history',
  imports: [
    AsyncPipe,
    KeyValuePipe
  ],
  templateUrl: './analyzer-history.html',
  styleUrl: './analyzer-history.css'
})
export class AnalyzerHistory implements OnInit{

  history$: Observable<AnalysisResult[]> ;


  constructor(private analyzerResultProvider: ResultProvider) {
    this.history$ = this.analyzerResultProvider.history$;
  }

  ngOnInit() {}
}
