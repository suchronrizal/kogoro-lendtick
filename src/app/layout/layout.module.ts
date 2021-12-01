import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbModule, ToastModule } from 'primeng';

@NgModule({
	imports: [CommonModule, FormsModule, ProgressSpinnerModule, OverlayPanelModule, PanelMenuModule, ToastModule, BreadcrumbModule],
	declarations: [MainComponent, HeaderComponent, SidebarComponent],
	exports: [MainComponent],
	providers: [MainComponent],
})
export class LayoutModule {}
