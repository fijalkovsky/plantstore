import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  scrollNav() {
    $('.nav a').click(function(){
       //Toggle Class
       $(".active").removeClass("active");
       $(this).closest('li').addClass("active");
       var theClass = $(this).attr("class");
       $('.'+theClass).parent('li').addClass('active');
       //Animate
       $('html, body').stop().animate({
           scrollTop: $( $(this).attr('href') ).offset().top - 160
       }, 700);
       return false;
     });
     $('.scrollTop a').scrollTop();
   }


   constructor() { }

   ngOnInit() {
   }

}
