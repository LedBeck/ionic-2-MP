import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CarritoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CarritoService {

  constructor() {}

  Item=[];
  //  private discount:IDiscount;
    addItem(item){
        this.Item.push(item);
        console.log(this.Item);
    }
    deleteItem(item , i){
        this.Item = this.Item[i].filter(cartItem=>cartItem!==item);
        console.log(this.Item);
    }
    // clearCart(){
    //     this.cart = [];
    // }
    // applyDiscount(code:string){
    //     this.discount = discounts.filter(discount=>discount.code==code)[0];
    // }
    getCart(){
        return this.Item;
    }
    getTotalPrice(){
        let totalPrice = this.Item.reduce((sum, cartItem)=>{
            return sum+=cartItem.precio, sum;
        },0);
        // if(this.discount){
        //     totalPrice -= totalPrice=this.discount.amount;
        // }
        return totalPrice;
    }

}
