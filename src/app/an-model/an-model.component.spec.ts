import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnModelComponent } from './an-model.component';

describe('AnModelComponent', () => {
  let component: AnModelComponent;
  let fixture: ComponentFixture<AnModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
