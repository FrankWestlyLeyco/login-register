import { Component } from '@angular/core';
import { NewsFeedsService } from '../news-feeds.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public topic:any;
  public newsData:any;

  constructor(private newsService:NewsFeedsService) {
   
  }

  search(){
    this.newsService.getNews(this.topic).subscribe(result=>{
      console.log(result);
      this.newsData=result['articles'];
    });
  }
}


