import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-master-fee',
	templateUrl: './master-fee.component.html',
	styleUrls: ['./master-fee.component.scss'],
})
export class MasterFeeComponent implements OnInit {
	arrUnitValue: any[];
	displayForm: boolean = false;
	data: any[] = [];
	columns: any[];
	objDetail: any = {};
	isEdit: boolean = false;
	constructor() {}

	ngOnInit(): void {
		this.columns = [
			{ field: 'id_fee', header: 'ID' },
			{ field: 'fee_name', header: 'Name' },
			{ field: 'unit_value', header: 'Unit Value' },
		];
		this.data = [
			{
				id_fee: 1,
				fee_name: 'Administrasi',
				unit_value: 1,
			},
			{
				id_fee: 2,
				fee_name: 'Asuransi',
				unit_value: 3,
			},
			{
				id_fee: 5,
				fee_name: 'Asuransi Kendaraan',
				unit_value: 2,
			},
			{
				id_fee: 4,
				fee_name: 'Materai',
				unit_value: 1,
			},
			{
				id_fee: 3,
				fee_name: 'Provisi',
				unit_value: 2,
			},
		];

		this.arrUnitValue = [
			{ value: 1, label: '1 - Currency' },
			{ value: 2, label: '2 - Precentage' },
			{ value: 0, label: '3 - Permil' },
		];
	}
	showDetail(val: any) {
		this.isEdit = true;
		this.objDetail = val;
	}
}
