import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../service/config.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface Referee {
  title: string;
  referees: {
    name: string;
    position: string;
    working: string;
    email: string;
    mobile: string;
    linkedin_url: string;
    linkedin: string;
  }[];
}

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.css']
})
export class RefereeComponent implements OnInit {
  public referee: Referee;

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
    this.http.get(this.configService.CONFIG.referee_json, httpOptions)
      .subscribe((value: Referee) => {
        this.referee = value;
      }, error => {
        console.log(error);
      });
  }
}
