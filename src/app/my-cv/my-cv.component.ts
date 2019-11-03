import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../service/config.service';

@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.css']
})
export class MyCvComponent implements OnInit {
  aboutMe: boolean;
  recommendation: boolean;
  projects: boolean;
  experience: boolean;
  education: boolean;
  certificates: boolean;
  referee: boolean;
  externalResources: boolean;

  constructor(private configService: ConfigService) {
  }

  ngOnInit() {
    this.aboutMe = this.configService.CONFIG.required.find(value => value.name === 'aboutMe').value;
    this.recommendation = this.configService.CONFIG.required.find(value => value.name === 'recommendation').value;
    this.projects = this.configService.CONFIG.required.find(value => value.name === 'projects').value;
    this.experience = this.configService.CONFIG.required.find(value => value.name === 'experience').value;
    this.education = this.configService.CONFIG.required.find(value => value.name === 'education').value;
    this.certificates = this.configService.CONFIG.required.find(value => value.name === 'certificates').value;
    this.referee = this.configService.CONFIG.required.find(value => value.name === 'referee').value;
    this.externalResources = this.configService.CONFIG.required.find(value => value.name === 'external_resources').value;
  }

  print() {

  }
}
