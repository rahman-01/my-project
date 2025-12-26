import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Untuk *ngIf dan json pipe
import { RouterOutlet } from '@angular/router'; // Untuk <router-outlet>
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  standalone: true, // Pastikan ini true
  imports: [CommonModule, RouterOutlet], // Import *ngIf, json pipe, dan router-outlet di sini
  templateUrl: './app.component.html',
  styleUrls: [] // Kosongkan jika file .css tidak ditemukan
})
export class AppComponent implements OnInit {
  title = 'frontend';
  backendStatus: any = null;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getStatus().subscribe({
      next: (data) => {
        this.backendStatus = data;
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
  }
}