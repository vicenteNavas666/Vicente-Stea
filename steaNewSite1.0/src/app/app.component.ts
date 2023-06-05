import { Component, OnInit } from '@angular/core';
import { FireService } from './serìvices/fire.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'steaNewSite1.0';
  
  
  constructor(public fireService: FireService) { }

  ngOnInit() {
    this.fireService.getItemsFromFirestore();
  }


}
