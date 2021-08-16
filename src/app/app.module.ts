import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiceRollerComponent } from './dice-roller/dice-roller.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LifeCounterComponent } from './life-counter/life-counter.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LifeCounterDialogComponent } from './life-counter/life-counter-dialog/life-counter-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LifeCounterTileComponent } from './life-counter/life-counter-tile/life-counter-tile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DiceRollerTileComponent } from './dice-roller/dice-roller-tile/dice-roller-tile.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HomeMenuComponent,
    PageNotFoundComponent,
    DiceRollerComponent,
    LifeCounterComponent,
    LifeCounterDialogComponent,
    LifeCounterTileComponent,
    DiceRollerTileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatDividerModule,
    MatDialogModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
