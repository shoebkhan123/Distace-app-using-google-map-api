import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectionDistancePage } from './direction-distance.page';

const routes: Routes = [
  {
    path: '',
    component: DirectionDistancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectionDistancePageRoutingModule {}
