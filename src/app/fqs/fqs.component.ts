import { Component } from '@angular/core';

@Component({
  selector: 'app-fqs',
  templateUrl: './fqs.component.html',
  styleUrls: ['./fqs.component.css']
})
export class FQSComponent {
  name="FQS from FQS";
  number=123.79797;
  object={1:1,2:2,3:3};
  myDate=new Date();
  imagePath='https://1.bp.blogspot.com/-uXgs7MaipCE/XpTZoiuyPTI/AAAAAAAAn2M/sdikj2izvz8mvu0PsRXWcgfylJMhtjMUQCLcBGAsYHQ/s1600/Jadu%2BPictures%252C%2BImages.JPG'
  Change=()=>{
    this.imagePath="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2020/08/08/918152-5-17-years-of-koi-mil-gaya-jadoo-hrithik-roshan.jpg"
  }
}
