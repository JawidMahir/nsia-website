import { Component, OnInit } from '@angular/core';
import { trigger, animate, style, group, animateChild, query, stagger, transition, state } from '@angular/animations';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.css'],
  animations: [
    trigger('fadeInOut', [
    //   state('void', style({
    //     opacity: 0
    //   })),
    //   state('*', style({
    //     opacity: 1
    //   })),
    //   transition('void <=>*', [animate('1s')]),
    // ]),

    state('*', style({ transform: 'translateX(0)', opacity: 1 })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)', opacity: 0 }),
      animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)')
    ]),
    transition('* => void',
      animate('0.5s cubic-bezier(0.215, 0.610, 0.355, 1.000)', style({
        transform: 'translateX(100%)',
        opacity: 0
      }))
    )
    ])
  ]
})
export class AboutHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getPage(outlet) {
    // tslint:disable-next-line: no-string-literal

    return outlet.activatedRouteData.state;
  }
}
