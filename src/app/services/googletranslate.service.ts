import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GoogletranslateService {

  constructor(private http: HttpClient) { }

  translate(obj: GoogletranslateObj) {
    return this.http.post(URL, obj)
  }
}

const URL = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCwE0Tt3MOaAhaLByI6eZfa2ohVFHLGHc8';

export class GoogletranslateObj {
  q: string;
  target: string;
  source: string;
}


