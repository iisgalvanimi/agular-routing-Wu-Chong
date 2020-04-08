
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCkBD6X0XG4dlR9VTJdBOAjcgjOGz0bXPEEgpKrG_4F_O-SUZQIfmjABZ-gM35D1RmUtDxk2ZIQ2TyEQwqu5BkyCl35n1qkfQIcSPb02df6LTnJMymFchxqdRIR0Qw32k-ydnfLsZQECdm1A_OjH4YuvStlFUqQZdoTzMcbsehm'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
  }
}
