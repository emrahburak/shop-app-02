import { Component,OnInit, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent implements OnInit {

  categoryName = ""

  constructor(private route: ActivatedRoute, private cdRef: ChangeDetectorRef){
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryName = params['slug'];
      this.cdRef.detectChanges()
    })
  }
  
}
