import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../../service/config.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit {
  public certificates: any;

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
  ) {
    this.certificates = {
      title: '',
      certificate: []
    };
  }

  ngOnInit() {
    console.log(this.configService.CONFIG.certificates_json);
    const httpOptions = {
      headers: new HttpHeaders(),
      withCredentials: true
    };
    this.http.get(this.configService.CONFIG.certificates_json, httpOptions)
      .subscribe((value: any) => {
        this.certificates = value;
      }, error => {
        console.log(error);
      });
  }

}
