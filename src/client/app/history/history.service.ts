import { Injectable } from '@angular/core';

@Injectable()
export class HistoryService {

  constructor() {
  }

  public addRadioToHistory(radio): void {
    const radioHistory = localStorage.radioHistory ? 
      JSON.parse(localStorage.radioHistory) : [];
    const lastRadioStation = radioHistory[radioHistory.length - 1];

    // Don't save radio station if it was last played
    if (lastRadioStation && radio.id === lastRadioStation.id) return;

    radioHistory.push({
      title: radio.title,
      id: radio.id,
      artwork_url: radio.artwork_url,
      addedAt: new Date()
    });

    localStorage.radioHistory = JSON.stringify(radioHistory);
  }

  public addSongToHistory(song, radio): void {
    const songHistory = localStorage.songHistory ? 
      JSON.parse(localStorage.songHistory) : [];
    
    // Tag with radio title for song history filtering
    song.radioStation = radio.title;

    songHistory.push({
      title: song.title,
      id: song.id,
      artwork_url: song.artwork_url,
      addedAt: new Date()
    });

    localStorage.songHistory = JSON.stringify(songHistory);
  }

  public getRadioHistory(): any[] {
    return localStorage.radioHistory ?
      JSON.parse(localStorage.radioHistory) : [];
  }

  public getSongHistory(favorites: any[]): any[] {
    return localStorage.songHistory ?
      JSON.parse(localStorage.songHistory) : [];
  }
}

