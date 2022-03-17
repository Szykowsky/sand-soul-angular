import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimaryButtonComponent } from './buttons/primary-button/primary-button.component';
import { NeonParagraphComponent } from './typography/neon-paragraph/neon-paragraph.component';
import { CustomInputComponent } from './controls/custom-input/custom-input.component';



@NgModule({
  declarations: [
    PrimaryButtonComponent,
    NeonParagraphComponent,
    CustomInputComponent
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
