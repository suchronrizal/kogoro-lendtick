import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnggotaComponent } from './admin-page/anggota/anggota/anggota.component';
import { RegistrationComponent } from './admin-page/anggota/registration/registration.component';
import { DashboardComponent } from './admin-page/dashboard/dashboard.component';
import { DaftarPerusahaanComponent } from './admin-page/master/daftar-perusahaan/daftar-perusahaan.component';
import { MasterDocumentComponent } from './admin-page/master/master-document/master-document.component';
import { MasterFeeComponent } from './admin-page/master/master-fee/master-fee.component';
import { MasterLoanTypeComponent } from './admin-page/master/master-loan-type/master-loan-type.component';
import { MasterProductComponent } from './admin-page/master/master-product/master-product.component';
import { MasterTenorComponent } from './admin-page/master/master-tenor/master-tenor.component';
import { MicroloanComponent } from './admin-page/master/microloan/microloan.component';
import { TipePinjamanComponent } from './admin-page/master/tipe-pinjaman/tipe-pinjaman.component';
import { OrderComponent } from './admin-page/order/biller/order.component';
import { BookingHotelComponent } from './admin-page/order/booking-hotel/booking-hotel.component';
import { TiketPesawatComponent } from './admin-page/order/tiket-pesawat/tiket-pesawat.component';
import { LoanDetailComponent } from './admin-page/pinjaman/loan-detail/loan-detail.component';
import { LoanComponent } from './admin-page/pinjaman/loan/loan.component';
import { PendaftaranComponent } from './admin-page/report/pendaftaran/pendaftaran.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MainComponent } from './layout/main/main.component';
import { AuthGuard } from './library/services/auth.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'main', pathMatch: 'full' },
	{
		path: 'signin',
		component: SigninComponent,
	},
	{
		path: 'main',
		component: MainComponent,
		canActivate: [AuthGuard],
		children: [
			{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },
			{
				path: 'dashboard',
				component: DashboardComponent,
				canActivate: [AuthGuard],
			},
			{
				path: 'master',
				children: [
					{ path: 'daftar-perusahaan', component: DaftarPerusahaanComponent },
					{ path: 'tipe-pinjaman', component: TipePinjamanComponent },
					{ path: 'master-document', component: MasterDocumentComponent },
					{ path: 'master-loan-type', component: MasterLoanTypeComponent },
					{ path: 'master-product', component: MasterProductComponent },
					{ path: 'master-fee', component: MasterFeeComponent },
					{ path: 'master-tenor', component: MasterTenorComponent },
					{ path: 'master-microloan', component: MicroloanComponent },
				],
			},
			{
				path: 'loan',
				children: [
					{ path: '', redirectTo: 'list', pathMatch: 'full' },
					{ path: 'list', component: LoanComponent },
					{ path: 'detail', component: LoanDetailComponent },
				],
			},
			{
				path: 'keanggotaan',
				children: [
					{ path: 'anggota', component: AnggotaComponent },
					{ path: 'registrasi', component: RegistrationComponent },
				],
			},
			{
				path: 'order',
				children: [
					{ path: 'biller', component: OrderComponent },
					{ path: 'booking-hotel', component: BookingHotelComponent },
					{ path: 'tiket-pesawat', component: TiketPesawatComponent },
				],
			},
			{
				path: 'report',
				children: [{ path: 'pendaftaran', component: PendaftaranComponent }],
			},
		],
	},
	{ path: '**', redirectTo: '' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
