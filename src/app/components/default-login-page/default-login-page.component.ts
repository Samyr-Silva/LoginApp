import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-login-page',
  imports: [],
  templateUrl: './default-login-page.component.html',
  styleUrl: './default-login-page.component.css'
})
export class DefaultLoginPageComponent {
    @Input() title: string = "";
    @Input() primaryBtnText: string = "";
    @Input() secondaryBtnText: string = "";

}
