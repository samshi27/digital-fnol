import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { NewClaimComponent } from './Components/home/new-claim/new-claim.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "home", component: HomeComponent,
    // children: [
    //   {
    //     path: 'new-car-claim',
    //     component: NewClaimComponent,
    //   }
    // ]
  },
  { path: "home/new-car-claim", component: NewClaimComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
