import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-loan-detail',
	templateUrl: './loan-detail.component.html',
	styleUrls: ['./loan-detail.component.scss'],
})
export class LoanDetailComponent implements OnInit {
	displayForm: boolean = false;
	showDocument: boolean = false;
	isShow: boolean = false;
	constructor() {}

	ngOnInit(): void {}
}
