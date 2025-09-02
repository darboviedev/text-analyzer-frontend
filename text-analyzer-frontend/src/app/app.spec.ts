import { TestBed } from '@angular/core/testing';
import { App } from './app';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {TextAnalyzer} from './features/text-analyzer/services/text-analyzer';
import {HttpService} from './core/http-service';
import {ResultProvider} from './features/text-analyzer/services/result-provider';
import {AlertService} from './core/alert-service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideHttpClientTesting(),
        TextAnalyzer,
        ResultProvider,
        AlertService,
        { provide: HttpService, useValue: {} }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
