import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModulesComponent } from './components/modules/modules.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormationsComponent } from './components/formations/formations.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'accueil', component: HomeComponent },
  { path: 'modules',      component: ModulesComponent },
  { path: 'blogs',      component: BlogComponent },
  { path: 'contacts',      component: ContactComponent },
  { path: 'formations',      component: FormationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
