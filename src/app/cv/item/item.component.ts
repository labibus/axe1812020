import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from './../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne = null;
  @Input() isDiv = true;
  @Input() width = 50;
  @Input() heigth = 50;
  @Output() selectPersonneItem = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  // Envoyer un event qui contient la personne sélectionnée
  selectItem() {
    this.selectPersonneItem.emit(this.personne);
  }
}
