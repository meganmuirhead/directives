import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-morty',
  templateUrl: './morty.component.html',
  styleUrls: ['./morty.component.scss']
})
export class MortyComponent implements OnInit {
@Input() catsNameIsComingFromParent = ''
  constructor() { }

  ngOnInit(): void {
  }

}
