import { CharacterList } from "../../characters/classes/character-list";
import { ComicList } from "../../comics/classes/comic-list";
import { ComicSummary } from "../../comics/classes/comic-summary";
import { Image } from "../../common-marvel/classes/image";
import { CreatorList } from "../../creators/classes/creator-list";
import { EventList } from "../../events/classes/event-list";
import { SeriesList } from "../../series/classes/series-list";

export class Story {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  type: string;
  modified: Date;
  thumbnail: Image;
  comics: ComicList;
  series: SeriesList;
  events: EventList;
  characters: CharacterList;
  creators: CreatorList;
  originalisssue: ComicSummary;
}
