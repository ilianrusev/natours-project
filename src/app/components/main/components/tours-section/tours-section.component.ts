import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tours-section',
  templateUrl: './tours-section.component.html',
  styleUrls: ['./tours-section.component.scss'],
})
export class ToursSectionComponent implements OnInit {
  tours: any[] = [
    {
      heading: 'The Sea Explorer',
      price: 299,
      description: [
        '3 day tour',
        'Up to 30 people',
        '2 tour guides',
        'Sleep in cozy hotels',
        'Difficulty: Easy',
      ],
    },
    {
      heading: 'The Forest Hiker',
      price: 499,
      description: [
        '7 day tour',
        'Up to 40 people',
        '6 tour guides',
        'Sleep in provided tents',
        'Difficulty: Medium',
      ],
    },
    {
      heading: 'The Snow Adventurer',
      price: 999,
      description: [
        '5 day tour',
        'Up to 15 people',
        '3 tour guides',
        'Sleep in provided tents',
        'Difficulty: Hard',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
