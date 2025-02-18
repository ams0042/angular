import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // 👈 IMPORTANTE

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], // 👈 AGREGAR FormsModule
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = { name: '', email: '', message: '' };

  handleSubmit() {
    alert(`Gracias ${this.formData.name}, hemos recibido tu mensaje y te contactaremos pronto!`);
    this.formData = { name: '', email: '', message: '' };  // Reiniciar el formulario
  }
}
