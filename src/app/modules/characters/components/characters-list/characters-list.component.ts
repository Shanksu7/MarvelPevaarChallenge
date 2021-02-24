import { Component, OnInit } from '@angular/core';
import { SearchParams } from 'src/app/modules/common-marvel/classes/search-params';
import { DataWrapper } from 'src/app/modules/common-marvel/interface/data-wrapper';
import { CharacterService } from 'src/app/services/character.service';
import { Character } from '../../classes/character';
import { CharacterDataWrapper } from '../../classes/character-data-wrapper';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  characters: Character[];

  constructor(private characterService: CharacterService)
  {
    let params = new SearchParams();
    params.limit = 10;
    params.offset = 100;
    let list = characterService.getPaginatedCharacters(params).subscribe(data => 
      {
        console.log(data)
        this.characters = data.data.results;
      });
  }

  ngOnInit(): void {
  }

}
