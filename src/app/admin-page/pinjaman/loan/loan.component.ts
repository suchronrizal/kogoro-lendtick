import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
	selector: 'app-loan',
	templateUrl: './loan.component.html',
	styleUrls: ['./loan.component.scss'],
})
export class LoanComponent implements OnInit {
	data: any[] = [];
	columns: any[];
	selectedColumns: any[];
	constructor() {}

	ngOnInit(): void {
		this.columns = [
			{ field: 'loan_number', header: 'No Pinjaman', show: true },
			{ field: 'name_company', header: 'Company', show: true },
			{ field: 'id_koperasi', header: 'No Anggota', show: true },
			{ field: 'member_bank_account_name', header: 'Nama Anggota', show: true },
			{ field: 'position', header: 'Jabatan', show: true },
			{ field: 'name_grade', header: 'Golongan', show: true },
			{ field: 'id_employee', header: 'NRP', show: true },
			{ field: 'loan_type_name', header: 'Tipe Pinjaman', show: true },
			{ field: 'requested_loan', header: 'Total pinjaman Yg Di Ajukan', show: true },
			{ field: 'requested_installment', header: 'Angsuran Perbulan', show: true },
			{ field: 'approved_installment', header: 'Pinjaman yang di setujui', show: true },
			{ field: 'term', header: 'Tenor', show: true },
			{ field: 'request_date', header: 'Tgl Pengajuan', show: true },
			{ field: 'workflow_status_name', header: 'Status', show: true },
		];
		this.selectedColumns = _.filter(this.columns, { show: true });

		this.data = [
			{
				id_loan: 'cbfcdf64-be57-43e3-a9e1-baf2f2839145',
				loan_number: 'PAMANDIRI-20210911-00001',
				id_coresys: null,
				id_user: 93294,
				id_product: 1,
				product_name: 'Multiguna',
				id_loan_type: 1,
				loan_type_name: 'Multiguna',
				id_workflow_status: 'MLTSTS01',
				workflow_status_name: 'Requested',
				request_date: '2021-09-11T00:00:00',
				repayment_date: null,
				disbursment_date: null,
				requested_loan: 25000000.0,
				approved_loan: 25000000.0,
				down_payment: 0.0,
				total_down_payment: 0.0,
				requested_installment: 1218750.0,
				approved_installment: 1218750.0,
				interest: 8.5,
				total_interest: 4250000.0,
				discount: 0.0,
				total_discount: 0.0,
				total_fee: 400100.0,
				term: 24,
				loan_actual: 29250000.0,
				total_paycut_multiplier: 0,
				total_paycut: 0.0,
				is_offsetted: false,
				total_offset: 0.0,
				latest_payment_date: null,
				latest_term: 0,
				paid_term: 0,
				unpaid_term: 24,
				paid_loan: 0.0,
				unpaid_loan: 29250000.0,
				last_payment_date: null,
				member_bank_id: '13',
				member_bank_account_id: '4110166384',
				member_bank_account_name: 'Frans Herry Situmorang',
				id_company: 'COMP5',
				name_company: 'AI - DAIHATSU SALES OPERATION, PT.',
				id_user_profile: 92678,
				id_koperasi: '254748',
				name: 'FRANS HERRY SITUMORANG',
				position: 'Marketing',
				id_grade: 'GRD003',
				name_grade: 'III',
				id_employee: '53253',
			},
			{
				id_loan: '5fb4b6e2-5d4c-4de3-a656-e78eebdf70ac',
				loan_number: 'PAMANDIRI-20210909-00001',
				id_coresys: null,
				id_user: 93623,
				id_product: 1,
				product_name: 'Multiguna',
				id_loan_type: 1,
				loan_type_name: 'Multiguna',
				id_workflow_status: 'MLTSTS01',
				workflow_status_name: 'Requested',
				request_date: '2021-09-09T00:00:00',
				repayment_date: null,
				disbursment_date: null,
				requested_loan: 7000000.0,
				approved_loan: 7000000.0,
				down_payment: 0.0,
				total_down_payment: 0.0,
				requested_installment: 632917.0,
				approved_installment: 632917.0,
				interest: 8.5,
				total_interest: 595000.0,
				discount: 0.0,
				total_discount: 0.0,
				total_fee: 152845.0,
				term: 12,
				loan_actual: 7595000.0,
				total_paycut_multiplier: 0,
				total_paycut: 0.0,
				is_offsetted: false,
				total_offset: 0.0,
				latest_payment_date: null,
				latest_term: 0,
				paid_term: 0,
				unpaid_term: 12,
				paid_loan: 0.0,
				unpaid_loan: 7595000.0,
				last_payment_date: null,
				member_bank_id: '13',
				member_bank_account_id: '9810661191',
				member_bank_account_name: 'Sukarno',
				id_company: 'COMP5',
				name_company: 'AI - DAIHATSU SALES OPERATION, PT.',
				id_user_profile: 93007,
				id_koperasi: '255077',
				name: 'SUKARNO',
				position: 'Sales',
				id_grade: 'GRD003',
				name_grade: 'III',
				id_employee: '61734',
			},
			{
				id_loan: '0ae3abc9-5aaf-4dfa-af9b-fda47439898d',
				loan_number: 'PAMANDIRI-20210909-00002',
				id_coresys: null,
				id_user: 94780,
				id_product: 1,
				product_name: 'Multiguna',
				id_loan_type: 1,
				loan_type_name: 'Multiguna',
				id_workflow_status: 'MLTSTS01',
				workflow_status_name: 'Requested',
				request_date: '2021-09-09T00:00:00',
				repayment_date: null,
				disbursment_date: null,
				requested_loan: 10000000.0,
				approved_loan: 10000000.0,
				down_payment: 0.0,
				total_down_payment: 0.0,
				requested_installment: 348611.0,
				approved_installment: 348611.0,
				interest: 8.5,
				total_interest: 2550000.0,
				discount: 0.0,
				total_discount: 0.0,
				total_fee: 217900.0,
				term: 36,
				loan_actual: 12550000.0,
				total_paycut_multiplier: 0,
				total_paycut: 0.0,
				is_offsetted: false,
				total_offset: 0.0,
				latest_payment_date: null,
				latest_term: 0,
				paid_term: 0,
				unpaid_term: 36,
				paid_loan: 0.0,
				unpaid_loan: 12550000.0,
				last_payment_date: null,
				member_bank_id: '8',
				member_bank_account_id: '1360014821646',
				member_bank_account_name: 'Ari Sulistyaningrum',
				id_company: 'COMP24',
				name_company: 'AI - HONDA SALES OPERATION, PT.',
				id_user_profile: 94164,
				id_koperasi: '255636',
				name: 'ARI SULISTYANINGRUM',
				position: 'Sales Admin',
				id_grade: 'GRD002',
				name_grade: 'II',
				id_employee: '42511',
			},
			{
				id_loan: '6ea0ae71-052a-4d1f-a11a-db7bfc407fdb',
				loan_number: 'PAMANDIRI-20210908-00001',
				id_coresys: null,
				id_user: 86770,
				id_product: 1,
				product_name: 'Multiguna',
				id_loan_type: 1,
				loan_type_name: 'Multiguna',
				id_workflow_status: 'MLTSTS01',
				workflow_status_name: 'Requested',
				request_date: '2021-09-08T00:00:00',
				repayment_date: null,
				disbursment_date: null,
				requested_loan: 3048103.0,
				approved_loan: 3048103.0,
				down_payment: 0.0,
				total_down_payment: 0.0,
				requested_installment: 360269.0,
				approved_installment: 360269.0,
				interest: 8.5,
				total_interest: 259088.8,
				discount: 0.0,
				total_discount: 0.0,
				total_fee: 113648.83,
				term: 9,
				loan_actual: 3307191.8,
				total_paycut_multiplier: 0,
				total_paycut: 0.0,
				is_offsetted: false,
				total_offset: 0.0,
				latest_payment_date: null,
				latest_term: 0,
				paid_term: 0,
				unpaid_term: 9,
				paid_loan: 0.0,
				unpaid_loan: 3307191.8,
				last_payment_date: null,
				member_bank_id: '14',
				member_bank_account_id: '037885544',
				member_bank_account_name: 'Iron Man',
				id_company: 'COMP361',
				name_company: 'KOPERASI PAMANDIRI',
				id_user_profile: 86764,
				id_koperasi: '2',
				name: 'Testing nol dua',
				position: 'Golongan 3',
				id_grade: 'GRD003',
				name_grade: 'III',
				id_employee: '022020',
			},
			{
				id_loan: '48f112b9-c881-4646-91c5-64752c36a2c6',
				loan_number: 'PAMANDIRI-20210907-00001',
				id_coresys: null,
				id_user: 41924,
				id_product: 1,
				product_name: 'Multiguna',
				id_loan_type: 1,
				loan_type_name: 'Multiguna',
				id_workflow_status: 'MLTSTS02',
				workflow_status_name: 'Approved HR',
				request_date: '2021-09-07T00:00:00',
				repayment_date: null,
				disbursment_date: null,
				requested_loan: 20000000.0,
				approved_loan: 20000000.0,
				down_payment: 0.0,
				total_down_payment: 0.0,
				requested_installment: 697222.0,
				approved_installment: 697222.0,
				interest: 8.5,
				total_interest: 5100000.0,
				discount: 0.0,
				total_discount: 0.0,
				total_fee: 365800.0,
				term: 36,
				loan_actual: 25100000.0,
				total_paycut_multiplier: 0,
				total_paycut: 0.0,
				is_offsetted: false,
				total_offset: 0.0,
				latest_payment_date: null,
				latest_term: 0,
				paid_term: 0,
				unpaid_term: 36,
				paid_loan: 0.0,
				unpaid_loan: 25100000.0,
				last_payment_date: null,
				member_bank_id: '13',
				member_bank_account_id: '4-100-354-212',
				member_bank_account_name: 'M. ROZI NASUTION',
				id_company: 'COMP27',
				name_company: 'TRAKTOR NUSANTARA, PT.',
				id_user_profile: 41933,
				id_koperasi: '202846',
				name: 'M. ROZI NASUTION',
				position: 'Mekanik',
				id_grade: 'GRD002',
				name_grade: 'II',
				id_employee: '1309002',
			},
			{
				id_loan: '6be920b1-529e-4b53-8b15-8f4a40ce70e0',
				loan_number: 'PAMANDIRI-20210904-00001',
				id_coresys: null,
				id_user: 87021,
				id_product: 1,
				product_name: 'Multiguna',
				id_loan_type: 1,
				loan_type_name: 'Multiguna',
				id_workflow_status: 'MLTSTS01',
				workflow_status_name: 'Requested',
				request_date: '2021-09-04T00:00:00',
				repayment_date: null,
				disbursment_date: null,
				requested_loan: 3048103.0,
				approved_loan: 3048103.0,
				down_payment: 0.0,
				total_down_payment: 0.0,
				requested_installment: 360269.0,
				approved_installment: 360269.0,
				interest: 8.5,
				total_interest: 259088.8,
				discount: 0.0,
				total_discount: 0.0,
				total_fee: 105891.41,
				term: 9,
				loan_actual: 3307191.8,
				total_paycut_multiplier: 0,
				total_paycut: 0.0,
				is_offsetted: false,
				total_offset: 0.0,
				latest_payment_date: null,
				latest_term: 0,
				paid_term: 0,
				unpaid_term: 9,
				paid_loan: 0.0,
				unpaid_loan: 3307191.8,
				last_payment_date: null,
				member_bank_id: '13',
				member_bank_account_id: '4106266870',
				member_bank_account_name: 'Eldy devis',
				id_company: 'COMP5',
				name_company: 'AI - DAIHATSU SALES OPERATION, PT.',
				id_user_profile: 86989,
				id_koperasi: '250134',
				name: 'ELDY DEVIS ',
				position: 'Sales eksekutif',
				id_grade: 'GRD003',
				name_grade: 'III',
				id_employee: '52350',
			},
			{
				id_loan: 'e23e632c-c87a-4d01-9bb1-16c621208536',
				loan_number: 'PAMANDIRI-20210908-00001',
				id_coresys: null,
				id_user: 0,
				id_product: 0,
				product_name: null,
				id_loan_type: 0,
				loan_type_name: 'Multiguna',
				id_workflow_status: null,
				workflow_status_name: 'Requested',
				request_date: '2021-09-08T00:00:00',
				repayment_date: null,
				disbursment_date: null,
				requested_loan: 0,
				approved_loan: 0,
				down_payment: 0,
				total_down_payment: 0,
				requested_installment: 0,
				approved_installment: 0,
				interest: 12,
				total_interest: 0,
				discount: 0,
				total_discount: 0,
				total_fee: 0,
				term: 0,
				loan_actual: 0,
				total_paycut_multiplier: 0,
				total_paycut: 0,
				is_offsetted: false,
				total_offset: 0,
				latest_payment_date: null,
				latest_term: 0,
				paid_term: 0,
				unpaid_term: 0,
				paid_loan: 0,
				unpaid_loan: 0,
				last_payment_date: null,
				member_bank_id: null,
				member_bank_account_id: null,
				member_bank_account_name: null,
				id_company: null,
				name_company: 'AI - DAIHATSU SALES OPERATION, PT.',
				id_user_profile: 0,
				id_koperasi: '255465',
				name: 'ALDIFIAN PRATAMA NUGRAHA',
				position: 'Karawang Barat',
				id_grade: null,
				name_grade: 'III',
				id_employee: '66957',
			},
		];
	}
}
