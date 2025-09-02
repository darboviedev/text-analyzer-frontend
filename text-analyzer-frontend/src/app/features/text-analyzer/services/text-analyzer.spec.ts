
import { TextAnalyzer } from './text-analyzer';
import {AnalysisMode} from '../models/enums/analysis-mode';
import {ConnectionMode} from '../models/enums/connection-mode';

describe('TextAnalyzer - analyzeOffline-Method ', () => {
  let service: TextAnalyzer;


  beforeEach(() => {
    service = new TextAnalyzer({} as any, {} as any, {} as any);
  })

  it('should count only vowels, when analysis mode is "vowels"', () => {
    const request = {
      analysisText: 'Äpfel, im Élysée!!',
      analysisMode: AnalysisMode.VOWELS,
      connectionMode: ConnectionMode.OFFLINE
    } as any;

    service.analyzeOffline(request).subscribe(result => {
      expect(result.letterCount.get('Ä')).toBe(1);
      expect(result.letterCount.get('E')).toBe(2);
      expect(result.letterCount.get('É')).toBe(2);
    })
  })

  it('should count only consonants when analysis mode is "consonants"', () => {
    const request = {
      analysisText: 'Äpfel, im Élysée!!',
      analysisMode: AnalysisMode.CONSONANTS,
      connectionMode: ConnectionMode.OFFLINE
    } as any;

    service.analyzeOffline(request).subscribe(result => {
      expect(result.letterCount.get('P')).toBe(1);
      expect(result.letterCount.get('F')).toBe(1);
      expect(result.letterCount.get('L')).toBe(2);
      expect(result.letterCount.get('M')).toBe(1);
      expect(result.letterCount.get('Y')).toBe(1);
      expect(result.letterCount.get('S')).toBe(1);
    })
  })

  it('should return empty result if no matching letters are present', () => {
    const request = {
      analysisText: '123ms',
      analysisMode: AnalysisMode.VOWELS,
      connectionMode: ConnectionMode.OFFLINE
    } as any;

    service.analyzeOffline(request).subscribe(result => {
      expect(result.letterCount.size).toBe(0);

    })
  })

});
