import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, LandingComponent, RegistrationComponent, NotFoundComponent } from '@pages';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
