import { Story, Meta } from '@storybook/angular/types-6-0';
import { NeonParagraphComponent } from 'projects/sand-soul/src/lib/typography/neon-paragraph/neon-paragraph.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Sand-Soul/Typography/NeonParagraph',
  component: NeonParagraphComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<NeonParagraphComponent> = (args: NeonParagraphComponent) => ({
  props: args,
  template: `
    <sand-neon-paragraph [isFlicker]="isFlicker">sand-neon-paragraph</sand-neon-paragraph>
  `
});

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

export const Flicker = Template.bind({});
Flicker.args = {
  isFlicker: true
}