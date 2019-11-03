import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../service/config.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface Education {
  title: string;
  education: {
    name: string;
    institute: string;
    from: string;
    to: string;
    tecTags: string[];
  }[];
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  public education: Education;

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
  ) {
    this.education = {
      title: '',
      education: null
    };
  }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders(),
      withCredentials: true
    };
    this.http.get(this.configService.CONFIG.education_json, httpOptions)
      .subscribe((value: Education) => {
        this.education = value;
      }, error => {
        console.log(error);
      });
  }


}
