import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeEditComponent } from './joke-edit.component';

describe('JokeEditComponent', () => {
  let component: JokeEditComponent;
  let fixture: ComponentFixture<JokeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JokeEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
