import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-master-document',
	templateUrl: './master-document.component.html',
	styleUrls: ['./master-document.component.scss'],
})
export class MasterDocumentComponent implements OnInit {
	displayForm: boolean = false;
	columns: any[];
	data: any[] = [];
	objDetail: any = {};
	isEdit: boolean = false;
	constructor() {}

	ngOnInit(): void {
		this.columns = [
			{ field: 'id_document_type', header: 'ID Document' },
			{ field: 'document_name', header: 'Document Name' },
		];
		this.data = [
			{
				id_document_type: 'DOC001',
				document_name: 'KTP *Wajib',
				schema_point: null,
				table_point: null,
				column_point: null,
				is_template: false,
				path: null,
			},
			{
				id_document_type: 'DOC002',
				document_name: 'ID CARD',
				schema_point: null,
				table_point: null,
				column_point: null,
				is_template: false,
				path: null,
			},
			{
				id_document_type: 'DOC003',
				document_name: 'NPWP *Wajib',
				schema_point: null,
				table_point: null,
				column_point: null,
				is_template: false,
				path: null,
			},
			{
				id_document_type: 'DOC004',
				document_name: 'KK *Wajib',
				schema_point: null,
				table_point: null,
				column_point: null,
				is_template: false,
				path: null,
			},
			{
				id_document_type: 'DOC005',
				document_name: 'REKENING BANK',
				schema_point: null,
				table_point: null,
				column_point: null,
				is_template: false,
				path: null,
			},
			{
				id_document_type: 'DOC006',
				document_name: 'SLIP GAJI',
				schema_point: null,
				table_point: null,
				column_point: null,
				is_template: false,
				path: null,
			},
			{
				id_document_type: 'DOC008',
				document_name: 'POTONG GAJI',
				schema_point: null,
				table_point: null,
				column_point: null,
				is_template: false,
				path: null,
			},
			{
				id_document_type: 'DOC010',
				document_name: 'DOKUMEN TAMBAHAN',
				schema_point: null,
				table_point: null,
				column_point: null,
				is_template: false,
				path: null,
			},
			{
				id_document_type: 'DOC012',
				document_name: 'FORM PERJANJIAN',
				schema_point: null,
				table_point: null,
				column_point: null,
				is_template: true,
				path: 'https://commercestrorage.blob.core.windows.net/template/form%20perjanjian%20piutang.xlsx',
			},
			{
				id_document_type: 'DOC014',
				document_name: 'PERJANJIAN PINJAMAN',
				schema_point: null,
				table_point: null,
				column_point: null,
				is_template: true,
				path: 'https://commercestrorage.blob.core.windows.net/template/surat%20piutang%20anggota.doc',
			},
		];
	}
	showDetail(val: any) {
		this.isEdit = true;
		this.objDetail = val;
	}
}
