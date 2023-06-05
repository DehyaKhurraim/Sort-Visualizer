var container = document.getElementById("array");
var interval=setInterval(counter,1000);
let input = document.querySelector('input');
var count_container = document.getElementById("heap");

end =0;
st=1;

input.addEventListener('change', () => {
    let files = input.files;
    if (files.length == 0) return;
    const file = files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        const arr1 = lines[0];
      const arr2 = lines[1];
      const arr3 = lines[2];
      const arr4 = lines[3];
      const arr5 = lines[4];
      const arr6 = lines[5];
      const arr7 = lines[6];
      const arr8 = lines[7];
      const arr9 = lines[8];
      const arr10 = lines[9];
      const arr11 = lines[10];
      const arr = [arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8,arr9,arr10,arr11];
        console.log(arr);
        generatearray(arr);
		generate_idx(arr);
		HeapSort(arr.length);
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});

function generatearray(arr) {
	for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
	var array_ele = document.createElement("div");
	array_ele.classList.add("block");
	array_ele.style.height = `${value * 13}px`;
	array_ele.style.transform = `translate(${i * 30}px)`;
	var array_ele_label = document.createElement("label");
	array_ele_label.classList.add("block_id");
	array_ele_label.innerText = value;
	array_ele.appendChild(array_ele_label);
	container.appendChild(array_ele);
}
}

function generate_idx(arr) {
for (var i = 0; i < arr.length; i++) {
	var array_ele2 = document.createElement("div");
	array_ele2.classList.add("block2");
	array_ele2.style.height = `${20}px`;
	array_ele2.style.transform = `translate(${i * 30}px)`;
	var array_ele_label2 = document.createElement("label");
	array_ele_label2.classList.add("block_id3");
	array_ele_label2.innerText = i;
	array_ele2.appendChild(array_ele_label2);
	count_container.appendChild(array_ele2);
}
}

async function Heapify(n, i) {
var blocks = document.querySelectorAll(".block");
var largest = i;
var l = 2 * i + 1;
var r = 2 * i + 2;
if(blocks[l] && blocks[largest] && blocks[r]){
	if (l < n && Number(blocks[l].childNodes[0].innerHTML) > Number(blocks[largest].childNodes[0].innerHTML))
		largest = l;
	if (r < n && Number(blocks[r].childNodes[0].innerHTML) > Number(blocks[largest].childNodes[0].innerHTML))	
	largest = r;
	if (largest != i) {
		var temp1 = blocks[i].style.height;
		var temp2 = blocks[i].childNodes[0].innerText;
		blocks[i].style.height = blocks[largest].style.height;
		blocks[largest].style.height = temp1;
		blocks[i].childNodes[0].innerText =
		blocks[largest].childNodes[0].innerText;
		blocks[largest].childNodes[0].innerText = temp2;
		await new Promise((resolve) =>
		setTimeout(() => {
			resolve();
		}, 250)
		);
		await Heapify(n, largest);
	}
}
}

async function HeapSort(n) {
var blocks = document.querySelectorAll(".block");
for (var i = n / 2 - 1; i >= 0; i--) {
	await Heapify(n, i);
}
for (var i = n - 1; i > 0; i--) {
	if(blocks[i]){
	var temp1 = blocks[i].style.height;
	var temp2 = blocks[i].childNodes[0].innerText;
	blocks[i].style.height = blocks[0].style.height;
	blocks[0].style.height = temp1;
	blocks[i].childNodes[0].innerText =
	blocks[0].childNodes[0].innerText;
	blocks[0].childNodes[0].innerText = temp2;
	await new Promise((resolve) =>
	setTimeout(() => {
		resolve();
	}, 250)
	);
	await Heapify(i, 0);
}
}
end=1;
}

function counter()
{
	document.getElementById("timer").innerHTML= st + "sec";
	if(end == 1 )
	{
		clearInterval(interval);
	}
	st++;
}

