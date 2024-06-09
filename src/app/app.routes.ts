import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home Page',
    component: HomeComponent,
  },
  {
    path: 'user',
    title: 'User Page',
    component: UserComponent,
  },
  {
    path: 'about',
    title: 'About Page',
    component: AboutComponent,
  },
  {
    path: 'contact',
    title: 'Contact Page',
    component: ContactComponent,
  },
  {
    path: 'blog',
    title: 'Blog Page',
    component: BlogComponent,
  },
];
