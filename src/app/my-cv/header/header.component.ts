import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../service/config.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Header} from '../../model/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public header: Header = new Header();

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
    this.http.get(this.configService.CONFIG.header_json, httpOptions)
      .subscribe((value: Header) => {
        this.header = value;
      }, error => {
        console.log(error);
      });
  }

}
