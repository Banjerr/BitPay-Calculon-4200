import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculon-numpad',
  templateUrl: './calculon-numpad.component.html',
  styleUrls: ['./calculon-numpad.component.css']
})
export class CalculonNumpadComponent implements OnInit {
  @Input() current_num: string;
  @Output() onValueChanged: EventEmitter<any> = new EventEmitter<any>();
  public num_buttons: Array<{value: any, order: number, function: any}>;
  public is_decimal = false;

  create_current_num = (button_value) => {
    console.log(this.is_decimal);
    if (this.is_decimal && button_value === '.') return;

    this.is_decimal = this.current_num.toString().includes('.');
    
    let new_val = this.current_num != '0' ? this.current_num.toString() + button_value : button_value;
    
    this.onValueChanged.emit(new_val);
  }

  erase_digit = () => {
    let new_display_digits = this.current_num.slice(0, -1)
    this.onValueChanged.emit(new_display_digits);
  }

  constructor() {
    this.num_buttons = [
      {
        value: 0,
        order: 11,
        function: this.create_current_num
      },
      {
        value: 1,
        order: 7,
        function: this.create_current_num
      },
      {
        value: 2,
        order: 8,
        function: this.create_current_num
      },
      {
        value: 3,
        order: 9,
        function: this.create_current_num
      },
      {
        value: 4,
        order: 4,
        function: this.create_current_num
      },
      {
        value: 5,
        order: 5,
        function: this.create_current_num
      },
      {
        value: 6,
        order: 6,
        function: this.create_current_num
      },
      {
        value: 7,
        order: 1,
        function: this.create_current_num
      },
      {
        value: 8,
        order: 2,
        function: this.create_current_num
      },
      {
        value: 9,
        order: 3,
        function: this.create_current_num
      },
      {
        value: '.',
        order: 10,
        function: this.create_current_num
      }, 
      {
        value: 'x',
        order: 12,
        function: this.erase_digit
      }
    ];
   }

  ngOnInit() {}

}
