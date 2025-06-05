import { Component } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent {
  nom: string = '';
  model: string = '';
  marque: string = '';
  categorie: string = '';

  articles: any[] = [];
  isEditing: boolean = false;
  editingIndex: number | null = null;
  selectedArticle: any = null;
  selectedIndex: number | null = null;

  // Ajouter un nouvel article
  addArticle() {
    if (this.nom && this.model && this.marque && this.categorie) {
      this.articles.push({
        nom: this.nom,
        model: this.model,
        marque: this.marque,
        categorie: this.categorie
      });

      // Réinitialiser les champs
      this.nom = '';
      this.model = '';
      this.marque = '';
      this.categorie = '';
    }
  }

  // Modifier un article (affichage du mode édition)
  modifierArticle(index: number) {
    this.isEditing = true;
    this.editingIndex = index;
  }

  // Sélectionner un article pour sauvegarde/suppression
  setSelectedArticle(article: any, index: number) {
    this.selectedArticle = { ...article };
    this.selectedIndex = index;
  }

  // Sauvegarder les modifications
  saveChanges(index: number | null) {
    if (index !== null) {
      this.articles[index] = { ...this.selectedArticle };
    }
    this.isEditing = false;
    this.editingIndex = null;
  }

  // Annuler l'édition
  cancelEdit() {
    this.isEditing = false;
    this.editingIndex = null;
  }

  // Supprimer un article
  deleteArticle(index: number | null) {
    if (index !== null) {
      this.articles.splice(index, 1);
    }
  }
}
