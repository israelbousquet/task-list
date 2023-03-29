import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskListDomainRoutingModule {}
