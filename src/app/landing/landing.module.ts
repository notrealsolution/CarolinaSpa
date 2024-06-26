import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasePageComponent } from './pages/base-page/base-page.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    BasePageComponent,
    HeaderComponent
  ],
  exports:[
    BasePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
