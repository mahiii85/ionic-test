import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrentWeatherPage } from './current-weather.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CurrentWeatherPageRoutingModule } from './current-weather-routing.module';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    CurrentWeatherPageRoutingModule,
    SharedModule
  ],
  declarations: [CurrentWeatherPage]
})
export class CurrentWeatherPageModule {}
