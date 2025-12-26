import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, JsonPipe],
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'], // hapus sementara jika file CSS tidak ada
})
export class AppComponent {
  title = 'My Project';       // properti untuk template
  backendStatus: any = null;  // properti untuk template

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getBackendStatus();
  }

  getBackendStatus() {
    if (this.api.getStatus) {
      this.api.getStatus().subscribe({
        next: (res: any) => (this.backendStatus = res),
        error: (err: any) => (this.backendStatus = { error: err }),
      });
    } else {
      this.backendStatus = { error: 'API Service belum ada getStatus()' };
    }
  }
}
