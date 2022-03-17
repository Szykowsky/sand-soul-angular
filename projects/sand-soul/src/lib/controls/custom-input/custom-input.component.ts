import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sand-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CustomInputComponent),
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input()
  disabled: boolean = false;
  @Input()
  type: string = 'text';

  controlValue: string = '';
  
  updateChanges() {
    this.onChange(this.controlValue);
  }

  writeValue(value: string): void {
    this.controlValue = value;
  }

  onChange = (value: string) => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  onTouched = () => {};

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
