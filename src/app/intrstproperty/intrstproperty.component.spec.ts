import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrstpropertyComponent } from './intrstproperty.component';

describe('IntrstpropertyComponent', () => {
  let component: IntrstpropertyComponent;
  let fixture: ComponentFixture<IntrstpropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntrstpropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntrstpropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
