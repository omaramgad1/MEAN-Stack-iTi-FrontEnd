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
      // imgSrc:
      //   'https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      // imgAlt: 'book Reading',

    },
    {
      quotes: "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
      name: "Marilyn Monroe"

      // imgSrc:
      //   'https://images.pexels.com/photos/5531323/pexels-photo-5531323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      //   imgAlt: 'reading',
    },
    {
      quotes: "Life is a long lesson in humility.",
      name: "James M. Barrie"
      // imgSrc:'https://media.istockphoto.com/id/1401178460/photo/teacher-helping-a-young-student-with-her-homework-in-the-library-after-school-two-females-are.jpg?b=1&s=170667a&w=0&k=20&c=aPY2PqE2XJtiRo-9WSdDR0DHTy3PgocUK0GVTwoYmcg=',
      // imgAlt: 'family Reading',

    },
  ]

}
