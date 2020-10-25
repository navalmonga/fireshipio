import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecureThingComponent } from './secure-thing/secure-thing.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'secure', component: SecureThingComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
