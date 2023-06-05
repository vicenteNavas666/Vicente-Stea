import { Component, OnInit } from '@angular/core';
import { FireService } from './serìvices/fire.service';
import { Item } from './shared/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'steaNewSite1.0';
  


  
  items: Item[] = [];

  constructor(private firebaseService: FireService) { }

  async ngOnInit() {
    this.items = await this.firebaseService.getItemsFromFirestore();
    console.log(this.items);
    // Realiza cualquier otra acción necesaria con los datos obtenidos
  }

}
