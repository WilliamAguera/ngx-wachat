import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWachatComponent } from './chat.component';

describe('NgxWachatComponent', () => {
  let component: NgxWachatComponent;
  let fixture: ComponentFixture<NgxWachatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxWachatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
