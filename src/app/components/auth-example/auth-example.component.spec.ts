import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthExampleComponent } from './auth-example.component';

describe('AuthExampleComponent', () => {
  let component: AuthExampleComponent;
  let fixture: ComponentFixture<AuthExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
