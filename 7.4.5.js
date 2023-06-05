count3=1;
var count1=0;
k=550;
let values = [];
let w = 50;
let states = [];

function setup(arr) {
  var interval=setInterval(counter,1000);
  createCanvas(400, 500);
  values = new Array(11);
  for (let i = 0; i < values.length ;i++) {
    values[i] = random(width);
    states[i] = -1;
  }
  modifiedquickSort(values, 0, values.length, k);
}

function modifiedquickSort(values, p, r, K) {
  quickSort(values, p, r, K);
  sleep(500);
  insertion_sort(values, p, r);
}

async function  quickSort(arr, start, end,k) {
if (start >= end) {
    return;
  }     
  let index = await partition(arr, start, end);
  states[index] = -1;
  await Promise.all([
    quickSort(arr, start, index - 1),
    quickSort(arr, index + 1, end)
  ]);
}

async function partition(arr, start, end) {
  for (let i = start; i < end; i++) {
    states[i] = 1;
  }
  let pivotValue = arr[end];
  let pivotIndex = start;
  states[pivotIndex] = 0;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      states[pivotIndex] = -1;
      pivotIndex++;
      states[pivotIndex] = 0;
    }
  }
  await swap(arr, pivotIndex, end);
  for (let i = start; i < end; i++) {
    if (i != pivotIndex) {
      states[i] = -1;
    }
  }
  return pivotIndex;
}

function draw() {
  background(51);
  for (let i = 0; i < values.length; i++) {
    noStroke();
    if (states[i] == 0) {
      fill('#FF4949');
    } else if (states[i] == 1) {
        fill('#6b5b95');
    } else {
      fill('Green');
    }
    rect(i * w, height - values[i], w, values[i]);
  }
  count1+=count1;
}

async function swap(arr, a, b) {
  await sleep(100);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, 600));
}

function insertion_sort(arr, p, r) {
  for (j = p; j < r-1; j++) {
      key = arr[j];
      for (i = j - 1; i >= p || arr[i] > key; i--) {
          arr[i + 1] = arr[i];
      }
      arr[i + 1] = key;
  }
}

function counter(){
    document.getElementById("timer").innerHTML = count3 + "sec";
    if(states[0]==-1 && states[1]==-1 &&states[2]==-1 &&states[3]==-1 &&states[4]==-1 &&states[5]==-1 &&states[6]==-1 &&states[7]==-1 &&states[8]==-1 && states[9]==-1 && 
        states[10]==-1 && states[11]==-1 &&states[12]==-1 &&states[13]==-1 &&states[14]==-1 &&states[15]==-1 &&states[16]==-1 &&states[17]==-1 &&states[18]==-1 && states[19]==-1 )
    {
        clearInterval(interval)
    } 
  count3++;
}
   
