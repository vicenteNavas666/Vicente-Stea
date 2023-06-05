import { Injectable } from '@angular/core';
import { getFirestore, doc, getDocs, collection} from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { Item } from '../shared/models/models';
import { initializeApp } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class FireService {

  constructor() { }

  items: Item[] = [];

  async getItemsFromFirestore(){
    const firebaseApp = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(firebaseApp);
    const querySnapshot = await getDocs(collection(firestore, 'servizi'));
    querySnapshot.forEach((doc) => {
      console.log(this.items)
      this.items.push(doc.data() as Item);
    });
}
}
