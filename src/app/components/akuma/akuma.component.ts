import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-akuma',
  templateUrl: './akuma.component.html',
  styleUrls: ['./akuma.component.scss']
})
export class AkumaComponent implements OnInit {
@Output() akumaEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  functionToUpdateParent(stringFromChild: string){
    this.akumaEvent.emit(stringFromChild)
  }
}
