import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdevSearchComponent } from './gdev-search.component';

describe('GdevSearchComponent', () => {
  let component: GdevSearchComponent;
  let fixture: ComponentFixture<GdevSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdevSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GdevSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
