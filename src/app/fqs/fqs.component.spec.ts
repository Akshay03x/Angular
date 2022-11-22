import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FQSComponent } from './fqs.component';

describe('FQSComponent', () => {
  let component: FQSComponent;
  let fixture: ComponentFixture<FQSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FQSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FQSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
