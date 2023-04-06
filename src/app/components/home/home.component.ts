import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  angular_QA:Array<any>=[];

  constructor() { }

  ngOnInit(): void {
    // {
    //   'type':'',
    //   'Question':'1',
    //   'Answer':'1',
    // }
    this.angular_QA = [
      {
        'type':'list',
        'Question':'what is the use of grunt and gulp and how to use?',
        'Answer':["Compressing image files",
         "Eliminating debugger and console statements from scripts",
          "Minifying, concatenating, and cleaning up CSS and JavaScript",
          "Linting code for errors",
          "Compiling Less files",
          "Running unit tests",
          "Sending updates to a production server",
          "Updating databases"],
      },{

      }
    ]

  }

}
