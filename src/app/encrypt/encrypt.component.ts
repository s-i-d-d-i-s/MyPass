import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CryptoJS from 'crypto-js';


@Component({
  selector: 'app-encrypt',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './encrypt.component.html',
  styleUrl: './encrypt.component.css'
})
export class EncryptComponent {
  current_text = '';
  key = '';
  generated_hash = '';


  encrypt(text:string) {
    const encrypted = CryptoJS.AES.encrypt(text, this.key, {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  }


  constructor() {
    if (localStorage.getItem('current_hash') == null) {
      localStorage.setItem('current_hash', '');
    }
    this.current_text = localStorage.getItem('current_hash')!;
  }

  compute() {
    this.generated_hash = this.encrypt(this.current_text);
  }
  save_hash() {
    localStorage.setItem('current_hash', this.generated_hash);
    alert("Saved");
  }
}
