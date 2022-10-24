import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ArticlesRequest } from "../types/articles-request.types";
import { Articles } from "../types/articles.types";

@Injectable({
    providedIn: 'root'
})
export class ArticlesService {

    private articlesPath: string = `${environment.apiBase}/articles`
    constructor(private http: HttpClient){}

    getAll(offset: number, limit: number){
        return this.http.get<Articles[]>(this.articlesPath, {
            params: {
                offset,
                limit
            },
            observe: 'response'
        });
    }

    getOne(id: number){
        return this.http.get<Articles>(`${this.articlesPath}/${id}`)
    }

    save(articles: ArticlesRequest){
        return this.http.post<Articles>(this.articlesPath, articles);
    }

    modify(articles: ArticlesRequest, id: number){
        return this.http.put<Articles>(`${this.articlesPath}/${id}`, articles);
    }
    
    delete(id: number){
        return this.http.delete(`${this.articlesPath}/${id}`)
    }
}