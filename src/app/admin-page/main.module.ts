import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaftarPerusahaanComponent } from './master/daftar-perusahaan/daftar-perusahaan.component';
import {
	ButtonModule,
	CalendarModule,
	ChartModule,
	CheckboxModule,
	DialogModule,
	DropdownModule,
	FileUploadModule,
	InputTextModule,
	MultiSelectModule,
	OverlayPanelModule,
	SpinnerModule,
	TableModule,
	TabViewModule,
	ToggleButtonModule,
	TreeTableModule,
} from 'primeng';
import { MasterDocumentComponent } from './master/master-document/master-document.component';
import { MasterProductComponent } from './master/master-product/master-product.component';
import { MasterFeeComponent } from './master/master-fee/master-fee.component';
import { MasterTenorComponent } from './master/master-tenor/master-tenor.component';
import { LoanComponent } from './pinjaman/loan/loan.component';
import { BookingHotelComponent } from './order/booking-hotel/booking-hotel.component';
import { TiketPesawatComponent } from './order/tiket-pesawat/tiket-pesawat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/biller/order.component';
import { MicroloanComponent } from './master/microloan/microloan.component';
import { LoanDetailComponent } from './pinjaman/loan-detail/loan-detail.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './pinjaman/loan-detail/profile/profile.component';
import { CompanyComponent } from './pinjaman/loan-detail/company/company.component';
import { BankComponent } from './pinjaman/loan-detail/bank/bank.component';
import { DocumentComponent } from './pinjaman/loan-detail/document/document.component';
import { SalaryComponent } from './pinjaman/loan-detail/salary/salary.component';
import { AnggotaComponent } from './anggota/anggota/anggota.component';
import { RegistrationComponent } from './anggota/registration/registration.component';
import { TipePinjamanComponent } from './master/tipe-pinjaman/tipe-pinjaman.component';
import { FormsModule } from '@angular/forms';
import { MasterLoanTypeComponent } from './master/master-loan-type/master-loan-type.component';
import { MasterCompanyProductComponent } from './master/master-company-product/master-company-product.component';
import { PendaftaranComponent } from './report/pendaftaran/pendaftaran.component';

@NgModule({
	declarations: [
		DashboardComponent,
		DaftarPerusahaanComponent,
		MasterDocumentComponent,
		MasterProductComponent,
		MasterFeeComponent,
		MasterTenorComponent,
		LoanComponent,
		BookingHotelComponent,
		TiketPesawatComponent,
		OrderComponent,
		MicroloanComponent,
		LoanDetailComponent,
		ProfileComponent,
		CompanyComponent,
		BankComponent,
		DocumentComponent,
		SalaryComponent,
		AnggotaComponent,
		RegistrationComponent,
		TipePinjamanComponent,
		MasterLoanTypeComponent,
		MasterCompanyProductComponent,
		PendaftaranComponent,
	],
	imports: [
		ToggleButtonModule,
		OverlayPanelModule,
		TabViewModule,
		FileUploadModule,
		ChartModule,
		CommonModule,
		FormsModule,
		ButtonModule,
		InputTextModule,
		DialogModule,
		DropdownModule,
		TableModule,
		CheckboxModule,
		CalendarModule,
		SpinnerModule,
		RouterModule,
		CheckboxModule,
		MultiSelectModule,
	],
})
export class MainModule {}
