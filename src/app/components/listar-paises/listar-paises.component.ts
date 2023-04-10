import { Component, OnInit } from '@angular/core';
import { ObtenerPaisesService } from 'src/app/services/obtener-paises.service';

import { Pais } from 'src/app/model/pais';

@Component({
  selector: 'app-listar-paises',
  templateUrl: './listar-paises.component.html',
  styleUrls: ['./listar-paises.component.scss']
})
export class ListarPaisesComponent implements OnInit {

  listarPaises = [] as Pais[];

  constructor(private obtenerPaisesService: ObtenerPaisesService) { }

  ngOnInit(): void {
    this.obtenerPaisesService.getPaises().subscribe(
      res => {
        this.listarPaises = res as Pais[];
        console.log(this.listarPaises);
      },
      err =>{
        console.log(err);
      }
    )
  }

}
