import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { GameComponent } from './game/game.component';
import { AuthorComponent } from './author/author.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { CommentaryComponent } from './commentary/commentary.component';
import { CommentariesComponent } from './commentaries/commentaries.component';
import { PostDetailsComponent } from './post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    GameComponent,
    AuthorComponent,
    NavigationMenuComponent,
    CommentaryComponent,
    CommentariesComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
