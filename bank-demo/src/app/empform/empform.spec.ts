import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Empform } from './empform';

describe('Empform', () => {
  let component: Empform;
  let fixture: ComponentFixture<Empform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Empform],
    }).compileComponents();

    fixture = TestBed.createComponent(Empform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
