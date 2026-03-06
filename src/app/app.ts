import { Component, signal } from '@angular/core';
import { FormLayouts } from './form-layouts/form-layouts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormLayouts],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('pw-demo-app');
}