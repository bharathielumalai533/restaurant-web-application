import { TestBed } from '@angular/core/testing';
import { Order } from './order';

describe('Order', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Order]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Order);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});