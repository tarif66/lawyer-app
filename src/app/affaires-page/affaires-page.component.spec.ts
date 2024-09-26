import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffairesPageComponent } from './affaires-page.component';

describe('AffairesPageComponent', () => {
  let component: AffairesPageComponent;
  let fixture: ComponentFixture<AffairesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffairesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffairesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
