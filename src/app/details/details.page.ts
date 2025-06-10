import {
  Component,
  Input,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { MovieService } from '../services/movie.service';
import { MovieResult } from '../services/interfaces';
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { addIcons } from 'ionicons';
import { cashOutline, calendarOutline } from 'ionicons/icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonText,
    IonLabel,
    IonButtons,
    IonBackButton,
    IonItem,
    CurrencyPipe,
    DatePipe,
  ],
})
export class DetailsPage {
  private movieService = inject(MovieService);
  public movie: WritableSignal<MovieResult | null> = signal<MovieResult | null>(
    null,
  );
  public imageBaseUrl = 'https://image.tmdb.org/t/p';


  @Input()
  set id(movieId: string) {
    this.movieService.getMovieDetails(movieId).subscribe((movie) => {
      this.movie.set(movie);
    });
  }

  constructor() {
    addIcons({
      cashOutline,
      calendarOutline,
    });
  }
}
