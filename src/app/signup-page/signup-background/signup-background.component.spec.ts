import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupBackgroundComponent } from './signup-background.component';

describe('SignupBackgroundComponent', () => {
  let component: SignupBackgroundComponent;
  let fixture: ComponentFixture<SignupBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
