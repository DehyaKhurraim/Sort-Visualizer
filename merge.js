count=1;
end=0;
var canvas, canvaswidth, canvasheight, ctrl;
var interval=setInterval(counter, 1000);
canvasElements();

var arr = [], itmd = [], visited = []

var len_of_arr = 11;

for (var i = 0; i < len_of_arr; i++) {
	arr.push(Math.round(Math.random() * 250) )
}

for (var i = 0; i < len_of_arr; i++) {
    console.log(arr[i]);
	itmd.push(0)
	visited.push(0)
}

function mergeArray(start, end) {
	let mid = parseInt((start + end) >> 1);
	let start1 = start, start2 = mid + 1
	let end1 = mid, end2 = end
	let index = start
	while (start1 <= end1 && start2 <= end2) {
		if (arr[start1] <= arr[start2]) {
			itmd[index] = arr[start1]
			index = index + 1
			start1 = start1 + 1;
		}
		else if(arr[start1] > arr[start2]) {
			itmd[index] = arr[start2]
			index = index + 1
			start2 = start2 + 1;
		}
	}
	while (start1 <= end1) {
		itmd[index] = arr[start1]
		index = index + 1
		start1 = start1 + 1;
	}
	while (start2 <= end2) {
		itmd[index] = arr[start2]
		index = index + 1
		start2 = start2 + 1;
	}
	index = start
	while (index <= end) {
		arr[index] = itmd[index];
		index++;
	}
}

function drawBars(start, end) {
	ctrl.clearRect(0, 0, 1000, 1500)
	for (let i = 0; i < len_of_arr; i++) {
		ctrl.fillStyle = "black"
		ctrl.shadowOffsetX = 2
		ctrl.shadowColor = "chocolate";
		ctrl.shadowBlur = 3;
		ctrl.shadowOffsetY =5;
		ctrl.fillRect(25 * i, 300 - arr[i], 20, arr[i])
		
		if (visited[i]) {
			ctrl.fillStyle = "#006d13"
			ctrl.fillRect(25 * i, 300 - arr[i], 20, arr[i])
			ctrl.shadowOffsetX = 2
		}
	}

	for (let i = start; i <= end; i++) {
		ctrl.fillStyle = "orange"
		ctrl.fillRect(25 * i, 300 - arr[i], 18, arr[i])
		ctrl.fillStyle = "#cdff6c"
		ctrl.fillRect(25 * i,300, 18, arr[i])
		visited[i] = 1
	}
}

function timeout(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const mergeSort = async (start, end) => {
	if (start < end) {
		let mid = parseInt((start + end) >> 1)
		await mergeSort(start, mid)
		await mergeSort(mid + 1, end)
		await mergeArray(start, end)
		await drawBars(start, end)
		await timeout(800)
	}
}

function canvasElements() {
	canvas = document.getElementById("Canvas")
	canvas.width = canvas.height = 1000
	canvaswidth = canvas.width
	canvasheight = canvas.height
	ctrl = canvas.getContext("2d")
}

const performer = async () => {
	await mergeSort(0, len_of_arr - 1)
	await drawBars()
	end=1;
	const title1_changer = document.querySelector(".title1")
	title1_changer.innerText = "Array is completely sorted"
}
performer()
function counter(){
	document.getElementById("timer").innerHTML=count+"sec";
	if(end==1)
	{
		clearInterval(interval);
	}
	count++;
}