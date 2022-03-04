import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atlas',
  templateUrl: './atlas.component.html',
  styleUrls: ['./atlas.component.scss']
})
export class AtlasComponent implements OnInit {
@Input() horseDog = 'horse dog'
  constructor() { }

  ngOnInit(): void {
  }

}
