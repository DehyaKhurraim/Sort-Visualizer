var container = document.getElementById("array");
let input = document.querySelector('input');

end =0;
count=1;
array1=[];
array2=[];
array3=[];
array4=[];
index1=0;
index2=0;
index3=0;
index4=0;

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

async function Heapify(n, i, clsnam, delay = 600) {
  let blocks = document.getElementsByClassName(clsnam);
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
  
  async function HeapSort(n,clsnam, delay = 600) {
  let blocks = document.getElementsByClassName(clsnam);
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

async function CountingSort(arr, delay = 250) {
  var blocks = document.querySelectorAll(".block");
  var block1 = 0,
      block2 = 0,
      block3 = 0,
      block4 = 0;
  for (var i = 0; i < blocks.length; i += 1) {
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
      array1[index1]=value;
      index1++;
      block1++;
    }
    if (value >= 6 && value <= 10) {
      array_ele.classList.add("secondbucket");
      var container = document.getElementById("two");
      array_ele.style.transform = 
      `translate(${block2 * 30}px)`;
      container.appendChild(array_ele);
      array2[index2]=value;
      index2++;
      block2++;
    }
    if (value >= 11 && value <= 15) {
      array_ele.classList.add("thirdbucket");
      var container = document.getElementById("three");
      array_ele.style.transform = `translate(${block3 * 30}px)`;
      container.appendChild(array_ele);
      array3[index3]=value;
      index3++;
      block3++;
    }
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 600)
  );
    blocks[i].style.backgroundColor = "#6b5b95";
  }

  await HeapSort(array1,"firstbucket");
  await HeapSort(array2,"secondbucket");
  await HeapSort(array3,"thirdbucket");

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