array = [1,2,4,591,392,391,"2",5,10,"2",1,"1","1",20,"20"];

	//sorting an array, so the negative values moves to the left side and positive to right side
	//after sorting, array looks like array = [1, 1, "1", "1", 2, "2", "2", 4, 5, 10, 20, "20", 391, 392, 591];
array.sort((a,b) => a-b);

	//Arra is divided into two arrays. First array includes numbers, Second array includes strings.
var filtered_num = array.filter(item => typeof(item) === 'number');
var filtered_str = array.filter(item=> typeof(item) === 'string');

	//creating two arrays, one small and one big, so small arrays can be fitted (pushed) to the bigger one
let arrNew = [];
let arr_small = [];

function organize_num() {
	for (i = 0; i < array.length; i++) {
		if(filtered_num[i] === filtered_num[i+1]) {

				//similar values are being pushed to the smaller array
			arr_small.push(filtered_num[i]);
		} else {

				//if the next element is not similar to previous, 
				//we are adding additional element similar to previous one, because we have ignored the first value at the beginning
			arr_small.push(filtered_num[i]);

				//small array that has been defined is pushed to bigger one
			arrNew.push(arr_small);

				//small array has been emptied to start the process again
			arr_small = [];
			}
		}
	}

	//same logis here but for array that contains only strings
function organize_str() {
	for (i = 0; i < array.length; i++) {
		if(filtered_str[i] === filtered_str[i+1]) {
			arr_small.push(filtered_str[i]);
		} else {
			arr_small.push(filtered_str[i]);
			arrNew.push(arr_small);
			arr_small = [];
			}
		}
	}

organize_num();

//clean the array before moving to array that contains only strings
arr_small = [];

organize_str();

//sorting the big array that contains arrays with numbers and strings
arrNew.sort((a,b) => a[0]-b[0]);

console.log(arrNew)