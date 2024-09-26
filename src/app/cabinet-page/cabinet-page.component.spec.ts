import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetPageComponent } from './cabinet-page.component';

describe('CabinetComponent', () => {
  let component: CabinetPageComponent;
  let fixture: ComponentFixture<CabinetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabinetPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
