import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CanserComponent } from './pages/canser/canser.component';
import { ElthabComponent } from './pages/elthab/elthab.component';
import { TadkhomComponent } from './pages/tadkhom/tadkhom.component';
import { ServicesComponent } from './pages/services/services.component';
import { BlogComponent } from './pages/blog/blog.component';
import { TadkhomhaadComponent } from './pages/tadkhomhaad/tadkhomhaad/tadkhomhaad.component';
import { SartanprostatComponent } from './pages/sartanprostat/sartanprostat/sartanprostat.component';
import { ProstathaddComponent } from './pages/porstathadd/prostathadd/prostathadd.component';
import { ProstatmozmenComponent } from './pages/prostatmozmen/prostatmozmen/prostatmozmen.component';

export const routes: Routes = [
  {path:"" , component:HomeComponent , title:"الرئيسية"},
  {path:"الرئيسية" , component:HomeComponent , title:"الرئيسية"},
  {path:"عن-المرض" , component:AboutComponent , title:"about"},
  {path:"canser" , component:CanserComponent , title:"canser"},
  {path:"elthab" , component:ElthabComponent , title:"elthab"},
  {path:"tadkhom" , component:TadkhomComponent , title:"tadhom"},
  {path:"طرق-العلاج" , component:ServicesComponent , title:"services"},
  {path:"معرض" , component:BlogComponent , title:"blog"},
  {path:"tadkhomhaad" , component :TadkhomhaadComponent , title :"علاج تضخم البروستاتا حميد"},
  {path:"sartanprostat" , component:SartanprostatComponent , title : "علاج سرطان البروستاتا "},
  {path:"prostathadd" , component : ProstathaddComponent , title : "علاج التهاب البروستاتا الحاد "},
  {path:"prostatmozmen" , component : ProstatmozmenComponent , title:" علاج التهاب البروستاتا المزمن"}

];
