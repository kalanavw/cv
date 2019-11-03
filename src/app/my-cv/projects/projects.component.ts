import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigService} from '../../service/config.service';

export interface Project {
  title: string;
  projects: {
    name: string,
    modules: string[],
    tecTags: { name: string, color: string, url: string }[],
    description: string,
  }[];

}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projects: Project;

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
  ) {
    this.projects = {
      title: '',
      projects: null,
    };
  }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders(),
      withCredentials: true
    };
    this.http.get(this.configService.CONFIG.projects_json, httpOptions)
      .subscribe((value: Project) => {
        this.projects = value;
      }, error => {
        console.log(error);
      });
  }

}
