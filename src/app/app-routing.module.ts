import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', component: WeatherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
