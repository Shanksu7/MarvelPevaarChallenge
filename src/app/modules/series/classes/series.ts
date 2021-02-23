import { CharacterList } from "../../characters/classes/character-list";
import { ComicList } from "../../comics/classes/comic-list";
import { Image } from "../../common-marvel/classes/image";
import { Url } from "../../common-marvel/classes/url";
import { CreatorList } from "../../creators/classes/creator-list";
import { EventList } from "../../events/classes/event-list";
import { StoryList } from "../../stories/classes/story-list";
import { SeriesSummary } from "./series-summary";

export class Series {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  urls: Url[];
  startYear: number;
  endYear: number;
  rating: string;
  modified: Date;
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  characters: CharacterList;
  creators: CreatorList;
  next: SeriesSummary;
  previous: SeriesSummary;
}
