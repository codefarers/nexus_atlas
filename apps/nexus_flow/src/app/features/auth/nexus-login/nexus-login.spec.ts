import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexusLogin } from './nexus-login';

describe('NexusLogin', () => {
  let component: NexusLogin;
  let fixture: ComponentFixture<NexusLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NexusLogin],
    }).compileComponents();

    fixture = TestBed.createComponent(NexusLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
