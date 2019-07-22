array = [1,2,4,591,392,391,"2",5,10,"2",1,"1","1",20,"20"];
array.sort((a,b) => a-b);

var filtered_num = array.filter(item => typeof(item) === 'number');
var filtered_str = array.filter(item=> typeof(item) === 'string');
let arrNew = [];
let arr_small = [];
function organize_num() {
	for (i = 0; i < array.length; i++) {
		if(filtered_num[i] === filtered_num[i+1]) {
			arr_small.push(filtered_num[i]);
		} else {
			arr_small.push(filtered_num[i]);
			arrNew.push(arr_small);
			arr_small = [];
}
}
}
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
// console.log(filtered_num);
// console.log(filtered_str);
organize_num();
arr_small = [];
organize_str();
arrNew.sort((a,b) => a[0]-b[0]);
// console.log(array);
console.log(arrNew);
// console.log(arr_small);