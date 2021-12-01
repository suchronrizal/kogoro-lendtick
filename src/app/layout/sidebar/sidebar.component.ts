import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
	menus: MenuItem[];
	constructor() {}

	ngOnInit(): void {
		this.menus = [
			{
				label: 'Dashboard',
				icon: 'fa fa-dashboard',
				routerLink: '/main/dashboard',
			},
			{
				label: 'Keanggotaan',
				icon: 'fa fa-user',
				items: [
					{
						label: 'Registration',
						routerLink: '/main/keanggotaan/registrasi',
					},
					{
						label: 'Anggota Pamandiri',
						routerLink: '/main/keanggotaan/anggota',
					},
				],
			},
			{
				label: 'Loan',
				routerLink: '/main/loan',
				icon: 'fa fa-money',
			},
			{
				label: 'Order',
				icon: 'fa fa-shopping-cart',
				items: [
					{
						label: 'Biller',
						routerLink: '/main/order/biller',
					},
					{
						label: 'Booking Hotel',
						routerLink: '/main/order/booking-hotel',
					},
					{
						label: 'Ticket Pesawat',
						routerLink: '/main/order/tiket-pesawat',
					},
				],
			},
			// {
			// 	label: 'Voucher',
			// 	icon: 'fa fa-sticky-note',
			// 	routerLink: '/main/order',
			// },
			{
				label: 'Master',
				icon: 'fa fa-gear',
				items: [
					{
						label: 'Daftar Perusahaan',
						routerLink: '/main/master/daftar-perusahaan',
					},
					{
						label: 'Tipe Pinjaman',
						routerLink: '/main/master/tipe-pinjaman',
					},
					{
						label: 'Master Document',
						routerLink: '/main/master/master-document',
					},
					{
						label: 'Master Loan Type',
						routerLink: '/main/master/master-loan-type',
					},
					{
						label: 'Master Fee',
						routerLink: '/main/master/master-fee',
					},
					{
						label: 'Master Tenor',
						routerLink: '/main/master/master-tenor',
					},
					{
						label: 'Master Loan Product',
						routerLink: '/main/master/master-product',
					},
					{
						label: 'Master Company Product',
						routerLink: '/main/master/daftar-perusahaan',
					},
				],
			},
			{
				label: 'Reporting',
				icon: 'fa fa-bar-chart',
				items: [
					{ label: 'Pendaftaran', routerLink: '/main/report/pendaftaran' },
					{ label: 'Laporan Biller', routerLink: '/main/report/biller' },
					{ label: 'Laporan Pinjaman', routerLink: '/main/report/pinjaman' },
				],
			},
		];
	}
}
