import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/Cars';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  total: Number = 0;
  cars: Cars[] = [];

  constructor(private carsService: CarsService) { }

  ngOnInit(): void {
  }

}
