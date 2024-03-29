import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlotterViewComponent } from './blotter-view.component';

describe('BlotterViewComponent', () => {
  let component: BlotterViewComponent;
  let fixture: ComponentFixture<BlotterViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlotterViewComponent]
    });
    fixture = TestBed.createComponent(BlotterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
