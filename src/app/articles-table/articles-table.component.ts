import { AfterViewChecked, AfterViewInit, Component, OnInit, SimpleChange } from '@angular/core';
import { ArticlesService } from '../providers/articles.services';
import { Articles } from '../types/articles.types';

@Component({
  selector: 'app-articles-table',
  templateUrl: './articles-table.component.html',
  styleUrls: ['./articles-table.component.css']
})
export class ArticlesTableComponent implements OnInit {

  offset: number = 0
  total: number = 0
  limit: number = 10
  articles: Articles[] = []
  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
    this.fetchArticles(0)
  }
  
  incrementOffset(){
    if(this.limit + this.offset < this.total) {
      this.offset += this.limit
      this.fetchArticles(this.offset)
    }
  }

  decrementOffset(){
    if(this.offset - this.limit  >= 0) {
      this.offset -= this.limit
      this.fetchArticles(this.offset)
    }
  }
  
  fetchArticles(offset: number){
    this.articlesService.getAll(offset, 10)
      .subscribe((data) => {
        this.articles = data.body ? data.body : []
        this.total = JSON.parse(data.headers.get('x-total-count') || '0') * 1
      })
  }

  deleteArticle(id: number){
    this.articlesService.delete(id).subscribe((data) => this.fetchArticles(0))
  }
}
