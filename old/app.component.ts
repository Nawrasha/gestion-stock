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
  nom: string = '';
  model: string = '';
  marque: string = '';
  categorie: string = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getArticle();
    this.addArticle();
  }

 
  async getArticle() {
    await this.api.getArticle().then((data:any) => {
      console.log(data);
     this.articles = data;
    })
  }
  async addArticle() {
    if (this.nom && this.model && this.marque && this.categorie) {
      const newArticle = {
        nom: this.nom,
        model: this.model,
        marque: this.marque,
        categorie: this.categorie
      };

      try {
        await this.api.addArticle(newArticle).then((response: any) => {
          console.log("Réponse reçue après ajout !");
          this.articles.push({...newArticle, id: response.id});
          console.log("Article ajouté !");
        });
      } catch (error) {
        console.error("Erreur d'ajout", error);
      }

      this.nom = '';
      this.model = '';
      this.marque = '';
      this.categorie = '';
    }
  }
  selectedArticle: any = null;
  selectedIndex: number = -1;
  
  setSelectedArticle(article: any, index: number) {
    this.selectedArticle = article;
    this.selectedIndex = index;
  }
    deleteArticle(id:number,index:number):void{
      this.api.deleteArticle(id).then((response: any) => {
        if (response.success) {
          this.articles.splice(index, 1);
          alert('Article supprimé avec succès !');
        } else {
          alert('Erreur lors de la suppression.');
        }
      });
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

    async saveChanges(index: number): Promise<void> {
      try {
          const article = this.articles[index];
          await this.api.updateArticle(article).then((response: any) => {
            if (response.success) {
              console.log("Article modifié avec succès !");
              this.articles[index] = { ...article };

              this.isEditing = false;
              this.editingIndex = null;
              this.editedArticle = null;
            } else {
              console.error("Erreur lors de la mise à jour :", response.message);
            }
          }); // Attente de la réponse API
  
        } catch (error) {
          console.error("Échec de la mise à jour :", error);
  }}
  

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



