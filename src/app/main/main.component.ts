import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CryptoJS from 'crypto-js';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  current_hash = '';
  key = '';
  generated_password = '';

  decrypt(encrypted:
    string): string {
    const decrypted = CryptoJS.AES.decrypt(encrypted, this.key, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  constructor() {
    if (localStorage.getItem('current_hash') == null) {
      localStorage.setItem('current_hash', '');
    }
    this.current_hash = localStorage.getItem('current_hash')!;
  }

  compute() {
    this.generated_password = this.decrypt(this.current_hash);
  }
  save_hash() {
    localStorage.setItem('current_hash', this.current_hash);
    alert("Saved");
  }

}
