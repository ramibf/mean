import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
x:any;
  constructor() { }

  ngOnInit(): void {
    this.x= [{id:1,teamOne:'FCB',teamTwo:'RMD',scoreOne:'1',scoreTwo:'2'}]
  }

}
