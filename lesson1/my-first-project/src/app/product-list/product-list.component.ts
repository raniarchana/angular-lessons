import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  //  products:any = [
    // {id:1, name:"product1", description:"description1", type: "mobile"},
    // {id:2, name:"product2", description:"description2", type: "furniture"},
    // {id:3, name:"product3", description:"description3", type: "laptop"},
    // {id:4, name:"product4", description:"description4", type: "ornaments"},
    // {id:5, name:"product5", description:"description5", type: "books"}
  // ]

  // condition:boolean= true

  // someValue = "value1";

categories:string[]=["Mobiles","Laptop","Furniture","TV"]


}
