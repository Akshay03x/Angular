import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';  
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { FQSComponent } from './fqs/fqs.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AboutDetailComponent } from './about-detail/about-detail.component';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FQSComponent,
    HeaderComponent,
    FooterComponent,
    FacultyComponent,
    AboutDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
