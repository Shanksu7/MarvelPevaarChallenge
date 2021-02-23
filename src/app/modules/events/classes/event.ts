import { CharacterList } from "../../characters/classes/character-list";
import { ComicList } from "../../comics/classes/comic-list";
import { Image } from "../../common-marvel/classes/image";
import { Url } from "../../common-marvel/classes/url";
import { CreatorList } from "../../creators/classes/creator-list";
import { SeriesList } from "../../series/classes/series-list";
import { StoryList } from "../../stories/classes/story-list";
import { EventSummary } from "./event-summary";

export class Event {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Url[];
  modified: Date;
  start: Date;
  end: Date;
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  series: SeriesList;
  characters: CharacterList;
  creators: CreatorList;
  next: EventSummary;
  previous: EventSummary;
}
