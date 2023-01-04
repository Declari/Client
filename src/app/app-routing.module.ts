import { AcompteComponent } from './acompte/acompte.component';
import { AcompteAllComponent } from './acompte-all/acompte-all.component';
import { SignUpMoraleComponent } from './sign-up-morale/sign-up-morale.component';
import { SignUpPhysiqueComponent } from './sign-up-physique/sign-up-physique.component';
import { DeclariComponent } from './declari/declari.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';

import { HomeComponent } from './home/home.component';
//Page 404
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//Animation
import { OpenCloseComponent } from './open-close/open-close.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: 'pandora', component: OpenCloseComponent,
  },
  {
    path: 'login', component: SignInComponent,
  },
  {
    path: 'register', component: SignUpPhysiqueComponent,
  },
  {
    path: 'register/physique', component: SignUpPhysiqueComponent,
  },
  {
    path: 'register/morale', component: SignUpMoraleComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: "", redirectTo: "declari", pathMatch: "full" },
      { path: 'declari', component: DeclariComponent },
      { path: 'acompte', component: AcompteComponent },
      { path: 'acompteall', component: AcompteAllComponent },


    ]
  },
  {
     path: "**" , component:PageNotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
