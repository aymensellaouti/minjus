import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { PereComponent } from './communication/pere/pere.component';
import { FilsComponent } from './communication/fils/fils.component';
import { CvComponent } from './cv/cv/cv.component';
import { ListComponent } from './cv/list/list.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { WordComponent } from './directives/word/word.component';
import { LampeComponent } from './directives/lampe/lampe.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { FirstPipe } from './pipes/first.pipe';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import {LoggerService} from './services/logger.service';
import { TodoComponent } from './todo/todo.component';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { FakeFormComponent } from './fake-form/fake-form.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { FrontComponent } from './front/front.component';
import { BackComponent } from './back/back.component';
import { NF404Component } from './nf404/nf404.component';
import { ObservableComponent } from './observable/observable.component';
import { HttpComponent } from './http/http.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    CardComponent,
    PereComponent,
    FilsComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    NgStyleComponent,
    WordComponent,
    LampeComponent,
    NgClassComponent,
    HighlightDirective,
    RainbowDirective,
    FirstPipe,
    DefaultImagePipe,
    TodoComponent,
    EmbaucheComponent,
    FakeFormComponent,
    LoginComponent,
    HeaderComponent,
    RouterSimulatorComponent,
    AddPersonneComponent,
    DetailPersonneComponent,
    FrontComponent,
    BackComponent,
    NF404Component,
    ObservableComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
