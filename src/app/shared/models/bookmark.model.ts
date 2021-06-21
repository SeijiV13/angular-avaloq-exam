export class Bookmark {
    id: string;
    name: string;
    url: string;
    group: Groups;
}

export enum Groups {
  work,
  personal,
  leisure
}