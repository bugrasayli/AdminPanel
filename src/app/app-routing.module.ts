import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsertBrandComponent } from './Actions/insert/insert-brand/insert-brand.component';
import { BrandDetailComponent } from './Actions/View/brand-detail/brand-detail.component';
import { ComputerDetailComponent } from './Actions/View/computer-detail/computer-detail.component';
import { CpuDetailComponent } from './Actions/View/cpu-detail/cpu-detail.component';
import { GraphicDetalComponent } from './Actions/View/graphic-detal/graphic-detal.component';
import { HarddiskDetailComponent } from './Actions/View/harddisk-detail/harddisk-detail.component';
import { InsertComputerComponent } from './Actions/insert/insert-computer/insert-computer.component';
import { RamDetailComponent } from './Actions/View/ram-detail/ram-detail.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './Lists/brands/brands.component';
import { ComputersComponent } from './Lists/computers/computers.component';
import { CPUsComponent } from './Lists/cpus/cpus.component';
import { GraphicsComponent } from './Lists/graphics/graphics.component';
import { HarddisksComponent } from './Lists/harddisks/harddisks.component';
import { RamsComponent } from './Lists/rams/rams.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InsertHarddiskComponent } from './Actions/insert/insert-harddisk/insert-harddisk.component';
import { InsertCpuComponent } from './Actions/insert/insert-cpu/insert-cpu.component';
import { InsertGraphicComponent } from './Actions/insert/insert-graphic/insert-graphic.component';
import { InsertTypeComponent } from './Actions/insert/insert-type/insert-type.component';
import { InsertRamComponent } from './Actions/insert/insert-ram/insert-ram.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [{ path: '', component: WelcomeComponent }], canActivate: [AuthGuard], },
  { path: '', component: HomeComponent, children: [{ path: 'profile', component: ProfileComponent }], canActivate: [AuthGuard], },
  { path: '', component: HomeComponent, children: [{ path: 'computers', component: ComputersComponent }, { path: 'computers/:id', component: ComputerDetailComponent }], canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, children: [{ path: 'graphics', component: GraphicsComponent }, { path: 'graphics/:id', component: GraphicDetalComponent }], canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, children: [{ path: 'brands', component: BrandsComponent },{path:'brands/:id',component:BrandDetailComponent}], canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, children: [{ path: 'rams', component: RamsComponent },{path:'rams/:id',component:RamDetailComponent}], canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, children: [{ path: 'harddisks', component: HarddisksComponent },{path:'harddisks/:id',component:HarddiskDetailComponent}], canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, children: [{ path: 'cpus', component: CPUsComponent },{path:'cpus/:id',component:CpuDetailComponent}], canActivate: [AuthGuard] },
  {path: 'insert', component: HomeComponent, children : [{path:'computer', component:InsertComputerComponent}, 
    {path:'brand',component:InsertBrandComponent},
    {path:'ram',component:InsertRamComponent},
    {path:'harddisk',component:InsertHarddiskComponent},
    {path:'cpu',component:InsertCpuComponent},
    {path:'graphiccard',component:InsertGraphicComponent},
    {path:'type',component:InsertTypeComponent}]},
    { path: 'login', component: LoginComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
