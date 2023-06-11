import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ResumeHeader} from "../../../dto/resume-header";

@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.scss']
})
export class ResumeHeaderComponent implements OnInit {

  header: ResumeHeader | undefined;

  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    const httpOptions = {
      headers: new HttpHeaders(),
      withCredentials: true
    };

    this.http.get<ResumeHeader>('assets/data/resume_header.json', {})
      .subscribe((value: ResumeHeader) => {
        this.header = value;
      });

  }

}
