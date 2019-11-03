import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../../service/config.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface ExternalResource {
  title: string;
  resource: {
    title: string;
    url: string;
    urlName: string;
  }[];
}

@Component({
  selector: 'app-external-resources',
  templateUrl: './external-resources.component.html',
  styleUrls: ['./external-resources.component.css']
})
export class ExternalResourcesComponent implements OnInit {
  public externalResource: ExternalResource;

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
  ) {
    this.externalResource = {
      title: '',
      resource: null
    };
  }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders(),
      withCredentials: true
    };
    this.http.get(this.configService.CONFIG.external_resources_json, httpOptions)
      .subscribe((value: ExternalResource) => {
        this.externalResource = value;
      }, error => {
        console.log(error);
      });
  }

}
