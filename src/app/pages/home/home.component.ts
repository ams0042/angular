import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompoundInterestCalculatorComponent } from '../../components/compound-interest-calculator/compound-interest-calculator.component';  // 👈 Importación correcta

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CompoundInterestCalculatorComponent], // 👈 Agregamos la calculadora
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cryptos: any[] = [];
  private API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

  ngOnInit() {
    fetch(this.API_URL)
      .then(response => response.json())
      .then(data => this.cryptos = data)
      .catch(error => console.error('Error al cargar criptomonedas:', error));
  }
}
