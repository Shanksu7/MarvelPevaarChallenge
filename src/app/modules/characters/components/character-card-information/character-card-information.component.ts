import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from '../../classes/character';

@Component({
  selector: 'app-character-card-information',
  templateUrl: './character-card-information.component.html',
  styleUrls: ['./character-card-information.component.css']
})
export class CharacterCardInformationComponent implements OnInit {

  @Input() character: Character;
  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
  }

}
