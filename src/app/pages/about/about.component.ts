import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Importa RouterModule aquí
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent { }
