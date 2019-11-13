import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'angular 4 with jquery';
  toggleTitle(){
    $('.title').slideToggle(); //
  }


  constructor() { }

  itemsPerSlide = 3;
  singleSlideOffset = true;
  showIndicator = ! true;
  slides = [
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/3.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg'},
    {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg'},
   
  ];



  ngOnInit() {
  
 

  
  }

}
