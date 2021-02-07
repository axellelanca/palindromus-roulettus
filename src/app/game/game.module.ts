import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { RouterModule, Routes } from '@angular/router';
import { TwitterModule } from '../twitter/twitter.module';

const game: Routes = [
  {
    path: '',
    component: GameComponent
  }
];


@NgModule({
  declarations: [GameComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(game),
    TwitterModule
  ]
})
export class GameModule { }
