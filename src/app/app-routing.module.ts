import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDetailComponent } from './about-detail/about-detail.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FQSComponent } from './fqs/fqs.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'fqs',component:FQSComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'aboutdetail/:id',component:AboutDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
