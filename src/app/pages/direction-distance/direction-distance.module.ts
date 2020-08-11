import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { IonicModule } from '@ionic/angular';

import { DirectionDistancePageRoutingModule } from './direction-distance-routing.module';

import { DirectionDistancePage } from './direction-distance.page';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    DirectionDistancePageRoutingModule
  ],
  declarations: [DirectionDistancePage],
  providers: [Geolocation]
})
export class DirectionDistancePageModule {}
