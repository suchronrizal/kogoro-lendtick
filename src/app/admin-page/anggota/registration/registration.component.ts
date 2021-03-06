import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
	data: any[] = [];
	columns: any[];
	selectedColumns: any[];
	displayForm: boolean = false;
	constructor() {}

	ngOnInit(): void {
		this.columns = [
			{ field: 'name', header: 'Nama', show: true },
			{ field: 'name_company', header: 'Perusahaan', show: true },
			{ field: 'id_employee', header: 'NRP', show: true },
			{ field: 'employee_starting_date', header: 'Tgl Masuk', show: true },
			{ field: 'employee_starting_date', header: 'Tgl Kartap', show: true },
			{ field: 'created_at', header: 'Tgl Pengajuan', show: true },
			{ field: 'is_new_user', header: 'Status', show: true },
		];
		this.selectedColumns = _.filter(this.columns, { show: true });

		this.data = [
			{
				name: 'Test lanjutan',
				id_koperasi: null,
				id_employee: '123456',
				id_company: 'COMP361',
				position: null,
				division: null,
				name_company: 'KOPERASI PAMANDIRI',
				phone_number: '0859212020181',
				employee_starting_date: '2020-02-01',
				name_grade: 'V',
				npwp: null,
				email: 'Artbomberlutfi@gmail.com1',
				loan_plafond: null,
				microloan_plafond: '2000000',
				personal_photo: 'https://commercestrorage.blob.core.windows.net/users/86680/img/9cc6ae0b80403924975c7fc2a10ae3fc3e6b975c.png',
				personal_identity_path: '',
				company_identity_path: '',
				id_user: '86680',
				username: 'Artbomberlutfi@gmail.com',
				password: '$2y$10$VKsaT5KCqshCkQZUiJRAc.9awhv6d6SmcbhQ5ClIDv9JIslBugi1q',
				id_role_master: 'ROLE001',
				id_workflow_status: 'MBRSTS05',
				android_device_token: null,
				ios_device_token: null,
				is_new_user: '1',
				last_login: '2021-08-13 10:42:03.000',
				created_at: '2020-02-13 00:37:36.670',
				created_by: '1',
				updated_at: '2021-08-13 10:42:03.703',
				updated_by: null,
				deleted_at: null,
				deleted_by: null,
				date_become_member: null,
			},
			{
				name: 'Anak bangsa',
				id_koperasi: null,
				id_employee: '21315',
				id_company: 'COMP20000',
				position: '-',
				division: '- / -',
				name_company: 'SOLUSI MOBILITAS BANGSA, PT.',
				phone_number: '0859212020181',
				employee_starting_date: '2020-02-01',
				name_grade: 'V',
				npwp: null,
				email: 'Lutfi@mhs.ubharajaya.ac.id',
				loan_plafond: null,
				microloan_plafond: '0',
				personal_photo: 'https://commercestrorage.blob.core.windows.net/users/86706/img/be88c2d2f528ebfe133672f2f3b1f63d4557faab.png',
				personal_identity_path: '',
				company_identity_path: '',
				id_user: '86706',
				username: 'Lutfi@mhs.ubharajaya.ac.id',
				password: '$2y$10$iKia2yROQxdDMQvTOhvLZukwR3MM6vZjMi7dvNqc6s1GSRXVSpPXu',
				id_role_master: 'ROLE001',
				id_workflow_status: 'MBRSTS05',
				android_device_token: null,
				ios_device_token: null,
				is_new_user: '0',
				last_login: null,
				created_at: '2020-02-19 10:48:05.833',
				created_by: '1',
				updated_at: '2020-02-19 13:34:04.847',
				updated_by: null,
				deleted_at: null,
				deleted_by: null,
				date_become_member: null,
			},
			{
				name: 'Untukmu go fleet',
				id_koperasi: null,
				id_employee: '122218',
				id_company: 'COMP20000',
				position: '-',
				division: '- / -',
				name_company: 'SOLUSI MOBILITAS BANGSA, PT.',
				phone_number: '08131152959412',
				employee_starting_date: '2020-02-01',
				name_grade: 'V',
				npwp: null,
				email: 'd3va.mail@gmail.com',
				loan_plafond: null,
				microloan_plafond: '0',
				personal_photo: 'https://commercestrorage.blob.core.windows.net/users/86717/img/680499e42fa73901b6609b58a2d945474b76448a.png',
				personal_identity_path: '',
				company_identity_path: '',
				id_user: '86717',
				username: 'd3va.mail@gmail.com',
				password: '$2y$10$YDjl8FKYREWFHKfBzvForON87YhV1erCnjN/w4O./BPE/x4qL3OLy',
				id_role_master: 'ROLE001',
				id_workflow_status: 'MBRSTS05',
				android_device_token: null,
				ios_device_token: null,
				is_new_user: '1',
				last_login: null,
				created_at: '2020-02-23 23:09:26.597',
				created_by: '1',
				updated_at: '2020-02-24 01:03:35.167',
				updated_by: null,
				deleted_at: null,
				deleted_by: null,
				date_become_member: null,
			},
			{
				name: 'Riyan lentick',
				id_koperasi: null,
				id_employee: '61515181',
				id_company: 'COMP361',
				position: 'It',
				division: 'It / It',
				name_company: 'KOPERASI PAMANDIRI',
				phone_number: '081282202455',
				employee_starting_date: '2020-04-01',
				name_grade: 'V',
				npwp: null,
				email: 'M.riyan.kurniawan@gmail.com',
				loan_plafond: null,
				microloan_plafond: '2000000',
				personal_photo: 'https://commercestrorage.blob.core.windows.net/users/86764/img/ea6585afa45bd5dfb0dd12bf046de5f635f48466.png',
				personal_identity_path: '',
				company_identity_path: '',
				id_user: '86764',
				username: 'M.riyan.kurniawan@gmail.com',
				password: '$2y$10$hxSkFKcdlSiwxnTBbMR8COW1nQ2lHxk3XCC/0R.LSLeVw7DYuM6Gy',
				id_role_master: 'ROLE001',
				id_workflow_status: 'MBRSTS05',
				android_device_token: null,
				ios_device_token: null,
				is_new_user: '1',
				last_login: null,
				created_at: '2020-04-07 00:36:45.320',
				created_by: '1',
				updated_at: '2020-04-07 00:42:58.003',
				updated_by: null,
				deleted_at: null,
				deleted_by: null,
				date_become_member: null,
			},
			{
				name: 'KOPERASI PAMANDIRI',
				id_koperasi: null,
				id_employee: '12345',
				id_company: 'COMP361',
				position: 'Pasti Tinggi',
				division: 'IT / IT',
				name_company: 'KOPERASI PAMANDIRI',
				phone_number: '085921640777',
				employee_starting_date: '2019-12-12',
				name_grade: 'I',
				npwp: null,
				email: 'setiawan.yanto@gmail.com',
				loan_plafond: null,
				microloan_plafond: '500000',
				personal_photo: 'https://commercestrorage.blob.core.windows.net/users/86766/img/6b3d7ab35d7e1f6654cf2ba23971d0a34642e954.png',
				personal_identity_path: '',
				company_identity_path: '',
				id_user: '86766',
				username: 'setiawan.yanto@gmail.com',
				password: '$2y$10$sQWfiz7FqvA35cNsIks6ueG655p6YAcksdhQI49H72lQXwwFZGF/q',
				id_role_master: 'ROLE001',
				id_workflow_status: 'MBRSTS05',
				android_device_token: null,
				ios_device_token: null,
				is_new_user: '1',
				last_login: null,
				created_at: '2020-04-27 14:47:29.077',
				created_by: '1',
				updated_at: '2020-04-27 15:02:08.367',
				updated_by: null,
				deleted_at: null,
				deleted_by: null,
				date_become_member: null,
			},
			{
				name: 'Testing Nol Tiga',
				id_koperasi: null,
				id_employee: '032020',
				id_company: 'COMP361',
				position: 'Golongan 4',
				division: 'Marketing / Marketing',
				name_company: 'KOPERASI PAMANDIRI',
				phone_number: '081313244072',
				employee_starting_date: '2018-03-01',
				name_grade: 'IV',
				npwp: null,
				email: 'achmadirfan37@gmail.com',
				loan_plafond: null,
				microloan_plafond: '1000000',
				personal_photo: 'https://commercestrorage.blob.core.windows.net/users/86772/img/a36db4cefb0cde7bbfe504426c012a1a34e3aab1.png',
				personal_identity_path: '',
				company_identity_path: '',
				id_user: '86772',
				username: 'achmadirfan37@gmail.com',
				password: '$2y$10$qDyE5O/5H.iKuWm3ozcMu.iFYM999fuxj0xPR2kAH33/GEr8KqbWO',
				id_role_master: 'ROLE001',
				id_workflow_status: 'MBRSTS05',
				android_device_token: null,
				ios_device_token: null,
				is_new_user: '1',
				last_login: null,
				created_at: '2020-04-28 11:17:13.700',
				created_by: '1',
				updated_at: '2020-04-28 11:42:30.873',
				updated_by: null,
				deleted_at: null,
				deleted_by: null,
				date_become_member: null,
			},
			{
				name: 'TestingScen',
				id_koperasi: null,
				id_employee: '042020',
				id_company: 'COMP361',
				position: 'Marketing',
				division: 'Marketing / Marketing',
				name_company: 'KOPERASI PAMANDIRI',
				phone_number: '081283755482',
				employee_starting_date: '2020-01-15',
				name_grade: 'III',
				npwp: null,
				email: 'achmadirfan357@gmail.com',
				loan_plafond: null,
				microloan_plafond: '1000000',
				personal_photo: 'https://commercestrorage.blob.core.windows.net/users/86773/img/16676856d3eb6b67e49a1eec64412b2cbd3ab030.png',
				personal_identity_path: '',
				company_identity_path: '',
				id_user: '86773',
				username: 'achmadirfan357@gmail.com',
				password: '$2y$10$VnJPYT6LNEm6g/LllzLbzOwGtrEAG9b7eCnH3.c7tvHZRIIVJevSm',
				id_role_master: 'ROLE001',
				id_workflow_status: 'MBRSTS05',
				android_device_token: null,
				ios_device_token: null,
				is_new_user: '1',
				last_login: null,
				created_at: '2020-04-29 11:17:01.830',
				created_by: '1',
				updated_at: '2020-04-30 07:56:55.490',
				updated_by: null,
				deleted_at: null,
				deleted_by: null,
				date_become_member: null,
			},
			{
				name: 'David beckham',
				id_koperasi: null,
				id_employee: '1255442233',
				id_company: 'COMP20000',
				position: 'It',
				division: 'It / It',
				name_company: 'SOLUSI MOBILITAS BANGSA, PT.',
				phone_number: '08131152959411',
				employee_starting_date: '2018-01-01',
				name_grade: 'V',
				npwp: null,
				email: 'lutfi.f.hidayat@gmail.com1',
				loan_plafond: null,
				microloan_plafond: '0',
				personal_photo: 'https://commercestrorage.blob.core.windows.net/users/86777/img/7df7b927c270f0be61b3c9ff22b2ab7c4d41adc1.png',
				personal_identity_path: '',
				company_identity_path: '',
				id_user: '86777',
				username: 'Lutfi.f.hidayat@gmail.com12',
				password: '$2y$10$xtRTehiekr9poruoyfjaqunJhxn5nR1GH7.SYxxnMurT5traYpwUC',
				id_role_master: 'ROLE001',
				id_workflow_status: 'MBRSTS05',
				android_device_token: null,
				ios_device_token: null,
				is_new_user: '1',
				last_login: null,
				created_at: '2020-04-30 00:37:00.447',
				created_by: '1',
				updated_at: '2020-04-30 00:40:27.037',
				updated_by: null,
				deleted_at: null,
				deleted_by: null,
				date_become_member: null,
			},
			{
				name: 'TestingDic',
				id_koperasi: null,
				id_employee: '654321',
				id_company: 'COMP302',
				position: 'Marketing',
				division: 'Marketing / Marketing',
				name_company: 'DIC ASTRA CHEMICAL, PT.',
				phone_number: '081283755482',
				employee_starting_date: '2011-06-08',
				name_grade: 'III',
				npwp: null,
				email: 'achmadirfandic@gmail.com',
				loan_plafond: null,
				microloan_plafond: '0',
				personal_photo: 'https://commercestrorage.blob.core.windows.net/users/86826/img/f11d0f9aa6b61e3ba5811296dc3724a2a1bbf2fd.png',
				personal_identity_path: '',
				company_identity_path: '',
				id_user: '86826',
				username: 'achmadirfandic@gmail.com',
				password: '$2y$10$XjA8TyhH/Z.B.OgcfdUHz.cXgyNFo0QLcMBqD.jkgUFGJvYkHe8J6',
				id_role_master: 'ROLE001',
				id_workflow_status: 'MBRSTS05',
				android_device_token: null,
				ios_device_token: null,
				is_new_user: '1',
				last_login: null,
				created_at: '2020-06-22 11:17:36.150',
				created_by: '1',
				updated_at: '2020-06-22 12:53:41.283',
				updated_by: null,
				deleted_at: null,
				deleted_by: null,
				date_become_member: null,
			},
			{
				name: 'Devita Narain',
				id_koperasi: null,
				id_employee: '12345',
				id_company: 'COMP361',
				position: 'Bisnis Development Analys',
				division: 'Marketing / Marketing',
				name_company: 'KOPERASI PAMANDIRI',
				phone_number: '081385259907',
				employee_starting_date: '2020-07-05',
				name_grade: 'III',
				npwp: null,
				email: 'devitanarain@gmail.com',
				loan_plafond: null,
				microloan_plafond: '1000000',
				personal_photo: 'https://commercestrorage.blob.core.windows.net/users/90128/img/d1233fe5b0a233e53b2021e089c9b3c0e1663143.png',
				personal_identity_path: '',
				company_identity_path: '',
				id_user: '90128',
				username: 'devitanarain@gmail.com',
				password: '$2y$10$GbvzXlUIQZ7OQo2lYQzV8u2O69SSstjsq1z/VfMr55EMawx9.hA4y',
				id_role_master: 'ROLE001',
				id_workflow_status: 'MBRSTS04',
				android_device_token: null,
				ios_device_token: null,
				is_new_user: '1',
				last_login: null,
				created_at: '2020-07-07 17:07:50.130',
				created_by: '1',
				updated_at: '2020-07-07 17:22:08.700',
				updated_by: null,
				deleted_at: null,
				deleted_by: null,
				date_become_member: null,
			},
		];
	}
	changeColumn(e) {
		let find = _.find(this.columns, e.itemValue);
		if (e.itemValue != undefined) {
			if (e.itemValue.show) {
				find.show = false;
			} else {
				find.show = true;
			}
		} else {
		}
		this.selectedColumns = _.filter(this.columns, { show: true });
	}
}
