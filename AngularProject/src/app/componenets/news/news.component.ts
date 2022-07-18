import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
players:any;
  constructor() { }

  ngOnInit(): void {
    this.players=[{name:"x",nb:"1",post:'def',img:'assets/images/img_2.jpg',team:'est'},
    {name:"y",nb:"2",post:'att',img:'assets/images/img_1.jpg',team:'est'},
    {name:"s",nb:"3",post:'mid',img:'assets/images/img_2.jpg',team:'est'},
    {name:"sf",nb:"4",post:'aze',img:'assets/images/img_3.jpg',team:'fcb'},
    {name:"h",nb:"5",post:'def',img:'assets/images/img_1.jpg',team:'ca'}
  ]
  }

}
