import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {

  constructor(private characterService: CharacterService)
  {
    let list = characterService.getPaginatedCharacters(1);
  }

  ngOnInit(): void {
  }

}
