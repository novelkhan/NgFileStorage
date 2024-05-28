import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { AuthorizationGuard } from './modules/shared/guards/authorization.guard';
import { NotFoundComponent } from './modules/shared/components/errors/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthorizationGuard],
    children: [
      { path: 'user', component: UserComponent },
      { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(module => module.AdminModule) },
    ]
  },
  // Implenting lazy loading by the following format
  { path: 'account', loadChildren: () => import('./modules/account/account.module').then(module => module.AccountModule) },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }