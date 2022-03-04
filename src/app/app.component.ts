import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'march-fourth';
  bestCatEversName: string = 'Morty'
  biggestDogEver:string = ''
  luci: string | undefined;
  whatYouTypedInDandysComp: string | undefined
  textFromAkumasComp: string | undefined;
  settingWhatLuciSaid(value: string | undefined) {
    this.luci = value;
  }
  dandyIsGreat(textValue:string | undefined) {
this.whatYouTypedInDandysComp = textValue
  }
  akumasFunction(value: string){
this.textFromAkumasComp = value;
  }
}
