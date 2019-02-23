import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from '../../services/shop.service';
import { ShopResponse } from '../../interfaces/shop-response';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent implements OnInit {

  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute
  ) { }

    private selectedShop: ShopResponse;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.shopService.getShop(parseInt(id)).subscribe(
      (response) => {
        console.log(response.product);
        this.selectedShop = response.product;
      },
      (error) => {
        console.log(error.error.message);
      }
    )
  }

}
