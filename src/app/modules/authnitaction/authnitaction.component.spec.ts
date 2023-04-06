import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthnitactionComponent } from './authnitaction.component';

describe('AuthnitactionComponent', () => {
  let component: AuthnitactionComponent;
  let fixture: ComponentFixture<AuthnitactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthnitactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthnitactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
