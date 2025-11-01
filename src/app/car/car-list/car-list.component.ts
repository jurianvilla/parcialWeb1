import { Component, OnInit } from '@angular/core';
import { Car } from '../Car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Array<Car> = [];
  totalCars: number = 0;
  brandCounts: { [marca: string]: number } = {};
  brandCountsArray: Array<{ marca: string; count: number }> = [];
  constructor(private carService: CarService) { }

  getCars(): void {
    this.carService.getCars().subscribe({
      next: (data) => {
        console.log('Cars received:', data);
        this.cars = data;
        this.computeBrandStats();
      },
      error: (error) => {
        console.error('Error fetching cars:', error);
      }
    });
  }

  private computeBrandStats(): void {
    this.totalCars = this.cars.length;
    const counts: { [k: string]: number } = {};
    for (const c of this.cars) {
      const b = (c as any).marca ?? 'Desconocida';
      counts[b] = (counts[b] || 0) + 1;
    }
    this.brandCounts = counts;
    this.brandCountsArray = Object.keys(counts).map(k => ({ marca: k, count: counts[k] }));
  }

  ngOnInit() {
    this.getCars();
  }

}
