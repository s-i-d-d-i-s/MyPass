import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EncryptComponent } from './encrypt/encrypt.component';

export const routes: Routes = [
    {path : 'main' , component : MainComponent },
    {path : 'encrypt' , component : EncryptComponent },
];
