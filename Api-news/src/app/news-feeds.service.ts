import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class NewsFeedsService {
  public apiKey:any='e91f627d99584c00bc753848b8061c89';


  constructor(private http:HttpClient) { }

  getNews(topic){
    return this.http.get('https://newsapi.org/v2/everything?q='+topic+'&from=2022-07-07&sortBy=publishedAt&apiKey='+this.apiKey);
  }

}
