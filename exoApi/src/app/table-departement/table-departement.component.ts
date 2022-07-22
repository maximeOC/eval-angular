import { Component, OnInit } from '@angular/core';
import {Departement} from "../../service/departement";
import {UrlRegion} from "../../service/urlRegion";
import {RegionService} from "../../service/region.service";

@Component({
  selector: 'app-table-departement',
  templateUrl: './table-departement.component.html',
  styleUrls: ['./table-departement.component.scss']
})
export class TableDepartementComponent implements OnInit {
  arrayDepartement: Departement[] = []
  constructor(private _httpService: RegionService) { }

  ngOnInit(): void {

    this.getDep()
  }
  arrayButton: string[] = ['Department', 'Region']
  getDep(url: string = UrlRegion.urlDep): void {
    this._httpService.getRequest<Departement[]>(url)
      .subscribe((jsonResponse) => {
          this.arrayDepartement = jsonResponse;
        }
      );
  }




}
