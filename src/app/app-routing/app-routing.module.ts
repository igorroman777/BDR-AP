import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from '../views/dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home/v1' },
  {
    path: 'home',
    component: DashboardComponent,
    children:
      [
        {
          path: 'v1',
          component: DashboardComponent
        },
      ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        onSameUrlNavigation: 'reload',
        enableTracing: true
      } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
