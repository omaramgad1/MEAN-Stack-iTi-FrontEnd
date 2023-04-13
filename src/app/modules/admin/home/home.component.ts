import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  quotes = [
    {
      quotes: "You will face many defeats in life, but never let yourself be defeated.",
      name: "Maya Angelou"
    },
    {
      quotes: "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
      name: "Marilyn Monroe"
    },
    {
      quotes: "Life is a long lesson in humility.",
      name: "James M. Barrie"
    },
  ]

}
