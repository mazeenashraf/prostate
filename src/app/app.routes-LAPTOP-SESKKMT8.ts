// app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ServicesComponent } from './pages/services/services.component';
import { CanserComponent } from './pages/canser/canser.component';
import { ElthabComponent } from './pages/elthab/elthab.component';
import { TadkhomComponent } from './pages/tadkhom/tadkhom.component';


export const routes: Routes = [
  { path:"", component:HomeComponent,title:"الرئيسية"},
  { path: 'الرئيسية', component: HomeComponent, title: 'الرئيسية' },
  { path: 'عن-المرض', component: AboutComponent, title: 'عن الامراض' },
  { path: 'معرض البروستاتا الطبي ', component: BlogComponent, title: 'معرض البروستاتا الطبي ' },
  { path: 'طرق-العلاج', component: ServicesComponent, title: 'طرق العلاج' },
  {path:'canser' , component:CanserComponent,title:"سرطان" },
  {path:'elthab' , component:ElthabComponent,title:'التهاب'},
  {path:'tadkhom', component:TadkhomComponent,title:"تضخم"},

];
