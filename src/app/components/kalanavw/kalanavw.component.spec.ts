import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalanavwComponent } from './kalanavw.component';

describe('KalanavwComponent', () => {
  let component: KalanavwComponent;
  let fixture: ComponentFixture<KalanavwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalanavwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KalanavwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
