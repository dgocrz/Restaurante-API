import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarInsumo } from './agregar-insumo';

describe('AgregarInsumo', () => {
  let component: AgregarInsumo;
  let fixture: ComponentFixture<AgregarInsumo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarInsumo],
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarInsumo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
