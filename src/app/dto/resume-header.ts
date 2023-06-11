export class ResumeHeader {
  title: string | undefined;
  name: string | undefined;
  summary: string | undefined;
  social: {url: string, name: string, icon: string, target: string}[] = [
    {url: "", name:"", icon:"", target:""}
  ];
  profileImage: string | undefined;
}
