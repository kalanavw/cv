import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyCvComponent} from './my-cv/my-cv.component';
import {HeaderComponent} from './my-cv/header/header.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ConfigService} from './service/config.service';
import {Config} from './model/config';
import {AboutMeComponent} from './my-cv/about-me/about-me.component';
import {RecommendationsComponent} from './my-cv/recommendations/recommendations.component';
import {ProjectsComponent} from './my-cv/projects/projects.component';
import {ExperienceComponent} from './my-cv/experience/experience.component';
import {EducationComponent} from './my-cv/education/education.component';
import {CertificatesComponent} from './my-cv/certificates/certificates.component';
import {RefereeComponent} from './my-cv/referee/referee.component';
import {ExternalResourcesComponent} from './my-cv/external-resources/external-resources.component';
import {DetailCvComponent} from './detail-cv/detail-cv.component';

export function initApp(http: HttpClient, config: ConfigService) {
  return () => {
    return http.get('assets/config.json')
      .toPromise()
      .then((resp: Config) => {
        config.CONFIG = resp;
      });
  };
}

@NgModule({
  declarations: [
    AppComponent,
    MyCvComponent,
    HeaderComponent,
    AboutMeComponent,
    RecommendationsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    CertificatesComponent,
    RefereeComponent,
    ExternalResourcesComponent,
    DetailCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initApp,
    multi: true,
    deps: [HttpClient, ConfigService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
