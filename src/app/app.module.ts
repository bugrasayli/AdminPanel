import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TopComponent } from './top/top.component';
import { ComputersComponent } from './Lists/computers/computers.component';
import { BrandsComponent } from './Lists/brands/brands.component';
import { RamsComponent } from './Lists/rams/rams.component';
import { CPUsComponent } from './Lists/cpus/cpus.component';
import { HarddisksComponent } from './Lists/harddisks/harddisks.component';
import { GraphicsComponent } from './Lists/graphics/graphics.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { ComputerDetailComponent } from './Actions/View/computer-detail/computer-detail.component';
import { BrandDetailComponent } from './Actions/View/brand-detail/brand-detail.component';
import { CpuDetailComponent } from './Actions/View/cpu-detail/cpu-detail.component';
import { GraphicDetalComponent } from './Actions/View/graphic-detal/graphic-detal.component';
import { HarddiskDetailComponent } from './Actions/View/harddisk-detail/harddisk-detail.component';
import { RamDetailComponent } from './Actions/View/ram-detail/ram-detail.component';
import { InsertComputerComponent } from './Actions/insert/insert-computer/insert-computer.component';
import { InsertBrandComponent } from './Actions/insert/insert-brand/insert-brand.component';
import { InsertRamComponent } from './Actions/insert/insert-ram/insert-ram.component';
import { InsertHarddiskComponent } from './Actions/insert/insert-harddisk/insert-harddisk.component';
import { InsertCpuComponent } from './Actions/insert/insert-cpu/insert-cpu.component';
import { InsertGraphicComponent } from './Actions/insert/insert-graphic/insert-graphic.component';
import { InsertTypeComponent } from './Actions/insert/insert-type/insert-type.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSideComponent,
    WelcomeComponent,
    TopComponent,
    ComputersComponent,
    BrandsComponent,
    RamsComponent,
    CPUsComponent,
    HarddisksComponent,
    GraphicsComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    ComputerDetailComponent,
    BrandDetailComponent,
    CpuDetailComponent,
    GraphicDetalComponent,
    HarddiskDetailComponent,
    RamDetailComponent,
    InsertComputerComponent,
    InsertBrandComponent,
    InsertRamComponent,
    InsertHarddiskComponent,
    InsertCpuComponent,
    InsertGraphicComponent,
    InsertTypeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
