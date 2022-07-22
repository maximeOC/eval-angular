import { Component, OnInit } from '@angular/core';
import {RegionService} from "../../service/region.service";
import {UrlRegion} from "../../service/urlRegion";
import {Region} from "../../service/region";



@Component({
  selector: 'app-table-region',
  templateUrl: './table-region.component.html',
  styleUrls: ['./table-region.component.scss']
})
export class TableRegionComponent implements OnInit {
  arrayRegion: Region[] = [];

  arrayButton: string[] = ['Department', 'Region']


  constructor(private _httpService: RegionService) {
  }

  ngOnInit(): void {
    this.getRegion()

  }
  getRegion(url: string = UrlRegion.urlReg): void {
    this._httpService.getRequest<Region[]>(url)
      .subscribe((jsonResponse) => {
          this.arrayRegion = jsonResponse;
        }
      );
  }
}
