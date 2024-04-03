import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Social } from '../model/social';
import { Posts } from '../state/mock-socials';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor() { }

  getPosts(): Observable<Social[]> {
    const posts = of(Posts)
    return posts
  }
}
