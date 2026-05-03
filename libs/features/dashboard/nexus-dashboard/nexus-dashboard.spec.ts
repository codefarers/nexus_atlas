import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexusDashboard } from './nexus-dashboard';

describe('NexusDashboard', () => {
  let component: NexusDashboard;
  let fixture: ComponentFixture<NexusDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NexusDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(NexusDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
