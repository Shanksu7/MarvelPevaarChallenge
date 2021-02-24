import { Component, Input, OnInit } from '@angular/core';
import { getParams } from 'src/app/constants/service-constants';
import { Character } from '../../classes/character';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-character-card-information',
  templateUrl: './character-card-information.component.html',
  styleUrls: ['./character-card-information.component.css']
})
export class CharacterCardInformationComponent implements OnInit {

  @Input() character: Character;
 constructor()
 {

 }

  ngOnInit(): void {
    console.log(this.character);
  }

  goToLink(url)
  {
    Swal.fire(url);
    //ref here https://www.npmjs.com/package/sweetalert2
    //window.open(url, "_blank");
  }

  createComicUrl(url){
    return url + getParams();
  }
}
