import { Injectable } from '@angular/core';

@Injectable()
export class StoreService {


    constructor() { }

  getStore() {
    return [
      { "title": "Rosiczka1", "price": "95 zl", "url": "../../assets/store1.jpg" },
      { "title": "Rosiczka2", "price": "95 zl", "url": "../../assets/store2.jpg" },
      { "title": "Rosiczka3", "price": "95 zl", "url": "../../assets/store9.jpg" },
      { "title": "Rosiczka4", "price": "95 zl", "url": "../../assets/store4.jpg" },
      { "title": "Rosiczka5", "price": "95 zl", "url": "../../assets/store5.jpg" },
      { "title": "Rosiczka6", "price": "95 zl", "url": "../../assets/store6.jpg" },
      { "title": "Rosiczka7", "price": "95 zl", "url": "../../assets/store7.jpg" },
      { "title": "Rosiczka8", "price": "95 zl", "url": "../../assets/store8.jpg" },
      { "title": "Rosiczka9", "price": "95 zl", "url": "../../assets/store10.jpg" },
      { "title": "Rosiczka10", "price": "95 zl", "url": "../../assets/store3.jpg" },
      { "title": "Rosiczka11", "price": "95 zl", "url": "../../assets/store11.jpg" },
      { "title": "Rosiczka12", "price": "95 zl", "url": "../../assets/store12.jpg" },
    ];
  }


}
