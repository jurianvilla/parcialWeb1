/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';

import { CarListComponent } from './car-list.component';
import { CarService } from '../car.service';
import { Car } from '../Car';
import { faker } from '@faker-js/faker';

describe('CarListComponent', () => {
  let component: CarListComponent;
  let fixture: ComponentFixture<CarListComponent>;
  let debugEl: DebugElement;

  // helper to create a fake car
  function makeFakeCar(id: number): Car {
    return {
      id,
      marca: faker.vehicle.manufacturer(),
      linea: faker.vehicle.model(),
      referencia: faker.string.alpha({ length: 8 }),
      modelo: faker.number.int({ min: 2000, max: 2025 }),
      kilometraje: faker.number.int({ min: 0, max: 200000 }),
      color: faker.color.human(),
      imagen: faker.image.url()
    } as unknown as Car;
  }

  beforeEach(async () => {
    // prepare 3 fake cars
    const fakeCars: Car[] = [makeFakeCar(1), makeFakeCar(2), makeFakeCar(3)];

    // stub CarService
    const carServiceStub = {
      getCars: () => of(fakeCars)
    };

    await TestBed.configureTestingModule({
      declarations: [CarListComponent],
      providers: [{ provide: CarService, useValue: carServiceStub }]
    }).compileComponents();

    fixture = TestBed.createComponent(CarListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create and load 3 cars', () => {
    expect(component).toBeTruthy();
    expect(component.cars.length).toBe(3);
    expect(component.totalCars).toBe(3);
    // brandCountsArray should have at least 1 entry
    expect(component.brandCountsArray.length).toBeGreaterThanOrEqual(1);
  });

  it('should render 3 rows in the table body', () => {
    // find all rows inside tbody
    const rows = debugEl.queryAll(By.css('table tbody tr'));
    expect(rows.length).toBe(3);
  });

  it('should display Total and brand list below the table', () => {
    const totalEl = debugEl.query(By.css('.stats li'));
    expect(totalEl.nativeElement.textContent).toContain('Total');
    // second and subsequent li elements are brand lines
    const brandEls = debugEl.queryAll(By.css('.stats li'));
    // at least 2 elements: total + one brand
    expect(brandEls.length).toBeGreaterThanOrEqual(2);
  });
});
