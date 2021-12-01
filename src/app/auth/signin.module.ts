import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { ButtonModule, CheckboxModule } from 'primeng';

@NgModule({
	declarations: [SigninComponent],
	imports: [CommonModule, FormsModule, ButtonModule, CheckboxModule],
})
export class SigninModule {}
