import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [ { path: 'leave-review', component: ReviewsComponent },
                         { path: '', redirectTo: '', pathMatch: 'full' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
