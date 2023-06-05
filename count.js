var container = document.getElementById("array");
var count_container = document.getElementById("count");
let input = document.querySelector('input');

var count3=1;
var end=0;

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
        generate_freq(arr);	
        CountSort(arr);
    };
    reader.onerror = (e) => alert(e.target.error.name);
    reader.readAsText(file);
});

function generatearray(arr) {
    interval=setInterval(counter,1000);
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

function generate_freq(arr) {
    for (var i = 0; i < Math.max(...arr); i++) {
        var array_ele2 = document.createElement("div");
        array_ele2.classList.add("block2");
        array_ele2.style.height = `${20}px`;
        array_ele2.style.transform = `translate(${i * 30}px)`;
        var array_ele_idx = document.createElement("label");
        array_ele_idx.classList.add("block_id2");
        array_ele_idx.innerText = i + 1;
        var array_ele_label2 = document.createElement("label");
        array_ele_label2.classList.add("block_id3");
        array_ele_label2.innerText = 0;
        array_ele2.appendChild(array_ele_label2);
        array_ele2.appendChild(array_ele_idx);
        count_container.appendChild(array_ele2);
    }
    }
    
async function CountSort(arr,delay = 400) {
    var blocks = document.querySelectorAll(".block");
    for (var i = 0; i < Math.max(...arr); i += 1) {
        if(blocks[i]){
            blocks[i].style.backgroundColor = "#FF4949";    
            var value = Number(blocks[i].childNodes[0].innerHTML);
            var freq_array = document.getElementsByClassName("block_id3");
            freq_array[value - 1].innerText++;
            await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
            );
            blocks[i].style.backgroundColor = "#6b5b95";
        }
    }
    
    var idx = 0;
    for (var i = 0; i < Math.max(...arr); i += 1) {
        var freq = document.getElementsByClassName("block_id3");
        var temp = Number(freq[i].innerText);
        var freq_block = document.getElementsByClassName("block2");
        freq_block[i].style.backgroundColor = "#FF4949";
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 2 * delay)
            );
        if (temp == 0) {
            freq_block[i].style.backgroundColor = "darkgray";
            continue;
        }
        var block_label = document.getElementsByClassName("block_id");
        for (var j = 0; j < temp; j++) {
            blocks[idx].style.height = `${(i + 1) * 13}px`;
            block_label[idx].innerText = i + 1;
            idx++;
        }
        freq_block[i].style.backgroundColor = "darkgray";
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 2 * delay)
            );
        }
   end=1;     }
   function counter()
   {
    document.getElementById("timer").innerHTML = count3 + "sec";
    if(end==1)
    {
        clearInterval(interval);	
    }
   count3++;
   }
   