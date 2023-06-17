import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ResumeHeader} from "../../../dto/resume-header";
import {AngularFireAnalytics} from "@angular/fire/compat/analytics";

export interface ResumePdf {
  name: string;
  pdf: string;
}

@Component({
  selector: 'app-resume-header',
  templateUrl: './resume-header.component.html',
  styleUrls: ['./resume-header.component.scss']
})
export class ResumeHeaderComponent implements OnInit {

  header: ResumeHeader | undefined;

  constructor(private http: HttpClient, private analytics: AngularFireAnalytics) {
  }

  ngOnInit(): void {
    this.http.get<ResumeHeader>('assets/data/resume_header.json', {})
      .subscribe((value: ResumeHeader) => {
        this.header = value;
      });

  }

  downloadPdf() {
    this.analytics.logEvent('resume_download', {"date_time": new Date}).then(r => {
      this.http.get<ResumePdf>('assets/data/resume.json', {})
        .subscribe((value: ResumePdf) => {
          const byteCharacters = atob(value.pdf);
          const byteArrays = [];

          for (let offset = 0; offset < byteCharacters.length; offset += 512) {
            const slice = byteCharacters.slice(offset, offset + 512);
            const byteNumbers = new Array(slice.length);
            for (let i = 0; i < slice.length; i++) {
              byteNumbers[i] = slice.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
          }

          const blob = new Blob(byteArrays, { type: 'application/pdf' });
          const url = window.URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = value.name;
          link.click();
          window.URL.revokeObjectURL(url);
        });
    });
  }
}
