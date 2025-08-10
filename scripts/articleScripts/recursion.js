function fibs(num) {
	const arr = [0, 1];
	for(let i = 0; i < num-2; i++) {
		arr.push(arr[i] + arr[i+1]);
	}
	return arr;
}

function fibsRec(num, arr = [0, 1]) {
	if(num === 2) {
		return arr;
	}
	if(num <= 1) {
		return [1];
	}
	const arrLength = arr.length;
	const sum = arr[arrLength - 1] + arr[arrLength - 2];
	arr.push(sum);
	if(num === 3) {
		return arr;
	}
	else {
		return fibsRec(num - 1, arr);
	}
}

(function outputFibs() {
	const div = document.querySelector("#fibRes");

	const headerOne = document.createElement("h3");
	headerOne.textContent = 'Non-recursive output';
	const headerTwo = document.createElement("h3");
	headerTwo.textContent = 'Recursive output';

	const paragraphOne = document.createElement("p");
	paragraphOne.textContent = `fibs(5): ${fibs(5)}`;
	const paragraphTwo = document.createElement("p");
	paragraphTwo.textContent = `fibs(10): ${fibs(10)}`;

	const paragraphThree = document.createElement("p");
	paragraphThree.textContent = `fibsRec(5): ${fibsRec(5)}`;
	const paragraphFour = document.createElement("p");
	paragraphFour.textContent = `fibsRec(10): ${fibsRec(10)}`;

	div.appendChild(headerOne);
	div.appendChild(paragraphOne);
	div.appendChild(paragraphTwo);

	div.appendChild(headerTwo);
	div.appendChild(paragraphThree);
	div.appendChild(paragraphFour);
})();

console.log("Fibonacci sequence, non-recursive algorithm:")
console.log(fibs(2));
console.log(fibs(8));
console.log(fibs(20));

console.log("Fibonacci sequence, recursive algorithm:")
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(4));
console.log(fibsRec(8));
console.log(fibsRec(20));

function mergeSort(arr = [3, 2, 1, 13, 8, 5, 0, 1]) {
	if(arr.length <= 1) {
		return arr;
	}
	const halfLength = Math.ceil(arr.length / 2);
	const arrFirstHalf = arr.slice(0, halfLength);
	const arrSecondHalf = arr.slice(halfLength, arr.length);

	const sortedFirstHalf = mergeSort(arrFirstHalf);
	const sortedSecondHalf = mergeSort(arrSecondHalf);

	const sortedArray = [];
	let i = 0;
	let j = 0;
	while(i < sortedFirstHalf.length && j < sortedSecondHalf.length) {
		if(sortedFirstHalf[i] <= sortedSecondHalf[j]) {
			sortedArray.push(sortedFirstHalf[i]);
			i++;
		}
		else {
			sortedArray.push(sortedSecondHalf[j]);
			j++;
		}
	}
	while(i < sortedFirstHalf.length) {
		sortedArray.push(sortedFirstHalf[i]);
		i++;
	}
	while(j < sortedSecondHalf.length) {
		sortedArray.push(sortedSecondHalf[j]);
		j++;
	}
	return sortedArray;
}

console.log("Merge sort, recursive algorithm:")
console.log(mergeSort());
console.log(mergeSort([105, 79, 100, 110]));

(function outputMergeSort() {
	const div = document.querySelector("#msRes");

	const header = document.createElement("h3");
	header.textContent = 'Merge sort (resursive)';

	const paragraph = document.createElement("p");
	paragraph.textContent = `mergeSort([3,2,1,13,8,5,0,1]): ${mergeSort([3,2,1,13,8,5,0,1])}`;

	div.appendChild(header);
	div.appendChild(paragraph);
})();