import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Deferred } from './deferred';

describe('Deferred', () => {
  let component: Deferred;
  let fixture: ComponentFixture<Deferred>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deferred],
    }).compileComponents();

    fixture = TestBed.createComponent(Deferred);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
