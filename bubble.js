var container = document.getElementById("array");
let input = document.querySelector('input');

end=0;
count1=1;

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
        generatearray(arr);
		BubbleSort();
};
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});

function generatearray(arr) {
	var interval=setInterval(counter,1000);
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

function swap(el1, el2) {
	return new Promise((resolve) => {
		var temp = el1.style.transform;
		el1.style.transform = el2.style.transform;
		el2.style.transform = temp;

		window.requestAnimationFrame(function() {
			setTimeout(() => {
				container.insertBefore(el2, el1);
				resolve();
			}, 250);
		});
	});
}

async function BubbleSort(delay = 500) {
	var blocks = document.querySelectorAll(".block");
	for (var i = 0; i < blocks.length; i += 1) {
		for (var j = 0; j < blocks.length - i - 1; j += 1) {
			blocks[j].style.backgroundColor = "#FF4949";
			blocks[j + 1].style.backgroundColor = "#FF4949";
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
			console.log("run");
			var value1 = Number(blocks[j].childNodes[0].innerHTML);
			var value2 = Number(blocks[j + 1]
						.childNodes[0].innerHTML);
			if (value1 > value2) {
				await swap(blocks[j], blocks[j + 1]);
				blocks = document.querySelectorAll(".block");
			}
			blocks[j].style.backgroundColor = "#6b5b95";
			blocks[j + 1].style.backgroundColor = "#6b5b95";
		}
		blocks[blocks.length - i - 1]
				.style.backgroundColor = "#13CE66";
	}
	end=1;
}

function counter()
{
	document.getElementById("timer").innerHTML = count1 + "sec";
 	if(end==1) {
		clearInterval(interval);	
	 }
	count1++;
}


