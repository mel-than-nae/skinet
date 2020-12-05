import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/shop/shop.service';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  product: IProduct;
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  }
}
