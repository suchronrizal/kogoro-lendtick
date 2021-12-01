import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	data: any = {};
	options: any = {};
	data2: any = {};
	options2: any = {};
	constructor() {}

	ngOnInit(): void {
		this.data = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'First Dataset',
					data: [65, 59, 80, 81, 56, 55, 40],
					borderColor: '#f27b21',
				},
				{
					label: 'Second Dataset',
					data: [28, 48, 40, 19, 86, 27, 90],
					borderColor: '#8BBE4B',
				},
			],
		};
		this.options = {
			title: {
				display: true,
				text: 'Transaction Biller',
				fontSize: 16,
			},
			legend: {
				position: 'bottom',
			},
		};

		this.data2 = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [
				{
					label: 'First Dataset',
					data: [65, 59, 80, 81, 56, 55, 40],
					borderColor: '#1bc5bd',
				},
				{
					label: 'Second Dataset',
					data: [28, 48, 40, 19, 86, 27, 90],
					borderColor: '#8950fc',
				},
			],
		};
		this.options2 = {
			title: {
				display: true,
				text: 'Transaction Loan',
				fontSize: 16,
			},
			legend: {
				position: 'bottom',
			},
		};
	}
}
