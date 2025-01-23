import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLoginPageComponent } from './default-login-page.component';

describe('DefaultLoginPageComponent', () => {
  let component: DefaultLoginPageComponent;
  let fixture: ComponentFixture<DefaultLoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultLoginPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
