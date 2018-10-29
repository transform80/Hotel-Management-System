import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesCardComponent } from './supplies-card.component';

describe('SuppliesCardComponent', () => {
  let component: SuppliesCardComponent;
  let fixture: ComponentFixture<SuppliesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
