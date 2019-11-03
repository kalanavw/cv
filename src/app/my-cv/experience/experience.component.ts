import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../../service/config.service';

export interface Experience {
  title: string;
  experience: {
    position: string;
    companyName: string;
    from: string;
    to: string;
    tecTags: string[];
  }[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  public experience: Experience;

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
  ) {
    this.experience = {
      title: '',
      experience: null,
    };
  }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders(),
      withCredentials: true
    };
    this.http.get(this.configService.CONFIG.experience_json, httpOptions)
      .subscribe((value: Experience) => {
        this.experience = value;
      }, error => {
        console.log(error);
      });
  }

}
