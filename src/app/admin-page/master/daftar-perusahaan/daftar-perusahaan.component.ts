import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-daftar-perusahaan',
	templateUrl: './daftar-perusahaan.component.html',
	styleUrls: ['./daftar-perusahaan.component.scss'],
})
export class DaftarPerusahaanComponent implements OnInit {
	displayForm: boolean = false;
	arrParentCompany: [] = [];
	columns: any[];
	data: any[] = [];
	objDetail: any = {};
	isEdit: boolean = false;
	constructor() {}

	ngOnInit(): void {
		this.columns = [
			{ field: 'name_company', header: 'Perusahaan' },
			{ field: 'is_kopnit', header: 'Kopnit' },
			{ field: 'loan_power', header: 'Loan Power' },
		];
		this.data = [
			{
				id_company: 'COMP1626',
				name_company: 'ACSET INDONUSA, PT.',
				id_holding: 'HLD001',
				is_kopnit: null,
				loan_power: null,
				created_by: null,
				created_at: null,
				updated_by: null,
				updated_at: null,
				deleted_by: null,
				deleted_at: null,
				phone_number: '213511961',
				address: 'JL MAJAPAHIT NO 26 PETOJO SELATAN - GAMBIR 10160 - JAKARTA',
				id_bank_main: null,
				account_number_bank_main: null,
				account_name_bank_main: null,
				id_bank_secondary: null,
				account_number_bank_secondary: null,
				account_name_bank_secondary: null,
				status: '1',
				pic_email: null,
				pic_approval: null,
				parent_company_id: null,
			},
			{
				id_company: 'COMP336',
				name_company: 'ADIPURA SUMBER SEDAYA FINANCE, PT.',
				id_holding: 'HLD001',
				is_kopnit: null,
				loan_power: null,
				created_by: null,
				created_at: null,
				updated_by: null,
				updated_at: null,
				deleted_by: null,
				deleted_at: null,
				phone_number: '7509000',
				address: 'JL.RS.FATMAWATI 9 - JAKARTA',
				id_bank_main: null,
				account_number_bank_main: null,
				account_name_bank_main: null,
				id_bank_secondary: null,
				account_number_bank_secondary: null,
				account_name_bank_secondary: null,
				status: '1',
				pic_email: null,
				pic_approval: null,
				parent_company_id: null,
			},
			{
				id_company: 'COMP171',
				name_company: 'ADIS, PT',
				id_holding: 'HLD001',
				is_kopnit: null,
				loan_power: null,
				created_by: null,
				created_at: null,
				updated_by: null,
				updated_at: null,
				deleted_by: null,
				deleted_at: null,
				phone_number: '5951671',
				address: 'JL. RAYA SERANG KM 24 BALARAJA TANGERANG - TANGERANG',
				id_bank_main: null,
				account_number_bank_main: null,
				account_name_bank_main: null,
				id_bank_secondary: null,
				account_number_bank_secondary: null,
				account_name_bank_secondary: null,
				status: '1',
				pic_email: null,
				pic_approval: null,
				parent_company_id: null,
			},
			{
				id_company: 'COMP990',
				name_company: 'ADIWIRA PLASTIK\r\n',
				id_holding: 'HLD001',
				is_kopnit: null,
				loan_power: null,
				created_by: null,
				created_at: null,
				updated_by: null,
				updated_at: null,
				deleted_by: null,
				deleted_at: null,
				phone_number: '012518652703',
				address: 'Jl. Raya Jakarta - Bogor KM. 51.3 Ciluar, Cimandala, Kec. Sukaraja, Bogor, Jawa Barat 16710',
				id_bank_main: null,
				account_number_bank_main: null,
				account_name_bank_main: null,
				id_bank_secondary: null,
				account_number_bank_secondary: null,
				account_name_bank_secondary: null,
				status: '1',
				pic_email: null,
				pic_approval: null,
				parent_company_id: null,
			},
			{
				id_company: 'COMP105',
				name_company: 'ADVANCED INTERCONNECT TECHNOLOGIES, PT.',
				id_holding: 'HLD001',
				is_kopnit: null,
				loan_power: null,
				created_by: null,
				created_at: null,
				updated_by: null,
				updated_at: null,
				deleted_by: null,
				deleted_at: null,
				phone_number: '0770 611888/612553',
				address: 'JL. S. PARMAN KAV. 201 BIP, MUKA KUNING, BATAM 29433 - BATAM',
				id_bank_main: null,
				account_number_bank_main: null,
				account_name_bank_main: null,
				id_bank_secondary: null,
				account_number_bank_secondary: null,
				account_name_bank_secondary: null,
				status: '1',
				pic_email: null,
				pic_approval: null,
				parent_company_id: null,
			},
			{
				id_company: 'COMP1628',
				name_company: 'ADVICS MANUFACTURING INDONESIA, PT.',
				id_holding: 'HLD001',
				is_kopnit: null,
				loan_power: null,
				created_by: null,
				created_at: null,
				updated_by: null,
				updated_at: null,
				deleted_by: null,
				deleted_at: null,
				phone_number: '0267 8643141',
				address: 'JL HARAPAN VIII KAW INDUSTRI KIIC LL NO 9 & 10 KEL CIAMPEL KEC PARUNG MULYA KAB KARAWANG JAWA BARAT 41363   - KARAWANG',
				id_bank_main: null,
				account_number_bank_main: null,
				account_name_bank_main: null,
				id_bank_secondary: null,
				account_number_bank_secondary: null,
				account_name_bank_secondary: null,
				status: '1',
				pic_email: null,
				pic_approval: null,
				parent_company_id: null,
			},
			{
				id_company: 'COMP15',
				name_company: 'AI - Pamandiri WORLD, PT.',
				id_holding: 'HLD001',
				is_kopnit: null,
				loan_power: null,
				created_by: null,
				created_at: null,
				updated_by: null,
				updated_at: null,
				deleted_by: null,
				deleted_at: null,
				phone_number: '65310001',
				address: 'JL.GAYA MOTOR II - BANDUNG',
				id_bank_main: null,
				account_number_bank_main: null,
				account_name_bank_main: null,
				id_bank_secondary: null,
				account_number_bank_secondary: null,
				account_name_bank_secondary: null,
				status: '1',
				pic_email: null,
				pic_approval: null,
				parent_company_id: null,
			},
			{
				id_company: 'COMP42',
				name_company: 'AI - BMW SALES OPERATION, PT.',
				id_holding: 'HLD001',
				is_kopnit: null,
				loan_power: null,
				created_by: null,
				created_at: null,
				updated_by: null,
				updated_at: null,
				deleted_by: null,
				deleted_at: null,
				phone_number: '6509330',
				address: 'JL.MAYJEN HR MUHAMMAD KAV 2-10 PUTAT GEDE SUKOMANUNGGAL SURABAYA 60189 TELP.0317345600 - SURABAYA',
				id_bank_main: null,
				account_number_bank_main: null,
				account_name_bank_main: null,
				id_bank_secondary: null,
				account_number_bank_secondary: null,
				account_name_bank_secondary: null,
				status: '1',
				pic_email: null,
				pic_approval: null,
				parent_company_id: null,
			},
			{
				id_company: 'COMP5',
				name_company: 'AI - DAIHATSU SALES OPERATION, PT.',
				id_holding: 'HLD001',
				is_kopnit: null,
				loan_power: null,
				created_by: null,
				created_at: null,
				updated_by: null,
				updated_at: null,
				deleted_by: null,
				deleted_at: null,
				phone_number: '6507000',
				address: 'JL. GAYA MOTOR III/5 - BANDUNG',
				id_bank_main: null,
				account_number_bank_main: null,
				account_name_bank_main: null,
				id_bank_secondary: null,
				account_number_bank_secondary: null,
				account_name_bank_secondary: null,
				status: '1',
				pic_email: null,
				pic_approval: '94138',
				parent_company_id: null,
			},
			{
				id_company: 'COMP24',
				name_company: 'AI - HONDA SALES OPERATION, PT.',
				id_holding: 'HLD001',
				is_kopnit: null,
				loan_power: null,
				created_by: null,
				created_at: null,
				updated_by: null,
				updated_at: null,
				deleted_by: null,
				deleted_at: null,
				phone_number: '024 6703900',
				address: 'JL. JEND. SUDIRMAN 320B SEMARANG TELP.0247603900 - SEMARANG',
				id_bank_main: null,
				account_number_bank_main: null,
				account_name_bank_main: null,
				id_bank_secondary: null,
				account_number_bank_secondary: null,
				account_name_bank_secondary: null,
				status: '1',
				pic_email: null,
				pic_approval: null,
				parent_company_id: null,
			},
		];
	}
	showDetail(val: any) {
		this.isEdit = true;
		this.objDetail = val;
	}
}