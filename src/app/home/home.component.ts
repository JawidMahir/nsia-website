import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  x: any;
  title: any;
  constructor(
    private dataService: DataService
  ) { }
  ngOnInit() {
    this.x = location.pathname;
    this.getPosts();
  }

  getPosts() {
    this.dataService.getPosts().subscribe((data) => {
      console.log(data[0].title.rendered);
      this.title = data[0].title.rendered;
    });
  }


}
