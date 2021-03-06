import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-booking-hotel',
	templateUrl: './booking-hotel.component.html',
	styleUrls: ['./booking-hotel.component.scss'],
})
export class BookingHotelComponent implements OnInit {
	columns: any[];
	data: any[] = [];
	constructor() {}

	ngOnInit(): void {
		this.columns = [
			{ field: 'created_at', header: 'Tgl Booking' },
			{ field: 'name', header: 'Name' },
			{ field: 'id_user', header: 'NRP' },
			{ field: 'room_name', header: 'Room Name' },
			{ field: 'number_payment', header: 'No Pembayaran' },
			{ field: 'booking_status', header: 'Booking Status' },
			{ field: 'payment_type', header: 'Payment Type' },
		];
		this.data = [
			{
				hotel_order_id: '275',
				id_user: '87293',
				booking_reference: null,
				booking_status: null,
				payment_type: null,
				room_name: 'Suite Standard',
				room_details: '[{"paxDetails":[{"lastName":"PUTRA","firstName":"KURNIA","title":"Mr.","passengerType":"ADULT"}]}]',
				details:
					'{"bookingKey":"8dbf9384-2d1e-476b-b130-711110989462$5010700$2c5250a2-5b10-41fe-b730-6cf60f801e38","bookingRoom":[{"roomName":"Suite Standard","ratePlans":[{"refundable":true,"remaining":10,"minimumNights":1,"mealPlan":"Breakfast","searcherId":33,"pricing":{"totalSellPrice":2637237,"totalTaxes":0,"totalExtraCharges":0,"agentPricing":{"roomNightNetPrice":1298618,"roomNightCommission":20000,"totalNetPrice":2597237,"totalCommission":40000},"totalOriginalPrice":2637237,"totalBasePrice":2525237},"cancellationPolicies":[{"comment":"If Cancellation is done between September 7, 2021 (Tuesday) 00:00 and September 9, 2021 (Thursday) 23:59, there will be cancellation charge of 51.0%."},{"comment":"In case of no show, there will be cancellation charge of 100.0%."}],"roomGrid":[{"roomName":"SUITE STANDARD","sharing":1,"adults":1}],"payTypes":{"PAY_NOW":{"paymentFlow":"VIA_HOTEL_FLOW"}},"impInfo":["Room 1:  .  Check-in hour 18:00-.As a result of local government measures and guidelines put in place by services providers \\u2013 including hotels and ancillaries \\u2013 guests may find that some facilities or services are not available.Please visit https:\\/\\/static-sources.s3-eu-west-1.amazonaws.com\\/policy\\/index.html for further information (15\\/05\\/2020-31\\/12\\/2021) "],"itineraryKey":"8dbf9384-2d1e-476b-b130-711110989462$5010700$2c5250a2-5b10-41fe-b730-6cf60f801e38"}]}],"bookingDetail":{"checkIn":"2021-09-10","checkOut":"2021-09-12","roomNights":-1,"regionId":"5C21534","regionName":"Bogor,Indonesia","rooms":[{"adults":[{"nameRequired":true}],"children":[]}],"city":"Bogor","country":"Indonesia"}}',
				payment_total: '2637237.00',
				payment_status: null,
				created_by: '0',
				created_at: '2021-09-07 15:01:28.563',
				updated_by: null,
				updated_at: '2021-09-07 15:01:28.563',
				deleted_by: null,
				deleted_at: null,
				booking_key: '8dbf9384-2d1e-476b-b130-711110989462$5010700$2c5250a2-5b10-41fe-b730-6cf60f801e38',
				hotel_name: 'Royal Padjadjaran Bogor',
				name: 'KURNIA PUTRA ',
				number_payment: '7025000107150141',
			},
			{
				hotel_order_id: '274',
				id_user: '86770',
				booking_reference: null,
				booking_status: null,
				payment_type: null,
				room_name: 'Twin Superior',
				room_details: '[{"paxDetails":[{"lastName":"Sanjaya","firstName":"Sanjaya","title":"Mr.","passengerType":"ADULT"}]}]',
				details:
					'{"bookingKey":"83d59529-dbcd-435b-97a0-af769644bf1c$858117$d6d6281b-fdcc-466e-8d25-f657c755b864","bookingRoom":[{"roomName":"Twin Superior","ratePlans":[{"refundable":true,"remaining":10,"minimumNights":1,"mealPlan":"ROOM ONLY","searcherId":6,"pricing":{"totalSellPrice":414020,"totalTaxes":0,"totalExtraCharges":0,"agentPricing":{"roomNightNetPrice":394020,"roomNightCommission":20000,"totalNetPrice":394020,"totalCommission":20000},"totalOriginalPrice":414020,"totalBasePrice":355780},"cancellationPolicies":[{"comment":"For Room 1 - There will be a 100% REFUND if the cancellation is done before September 8, 2021 (Wednesday) 23:59."},{"comment":"For Room 1 - If Cancellation is done between September 8, 2021 23:59 (Wednesday) and September 9, 2021 23:59 (Thursday), there will be cancellation charge of 100.0%."},{"comment":"Please note : Date and time is being calculated based on the local time of Jakarta"}],"roomGrid":[{"roomName":"TWIN SUPERIOR","sharing":1,"adults":1}],"payTypes":{"PAY_NOW":{"paymentFlow":"VIA_HOTEL_FLOW"}},"impInfo":[" .  Check-in hour 18:00-23:30.Car park NO.As a result of local government measures and guidelines put in place by services providers \\u00e2\\u0080\\u0093 including hotels and ancillaries \\u00e2\\u0080\\u0093 guests may find that some facilities or services are not available.Please visit https:\\/\\/static-sources.s3-eu-west-1.amazonaws.com\\/policy\\/index.html for further information (15\\/05\\/2020-31\\/12\\/2021)  Benefits included: Parking, Free WiFi."],"itineraryKey":"83d59529-dbcd-435b-97a0-af769644bf1c$858117$d6d6281b-fdcc-466e-8d25-f657c755b864"}]}],"bookingDetail":{"checkIn":"2021-09-10","checkOut":"2021-09-11","roomNights":-1,"regionId":"5C28527","regionName":"Jakarta,Indonesia","rooms":[{"adults":[{"nameRequired":true}],"children":[]}],"city":"Jakarta","country":"Indonesia"}}',
				payment_total: '414020.00',
				payment_status: null,
				created_by: '0',
				created_at: '2021-09-01 23:51:47.300',
				updated_by: null,
				updated_at: '2021-09-01 23:51:47.300',
				deleted_by: null,
				deleted_at: null,
				booking_key: '83d59529-dbcd-435b-97a0-af769644bf1c$858117$d6d6281b-fdcc-466e-8d25-f657c755b864',
				hotel_name: 'Orchardz Hotel Industri',
				name: 'Testing nol dua',
				number_payment: '7025000101235149',
			},
			{
				hotel_order_id: '273',
				id_user: '86770',
				booking_reference: null,
				booking_status: null,
				payment_type: null,
				room_name: 'Standard Double Room',
				room_details: '[{"paxDetails":[{"lastName":"Sanjaya","firstName":"Sanjaya","title":"Mr.","passengerType":"ADULT"}]}]',
				details:
					'{"bookingKey":"5ac29617-7e99-403c-a371-79ccc1943a4d$890376$603993c8-eb7d-413e-bf32-878857455d3b","bookingRoom":[{"roomName":"Standard Double Room","ratePlans":[{"refundable":true,"remaining":10,"minimumNights":1,"mealPlan":"Room Only","inclusions":["Free WiFi","Free self parking"],"searcherId":4,"pricing":{"totalSellPrice":188906,"totalTaxes":24993,"totalExtraCharges":0,"agentPricing":{"roomNightNetPrice":168906,"roomNightCommission":20000,"totalNetPrice":168906,"totalCommission":20000},"totalOriginalPrice":188906,"totalBasePrice":107913},"cancellationPolicies":[{"comment":"If Cancellation is done between September 17, 2021 (Friday) 00:00 and September 16, 2021 (Thursday) 23:59, there will be cancellation charge of 1 room night(s)."},{"comment":"100% REFUND if the cancellation is done on or before 16-Sep-2021"},{"comment":"In case of no show, there will be No Refund."}],"roomGrid":[{"roomName":"Standard Double Room","sharing":1,"adults":1}],"payTypes":{"PAY_LATER":{"paymentFlow":"VIA_HOTEL_BLOCKED_FLOW","amountToCharge":0,"payTillDate":"2021-09-08"},"PAY_NOW":{"paymentFlow":"VIA_HOTEL_FLOW"}},"impInfo":["<b>You need to pay  0.0 mandatory fees, resort fees and mandatory taxes at hotel. <\\/b>"],"itineraryKey":"5ac29617-7e99-403c-a371-79ccc1943a4d$890376$603993c8-eb7d-413e-bf32-878857455d3b"}]}],"bookingDetail":{"checkIn":"2021-09-17","checkOut":"2021-09-18","roomNights":-1,"regionId":"5C28527","regionName":"Jakarta,Indonesia","rooms":[{"adults":[{"nameRequired":true}],"children":[]}],"city":"Jakarta","country":"Indonesia"}}',
				payment_total: '188906.00',
				payment_status: null,
				created_by: '0',
				created_at: '2021-09-01 22:56:02.117',
				updated_by: null,
				updated_at: '2021-09-01 22:56:02.117',
				deleted_by: null,
				deleted_at: null,
				booking_key: '5ac29617-7e99-403c-a371-79ccc1943a4d$890376$603993c8-eb7d-413e-bf32-878857455d3b',
				hotel_name: 'OYO 116 N Hotel (Hotel N)',
				name: 'Testing nol dua',
				number_payment: '7025000101225603',
			},
			{
				hotel_order_id: '272',
				id_user: '86770',
				booking_reference: null,
				booking_status: null,
				payment_type: null,
				room_name: 'Superior Twin',
				room_details: '[{"paxDetails":[{"lastName":"Sanjaya","firstName":"Sanjaya","title":"Mr.","passengerType":"ADULT"}]}]',
				details:
					'{"bookingKey":"48e5ecb2-1b44-4d6a-a2c3-9c1b6b79fde0$858382$6cdd4a91-710b-4c35-9008-ede75e1505c7","bookingRoom":[{"roomName":"Superior Twin","ratePlans":[{"refundable":false,"remaining":10,"minimumNights":1,"mealPlan":"Breakfast","searcherId":33,"pricing":{"totalSellPrice":904017,"totalTaxes":0,"totalExtraCharges":0,"agentPricing":{"roomNightNetPrice":884017,"roomNightCommission":20000,"totalNetPrice":884017,"totalCommission":20000},"totalOriginalPrice":904017,"totalBasePrice":848017},"cancellationPolicies":[{"comment":"If Cancellation is done between September 1, 2021 (Wednesday) 00:00 and September 13, 2021 (Monday) 23:59, there will be cancellation charge of 100.0%."},{"comment":"In case of no show, there will be cancellation charge of 100.0%."}],"roomGrid":[{"roomName":"SUPERIOR TWIN","sharing":1,"adults":1}],"payTypes":{"PAY_LATER":{"paymentFlow":"VIA_HOTEL_BLOCKED_FLOW","amountToCharge":0,"payTillDate":"2021-09-08"},"PAY_NOW":{"paymentFlow":"VIA_HOTEL_FLOW"}},"itineraryKey":"48e5ecb2-1b44-4d6a-a2c3-9c1b6b79fde0$858382$6cdd4a91-710b-4c35-9008-ede75e1505c7"}]}],"bookingDetail":{"checkIn":"2021-09-14","checkOut":"2021-09-15","roomNights":-1,"regionId":"5C21534","regionName":"Bogor,Indonesia","rooms":[{"adults":[{"nameRequired":true}],"children":[]}],"city":"Bogor","country":"Indonesia"}}',
				payment_total: '904017.00',
				payment_status: null,
				created_by: '0',
				created_at: '2021-09-01 22:41:59.333',
				updated_by: null,
				updated_at: '2021-09-01 22:41:59.333',
				deleted_by: null,
				deleted_at: null,
				booking_key: '48e5ecb2-1b44-4d6a-a2c3-9c1b6b79fde0$858382$6cdd4a91-710b-4c35-9008-ede75e1505c7',
				hotel_name: 'R Hotel Rancamaya',
				name: 'Testing nol dua',
				number_payment: '7025000101224203',
			},
			{
				hotel_order_id: '271',
				id_user: '86770',
				booking_reference: null,
				booking_status: null,
				payment_type: null,
				room_name: 'Standard',
				room_details: '[{"paxDetails":[{"lastName":"Sanjaya","firstName":"Sanjaya","title":"Mr.","passengerType":"ADULT"}]}]',
				details:
					'{"bookingKey":"97c5ba90-2069-45de-9da2-e4de2030504d$857100$860a2a2c-af31-4f73-95bb-be9ba9d8dd59","bookingRoom":[{"roomName":"Standard","ratePlans":[{"refundable":true,"remaining":10,"minimumNights":1,"mealPlan":"Breakfast","searcherId":33,"pricing":{"totalSellPrice":339544,"totalTaxes":0,"totalExtraCharges":0,"agentPricing":{"roomNightNetPrice":319544,"roomNightCommission":20000,"totalNetPrice":319544,"totalCommission":20000},"totalOriginalPrice":339544,"totalBasePrice":283544},"cancellationPolicies":[{"comment":"There will be a 100% REFUND if the cancellation is done before September 19, 2021 (Sunday) 23:59."},{"comment":"If Cancellation is done between September 20, 2021 (Monday) 00:00 and September 21, 2021 (Tuesday) 23:59, there will be cancellation charge of 1 room night(s)."},{"comment":"In case of no show, there will be cancellation charge of 1 room night(s)."}],"roomGrid":[{"roomName":"STANDARD","sharing":1,"adults":1}],"payTypes":{"PAY_LATER":{"paymentFlow":"VIA_HOTEL_BLOCKED_FLOW","amountToCharge":0,"payTillDate":"2021-09-08"},"PAY_NOW":{"paymentFlow":"VIA_HOTEL_FLOW"}},"itineraryKey":"97c5ba90-2069-45de-9da2-e4de2030504d$857100$860a2a2c-af31-4f73-95bb-be9ba9d8dd59"}]}],"bookingDetail":{"checkIn":"2021-09-22","checkOut":"2021-09-23","roomNights":-1,"regionId":"5C28527","regionName":"Jakarta,Indonesia","rooms":[{"adults":[{"nameRequired":true}],"children":[]}],"city":"Jakarta","country":"Indonesia"}}',
				payment_total: '339544.00',
				payment_status: null,
				created_by: '0',
				created_at: '2021-09-01 22:39:36.097',
				updated_by: null,
				updated_at: '2021-09-01 22:39:36.097',
				deleted_by: null,
				deleted_at: null,
				booking_key: '97c5ba90-2069-45de-9da2-e4de2030504d$857100$860a2a2c-af31-4f73-95bb-be9ba9d8dd59',
				hotel_name: 'Bamboo Inn Hotel ',
				name: 'Testing nol dua',
				number_payment: '7025000101223937',
			},
			{
				hotel_order_id: '269',
				id_user: '86770',
				booking_reference: null,
				booking_status: null,
				payment_type: null,
				room_name: 'Standard',
				room_details: '[{"paxDetails":[{"lastName":"Hidayat","firstName":"Jajal","title":"Mr.","passengerType":"ADULT"}]}]',
				details:
					'{"bookingKey":"e031658e-8dcc-40af-8fe4-569b67bbc01d$857100$a4c3f2e6-0757-4910-88fe-03f23efc4543","bookingRoom":[{"roomName":"Standard","ratePlans":[{"refundable":true,"remaining":10,"minimumNights":1,"mealPlan":"Breakfast","searcherId":33,"pricing":{"totalSellPrice":339544,"totalTaxes":0,"totalExtraCharges":0,"agentPricing":{"roomNightNetPrice":319544,"roomNightCommission":20000,"totalNetPrice":319544,"totalCommission":20000},"totalOriginalPrice":339544,"totalBasePrice":283544},"cancellationPolicies":[{"comment":"There will be a 100% REFUND if the cancellation is done before September 7, 2021 (Tuesday) 23:59."},{"comment":"If Cancellation is done between September 8, 2021 (Wednesday) 00:00 and September 9, 2021 (Thursday) 23:59, there will be cancellation charge of 1 room night(s)."},{"comment":"In case of no show, there will be cancellation charge of 1 room night(s)."}],"roomGrid":[{"roomName":"STANDARD","sharing":1,"adults":1}],"payTypes":{"PAY_NOW":{"paymentFlow":"VIA_HOTEL_FLOW"}},"itineraryKey":"e031658e-8dcc-40af-8fe4-569b67bbc01d$857100$a4c3f2e6-0757-4910-88fe-03f23efc4543"}]}],"bookingDetail":{"checkIn":"2021-09-10","checkOut":"2021-09-11","roomNights":-1,"regionId":"5C28527","regionName":"Jakarta,Indonesia","rooms":[{"adults":[{"nameRequired":true}],"children":[]}],"city":"Jakarta","country":"Indonesia"}}',
				payment_total: '339544.00',
				payment_status: null,
				created_by: '0',
				created_at: '2021-09-01 22:14:50.063',
				updated_by: null,
				updated_at: '2021-09-01 22:14:50.063',
				deleted_by: null,
				deleted_at: null,
				booking_key: 'e031658e-8dcc-40af-8fe4-569b67bbc01d$857100$a4c3f2e6-0757-4910-88fe-03f23efc4543',
				hotel_name: 'Bamboo Inn Hotel ',
				name: 'Testing nol dua',
				number_payment: '7025000101221455',
			},
			{
				hotel_order_id: '267',
				id_user: '86770',
				booking_reference: null,
				booking_status: null,
				payment_type: null,
				room_name: 'Standard',
				room_details: '[{"paxDetails":[{"lastName":"Sanjaya","firstName":"Sanjaya","title":"Mr.","passengerType":"ADULT"}]}]',
				details:
					'{"bookingKey":"ca55e201-f95f-4a1d-b354-a13af11cbc79$857100$a427c82e-f08d-45b0-8847-c5a300dc4b1d","bookingRoom":[{"roomName":"Standard","ratePlans":[{"refundable":false,"remaining":10,"minimumNights":1,"mealPlan":"Breakfast","searcherId":33,"pricing":{"totalSellPrice":339544,"totalTaxes":0,"totalExtraCharges":0,"agentPricing":{"roomNightNetPrice":319544,"roomNightCommission":20000,"totalNetPrice":319544,"totalCommission":20000},"totalOriginalPrice":339544,"totalBasePrice":283544},"cancellationPolicies":[{"comment":"If Cancellation is done between September 1, 2021 (Wednesday) 00:00 and September 2, 2021 (Thursday) 23:59, there will be cancellation charge of 100.0%."},{"comment":"In case of no show, there will be cancellation charge of 100.0%."}],"roomGrid":[{"roomName":"STANDARD","sharing":1,"adults":1}],"payTypes":{"PAY_NOW":{"paymentFlow":"VIA_HOTEL_FLOW"}},"itineraryKey":"ca55e201-f95f-4a1d-b354-a13af11cbc79$857100$a427c82e-f08d-45b0-8847-c5a300dc4b1d"}]}],"bookingDetail":{"checkIn":"2021-09-03","checkOut":"2021-09-04","roomNights":-1,"regionId":"5C28527","regionName":"Jakarta,Indonesia","rooms":[{"adults":[{"nameRequired":true}],"children":[]}],"city":"Jakarta","country":"Indonesia"}}',
				payment_total: '339544.00',
				payment_status: null,
				created_by: '0',
				created_at: '2021-09-01 21:58:56.487',
				updated_by: null,
				updated_at: '2021-09-01 21:58:56.487',
				deleted_by: null,
				deleted_at: null,
				booking_key: 'ca55e201-f95f-4a1d-b354-a13af11cbc79$857100$a427c82e-f08d-45b0-8847-c5a300dc4b1d',
				hotel_name: 'Bamboo Inn Hotel ',
				name: 'Testing nol dua',
				number_payment: '7025000101215901',
			},
			{
				hotel_order_id: '266',
				id_user: '86770',
				booking_reference: null,
				booking_status: null,
				payment_type: null,
				room_name: 'Superior',
				room_details: '[{"paxDetails":[{"lastName":"Nol","firstName":"Sanjaya","title":"Mr.","passengerType":"ADULT"},{"title":"Mr.","firstName":"Orang","lastName":"Kaya","passengerType":"CHILD"}]}]',
				details:
					'{"bookingKey":"9ee4a85e-03ef-4ef5-9d5b-f15687ff7dac$5010700$d3179c20-fe4e-4eea-86e8-dd860afdf543","bookingRoom":[{"roomName":"Superior","ratePlans":[{"refundable":false,"remaining":10,"minimumNights":1,"mealPlan":"Breakfast","searcherId":33,"pricing":{"totalSellPrice":554110,"totalTaxes":0,"totalExtraCharges":0,"agentPricing":{"roomNightNetPrice":534110,"roomNightCommission":20000,"totalNetPrice":534110,"totalCommission":20000},"totalOriginalPrice":710360,"deal":{"dealText":"Basic Deal"},"totalBasePrice":498110},"cancellationPolicies":[{"comment":"If Cancellation is done between August 26, 2021 (Thursday) 00:00 and August 27, 2021 (Friday) 23:59, there will be cancellation charge of 100.0%."},{"comment":"In case of no show, there will be cancellation charge of 100.0%."}],"roomGrid":[{"roomName":"SUPERIOR","sharing":1,"adults":1,"children":1,"childrenAges":[3]}],"payTypes":{"PAY_NOW":{"paymentFlow":"VIA_HOTEL_FLOW"}},"itineraryKey":"9ee4a85e-03ef-4ef5-9d5b-f15687ff7dac$5010700$d3179c20-fe4e-4eea-86e8-dd860afdf543"}]}],"bookingDetail":{"checkIn":"2021-08-28","checkOut":"2021-08-29","roomNights":-1,"regionId":"5C21534","regionName":"Bogor,Indonesia","rooms":[{"adults":[{"nameRequired":true}],"children":[{"nameRequired":true,"age":3}]}],"city":"Bogor","country":"Indonesia"}}',
				payment_total: '554110.00',
				payment_status: null,
				created_by: '0',
				created_at: '2021-08-26 17:02:01.483',
				updated_by: null,
				updated_at: '2021-08-26 17:02:01.483',
				deleted_by: null,
				deleted_at: null,
				booking_key: '9ee4a85e-03ef-4ef5-9d5b-f15687ff7dac$5010700$d3179c20-fe4e-4eea-86e8-dd860afdf543',
				hotel_name: 'Royal Padjadjaran Bogor',
				name: 'Testing nol dua',
				number_payment: '7025000126170203',
			},
			{
				hotel_order_id: '262',
				id_user: '86770',
				booking_reference: null,
				booking_status: null,
				payment_type: null,
				room_name: 'Superior Room',
				room_details: '[{"paxDetails":[{"lastName":"Mantap","firstName":"Testing","title":"Mr.","passengerType":"ADULT"}]}]',
				details:
					'{"bookingKey":"c20cc92f-566e-4183-8700-036bddc99916$858382$f868f706-484c-48fa-b9a0-1961ee9fb9ff","bookingRoom":[{"roomName":"Superior Room","ratePlans":[{"refundable":false,"remaining":10,"minimumNights":1,"mealPlan":"Breakfast","searcherId":33,"pricing":{"totalSellPrice":1541795,"totalTaxes":0,"totalExtraCharges":0,"agentPricing":{"roomNightNetPrice":1521795,"roomNightCommission":20000,"totalNetPrice":1521795,"totalCommission":20000},"totalOriginalPrice":1541795,"totalBasePrice":1485795},"cancellationPolicies":[{"comment":"If Cancellation is done between August 16, 2021 (Monday) 00:00 and August 20, 2021 (Friday) 23:59, there will be cancellation charge of 100.0%."},{"comment":"In case of no show, there will be cancellation charge of 100.0%."}],"roomGrid":[{"roomName":"Superior Room","sharing":1,"adults":1}],"payTypes":{"PAY_NOW":{"paymentFlow":"VIA_HOTEL_FLOW"}},"impInfo":["Any local tourist tax has to be paid on spot directly by clients, if applicable.\\n\\nAmenity: Breakfast Buffet Amenity: Free Parking Amenity: Free WiFi Instructions: Extra-person charges may apply and vary depending on property policy Government-issued photo identification and a credit card, debit card, or cash deposit may be required at check-in for incidental charges Special requests are subject to availability upon check-in and may incur additional charges; special requests cannot be guaranteed The name on the credit card used at check-in to pay for incidentals must be the primary name on the guestroom reservation This property accepts credit cards . Special instructions: Front desk staff will greet guests on arrival..\\n[Included fee 17.38 93.78]: Tax and service fee"],"itineraryKey":"c20cc92f-566e-4183-8700-036bddc99916$858382$f868f706-484c-48fa-b9a0-1961ee9fb9ff"}]}],"bookingDetail":{"checkIn":"2021-08-21","checkOut":"2021-08-22","roomNights":-1,"regionId":"5C21534","regionName":"Bogor,Indonesia","rooms":[{"adults":[{"nameRequired":true}],"children":[]}],"city":"Bogor","country":"Indonesia"}}',
				payment_total: '1541795.00',
				payment_status: null,
				created_by: '0',
				created_at: '2021-08-16 23:12:08.013',
				updated_by: null,
				updated_at: '2021-08-16 23:12:08.013',
				deleted_by: null,
				deleted_at: null,
				booking_key: 'c20cc92f-566e-4183-8700-036bddc99916$858382$f868f706-484c-48fa-b9a0-1961ee9fb9ff',
				hotel_name: 'R Hotel Rancamaya',
				name: 'Testing nol dua',
				number_payment: '7025000116231210',
			},
			{
				hotel_order_id: '261',
				id_user: '86770',
				booking_reference: null,
				booking_status: null,
				payment_type: null,
				room_name: 'Double Standard',
				room_details: '[{"paxDetails":[{"lastName":"Fars","firstName":"Testing","title":"Mr.","passengerType":"ADULT"}]}]',
				details:
					'{"bookingKey":"8f838980-54b5-4979-be74-032f63ab8246$1196566$32ec4f25-06f8-44a3-9978-c08d8d1f84d5","bookingRoom":[{"roomName":"Double Standard","ratePlans":[{"refundable":false,"remaining":1,"minimumNights":0,"mealPlan":"ROOM ONLY","searcherId":6,"pricing":{"totalSellPrice":288370,"totalTaxes":0,"totalExtraCharges":0,"agentPricing":{"roomNightNetPrice":268370,"roomNightCommission":20000,"totalNetPrice":268370,"totalCommission":20000},"totalOriginalPrice":288370,"totalBasePrice":230130},"cancellationPolicies":[{"comment":"For room 1 - If Cancellation is done between August 18, 2021 (Wednesday) 00:00 and August 19, 2021 (Thursday) 23:59, there will be cancellation charge of 100.0%."},{"comment":"There will be a 100% REFUND if the cancellation is done before August 17, 2021 (Tuesday) 23:59.Indonesian time"},{"comment":"In case of no show, there will be No Refund."}],"roomGrid":[{"roomName":"DOUBLE STANDARD","sharing":1,"adults":1}],"payTypes":{"PAY_LATER":{"paymentFlow":"VIA_HOTEL_BLOCKED_FLOW","amountToCharge":0,"payTillDate":"2021-08-13"},"PAY_NOW":{"paymentFlow":"VIA_HOTEL_FLOW"}},"impInfo":[" As a result of local government measures and guidelines put in place by services providers \\u2013 including hotels and ancillaries \\u2013 guests may find that some facilities or services are not available.Please visit https:\\/\\/static-sources.s3-eu-west-1.amazonaws.com\\/policy\\/index.html for further information (2020\\/05\\/15 - 2021\\/12\\/31).Car park NO. Check-in hour 18:00 - 00:00."],"itineraryKey":"8f838980-54b5-4979-be74-032f63ab8246$1196566$32ec4f25-06f8-44a3-9978-c08d8d1f84d5"}]}],"bookingDetail":{"checkIn":"2021-08-20","checkOut":"2021-08-21","roomNights":-1,"regionId":"5C21534","regionName":"Bogor,Indonesia","rooms":[{"adults":[{"nameRequired":true}],"children":[]}],"city":"Bogor","country":"Indonesia"}}',
				payment_total: '288370.00',
				payment_status: null,
				created_by: '0',
				created_at: '2021-08-06 19:21:02.360',
				updated_by: null,
				updated_at: '2021-08-06 19:21:02.360',
				deleted_by: null,
				deleted_at: null,
				booking_key: '8f838980-54b5-4979-be74-032f63ab8246$1196566$32ec4f25-06f8-44a3-9978-c08d8d1f84d5',
				hotel_name: 'Zest Hotel Bogor',
				name: 'Testing nol dua',
				number_payment: '7025000106192148',
			},
		];
	}
}
