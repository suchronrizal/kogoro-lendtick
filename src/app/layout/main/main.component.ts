import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
	toggle: boolean = false;
	onLayout: boolean = false;
	togglemobile: boolean = false;
	home: MenuItem;
	breadCrumbs: MenuItem[];
	constructor() {}

	ngOnInit(): void {
		this.home = { icon: 'pi pi-home' };
		this.breadCrumbs = [{ label: 'Loan' }, { label: 'List' }];
	}

	toggleOn() {
		this.toggle = !this.toggle;
	}

	onSidebar(e) {
		this.onLayout = e;
	}
}
