import { ComicList } from "../../comics/classes/comic-list";
import { Image } from "../../common-marvel/classes/image";
import { Url } from "../../common-marvel/classes/url";
import { EventList } from "../../events/classes/event-list";
import { SeriesList } from "../../series/classes/series-list";
import { StoryList } from "../../stories/classes/story-list";

export class Creator {
  id: number;
  firstName: string;
  middleName: string
  lastName: string;
  suffix: string;
  fullName: string;
  modified: Date;
  resourceURI: string; 
  urls: Url[];
  thumbnail: Image;
  series: SeriesList;
  stories: StoryList;
  comics: ComicList;
  events: EventList;
}
