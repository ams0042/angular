import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTANTE PARA ngModel

@Component({
  selector: 'app-compound-interest-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Agregar FormsModule aquí
  templateUrl: './compound-interest-calculator.component.html',
  styleUrls: ['./compound-interest-calculator.component.css']
})
export class CompoundInterestCalculatorComponent {
  principal: number = 0;
  rate: number = 0;
  years: number = 0;
  result: number | null = null;

  calculateInterest() {
    if (this.principal && this.rate && this.years) {
      const P = this.principal;
      const r = this.rate / 100;
      const t = this.years;
      this.result = P * Math.pow(1 + r, t); // Fórmula de interés compuesto
    } else {
      this.result = null;
    }
  }
}
