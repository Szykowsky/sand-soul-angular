import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sand-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi:true,
      useExisting: CustomInputComponent
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input()
  disabled: boolean = false;

  controlValue: string = '';
  type: string = 'text';

  constructor() { }

  writeValue(value: string): void {
    this.controlValue = value;
  }

  onChange = (value: string) => {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  
  registerOnTouched(fn: any): void {
    this.onChange = fn;
  }

}
