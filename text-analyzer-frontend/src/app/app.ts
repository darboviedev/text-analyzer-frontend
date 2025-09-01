import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AnalyzerHome} from './features/text-analyzer/components/analyzer-home/analyzer-home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AnalyzerHome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('text-analyzer-frontend');
}
