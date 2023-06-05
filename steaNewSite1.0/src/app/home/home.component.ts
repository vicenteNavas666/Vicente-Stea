import { Component, OnInit } from '@angular/core';
import { getFirestore, doc, getDocs, collection} from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { Item } from '../shared/models/models';
import { initializeApp } from 'firebase/app';
import { FireService } from '../serìvices/fire.service';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  items: Item[] = [];

  constructor(private firebaseService: FireService) { }

  async ngOnInit() {
    this.items = await this.firebaseService.getItemsFromFirestore();
    console.log(this.items);
  
  }


 }


 
