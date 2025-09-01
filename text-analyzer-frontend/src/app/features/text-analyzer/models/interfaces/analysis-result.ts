import {AnalysisMode} from '../enums/analysis-mode';
import {ConnectionMode} from '../enums/connection-mode';

export interface AnalysisResult {
  letterCount: Map<string, number>;
  analysisMode: AnalysisMode;
  connectionMode: ConnectionMode;
  analysisText: string;
}
