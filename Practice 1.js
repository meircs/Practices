array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
	
	//sorting an array, so the negative values moves to the left side and positive to right side
	//after sorting, array looks like array = [1, 1, 1, 1, 2, 2, 2, 4, 5, 10, 20, 20, 391, 392, 591];
array.sort((a,b) => a-b);

	//creating two arrays, one small and one big, so small arrays can be fitted (pushed) to the bigger one
let arrNew = [];
let arr_small = [];

function organize() {
	for (i = 0; i < array.length; i++) {

		//similar values are being pushed to the smaller array
		if(array[i] === array[i+1]) {
			arr_small.push(array[i+1]);
		} else {

		//if the next element is not similar to previous, 
		//we are adding additional element similar to previous one, because we have ignored the first value at the beginning
			arr_small.push(array[i]);

			//small array that has been defined is pushed to bigger one
			arrNew.push(arr_small);

			//small array has been emptied to start the process again
			arr_small = [];
		}
		}
		return arrNew;
	}

organize();