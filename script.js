let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
  //your code here
	arr.forEach(function(element,index,array){
		array[index] = element + 1;
	});
	return arr;
}
 
alert(incrementArray(arr));
