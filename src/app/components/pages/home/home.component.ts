import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/Cars';
import { CarsService } from 'src/app/services/cars.service';
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
  baseApiUrl = environment.baseApiUrl;

  searchTerm: string = '';
  // faSearch = faSearch;

  constructor(private carsService: CarsService) { }

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
  }

  // search(e: Event): void {
  //   const target = e.target as HTMLInputElement;
  //   const value = target.value;

  //   this.moments = this.allMoments.filter((moment) =>
  //     moment.title.toLowerCase().includes(value)
  //   );
  // }

}
