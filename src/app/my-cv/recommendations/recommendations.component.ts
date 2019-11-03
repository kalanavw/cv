import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../../service/config.service';

export interface Recommendation {
  title: string;
  recommendations: { name: string, position: string, degree: string, email: string, linkedin: string, recommendation: string }[];
}

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {

  public recommendation: Recommendation;

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
  ) {
    this.recommendation = {
      title: '',
      recommendations: null,
    };
  }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders(),
      withCredentials: true
    };
    this.http.get(this.configService.CONFIG.recommendation_json, httpOptions)
      .subscribe((value: Recommendation) => {
        this.recommendation = value;
      }, error => {
        console.log(error);
      });
  }

}
