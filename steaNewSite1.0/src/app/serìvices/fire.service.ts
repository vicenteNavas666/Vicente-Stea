import { Injectable } from '@angular/core';
import { getFirestore, doc, getDocs, collection, QuerySnapshot, DocumentReference, getDoc, where, query} from 'firebase/firestore';
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

  async getItemDetailsById(itemId: number): Promise<Item> {
    const firebaseApp = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(firebaseApp);
  
    const querySnapshot = await getDocs(
      query(collection(firestore, 'servizi'), where('id', '==', itemId))
    );
  
    if (!querySnapshot.empty) {
      const itemDocSnapshot = querySnapshot.docs[0];
      const itemData = itemDocSnapshot.data() as Item;
      return itemData;
    } else {
      throw new Error('No se encontró el elemento con el ID proporcionado');
    }
  }
  
  
}