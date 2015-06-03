
/*jslint node: true */
'use strict';

module.exports = {


	_roof: 3,
	_ground: 0, 
	_floor: 0, //Current Foor
	_traveled:0,

	goto: function (currentFloor, destination){

		if(typeof(currentFloor) !== 'number' || typeof(destination) !== 'string'){
			return 0;
		}

		if(destination > this._roof || currentFloor > this._roof){
			return 0;
		}

		if(currentFloor === destination){ //Same Floor
			return 0;
		}


		if(currentFloor < destination){ // Goes up
			this.setFloor(destination);
			this._traveled = destination - currentFloor;
			return this._traveled;

		}

		if(currentFloor > destination){ //Goes Down
			this.setFloor((currentFloor - destination));
			return -this._floor;
		}


		
	},

	getFloor: function(){
		return this._floor;
	},

	setFloor: function (floor){
		this._floor = floor;
		return this._floor;
	}
	
}

