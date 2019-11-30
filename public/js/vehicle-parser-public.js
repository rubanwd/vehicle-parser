(function( $ ) {

	$( window ).load(function() {

		AOS.init();

		var vehicleItem = Vue.component('vehicle-item', {
		  	props: ['item','siteURL'],
		  	template: `
				<li v-cloak class="col-md-3 col-sm-4 col-xs-12 col-xxs-12" data-aos="fade-up"data-aos-duration="1000">
					<a v-bind:href='siteURL' class="vehicle-box">
						<div v-if="item.vehicleInformation.images" class="avto-photo">
							<img class="vehicle-box__img" v-bind:src="item.vehicleInformation.images[0].largeUrl" v-bind:alt="item.vehicleInformation.images[0].description">
						</div>
						<div v-else class="vehicle-box__img not-avto-photo">
							<span>Фото отсутствует</span>
						</div>
						<div class="vehicle-descr">
							<div class="vehicle-descr__title">
								<span v-if="item.vehicleInformation.make">{{item.vehicleInformation.make}}</span>
								<span v-if="item.vehicleInformation.extendedModel">{{item.vehicleInformation.extendedModel}}</span>
							</div>
						</div>
						<div class="vehicle-info">
							<div v-if="item.vehicleInformation.year"><i class="stm-icon-calendar"></i><span>{{item.vehicleInformation.year}}</span></div>
							<div v-if="item.vehicleInformation.mileage"><i class="stm-icon-road"></i><span>{{item.vehicleInformation.mileage}}</span></div>
							<div v-if="item.vehicleInformation.exteriorColor"><i class="stm-service-icon-color_type"></i><span>{{item.vehicleInformation.exteriorColor}}</span></div>
						<div v-if="item.vehicleInformation.transmission"><i class="stm-icon-transmission_fill"></i><span>{{item.vehicleInformation.transmission}}</span></div>
						<div v-if="item.vehicleInformation.engine"><i class="stm-icon-engine_fill"></i><span>{{item.vehicleInformation.engine}}</span></div>
						</div>
					</a>
			</li>
				`
		});
	 	var vm = new Vue({
		   	el: document.querySelector('#app'),
		   	template: `<div>
		   					<div class="vehicle-parser" id="search-area">
		   						<vehicles-filter 
		   							 @search="searchVehicles"
					   			></vehicles-filter>
					   			<div class="totalCountShow">
					   				<div v-if="totalCountShow" class="totalCount"><span>Всего найдено: </span><span><b>{{totalCount}}</b></span></div>
					   			</div>
				  				<ul class="vehicle-box-container">
					   				<vehicle-item
					   					v-for="(item, index) in vl"
										v-bind:item="item"
		 								v-bind:index="index"
		 								v-bind:siteURL="url + '/vehicle/?id=' + item.vehicleInformation.lotId"
					   				></vehicle-item>
				   				</ul>
				   				<div>
					   				<div v-if="loading">
					   					<div class="loader-image">
					   						<img v-bind:src="url + '/wp-content/plugins/vehicle-parser/public/img/loading-opaque-1.gif'" alt="loader"/>
					   					</div>
					   					<div class="loader-text">
					   						Загрузка... Подождите пожалуйста...
					   					</div>
					   				</div>
					   				<button v-else v-bind:disabled="isFinished" v-bind:class="[isFinished ? 'finish' : 'load-more']" @click='getVehicles()' v-cloak>{{ buttonText }}</button>
					   				<div v-if="showTopButton" class="parser-bottom-controls">
						   				<div class="top-btn">
						   					<a href="#search-area">
						   						<img v-bind:src="url + '/wp-content/plugins/vehicle-parser/public/img/top-1.png'" alt="Top"/>
						   					</a>
					   					</div>
					   				</div>
					   			</div>
				   			</div>
						</div>`,

			data: {
				url: siteURL.url,
		        pageSize: 32,
		        pageNumber: 1,
		        isFinished: false,
				buttonText: 'Eще',
				make: null,
				model: null,
				totalCount: 0,
				totalCountShow: false,
				loading: true,
				showTopButton: true,
				vl: []
		    },

			methods:{
				getVehicles: function(){ 
					this.buttonText = "Загрузка ...";
					this.loading = true;
					this.showTopButton = false;
					this.isFinished = false;
					this.totalCountShow = false;

					var self = this;

					$.ajax({
				    	url : myAjax.ajaxurl,
				    	data : {
				        	action : 'get_vehicles', 
				        	pageSize: self.pageSize,
				        	pageNumber: self.pageNumber,
				        	make: self.make,
				        	model: self.model
				    	},
				    	method : 'GET',
				    	dataType: "json",
				    	success : function( response ){ 

				    		if(response == null ){
				    			self.getVehicles();
				    		}

				    		var resVehicleList = response.listings;
							self.totalCount = response.totalListings;
				           	self.pageNumber++;

				           	console.log("messageaaaaaaa------", resVehicleList);

				           	var len = self.vl.length;

				           	if (self.totalCount != 0) {

				           		if(len > 0 && resVehicleList != undefined){

						            setTimeout(function() {

						                self.buttonText = "Еще";

						                self.loading = false;

						                self.showTopButton = true;

						                self.totalCountShow = true;

						                // Loop on data and push in posts
						                for (let i = 0; i < resVehicleList.length; i++){
						                   self.vl.push(resVehicleList[i]); 
						                } 

						            },500);

					            } else if (len > 0 && resVehicleList == undefined) {
						        	self.loading = false;
						        	self.totalCountShow = true;
						           	self.buttonText = "Больше нет";
						           	self.isFinished = true;
						           	self.showTopButton = true;
					            } else{
					              	self.vl = resVehicleList;
					              	self.buttonText = "Еще";
					              	self.loading = false;
					              	self.showTopButton = true;
					              	self.totalCountShow = true;
					            }
				           	} else {
				           		self.loading = false;
				           		self.buttonText = "Не найдено";
				           		self.isFinished = true;
				           		self.showTopButton = false;
				           	}

					        console.log("vl", self.vl);

				    	},
					   		error : function(error){ console.log("===================", error) }
					})
				},
				searchVehicles: function(value){
				    console.log(value);
				    if (value.make !== '') {
				    	this.make = Number(value.make);
				    }
				    if (this.model !== '') {
				    	this.model = Number(value.model);
				    } 
				    this.pageNumber = 1;
				    this.vl = [];
				    console.log(this.make);
				    this.getVehicles();
				}
			},
		   	mounted: function(){
		   		console.log("Component is mounted");
			   	this.getVehicles();
		   	}
		});
	});
})( jQuery );