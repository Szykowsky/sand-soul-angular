import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeonParagraphComponent } from './neon-paragraph.component';

describe('NeonParagraphComponent', () => {
  let component: NeonParagraphComponent;
  let fixture: ComponentFixture<NeonParagraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeonParagraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeonParagraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
