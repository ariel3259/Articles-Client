import { Component, Input, OnInit } from '@angular/core';
import { ArticlesService } from '../providers/articles.services';
import { Articles } from '../types/articles.types';

@Component({
  selector: 'app-article-modify-form',
  templateUrl: './article-modify-form.component.html',
  styleUrls: ['./article-modify-form.component.css']
})
export class ArticleModifyFormComponent implements OnInit {

  @Input() id: number = 0
  @Input() fetchData: (offset: number) => void = (offset: number) => {}
  article: Articles = {ID: 0, name: '', description: '', stock: 0, price: 0}
  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.articlesService.getOne(this.id).subscribe((data) => this.article = data)
  }

  modifyArticle(){
    this.articlesService.modify(this.article, this.id).subscribe(() => this.fetchData(0))
  }
}
