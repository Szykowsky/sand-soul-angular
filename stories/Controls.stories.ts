import { Story, Meta } from '@storybook/angular/types-6-0';
import { CustomInputComponent } from 'projects/sand-soul/src/lib/controls/custom-input/custom-input.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Sand-Soul/Controls/CustomInput',
  component: CustomInputComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<CustomInputComponent> = (args: CustomInputComponent) => ({
  props: args,
  template: `
    <sand-custom-input [disabled]="disabled">Label</sand-custom-input>
  `
});

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true
}