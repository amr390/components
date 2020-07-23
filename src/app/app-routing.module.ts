import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';


const routes: Routes = [
/*   {path: '', component: AppComponent, pathMatch: 'full'}, */
  {path: 'timeline', component: TimelineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
