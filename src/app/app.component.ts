import { Component, OnInit } from '@angular/core';
import { SomeService } from './some-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  constructor(private someService: SomeService) { }

  ngOnInit(): void {
    this.someService.getDescription().subscribe((result) => {
      this.title = result;
    })
  }
}
