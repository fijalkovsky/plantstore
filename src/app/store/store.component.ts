import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  photos = [
    { "title": "Rosiczka", "price": "95 zl", "url": "../../assets/store1.jpg" },
    { "title": "Rosiczka", "url": "../../assets/store2.jpg" },
    { "title": "Rosiczka", "url": "../../assets/store9.jpg" },
    { "title": "Rosiczka", "url": "../../assets/store4.jpg" },
    { "title": "Rosiczka", "url": "../../assets/store5.jpg" },
    { "title": "Rosiczka", "url": "../../assets/store6.jpg" },
    { "title": "Rosiczka", "url": "../../assets/store7.jpg" },
    { "title": "Rosiczka", "url": "../../assets/store8.jpg" },
    { "title": "Rosiczka", "url": "../../assets/store10.jpg" },
    { "title": "Rosiczka", "url": "../../assets/store3.jpg" },
    { "title": "Rosiczka", "url": "../../assets/store11.jpg" },
    { "title": "Rosiczka", "url": "../../assets/store12.jpg" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
