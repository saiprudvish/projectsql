import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebmallComponent } from './webmall.component';

describe('WebmallComponent', () => {
  let component: WebmallComponent;
  let fixture: ComponentFixture<WebmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
