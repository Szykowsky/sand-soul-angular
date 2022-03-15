import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sand-neon-paragraph',
  templateUrl: './neon-paragraph.component.html',
  styleUrls: ['./neon-paragraph.component.scss'],
})
export class NeonParagraphComponent implements OnInit {
  @Input()
  isFlicker: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
