import {AnalysisMode} from '../enums/analysis-mode';

export interface AnalysisHttpResponse {
  letterCounts: { [key: string]: number };
  analysisText: string;
  analysisMode: AnalysisMode;
}
