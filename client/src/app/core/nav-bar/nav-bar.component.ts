import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/shop/shop.service';
import { IProduct } from 'src/app/shared/models/product';
import { BasketService } from 'src/app/basket/basket.service';
import { Observable } from 'rxjs';
import { IBasket } from 'src/app/shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  product: IProduct;
  basket$: Observable<IBasket>;
  constructor(private shopService: ShopService, private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }
}
