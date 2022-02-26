import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertenciaComponent } from './components/advertencia/advertencia.component';
import { AndroidComponent } from './components/android/android.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { ErogesComponent } from './components/eroges/eroges.component';
import { InfoComponent } from './components/info/info.component';
import { MainComponent } from './components/main/main.component';
import { RpgComponent } from './components/rpg/rpg.component';

const routes: Routes = [
{
  path: '',
  component: AdvertenciaComponent
},
{
  path: 'main',
  component: MainComponent
},
{
  path: 'eroges',
  component: ErogesComponent
},

{
  path: 'rpg',
  component: RpgComponent
},

{
  path: 'android',
  component: AndroidComponent
},

{
  path: 'contactanos',
  component: ContactanosComponent
},

{
  path: 'info',
  component: InfoComponent
},


{
  path: '**',
  redirectTo: ''
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
