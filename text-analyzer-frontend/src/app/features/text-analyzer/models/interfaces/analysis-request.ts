import {AnalysisMode} from '../enums/analysis-mode';
import {ConnectionMode} from '../enums/connection-mode';

export interface AnalysisRequest {
  analysisText: string;
  analysisMode: AnalysisMode;
  connectionMode: ConnectionMode;
}
