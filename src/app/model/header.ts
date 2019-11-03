import {SafeResourceUrl} from '@angular/platform-browser';

export class Header {
  name: string;
  position: string;
  degree: string;
  email: string;
  contactNo1: string;
  contactNo2: string;
  address: string;
  github: { url: string, name: string, icon: string };
  linkedin: { url: string, name: string, icon: string };
  skype: { url: string, name: string, icon: string };
  photo: SafeResourceUrl;
}
