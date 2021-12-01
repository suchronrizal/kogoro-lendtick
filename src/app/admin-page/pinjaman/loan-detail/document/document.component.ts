import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'document',
	templateUrl: './document.component.html',
	styleUrls: ['./document.component.scss'],
})
export class DocumentComponent implements OnInit {
	@Input() isShow: boolean;
	constructor() {}

	ngOnInit(): void {}
}
