
function calc(array, target) {

	//
 for(i=0; i < array.length; i++) {

 	//
  for(k=0; k < array.length; k++) {

  	//
   if (array[i] !== array[k]) {

   	//
    if(target === array[i] + array[k]) {

    	return [array[i], array[k]];

    			}
   			}
  		}
 	}
}

	// calc([array], target)
calc([1, 2, 3], 5)
