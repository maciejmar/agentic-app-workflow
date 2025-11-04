import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    msg: string | null = null;

  ping() {
    fetch(`${environment.apiBase}/hello`)
      .then((r) => r.json())
      .then((data) => this.msg = (data as any)?.message ?? String(data))
      .catch((e) => this.msg = 'Błąd: ' + e);
  }
}
