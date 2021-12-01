import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './common/loader/loader.component';
import { BlockUIModule, ProgressSpinnerModule } from 'primeng';

@NgModule({
  declarations: [LoaderComponent],
  exports: [LoaderComponent],
  imports: [CommonModule, BlockUIModule, ProgressSpinnerModule],
})
export class LibraryModule {}
