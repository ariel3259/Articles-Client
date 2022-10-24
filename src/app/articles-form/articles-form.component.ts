import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ArticlesService } from '../providers/articles.services';
import { ArticlesRequest } from '../types/articles-request.types';

@Component({
  selector: 'app-articles-form',
  templateUrl: './articles-form.component.html',
  styleUrls: ['./articles-form.component.css']
})
export class ArticlesFormComponent implements OnInit {

  constructor( private articlesService: ArticlesService) { }

  ngOnInit(): void {
  }
  addArticle(event: NgForm){
    const articleToSave: ArticlesRequest = event.value
    this.articlesService.save(articleToSave).subscribe(data => console.log(data))
  }
}
