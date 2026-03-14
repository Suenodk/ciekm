import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LootjesPage } from './lootjes-page';

describe('LootjesPage', () => {
  let component: LootjesPage;
  let fixture: ComponentFixture<LootjesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LootjesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(LootjesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
