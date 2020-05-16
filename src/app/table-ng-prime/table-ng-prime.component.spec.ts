import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNgPrimeComponent } from './table-ng-prime.component';

describe('TableNgPrimeComponent', () => {
  let component: TableNgPrimeComponent;
  let fixture: ComponentFixture<TableNgPrimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableNgPrimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableNgPrimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
