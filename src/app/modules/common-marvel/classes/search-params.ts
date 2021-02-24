
export class SearchParams {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: Date;  
  events?: number[];
  stories?: number[];
  orderBy?: string;
  limit?: number;
  offset?: number;

  toParams() {
    let param = '';
    if (this.name) param += `&name=${this.name}`;
    if (this.nameStartsWith) param += `&nameStartsWith=${this.nameStartsWith}`;
    if (this.modifiedSince) param += `&modifiedSince=${this.modifiedSince.getFullYear()}-${this.modifiedSince.getMonth()}-${this.modifiedSince.getDay()}`;
    if (this.events)
    {
      let r = '&events='
      let c = 0;
      this.events.forEach(x => {
        if (c++ == 0) r += x.toString();
        else r += `,${x.toString()}`;
      })
    }
    if (this.stories)
    {
      let r = '&stories='
      let c = 0;
      this.stories.forEach(x => {
        if (c++ == 0) r += x.toString();
        else r += `,${x.toString()}`;
      })
    };
    if (this.orderBy) param += `&orderBy=${this.orderBy}`;
    if (this.limit) param += `&limit=${this.limit}`;
    if (this.offset) param += `&offset=${this.offset}`;
    return param;
  }
}
