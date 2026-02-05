import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderShell } from './order-shell';

describe('OrderShell', () => {
  let component: OrderShell;
  let fixture: ComponentFixture<OrderShell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderShell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderShell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
