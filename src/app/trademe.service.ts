import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class TrademeService {

  constructor(
    private http: HttpClient,
  ) { }

  get(url: string){
    return this.http.get(url, {
      headers: new HttpHeaders({
        Authorization: 'OAuth oauth_consumer_key=537FFF034B2E0AD4D2E77F8CB8845C53, auth_token=0C0E3A87814CE64EE8BB4FF0E394A5D3, oauth_version=1.0, oauth_signature_method=PLAINTEXT, oauth_signature=FE46A8C508B30E913F04B0B5B7A18E62%26'
      })
    })
  }


}
