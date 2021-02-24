import { Md5 } from "md5-typescript";

export var url: string = 'https://gateway.marvel.com:443/v1/public/';
export class ServiceConstants {

  public static privateKey = '2980bac8ada565cc18421671d9f4d98e8f997c3a';
  public static publicKey: string = '822f5b5193fbe490d746a050fe3c193d';
  public static ts: number = Date.now(); 

  public static hash(): string {
    return Md5.init(this.ts + this.privateKey + this.publicKey);
  }
}

export function getParams(): string {
  return `?ts=${ServiceConstants.ts}&apikey=${ServiceConstants.publicKey}&hash=${ServiceConstants.hash()}`;
}

