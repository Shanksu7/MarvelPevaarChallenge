import { ComicList } from "../../comics/classes/comic-list";
import { Image } from "../../common-marvel/classes/image";
import { Url } from "../../common-marvel/classes/url";
import { EventList } from "../../events/classes/event-list";
import { SeriesList } from "../../series/classes/series-list";
import { StoryList } from "../../stories/classes/story-list";

export class Character {
  id?: number;
  name?: string;
  description?: string;
  modified?: Date;
  reesourceURI?: string;
  urls?: Url[];
  thumbnail?: Image;
  comics?: ComicList;
  stories?: StoryList;
  events?: EventList;
  series?: SeriesList;
}
