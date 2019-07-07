import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IdeasComponent } from './pages/ideas/ideas.component';
import { IssuesComponent } from './pages/issues/issues.component';
import { PlansComponent } from './pages/plans/plans.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { RequirementsComponent } from './pages/requirements/requirements.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';

// This is my case
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ideas', component: IdeasComponent },
    { path: 'issues', component: IssuesComponent },
    { path: 'plans', component: PlansComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'requirements', component: RequirementsComponent },
    { path: 'solutions', component: SolutionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
