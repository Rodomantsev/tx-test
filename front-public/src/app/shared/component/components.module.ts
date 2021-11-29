import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { InputErrorMsgComponent } from './input-error-msg/input-error-msg.component';

const components = [HeaderComponent, FooterComponent, InputErrorMsgComponent];

@NgModule({
  declarations: [...components ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ ...components ]
})
export class ComponentsModule { }
