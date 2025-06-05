import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  
  constructor(
    private httpClient: HttpClient ) { }

    async getArticle() {
      return await this.httpClient.get(`/gestionStock/getArticle.php`).toPromise();
    }

    async addArticle(article: any) {
      return await this.httpClient.post(`gestionStock/postArticle.php`, article).toPromise();
    }

    async deleteArticle(id: number) {
      return await this.httpClient.delete(`/gestionStock/deleteArticle.php?id=${id}`).toPromise();
    }
    
    async updateArticle(article: any) {
      return await this.httpClient.post(`gestionStock/updateArticle.php`, article).toPromise();
    }
}
// get
// post
