import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-master-product',
	templateUrl: './master-product.component.html',
	styleUrls: ['./master-product.component.scss'],
})
export class MasterProductComponent implements OnInit {
	data: any[] = [];
	columns: any[];
	arrInteres: any[];
	arrFees: any[];
	displayForm: boolean = false;
	arrIsPayCut: any[];
	objShowDetail: any = {};

	constructor() {}
	ngOnInit(): void {
		this.columns = [
			{ field: 'product_name', header: 'Product Name' },
			{ field: 'loan_type_name', header: 'Loan Type Name' },
			{ field: 'min_term_count', header: 'Min Tenor Count' },
			{ field: 'max_term_count', header: 'Max Tenor Count' },
			{ field: 'min_plafond', header: 'Min Plafond' },
			{ field: 'max_plafond', header: 'Max Plafond' },
		];
		this.data = [
			{
				id_product: 1,
				product_name: 'Multiguna',
				id_loan_type: 1,
				loan_type_name: 'Multiguna',
				id_min_term: 1,
				min_term_count: 12,
				id_max_term: 5,
				max_term_count: 60,
				min_plafond: 1000000.0,
				max_plafond: 300000000.0,
				is_bonus_paycut: false,
				is_down_payment: false,
				down_payment: 0.0,
				fees: [
					{
						id_product: 1,
						id_product_fee: 9,
						id_fee: 3,
						fee_name: 'Provisi',
						fee_value: 1.0,
						unit_value: 2,
					},
					{
						id_product: 1,
						id_product_fee: 10,
						id_fee: 4,
						fee_name: 'Materai',
						fee_value: 10000.0,
						unit_value: 1,
					},
					{
						id_product: 1,
						id_product_fee: 11,
						id_fee: 2,
						fee_name: 'Asuransi',
						fee_value: 1.0,
						unit_value: 3,
					},
					{
						id_product: 1,
						id_product_fee: 12,
						id_fee: 1,
						fee_name: 'Administrasi',
						fee_value: 60000.0,
						unit_value: 1,
					},
				],
				interests: [
					{
						id_product: 1,
						id_product_interest: 13,
						id_grade: 'GRD001',
						name_grade: 'I',
						interest: 8.5,
					},
					{
						id_product: 1,
						id_product_interest: 14,
						id_grade: 'GRD002',
						name_grade: 'II',
						interest: 8.5,
					},
					{
						id_product: 1,
						id_product_interest: 15,
						id_grade: 'GRD003',
						name_grade: 'III',
						interest: 8.5,
					},
					{
						id_product: 1,
						id_product_interest: 16,
						id_grade: 'GRD004',
						name_grade: 'IV',
						interest: 9.0,
					},
					{
						id_product: 1,
						id_product_interest: 17,
						id_grade: 'GRD005',
						name_grade: 'V',
						interest: 9.0,
					},
					{
						id_product: 1,
						id_product_interest: 18,
						id_grade: 'GRD006',
						name_grade: 'VI',
						interest: 9.0,
					},
				],
				paycuts: null,
			},
		];
		this.arrInteres = [
			{ label: 'Not Set', isCheck: false },
			{ label: 'I', isCheck: false },
			{ label: 'II', isCheck: false },
			{ label: 'III', isCheck: false },
			{ label: 'IV', isCheck: false },
			{ label: 'V', isCheck: false },
			{ label: 'IV', isCheck: false },
			{ label: 'VII', isCheck: false },
		];
		this.arrFees = [
			{ label: 'Administrasi', isCheck: false },
			{ label: 'Asuransi', isCheck: false },
			{ label: 'Asuransi Kendaraan', isCheck: false },
			{ label: 'Materai', isCheck: false },
			{ label: 'Provisi', isCheck: false },
		];
		this.arrIsPayCut = [
			{ value: '1', label: 'Yes' },
			{ value: '0', label: 'No' },
		];
	}

	showData(val) {
		this.objShowDetail = val;
	}
}
