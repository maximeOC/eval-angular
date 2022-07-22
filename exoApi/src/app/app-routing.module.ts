import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableDepartementComponent} from "./table-departement/table-departement.component";
import {TableRegionComponent} from "./table-region/table-region.component";

const routes: Routes = [
  {path: 'Departement', component: TableDepartementComponent},
  {path: 'Region', component: TableRegionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
