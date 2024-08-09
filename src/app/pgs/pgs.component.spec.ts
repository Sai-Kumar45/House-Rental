import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgsComponent } from './pgs.component';

describe('PgsComponent', () => {
  let component: PgsComponent;
  let fixture: ComponentFixture<PgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PgsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
