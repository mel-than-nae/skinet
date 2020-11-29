import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IProduct } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Skinet';

  constructor() {

  }

  ngOnInit(): void {
  }
}
