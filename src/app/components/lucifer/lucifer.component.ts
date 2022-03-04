import {Component, OnInit, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-lucifer',
  templateUrl: './lucifer.component.html',
  styleUrls: ['./lucifer.component.scss']
})
export class LuciferComponent implements OnInit {
  @Output() newText = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }
  addingWhatLuciSaid(value: string) {
this.newText.emit(value)
  }

}
