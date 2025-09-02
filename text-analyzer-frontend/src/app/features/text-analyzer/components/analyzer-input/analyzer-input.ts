import { Component } from '@angular/core';
import {MaterialImports} from '../../../../shared/material-imports';
import {FormsModule} from '@angular/forms';
import {ConnectionMode} from '../../models/enums/connection-mode';
import {AnalysisMode} from '../../models/enums/analysis-mode';
import {AnalysisRequest} from '../../models/interfaces/analysis-request';
import {TextAnalyzer} from '../../services/text-analyzer';
import {ResultProvider} from '../../services/result-provider';


@Component({
  selector: 'app-analyzer-input',
  imports: [MaterialImports, FormsModule],
  templateUrl: './analyzer-input.html',
  styleUrl: './analyzer-input.css'
})
export class AnalyzerInput {

  constructor(private analyzerService: TextAnalyzer, private resultProvider: ResultProvider) {
  }
  protected readonly ConnectionMode = ConnectionMode;
  protected readonly AnalysisMode = AnalysisMode;


  analysisText: string = '';
  connectionMode: ConnectionMode = ConnectionMode.ONLINE;
  analysisMode: AnalysisMode = AnalysisMode.VOWELS;

  protected reset(){
    this.analysisText = '';
    this.connectionMode = ConnectionMode.ONLINE;
    this.analysisMode = AnalysisMode.VOWELS;
  }
  protected resetAll(){
    this.resultProvider.reset();
  }

  protected analyze() {
    const request: AnalysisRequest = {
      analysisText: this.analysisText,
      connectionMode: this.connectionMode,
      analysisMode: this.analysisMode
    }
    this.analyzerService.analyze(request);
  }
}
