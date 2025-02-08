import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/protected/home/home.component';
import { canActivateGuard, canMatchGuard } from './guards/auth.guard';
import { Role } from './enums/role.enum';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [canActivateGuard],
    data: {
      roles: [Role.admin, Role.editor, Role.user],
    },
  },
  {
    path: 'posts',
    loadChildren: () =>
      import('./components/protected/posts/posts.module').then(
        (m) => m.PostsModule,
      ),
    canMatch: [canMatchGuard],
  },
  {
    path: 'comments',
    loadChildren: () =>
      import('./components/protected/comments/comments.module').then(
        (m) => m.CommentsModule,
      ),
    canMatch: [canMatchGuard],
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./components/protected/albums/albums.module').then(
        (m) => m.AlbumsModule,
      ),
    canMatch: [canMatchGuard],
  },
  {
    path: 'photos',
    loadChildren: () =>
      import('./components/protected/photos/photos.module').then(
        (m) => m.PhotosModule,
      ),
    canMatch: [canMatchGuard],
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./components/protected/todos/todos.module').then(
        (m) => m.TodosModule,
      ),
    canMatch: [canMatchGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./components/protected/users/users.module').then(
        (m) => m.UsersModule,
      ),
    canMatch: [canMatchGuard],
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
