import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleGuard } from '@delon/auth';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { DashboardAnalysisComponent } from './dashboard/analysis/analysis.component';
import { DashboardMonitorComponent } from './dashboard/monitor/monitor.component';
// dashboard pages
import { DashboardV1Component } from './dashboard/v1/v1.component';
import { DashboardWorkplaceComponent } from './dashboard/workplace/workplace.component';
import { UserLockComponent } from './passport/lock/lock.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
import { UserRegisterComponent } from './passport/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [SimpleGuard],
    canActivateChild: [SimpleGuard],
    children: [
      { path: '', redirectTo: 'monitor', pathMatch: 'full' },
      // { path: 'dashboard', redirectTo: 'dashboard/v1', pathMatch: 'full' },
      // { path: 'dashboard/v1', component: DashboardV1Component },
      // { path: 'dashboard/analysis', component: DashboardAnalysisComponent },
      // { path: 'dashboard/monitor', component: DashboardMonitorComponent },
      // { path: 'dashboard/workplace', component: DashboardWorkplaceComponent },
      // {
      //   path: 'widgets',
      //   loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule),
      // },
      // { path: 'style', loadChildren: () => import('./style/style.module').then(m => m.StyleModule) },
      // { path: 'delon', loadChildren: () => import('./delon/delon.module').then(m => m.DelonModule) },
      // { path: 'extras', loadChildren: () => import('./extras/extras.module').then(m => m.ExtrasModule) },
      // { path: 'pro', loadChildren: () => import('./pro/pro.module').then(m => m.ProModule) },
      {
        path: 'monitor',
        loadChildren: () => import('./monitor/monitor.module').then(m => m.MonitorModule),
      },
      {
        path: 'operating',
        loadChildren: () => import('./operating/operating.module').then(m => m.OperatingModule),
      },
      {
        path: 'hist',
        loadChildren: () => import('./hist/hist.module').then(m => m.HistModule),
      },
      {
        path: 'correlation',
        loadChildren: () => import('./correlation/correlation.module').then(m => m.CorrelationModule),
      },
      // Exception
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
      {
        path: 'fault-library',
        loadChildren: () => import('./fault-library/fault-library.module').then(m => m.FaultLibraryModule),
      },
      {
        path: 'sys-data',
        loadChildren: () => import('./sys-data/sys-data.module').then(m => m.SysDataModule),
      },
      {
        path: 'sys-cfg',
        loadChildren: () => import('./sys-cfg/sys-cfg.module').then(m => m.SysCfgModule),
      },
      {
        path: 'sys-api',
        loadChildren: () => import('./sys-api/sys-api.module').then(m => m.SysApiModule),
      },
    ],
  },
  // 全屏布局
  {
    path: 'data-v',
    component: LayoutFullScreenComponent,
    children: [{ path: '', loadChildren: () => import('./data-v/data-v.module').then(m => m.DataVModule) }],
  },
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      {
        path: 'login',
        component: UserLoginComponent,
        data: { title: '登录', titleI18n: 'app.login.login' },
      },
      {
        path: 'register',
        component: UserRegisterComponent,
        data: { title: '注册', titleI18n: 'app.register.register' },
      },
      {
        path: 'register-result',
        component: UserRegisterResultComponent,
        data: { title: '注册结果', titleI18n: 'app.register.register' },
      },
      {
        path: 'lock',
        component: UserLockComponent,
        data: { title: '锁屏', titleI18n: 'app.lock' },
      },
    ],
  },
  // 单页不包裹Layout
  { path: 'callback/:type', component: CallbackComponent },
  { path: '**', redirectTo: 'exception/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class RouteRoutingModule {
}
