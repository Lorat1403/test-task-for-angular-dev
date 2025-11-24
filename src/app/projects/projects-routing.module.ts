import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { HasAccessTokenGuard } from './projects.guard';

const routes: Routes = [{ path: '', component: ProjectsComponent, canActivate: [HasAccessTokenGuard] }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
