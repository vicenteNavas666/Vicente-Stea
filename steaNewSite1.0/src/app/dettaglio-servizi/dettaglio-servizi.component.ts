import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from '../serìvices/fire.service';
import { Item } from '../shared/models/models';

@Component({
  selector: 'app-detagliservizi',
  templateUrl: './dettaglio-servizi.component.html',
  styleUrls: ['./dettaglio-servizi.component.css']
})

export class DetagliserviziComponent implements OnInit {
  itemId!: number;
  item!: Item;

  constructor(
    private route: ActivatedRoute,
    private fireService: FireService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.itemId = +params['id']; // Convertir el ID a número
      this.getItemDetails();
    });
  }

  async getItemDetails(): Promise<void> {
    try {
      this.item = await this.fireService.getItemDetailsById(this.itemId);
      console.log("Detalles del producto:", this.item);
      console.log("ID recibido:", this.itemId);
    } catch (error) {
      console.log("ID del producto:", this.itemId);
      console.error(error);
    }
  }
}

