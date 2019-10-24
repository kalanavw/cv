import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../../service/config.service';

export interface AboutMe {
  title: string;
  content: string;
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  public aboutMe: AboutMe;

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
  ) {

  }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders(),
      withCredentials: true
    };
    this.http.get(this.configService.CONFIG.aboutMe_json, httpOptions)
      .subscribe((value: AboutMe) => {
        this.aboutMe = value;
        this.aboutMe.content = this.aboutMe.content.replace(/(?:\r\n|\r|\n)/g, '<br>');
      }, error => {
        console.log(error);
      });
  }

}
