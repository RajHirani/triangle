import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';

const usersRoutes: Routes = [
      {
      path: '',
      component:UsersComponent,
      children:[
          {
              path: 'dashboard',
              component: DashboardComponent
          },
          {
              path: 'user',
              component: UserComponent
          },
          {
              path: 'table',
              component: TableComponent
          },
          {
              path: 'typography',
              component: TypographyComponent
          },
          {
              path: 'icons',
              component: IconsComponent
          },
          {
              path: 'maps',
              component: MapsComponent
          },
          {
              path: 'notifications',
              component: NotificationsComponent
          },
          {
              path: 'upgrade',
              component: UpgradeComponent
          }
      ]
      },
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
