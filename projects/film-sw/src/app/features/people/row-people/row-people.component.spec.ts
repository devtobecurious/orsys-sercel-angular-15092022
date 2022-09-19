import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowPeopleComponent } from './row-people.component';

describe('RowPeopleComponent', () => {
  let component: RowPeopleComponent;
  let fixture: ComponentFixture<RowPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
