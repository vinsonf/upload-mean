import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-stream-video',
  templateUrl: './page-stream-video.component.html',
  styleUrls: ['./page-stream-video.component.scss']
})
export class PageStreamVideoComponent implements OnInit {
  filename: string = '';
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.filename = params['filename'];
    });
  }

}
