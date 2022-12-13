import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss'],
})
export class FeaturesSectionComponent implements OnInit {
  cards: any[] = [
    {
      title: 'Explore the World',
      description:
        'Every explorer is a true adventurer bound by a common curiosity for the unknown.',
      iconClass: 'icon-basic-world',
    },
    {
      title: 'Meet Nature',
      description: 'Meet nature and share your experience with other people.',
      iconClass: 'icon-basic-compass',
    },
    {
      title: 'Find Your Way',
      description: 'Find your way around the world with our map.',
      iconClass: 'icon-basic-map',
    },
    {
      title: 'Live A Healthier Life',
      description: 'Have a healthier lifestyle with our help.',
      iconClass: 'icon-basic-heart',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
