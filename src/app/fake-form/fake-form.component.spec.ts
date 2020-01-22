import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeFormComponent } from './fake-form.component';

describe('FakeFormComponent', () => {
  let component: FakeFormComponent;
  let fixture: ComponentFixture<FakeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FakeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
