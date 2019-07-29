import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWachatContentComponent } from './chat-content.component';

describe('NgxWachatContentComponent', () => {
  let component: NgxWachatContentComponent;
  let fixture: ComponentFixture<NgxWachatContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxWachatContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWachatContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
