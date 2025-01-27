import { Component, EventEmitter, Input, Output } from '@angular/core';

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
    @Input() disablePrimaryBtn: boolean = true;
    @Output("submit") onSubmit = new EventEmitter();
    @Output("navigate") onNavigate = new EventEmitter();

    submit(){
      this.onSubmit.emit(); 
    }

    navigate(){
      this.onNavigate.emit(); 
    }
}
