import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-master-loan-type',
	templateUrl: './master-loan-type.component.html',
	styleUrls: ['./master-loan-type.component.scss'],
})
export class MasterLoanTypeComponent implements OnInit {
	displayForm: boolean = false;
	data: any[] = [];
	columns: any[];
	documentSelection: any[] = [];
	constructor() {}

	ngOnInit(): void {
		this.columns = [
			{ field: 'loanType', header: 'Loan Type Name' },
			{ field: 'document', header: 'Loan Type Name' },
		];

		this.data = [
			{
				loanType: 'Multiguna',
				document: 'KTP *Wajib, NPWP *Wajib, KK *Wajib',
			},
			{
				loanType: 'Multiguna',
				document: 'KTP *Wajib, NPWP *Wajib, KK *Wajib',
			},
		];

		this.documentSelection = [
			{ status: true, value: 1, label: 'KTP' },
			{ status: false, value: 2, label: 'ID CARD' },
			{ status: true, value: 3, label: 'NPWP' },
			{ status: true, value: 3, label: 'KK' },
			{ status: false, value: 4, label: 'PERJANJIAN PINJAMAN' },
			{ status: false, value: 5, label: 'SURAT KUASA' },
			{ status: false, value: 6, label: 'FORM PERJANJIAN' },
			{ status: false, value: 7, label: 'SURAT PEMOTONGAN GAJI *Wajib' },
			{ status: false, value: 8, label: 'DOKUMEN TAMBAHAN' },
			{ status: false, value: 9, label: 'SURAT PELUNASAN PERSETUJUAN KOPMIT' },
			{ status: false, value: 10, label: 'POTONG GAJI' },
			{ status: false, value: 11, label: 'SURAT PERSETUJUAN ISTRI' },
			{ status: false, value: 12, label: 'SLIP GAJI' },
			{ status: false, value: 13, label: 'REKENING BANK' },
		];
	}
}
