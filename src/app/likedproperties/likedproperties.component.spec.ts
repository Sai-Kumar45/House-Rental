import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedpropertiesComponent } from './likedproperties.component';

describe('LikedpropertiesComponent', () => {
  let component: LikedpropertiesComponent;
  let fixture: ComponentFixture<LikedpropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikedpropertiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikedpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
