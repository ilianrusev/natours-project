import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories-section',
  templateUrl: './stories-section.component.html',
  styleUrls: ['./stories-section.component.scss'],
})
export class StoriesSectionComponent implements OnInit {
  stories: any[] = [
    {
      title: 'I had the best week ever with my family',
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
      tempora tempore veritatis neque corporis nostrum sed quia labore
      libero! Consequuntur, sunt minima saepe nostrum distinctio repellat
      accusamus provident aspernatur sed sunt minima saepe nostrum
      distinctio!`,
      imageUrl: 'assets/img/nat-8.jpg',
      fullName: 'Skyler White',
    },
    {
      title: 'WOW! My life is completely different now',
      description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
      tempora tempore veritatis neque corporis nostrum sed quia labore
      libero! Consequuntur, sunt minima saepe nostrum distinctio repellat
      accusamus provident aspernatur sed sunt minima saepe nostrum
      distinctio!`,
      imageUrl: 'assets/img/nat-9.jpg',
      fullName: 'Walter White',
    },
  ];

  backgroundVideoSources: string[] = [
    'assets/img/video.mp4',
    'assets/img/video.webm',
  ];

  constructor() {}

  ngOnInit(): void {}
}
