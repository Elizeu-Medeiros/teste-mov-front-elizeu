import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/Cars';
import { CarsService } from 'src/app/services/cars.service';
import { Brands } from 'src/app/Brands';
import { BrandsService } from 'src/app/services/brands.service';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any;
  cars: Cars[] = [];
  allCars: Cars[] = [];
  brands: Brands[] = [];
  allBrands: Brands[] = [];
  baseApiUrl = environment.baseApiUrl;

  searchTerm: string = '';
  faSearch = faSearch;

  constructor(private carsService: CarsService, private brandsService: BrandsService) { }

  ngOnInit(): void {
    this.carsService.getCars().subscribe((itens) => {
      const data = itens.data;
      const items = itens;

      data.map((item: { created_at: string | number | Date; }) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allCars = data;
      this.cars = data;
      this.items = itens;
    });

    this.brandsService.getBrands().subscribe((itens) => {
      const data = itens.data;
      const items = itens;

      data.map((item: { created_at: string | number | Date; }) => {
        item.created_at = new Date(item.created_at!).toLocaleDateString(
          'pt-BR'
        );
      });

      this.allBrands = data;
      this.brands = data;
      this.items = itens;
    });
  }

  searchCity(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.cars = this.allCars.filter((car) =>
      car.city.toLowerCase().includes(value)
    );
  }

  searchStore(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.cars = this.allCars.filter((car) =>
      car.store_withdrawn.toLowerCase().includes(value)
    );
  }

  searchDate(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.cars = this.allCars.filter((car) =>
      car.deadline.toLowerCase().includes(value)
    );
  }
}
