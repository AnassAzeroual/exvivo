import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ModulesComponent } from './components/modules/modules.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormationsComponent } from './components/formations/formations.component';
import { CardComponent } from './widget/card/card.component';
import { SousContactComponent } from './widget/sous-contact/sous-contact.component';
import { SousFormationsComponent } from './widget/sous-formations/sous-formations.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ModulesComponent,
    BlogComponent,
    ContactComponent,
    FormationsComponent,
    CardComponent,
    SousContactComponent,
    SousFormationsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
