import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'

})
export class CarouselComponent {
    Math = Math; // 👈 Expose Math to template
  customers = [
    {
      name: 'Alice Johnson',
      photo: 'https://randomuser.me/api/portraits/women/1.jpg',
      rating: 5,
      comment: 'Amazing service! Highly recommended.'
    },
    {
      name: 'Mark Stevens',
      photo: 'https://randomuser.me/api/portraits/men/2.jpg',
      rating: 4,
      comment: 'Great experience, will return again.'
    },
    {
      name: 'Sara Lee',
      photo: 'https://randomuser.me/api/portraits/women/3.jpg',
      rating: 4.5,
      comment: 'Very friendly staff and quick support.'
    }
  ];
  
}
