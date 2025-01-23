import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultLoginPageComponent } from './components/default-login-page/default-login-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DefaultLoginPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-app';
}
