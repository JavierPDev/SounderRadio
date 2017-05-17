import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';

const SOUNDCLOUD_CLIENT_ID = '';

@Injectable()
export class SoundcloudService {
  public basePath: string = 'https://api.soundcloud.com/tracks';
  private _clientId: string = SOUNDCLOUD_CLIENT_ID;

  constructor(private _http: Http) {
    if (!this._clientId) {
      throw new Error(`SoundCloud client id is required. Please attain one and 
                      enter it in /tools/config/project.config.ts`);
    }
  }

  public getTrack(trackId: number) {
    let params = new URLSearchParams();
    params.set('client_id', this._clientId);
    let url = this.basePath + `/${trackId}`;
    return this._http.get(url, {search: params});
  }

  public search(searchTerm: string) {
    const LIMIT: string = '200';
    let params = new URLSearchParams();
    params.set('client_id', this._clientId);
    params.set('q', searchTerm);
    params.set('limit', LIMIT);
    return this._http.get(this.basePath, {search: params});
  }

  /**
   * Shuffle array of songs using Fisher-Yates Shuffle
   */ 
  public shuffleSongList(songList: any[]): any[] {
		let currentIndex = songList.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = songList[currentIndex];
      songList[currentIndex] = songList[randomIndex];
      songList[randomIndex] = temporaryValue;
    }
    return songList;
  }
}
