import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './components/landing-page/landing-page.component'
import { GameComponent } from './components/game/game.component';

const routes: Routes = [
  {
    path: "game", component : GameComponent
  },
  {
    path: "**", component : LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
