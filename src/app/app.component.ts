import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BitPay Calculon 4200';
  current_num = '0';

  public updateDisplay = (e) => {
    if (e == 0) return this.current_num = '0';
    
    this.current_num = e;
  }
}
