import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaxInVoiceService {
  private baseUrl = "http://localhost:3000/posts";

  constructor(private http:HttpClient) { }

  createTaxDetail(TaxInVoice:Object):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}`, TaxInVoice);
  }
}
