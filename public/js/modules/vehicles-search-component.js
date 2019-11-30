var vehiclesFilter = Vue.component('vehicles-filter', {
  	data: function () {
    	return {

    		vehFields: {
    			make: '',
    			model: ''
    		},
    		selectIsDisabled: true,

    		listModels: []
      		
    	}
  	},
  	props: [],

  	template: `

		<div class="filer-box">


			<div class="col-md-3 col-sm-4 col-xs-12 col-xxs-12">

				<div class="select">
					<span class="title">Марка</span>
					<select name="make"  class="brand-model"  v-model="vehFields.make" @change="findModel">
						<option value="">Выберите марку</option>
						<option value="101004678">A.R.E.</option>
						<option value="101000457">AC</option>
						<option value="101000001">Acura</option>
						<option value="101000002">Alfa Romeo</option>
						<option value="101000558">All American</option>
						<option value="101004540">Allard</option>
						<option value="101000003">AM General</option>
						<option value="101000386">AMC</option>
						<option value="101000079">American</option>
						<option value="101004057">American Motors (AMC)</option>
						<option value="101004310">Amphicar</option>
						<option value="101000779">Ariel</option>
						<option value="101000004">Aston Martin</option>
						<option value="101001034">Auburn</option>
						<option value="101000005">Audi</option>
						<option value="101000443">Austin Healey</option>
						<option value="101004348">Austin Mini</option>
						<option value="101004709">Auto Union</option>
						<option value="101000088">Avanti</option>
						<option value="101004211">Backdraft Racing</option>
						<option value="101004222">Beck</option>
						<option value="101000006">Bentley</option>
						<option value="101004432">Bering</option>
						<option value="101004286">Birkin</option>
						<option value="101000835">Bison</option>
						<option value="101000007">BMW</option>
						<option value="101004518">Bradley</option>
						<option value="101004687">Bricklin</option>
						<option value="101004216">Bristol</option>
						<option value="101000008">Bugatti</option>
						<option value="101000009">Buick</option>
						<option value="101000010">Cadillac</option>
						<option value="101000740">Campagna</option>
						<option value="101004131">Caterham</option>
						<option value="101004673">Checker</option>
						<option value="101000115">Cherokee</option>
						<option value="101000011">Chevrolet</option>
						<option value="101001668">Chevron</option>
						<option value="101000012">Chrysler</option>
						<option value="101000013">Citroen</option>
						<option value="101004244">Classic</option>
						<option value="101004143">Clenet</option>
						<option value="101000121">Cobra</option>
						<option value="101004323">Coda</option>
						<option value="101001208">Comet</option>
						<option value="101000928">Continental</option>
						<option value="101004569">Cord</option>
						<option value="101000561">Crosley</option>
						<option value="101000586">Cushman</option>
						<option value="101000127">Custom</option>
						<option value="101000014">Daewoo</option>
						<option value="101000015">Daihatsu</option>
						<option value="101004414">Daimler</option>
						<option value="101000403">Datsun</option>
						<option value="101001159">Delahaye</option>
						<option value="101000437">DeLorean</option>
						<option value="101004084">DeSoto</option>
						<option value="101004099">DeTomaso</option>
						<option value="101000016">Dodge</option>
						<option value="101004534">Dual-Ghia</option>
						<option value="101004401">Duesenberg</option>
						<option value="101001309">E-Ride Industries</option>
						<option value="101000017">Eagle</option>
						<option value="101001200">Eco</option>
						<option value="101004697">EcoCentre</option>
						<option value="101001163">Edsel</option>
						<option value="101000546">Eldorado</option>
						<option value="101000726">Essex</option>
						<option value="101001233">Establishment</option>
						<option value="101004229">Everett-Morrison</option>
						<option value="101001779">Excalibor</option>
						<option value="101001244">Excalibur</option>
						<option value="101001156">Factory 5</option>
						<option value="101000141">Falcon</option>
						<option value="101000018">Ferrari</option>
						<option value="101000344">Fiat</option>
						<option value="101001172">Fisker</option>
						<option value="101000019">Ford</option>
						<option value="101000584">Franklin</option>
						<option value="101000020">Freightliner</option>
						<option value="101002695">Fuji</option>
						<option value="101004671">Gaz</option>
						<option value="101000347">Gem</option>
						<option value="101000778">Genesis</option>
						<option value="101000022">Geo</option>
						<option value="101000023">GMC</option>
						<option value="101004321">Green Wheel </option>
						<option value="101004320">GreenWheel</option>
						<option value="101000729">Gumpert</option>
						<option value="101000025">Honda</option>
						<option value="101000585">Hudson</option>
						<option value="101000026">Hummer</option>
						<option value="101000027">Hyundai</option>
						<option value="101004559">IAG</option>
						<option value="101000163">Imperial</option>
						<option value="101004600">Indy</option>
						<option value="101000028">Infiniti</option>
						<option value="101000029">International</option>
						<option value="101004615">ISO</option>
						<option value="101000030">Isuzu</option>
						<option value="101000031">Jaguar</option>
						<option value="101000032">Jeep</option>
						<option value="101004056">Jensen</option>
						<option value="101003010">Kaiser</option>
						<option value="101000734">Kaiser-Frazer</option>
						<option value="101000034">Kia</option>
						<option value="101004744">King Midget</option>
						<option value="101004243">Koenigsegg</option>
						<option value="101004762">Lada</option>
						<option value="101000465">Laforza</option>
						<option value="101000035">Lamborghini</option>
						<option value="101004080">Lancia</option>
						<option value="101000036">Land Rover</option>
						<option value="101004104">LaSalle</option>
						<option value="101004680">Le Z</option>
						<option value="101000037">Lexus</option>
						<option value="101000038">Lincoln</option>
						<option value="101004726">Local Motors</option>
						<option value="101000039">Lotus</option>
						<option value="101000787">LTI</option>
						<option value="101000190">Malibu</option>
						<option value="101004734">Marmon</option>
						<option value="101000040">Maserati</option>
						<option value="101000041">Maybach</option>
						<option value="101000042">Mazda</option>
						<option value="101004134">McLaren</option>
						<option value="101000043">Mercedes-Benz</option>
						<option value="101000044">Mercury</option>
						<option value="101000481">Merkur</option>
						<option value="101000583">Messerschmitt</option>
						<option value="101000364">MG</option>
						<option value="101001050">Mickey</option>
						<option value="101002375">Midas</option>
						<option value="101000892">Miles</option>
						<option value="101000045">MINI</option>
						<option value="101001365">Minn Kota</option>
						<option value="101000046">Mitsubishi</option>
						<option value="101000047">Morgan</option>
						<option value="101004503">Morris</option>
						<option value="101004504">Mosler</option>
						<option value="101001284">Motor Coach Industries</option>
						<option value="101004588">MP Lafer</option>
						<option value="101004657">MSV</option>
						<option value="101004607">MV-1</option>
						<option value="101004611">MV1</option>
						<option value="101000205">Nash</option>
						<option value="101000512">Newell</option>
						<option value="101000049">Nissan</option>
						<option value="101001087">Noble</option>
						<option value="101000050">Oldsmobile</option>
						<option value="101004139">Opel</option>
						<option value="101000424">Other</option>
						<option value="101000438">Packard</option>
						<option value="101004258">Paige</option>
						<option value="101004729">Palatov Motorsport</option>
						<option value="101000051">Panoz</option>
						<option value="101000370">Peugeot</option>
						<option value="101004107">Phillips Motor Cars</option>
						<option value="101000222">Pioneer</option>
						<option value="101000052">Plymouth</option>
						<option value="101000053">Pontiac</option>
						<option value="101000054">Porsche</option>
						<option value="101004669">Quint Laser</option>
						<option value="101000870">Qvale</option>
						<option value="101004058">Ram</option>
						<option value="101000237">Ranger</option>
						<option value="101004083">Rapier</option>
						<option value="101004089">Reliant</option>
						<option value="101000482">Renault</option>
						<option value="101000244">Renegade</option>
						<option value="101000055">Rolls-Royce</option>
						<option value="101001260">Rossion</option>
						<option value="101004246">RTS</option>
						<option value="101004396">Ruf</option>
						<option value="101000056">Saab</option>
						<option value="101000057">Saleen</option>
						<option value="101000058">Saturn</option>
						<option value="101000059">Scion</option>
						<option value="101000500">Shelby</option>
						<option value="101004702">Skoda</option>
						<option value="101000060">Smart</option>
						<option value="101004306">Snyder</option>
						<option value="101004640">SPCN</option>
						<option value="101000061">Spyker</option>
						<option value="101000062">Sterling</option>
						<option value="101000469">Studebaker</option>
						<option value="101000063">Subaru</option>
						<option value="101001254">Sunbeam</option>
						<option value="101000518">Super Lite</option>
						<option value="101001058">Superformance</option>
						<option value="101000064">Suzuki</option>
						<option value="101000289">Tahoe</option>
						<option value="101000657">Terra Transport</option>
						<option value="101000659">Tesla</option>
						<option value="101003115">Texson</option>
						<option value="101004126">Think</option>
						<option value="101001099">Thomas</option>
						<option value="101004740">Tiffany</option>
						<option value="101004063">Tiger Truck</option>
						<option value="101000065">Toyota</option>
						<option value="101000300">Triumph</option>
						<option value="101004081">Turner</option>
						<option value="101004366">TVR</option>
						<option value="101004750">UAZ</option>
						<option value="101000990">Vantage</option>
						<option value="101004050">Vantage Vehicle</option>
						<option value="101003298">Vista Cruiser</option>
						<option value="101000066">Volkswagen</option>
						<option value="101000067">Volvo</option>
						<option value="101004098">VPG</option>
						<option value="101004161">Wheego</option>
						<option value="101004439">Whippet</option>
						<option value="101004207">Willys</option>
						<option value="101000319">Winnebago</option>
						<option value="101000495">Workhorse</option>
						<option value="101004172">Wuling</option>
						<option value="101001216">XLondon</option>
						<option value="101000483">Yugo</option>
						<option value="101001193">Zenn</option>
						<option value="101000516">Zimmer</option> 
					</select>
				</div>

			</div>

			<div class="col-md-3 col-sm-4 col-xs-12 col-xxs-12">

				
				<div class="select">
					<span class="title">Модель</span>

					<select v-model="vehFields.model" v-bind:disabled="selectIsDisabled" id="makeSelect">

					    <option value=''>Выберите модель</option>

					  	<option v-for="model in listModels" v-bind:value="model.id">

					    	{{ model.name }}
					  	</option>

					</select>

				</div>

			</div>

			<div class="col-md-3 col-sm-4 col-xs-12 col-xxs-12">
				<button v-on:click="search">Найти</button>
			</div>
			
		</div>

		`,

		methods: {

	    	search: function(event){ 
				this.$emit('search', this.vehFields)
			},

			findModel: function(){ 

				this.selectIsDisabled = true;

				this.listModels = [];
				this.vehFields.model = '';


				if (this.vehFields.make !== '') {
					var self = this;
					$.ajax({
				    	url : myAjax.ajaxurl,
				    	data : {
				        	action: 'get_models',
				        	make: self.vehFields.make
				    	},
				    	method : 'POST',
				    	success : function( response ){ 
				    		var modelData = JSON.parse(response);
				    		self.listModels = modelData.parameterValues;
				    		self.selectIsDisabled = false;
				    	},
				   		error : function(error){ console.log(error) }
					})
					setTimeout(function() {
						document.getElementById("makeSelect").selectedIndex = "0";
				    },1000);
				}
			}
	  	}
});