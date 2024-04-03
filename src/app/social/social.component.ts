import { Component,OnInit } from '@angular/core';
import { SocialService } from '../services/social.service';
import { Social } from '../model/social';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.css'
})
export class SocialComponent implements OnInit {

  posts:Social[] | undefined

  constructor(private socialMediaService:SocialService){}

  ngOnInit(): void {
    this.socialMediaService.getPosts().subscribe(posts => this.posts = posts)

  }


}
