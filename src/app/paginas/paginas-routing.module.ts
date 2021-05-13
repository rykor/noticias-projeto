import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginasPage } from './paginas.page';

const routes: Routes = [
  {
    path: '',
    component: PaginasPage
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },  {
    path: 'visualizar-cadastro',
    loadChildren: () => import('./visualizar-cadastro/visualizar-cadastro.module').then( m => m.VisualizarCadastroPageModule)
  },
  {
    path: 'cadastrar-noticia',
    loadChildren: () => import('./cadastrar-noticia/cadastrar-noticia.module').then( m => m.CadastrarNoticiaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginasPageRoutingModule {}
