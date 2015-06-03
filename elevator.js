/*jslint node: true */
'use strict';

module.exports = {

	_roof: 3,
	_ground: 0, 
	_floor: 0, //Current Foor
	_traveled:0,

	goTo: function _goTo(currentFloor, destination){

		if(destination > this._roof || currentFloor > this._roof){
			return 'invalid input';
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

		if(currentFloor === destination){ //Same Floor
			return 0;
		}

		
	},

	getFloor: function _getFloor(){
		return this._floor;
	},

	setFloor: function _setFloor(floor){
		this._floor = floor;
		return this._floor;
	}
	
}

