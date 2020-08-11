import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'direction',
    pathMatch: 'full'
  },
  {
    path: 'direction/:id',
    loadChildren: () => import('./pages/direction-distance/direction-distance.module').then( m => m.DirectionDistancePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
