import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-master-tenor',
	templateUrl: './master-tenor.component.html',
	styleUrls: ['./master-tenor.component.scss'],
})
export class MasterTenorComponent implements OnInit {
	displayForm: boolean = false;
	data: any[] = [];
	columns: any[];
	objDetail: any = {};
	isEdit: boolean = false;
	constructor() {}

	ngOnInit(): void {
		this.columns = [
			{ field: 'term_name', header: 'Tenor Name' },
			{ field: 'term_count', header: 'Tenor Count' },
		];

		this.data = [
			{
				id_term: 1,
				term_name: '1 Tahun',
				term_count: 12,
			},
			{
				id_term: 2,
				term_name: '2 Tahun',
				term_count: 24,
			},
			{
				id_term: 3,
				term_name: '3 Tahun',
				term_count: 36,
			},
			{
				id_term: 4,
				term_name: '4 Tahun',
				term_count: 48,
			},
			{
				id_term: 5,
				term_name: '5 Tahun',
				term_count: 60,
			},
		];
	}
	showDetail(val: any) {
		this.objDetail = val;
	}
}
