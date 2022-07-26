import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './app/component/detail/car-detail/car-detail.component';
import { CarListComponent } from './app/component/list/car-list/car-list.component';
import { SettingsComponent } from './app/component/settings/settings.component';

const routes: Routes = [
  // { path: '', component: MainComponent },
  { path: 'cars', component: CarListComponent },
  { path: 'cars/:id', component: CarDetailComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: CarListComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
