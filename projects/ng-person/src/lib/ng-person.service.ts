import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import tinycolor from 'tinycolor2';
import { AvatarStyle } from './avatar-style.interface';

@Injectable({
  providedIn: 'root'
})
export class NgPersonService {

  constructor() { }

  public getColorMap(name: string): AvatarStyle {
    const map: AvatarStyle = {
      background: '#000',
      color: '#fff'
    };

    if (name.length) {
      map.background = this.bgcolor(name);
      if (map.background) {
        map.color = this.color(map.background);
      }
    }

    return map;
  }

  public getInitials(name: string): string {
    return name.split(' ').slice(0, 2).map(part => part.charAt(0)).join('').toUpperCase();
  }


  private bgcolor(name: string): string {
    if (name) {
      return '#' + Md5.hashStr(name).toString().substring(0, 6);
    }
    return '#000';
  }


  private color(bgcolor: string): string {
    const color = tinycolor(bgcolor);
    if (color.isLight()) {
      return '#000';
    }
    return '#fff';
  }

}
