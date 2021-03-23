import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthExampleComponent } from './components/auth-example/auth-example.component';

const routes: Routes = [
  { path: 'auth', component: AuthExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
