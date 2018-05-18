import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculon-display',
  templateUrl: './calculon-display.component.html',
  styleUrls: ['./calculon-display.component.css']
})
export class CalculonDisplayComponent implements OnInit {
  @Input() current_num: string;

  constructor() {}

  ngOnInit() {}  
}
