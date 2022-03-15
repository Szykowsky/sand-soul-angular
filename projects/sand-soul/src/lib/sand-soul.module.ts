import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimaryButtonComponent } from './buttons/primary-button/primary-button.component';
import { NeonParagraphComponent } from './typography/neon-paragraph/neon-paragraph.component';



@NgModule({
  declarations: [
    PrimaryButtonComponent,
    NeonParagraphComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimaryButtonComponent,
    NeonParagraphComponent
  ]
})
export class SandSoulModule { }
