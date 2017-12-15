import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> highlighted', animate(500))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0), scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate('500ms')),
      transition('highlighted => normal', animate('800ms')),
      transition('shrunken <=> *', animate('400ms'))
    ])
  ]
})
export class GalleryComponent implements OnInit {
  state = 'normal';
  wildState = 'normal';

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }


  onShrink() {
    this.wildState = 'shrunken';
  }

  constructor() { }

  ngOnInit() {
  }

}


  // $(function(){
	// 	var zIndex= 1, endTop=0, endLeft=450;
  //
	// 	function randRotation(el){
	// 		var rot = Math.round( Math.random() * 90-45);
	// 		return $(el).css({
	// 			'-webkit-transform':'rotate('+rot+'deg)'
	// 			,'-moz-transform':'rotate('+rot+'deg)'
	// 			,'transform':'rotate('+rot+'deg)'
	// 		});
	// 	}
  //
	// 	$('.gallery li').each(function(){
	// 		randRotation(this).css({
	// 			top:Math.round(Math.random()*50-25)
	// 			,left:Math.round(Math.random()*50-25)
	// 			,'zIndex': zIndex++
	// 		})
	// 		.click(function(){
	// 			var myZindex = $(this).css('zIndex');
	// 			$('.gallery li').not(this).each(function(){
	// 				if( $(this).css('zIndex') > myZindex ){
	// 					$(this).css('zIndex',$(this).css('zIndex')-1);
	// 				}
	// 			});
	// 			if(! $(this).is('.active')){
	// 				$(this).toggleClass('active')
	// 				.animate({
	// 					top:endTop
	// 					,left:endLeft
	// 				})
	// 				.css({zIndex:$('.gallery li').length });
	// 				var activated=$('.gallery .active').not(this);
	// 				activated.length && activated.click();
	// 			}else{
	// 				$('.gallery li').each(function(){$(this).css('zIndex',parseInt($(this).css('zIndex'),10)+1)});
	// 				randRotation($(this).toggleClass('active'))
	// 				.animate({
	// 					top:Math.round(Math.random()*50-25)
	// 					,left:Math.round(Math.random()*50-25)
	// 				}).css({zIndex:1});
	// 			}
	// 		});
	// 	});
	// });
  //
