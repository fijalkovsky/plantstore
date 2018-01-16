import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  photos;

  constructor(service: StoreService) {
    this.photos = service.getStore();
  }


  ngOnInit() {
  }

}
