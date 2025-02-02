import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'gestion-stock';

  /*** il tableau ismou  article */
  articles: any[] = [];

  /** initialisation ll les element ta3 tab */
  nomArticle: string = '';
  model: string = '';
  marque: string = '';
  categorie: string = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getArticle();
  }
  async getArticle() {
    await this.api.getArticle().then((data:any) => {
      console.log(data);
     this.articles = data;
    })
  }

/** fct ali kif nnzil ala ajouter tzidni les elements fil tab */
  addArticle() {

    /** il if bach make sure ali mafamech champs */
    if (this.nomArticle && this.model && this.marque && this.categorie) {
      this.articles.push({
        nom: this.nomArticle,
        model: this.model,
        marque: this.marque,
        categorie: this.categorie,
      });

      this.nomArticle = '';
      this.model = '';
      this.marque = '';
      this.categorie = '';
      }
    }

    suppArticle(index:number):void{
      this.articles.splice(index, 1);
    }


    isEditing = false;
    editingIndex: number | null = null;
    editedArticle: { nom: string; model: string; marque: string; categorie: string } | null = null;
  
    // Fonction pour activer le mode édition
    modifierArticle(index: number): void {
      this.isEditing = true;
      this.editingIndex = index;

      this.editedArticle = { ...this.articles[index] };
    }

    saveChanges(index: number): void {
     
        this.isEditing = false;
        this.editingIndex = null;
        this.editedArticle = null;
    }

    cancelEdit(): void {
      if (this.editingIndex !== null && this.editedArticle) {
    // Restaurer l'article dans son état original
    this.articles[this.editingIndex] = { ...this.editedArticle }; 
  }
      this.isEditing = false;
      this.editingIndex = null;
      this.editedArticle = null;
    }


}



