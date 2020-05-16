import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CvComponent} from './cv/cv/cv.component';
import {TodoComponent} from './todo/todo.component';
import {ColorComponent} from './color/color.component';
import {FirstComponent} from './first/first.component';
import {DetailPersonneComponent} from './cv/detail-personne/detail-personne.component';
import {AddPersonneComponent} from './cv/add-personne/add-personne.component';
import {FrontComponent} from './front/front.component';
import {BackComponent} from './back/back.component';
import {CardComponent} from './card/card.component';
import {NF404Component} from './nf404/nf404.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [

  {path: '', component: FrontComponent,
    children: [
      {path: 'login', component: LoginComponent },
      {path: 'cv', children: [
          {path: '', component: CvComponent},
          {
            path: 'add',
            component: AddPersonneComponent,
            canActivate: [AuthGuard]
          },
          {path: ':id', component: DetailPersonneComponent},
        ]},
      {path: 'todo', component: TodoComponent},
      {path: 'color', redirectTo: 'color/red', pathMatch: 'full'},
      {path: 'color/:couleur', component: ColorComponent},
      {path: 'first/:cc/:name', component: FirstComponent}
    ]},
  {
    path: 'admin',
    component: BackComponent,
    children: [
      {path: 'card', component: CardComponent}
    ]
  },
  {path: '**', component: NF404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
