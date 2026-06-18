export interface Project {
  id: number;
  year: string;
  title: string;
  description: string;
  tags: [{id:number, name:string}];
  badge: string;
  images: [{id:number,url:string,provider:string}];
  link: string;
}