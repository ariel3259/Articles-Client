import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http'
import { ArticlesService } from './providers/articles.services';
import { ArticlesFormComponent } from './articles-form/articles-form.component';
import { FormsModule } from '@angular/forms';
import { ArticlesTableComponent } from './articles-table/articles-table.component';
import { ModalComponent } from './modal/modal.component';
import { ArticleModifyFormComponent } from './article-modify-form/article-modify-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticlesFormComponent,
    ArticlesTableComponent,
    ModalComponent,
    ArticleModifyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
