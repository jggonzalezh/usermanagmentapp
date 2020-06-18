import { NgModule } from '@angular/core';
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';

/*Angular Material Modules para componentes del main-layout */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [SideNavBarComponent, HeaderComponent],
  imports: [
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    SideNavBarComponent,
    HeaderComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatListModule,
    MatCardModule
  ]

})
export class MainLayoutModule { }
