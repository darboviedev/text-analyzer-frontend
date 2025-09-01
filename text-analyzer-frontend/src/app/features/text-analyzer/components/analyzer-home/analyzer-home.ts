import { Component } from '@angular/core';
import {AnalyzerInput} from '../analyzer-input/analyzer-input';
import {AnalyzerResult} from '../analyzer-result/analyzer-result';
import {AnalyzerHistory} from '../analyzer-history/analyzer-history';
import {MaterialImports} from '../../../../shared/material-imports';

@Component({
  selector: 'app-analyzer-home',
  imports: [AnalyzerInput,
    AnalyzerResult,
    AnalyzerHistory,
    MaterialImports],
  templateUrl: './analyzer-home.html',
  styleUrl: './analyzer-home.css'
})
export class AnalyzerHome {

}
