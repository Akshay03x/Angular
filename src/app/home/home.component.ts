import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name='jadu'
  imagePath='https://1.bp.blogspot.com/-uXgs7MaipCE/XpTZoiuyPTI/AAAAAAAAn2M/sdikj2izvz8mvu0PsRXWcgfylJMhtjMUQCLcBGAsYHQ/s1600/Jadu%2BPictures%252C%2BImages.JPG'

  changeName=()=>{
    this.name='Jadoo'
  }
}
