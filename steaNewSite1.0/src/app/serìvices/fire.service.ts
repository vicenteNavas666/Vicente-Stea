import { Injectable } from '@angular/core';
import { getFirestore, doc, getDocs, collection, QuerySnapshot} from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import { Item } from '../shared/models/models';
import { initializeApp } from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class FireService {

  async getItemsFromFirestore(): Promise<Item[]> {
    const firebaseApp = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(firebaseApp);
    const querySnapshot: QuerySnapshot = await getDocs(collection(firestore, 'servizi'));

    const items: Item[] = [];

    querySnapshot.forEach((doc) => {
      items.push(doc.data() as Item);
    });

    return items;
  }
}








