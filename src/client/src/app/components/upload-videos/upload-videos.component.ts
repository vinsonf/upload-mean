import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-videos',
  templateUrl: './upload-videos.component.html',
  styleUrls: ['./upload-videos.component.scss']
})
export class UploadVideosComponent implements OnInit {
  file: File | null = null;
  files: any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getFiles();
  }

  readSingleFile(event: Event) {
    const files = (<HTMLInputElement>event.target).files;
    console.log(files);
    if (files) {
      this.file = files[0];
    }
  }

  submit() {
    if (!this.file) {
      return alert('select a file first')
    }
    const formData = new FormData();
    formData.append('file', this.file);
    this.http.post<any>('http://localhost:3501/upload', formData).subscribe();
    this.file = null;
  }

  getFiles() {
    this.http.get<any>('http://localhost:3501/files').subscribe(files => this.files = files);
  }

  stream(filename: string){
    this.router.navigate(['stream', filename]);
  }

  delete(id: string){
    this.http.post<any>('http://localhost:3501/files/del/' + id, null).subscribe(files => this.files = files);
  }
}
