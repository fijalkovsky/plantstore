import { Component, OnInit } from '@angular/core';
import {AboutService} from '../about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

about;

  constructor( service: AboutService) {
    this.about = service.getAbout();
  }

  ngOnInit() {
  }

}
