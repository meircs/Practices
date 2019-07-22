array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
array.sort((a,b) => a-b);
let arrNew = [];
let arr_small = [];
function organize() {
	for (i = 0; i < array.length; i++) {
		if(array[i] === array[i+1]) {
			arr_small.push(array[i+1]);
		} else {
			arr_small.push(array[i]);
			arrNew.push(arr_small);
			arr_small = [];
		}
		}
	}

// function sort() {
	
// }
// sort();
organize();
console.log(arrNew);