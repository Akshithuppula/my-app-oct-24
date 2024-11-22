import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  products: any = [
    { productname: 'Pen', price: 20, rating: 4, freedelivery: false },
    { productname: 'Book', price: 40, rating: 4, freedelivery: false },
    { productname: 'Bag', price: 500, rating: 5, freedelivery: false },
    { productname: 'Shirt', price: 400, rating: 3, freedelivery: false },
    { productname: 'Cap', price: 250, rating: 3, freedelivery: false },
    { productname: 'Mobile', price: 10000, rating: 4, freedelivery: true },
    { productname: 'Laptop', price: 35000, rating: 4, freedelivery: true },
    { productname: 'Mobile case', price: 350, rating: 3, freedelivery: false },
    { productname: 'Charger', price: 300, rating: 2, freedelivery: false },
    { productname: 'Airpads', price: 4000, rating: 4, freedelivery: true },
    { productname: 'Watch', price: 5000, rating: 5, freedelivery: true }
  ];


  delete(i:number){
      this.products.splice(i,1)
  }

  pricehl(){
    this.products.sort((a:any,b:any)=>b.price-a.price)
  }

  pricelh(){
    this.products.sort((a:any,b:any)=>a.price-b.price)
  }


  ratinghl(){
    this.products.sort((a:any,b:any)=>b.rating-a.rating)
  }

  ratinglh(){
    this.products.sort((a:any,b:any)=>a.rating-b.rating)
  }

  discount(){
    this.products = this.products.map((product:any)=>{
      product.price = product.price*0.5;
      return product;
    }) 
  }

  deliveryc(){
    this.products = this.products.map((product:any)=>{
      product.price = product.price+50;
      return product;
    })
  }

  totalprice(){
    let totalcost = this.products.reduce((sum:any,product:any)=>sum+product.price,0)
    alert(totalcost);
  }

  term:string = "";

  search(){
    this.products = this.products.filter((product: any) =>
      product.productname.toLowerCase().includes(this.term.toLowerCase())
    );
      }

      freed(){
        this.products = this.products.filter((product:any)=>
      product.freedelivery==true)
      }

      productname:string = "";
      price:number = 0;
      rating:number = 0;
      freedelivery:boolean = true;

      
      add(){
        let product = {
          productname: this.productname,
          price: this.price,
          rating: this.rating,
          freedelivery: this.freedelivery
        }

        this.products.unshift(product);
      }

      cart(){
        let cart = this.products.length;
        alert(cart)
      }

}
