import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './pages/articles/articles.component';
import { CategoriesComponent } from './pages/categories/categories.component'; 

const routes: Routes = [
  { path: 'articles', component: ArticlesComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: '', redirectTo: '/articles', pathMatch: 'full' } // Redirige vers Articles par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
