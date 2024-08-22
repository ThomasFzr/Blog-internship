import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  {
    path: 'entreprise',
    title: 'Entreprise',
    component: HomeComponent,
  },
  {
    path: 'user',
    title: 'User Page',
    component: UserComponent,
  },
  {
    path: '',
    title: 'About',
    component: AboutComponent,
  },
  {
    path: 'contact',
    title: 'Contact',
    component: ContactComponent,
  },
  {
    path: 'blog',
    title: 'Blog',
    component: BlogComponent,
  },
];
