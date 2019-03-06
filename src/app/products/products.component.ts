import { Component, OnInit } from '@angular/core';
 import { ProductsService } from "../products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: {};

 constructor(private data: ProductsService) { }

 ngOnInit() {
  this.data.getProduct().subscribe(data => {
    this.product = data;
    console.log(this.product);
  });
}

}
