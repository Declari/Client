import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//HTTP
import { HttpClientModule } from '@angular/common/http';
import { OpenCloseComponent } from './open-close/open-close.component';
import { NgChartsModule } from 'ng2-charts';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignOutComponent } from './sign-out/sign-out.component';



//Materials
//import { FlexLayoutModule } from '@angular/flex-layout';

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

//angular-material.module
import { AngularMaterialModule } from './angular-material.module';

//Flex
import { FlexLayoutModule } from '@angular/flex-layout';
import { DeclariComponent } from './declari/declari.component';
import { SignUpPhysiqueComponent } from './sign-up-physique/sign-up-physique.component';
import { SignUpMoraleComponent } from './sign-up-morale/sign-up-morale.component';
import { ChoiceComponent } from './choice/choice.component';
import { AcompteComponent } from './acompte/acompte.component';
import { DeclariAllComponent } from './declari-all/declari-all.component';



@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    SignInComponent,
    SignUpComponent,
    SignOutComponent,
    DeclariComponent,
    SignUpPhysiqueComponent,
    SignUpMoraleComponent,
    ChoiceComponent,
    AcompteComponent,
    DeclariAllComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //NGG Bootstrap
    NgbModule,
    //make all the necessary imports for form implementation {{ user.nom | salem}}
    FormsModule,
    //HTTP requests and response
    HttpClientModule,
    //Animation
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    //FontAwesome(Icons...)
    FontAwesomeModule,
    //NgChart
    NgChartsModule,


    //Plus Materials 
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,

    //Materials
    AngularMaterialModule,
    
    //Flex
    FlexLayoutModule,

    //Reactive Forms like FormsModule
    ReactiveFormsModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
