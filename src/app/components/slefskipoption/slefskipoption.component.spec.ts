import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlefskipoptionComponent } from './slefskipoption.component';

describe('SlefskipoptionComponent', () => {
  let component: SlefskipoptionComponent;
  let fixture: ComponentFixture<SlefskipoptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlefskipoptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlefskipoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
