import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddEditMemberComponent } from './components/add-edit-member/add-edit-member.component';
import { AdminGuard } from '../shared/guards/admin.guard';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AdminGuard],
    children: [
      { path: '', component: AdminComponent},
      // path for creating a new member
      { path: 'add-edit-member', component: AddEditMemberComponent},
      // path for editing an existing member
      { path: 'add-edit-member/:id', component: AddEditMemberComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
