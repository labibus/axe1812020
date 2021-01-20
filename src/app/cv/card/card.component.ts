import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personne } from './../model/personne';
import { EmbaucheService } from './../services/embauche.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() personne: Personne = null;
  constructor(
    private embaucheService: EmbaucheService,
    private tostService: ToastrService,

  ) { }

  ngOnInit(): void {
  }
  embaucher() {

    if (this.embaucheService.embaucher(this.personne)) {
      this.tostService.success(`
        ${this.personne.name} a été embauché avec succès
      `);
    } else {
      this.tostService.warning(`
        ${this.personne.name} est déjà embauché
      `);
    }
  }

}
