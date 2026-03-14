import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lijstje } from './lijstje';

describe('Lijstje', () => {
  let component: Lijstje;
  let fixture: ComponentFixture<Lijstje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lijstje],
    }).compileComponents();

    fixture = TestBed.createComponent(Lijstje);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
