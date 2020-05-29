import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component'
import { ChildComponent } from './components/child/child.component'
import { SbilingComponent } from './components/sbiling/sbiling.component'
import { PagenotfoundComponent} from './components/pagenotfound/pagenotfound.component'
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes : Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'parent', component:ParentComponent},
  {path: 'child', component:ChildComponent},
  {path: 'sbling', component:SbilingComponent},
  {path: '**', component:PagenotfoundComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
