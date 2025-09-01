import { TestBed } from '@angular/core/testing';

import { TextAnalyzer } from './text-analyzer';

describe('TextAnalyzer', () => {
  let service: TextAnalyzer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextAnalyzer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
