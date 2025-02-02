import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  
  constructor(
    private httpClient: HttpClient ) { }

    async getArticle() {
      return await this.httpClient.get(`/gestionStock/getArticle.php`).toPromise();
    }
    
}
// get
// post
