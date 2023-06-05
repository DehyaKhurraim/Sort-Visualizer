var container = document.getElementById("array");
let input = document.querySelector('input');

end =0;
count=1;

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
      CountingSort(arr);
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

async function InsertionSort(arr,clsnam, delay = 600) {
  let blocks = document.getElementsByClassName(clsnam);
  if(blocks[0])
  blocks[0].style.backgroundColor = "rgb(49, 226, 13)";
  for (var i = 1; i < arr.length; i += 1) {
    if(blocks[i]){
    var j = i - 1;
    var key = parseInt(blocks[i].childNodes[0].innerHTML);
    var height = blocks[i].style.height;
    blocks[i].style.backgroundColor = "darkblue";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );
    while (j >= 0 && parseInt(blocks[j].childNodes[0].innerHTML) > key) {
      blocks[j].style.backgroundColor = "darkblue";
      blocks[j + 1].style.height = blocks[j].style.height;
      blocks[j + 1].childNodes[0].innerText = 
      blocks[j].childNodes[0].innerText;
      j = j - 1;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      for (var k = i; k >= 0; k--) {
        blocks[k].style.backgroundColor = " rgb(49, 226, 13)";
      }
    }
    blocks[j + 1].style.height = height;
    blocks[j + 1].childNodes[0].innerHTML = key;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    blocks[i].style.backgroundColor = " rgb(49, 226, 13)";
  }
}
}

async function CountingSort(arr,delay = 250) {
  var blocks = document.querySelectorAll(".block");
  var block1 = 0,
    block2 = 0,
    block3 = 0,
    block4 = 0;
  for (var i = 0; i < Math.max(...arr); i += 1) {
    if(blocks[i]){
    blocks[i].style.backgroundColor = "#FF4949";
    var value = 
    Number(blocks[i].childNodes[0].innerHTML);
    var array_ele = document.createElement("div");
    array_ele.style.height = `${value * 13}px`;
    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;
    array_ele.appendChild(array_ele_label);
    if (value >= 1 && value <= 5) {
      array_ele.classList.add("firstbucket");
      var container = document.getElementById("one");
      array_ele.style.transform = 
      `translate(${block1 * 30}px)`;
      container.appendChild(array_ele);
      block1++;
    }
    if (value >= 6 && value <= 10) {
      array_ele.classList.add("secondbucket");
      var container = document.getElementById("two");
      array_ele.style.transform = 
      `translate(${block2 * 30}px)`;
      container.appendChild(array_ele);
      block2++;
    }
    if (value >= 11 && value <= 15) {
      array_ele.classList.add("thirdbucket");
      var container = document.getElementById("three");
      array_ele.style.transform = `translate(${block3 * 30}px)`;
      container.appendChild(array_ele);
      block3++;
    }
    if (value >= 16 && value <= 20) {
      array_ele.classList.add("fourthbucket");
      var container = document.getElementById("four");
      array_ele.style.transform = 
      `translate(${block4 * 30}px)`;
      container.appendChild(array_ele);
      block4++;
    }
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    blocks[i].style.backgroundColor = "#6b5b95";
  }
}

  await InsertionSort(arr,"firstbucket");
  await InsertionSort(arr,"secondbucket");
  await InsertionSort(arr,"thirdbucket");

  var k=0;
  for (var i = 0; i < 3; i++) {
    var bucket_idx = 0;
    var block_idx;
    if (i == 0) block_idx =
    document.getElementsByClassName("firstbucket");
    if (i == 1) block_idx = 
    document.getElementsByClassName("secondbucket");
    if (i == 2) block_idx =
    document.getElementsByClassName("thirdbucket");
    for (var j = i * 5; j < 5 * (i + 1); j++, bucket_idx++) {
      if(bucket_idx >= block_idx.length){
        break;
      }
      block_idx[bucket_idx].style.backgroundColor = "red";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );
      blocks[k].style.height = block_idx[bucket_idx].style.height;
      blocks[k].childNodes[0].innerText = block_idx[bucket_idx].childNodes[0].innerText;
      blocks[k].style.backgroundColor = "green";
      k++;
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );
      block_idx[bucket_idx].style.backgroundColor = "#6b5b95"; 
    }
  }
  end =1;
}

function counter()
{
	document.getElementById("timer").innerHTML = count + "sec";
  if(end==1) {
    clearInterval(interval);	
  }
 count++;
}
