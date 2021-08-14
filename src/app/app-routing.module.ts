import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home-menu', component: HomeMenuComponent },
  { path: 'dice', component: DiceRollerComponent},
  { path: '', redirectTo: '/home-menu', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
