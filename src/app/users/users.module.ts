import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { VehicleInfoItemComponent } from '../shared/vehicle-info-item/vehicle-info-item.component';
import { PopupWindowComponent } from '../core/popup/popup-window/popup-window.component';
import { ViewMoreComponent } from '../core/popup/view-more/view-more.component';
import { MapsComponent } from './maps/maps.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule } from '../shared/navbar/navbar.module';
import { FooterModule } from '../shared/footer/footer.module';
import { FixedPluginModule } from '../shared/fixedplugin/fixedplugin.module';
import { NgxGaugeModule } from 'ngx-gauge';
import { MatrialCoreModule } from '../core/Matrial/matrialcore.module';
import { NguiMapModule } from '@ngui/map';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    NgxGaugeModule,
    MatrialCoreModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDoT6xQDt2DOjzwwbA3oqCaXjxPY3vE-20'})
  ],
  declarations: [
    UsersComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    VehicleInfoItemComponent,
    PopupWindowComponent,
    ViewMoreComponent
  ],
  entryComponents:[
    PopupWindowComponent,
    ViewMoreComponent
  ]
})
export class UsersModule { }
