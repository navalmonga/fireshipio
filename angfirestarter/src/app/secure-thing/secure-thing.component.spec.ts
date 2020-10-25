import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureThingComponent } from './secure-thing.component';

describe('SecureThingComponent', () => {
  let component: SecureThingComponent;
  let fixture: ComponentFixture<SecureThingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecureThingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
