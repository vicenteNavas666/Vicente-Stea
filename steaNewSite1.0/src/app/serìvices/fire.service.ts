import { Injectable } from '@angular/core';
import { getFirestore, doc, getDocs, collection, QuerySnapshot, DocumentReference} from 'firebase/firestore';
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

    const serviziCollectionRef = collection(firestore, 'servizi');
    const querySnapshot: QuerySnapshot = await getDocs(serviziCollectionRef);

    const items: Item[] = [];

    for (const doc of querySnapshot.docs) {
      const itemData = doc.data() as Item;
      itemData.siOcuppa = await this.getSubcollectionData(doc.ref, 'SiOcuppa');
      itemData.img = await this.getSubcollectionData(doc.ref, 'img');
      items.push(itemData);
    }

    return items;
  }

  private async getSubcollectionData(parentRef: DocumentReference, subcollectionPath: string): Promise<any[]> {
    const subcollectionRef = collection(parentRef, subcollectionPath);
    const subcollectionSnapshot = await getDocs(subcollectionRef);

    const data: any[] = [];

    subcollectionSnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    return data;
  }
}