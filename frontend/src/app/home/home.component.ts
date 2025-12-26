import { Component, OnInit } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common'; // JsonPipe untuk menampilkan objek
import { ApiService } from '../api.service'; // Sesuaikan path jika berbeda

interface Signal {
  id: number;
  pair: string;
  entryPrice: string;
  targetPrice: string;
  stopLoss: string;
  type: 'BUY' | 'SELL';
  status: 'ACTIVE' | 'PENDING' | 'CLOSED';
  profitLoss: string;
  icon: string; // Misal 'bitcoin.svg', 'ethereum.svg'
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, JsonPipe], // Tambahkan JsonPipe di sini
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  backendStatus: any = null;
  cryptoSignals: Signal[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    // Panggil status backend (opsional, hanya untuk debugging)
    this.apiService.getStatus().subscribe({
      next: (data) => {
        this.backendStatus = data;
      },
      error: (error) => {
        console.error('Error fetching backend status:', error);
        this.backendStatus = { status: 'Error', message: 'Backend tidak terhubung' };
      }
    });

    // Data dummy untuk sinyal crypto
    this.cryptoSignals = [
      { id: 1, pair: 'BTC/USDT', entryPrice: '60,000', targetPrice: '62,500', stopLoss: '59,000', type: 'BUY', status: 'ACTIVE', profitLoss: '+3.5%', icon: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=025' },
      { id: 2, pair: 'ETH/USDT', entryPrice: '3,000', targetPrice: '3,150', stopLoss: '2,900', type: 'BUY', status: 'PENDING', profitLoss: '0%', icon: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=025' },
      { id: 3, pair: 'XRP/USDT', entryPrice: '0.50', targetPrice: '0.48', stopLoss: '0.51', type: 'SELL', status: 'CLOSED', profitLoss: '-1.2%', icon: 'https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=025' },
      { id: 4, pair: 'ADA/USDT', entryPrice: '0.75', targetPrice: '0.80', stopLoss: '0.72', type: 'BUY', status: 'ACTIVE', profitLoss: '+2.0%', icon: 'https://cryptologos.cc/logos/cardano-ada-logo.svg?v=025' },
    ];
  }
}