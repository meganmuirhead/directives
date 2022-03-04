import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dandy',
  templateUrl: './dandy.component.html',
  styleUrls: ['./dandy.component.scss']
})
export class DandyComponent implements OnInit {
@Output() dandyIsSoCute = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  dandyFunctionCall(text: string | undefined) {

    this.dandyIsSoCute.emit(text)
  }


}
