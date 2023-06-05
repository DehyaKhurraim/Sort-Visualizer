const container = document.querySelector(".data-container");
let input = document.querySelector('input');

end=0;
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
      generatebars(arr);
      InsertionSort();
};
  reader.onerror = (e) => alert(e.target.error.name);
  reader.readAsText(file);
});

function generatebars(arr) {
  for (var i = 0; i < arr.length; i++) {
    const value = arr[i];
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 13}px`;
    bar.style.transform = `translateX(${i * 30}px)`;
    const barLabel = document.createElement("label");
    barLabel.classList.add("bar__id");
    barLabel.innerHTML = value;
    bar.appendChild(barLabel);
    container.appendChild(bar);
  }
}
    
async function InsertionSort(delay = 600) {
  interval= setInterval(counter,1000);
  let bars = document.querySelectorAll(".bar");
  bars[0].style.backgroundColor = "#6b5b95";
  for (var i = 1; i < bars.length; i += 1) {
    var j = i - 1;
    var key = 
    parseInt(bars[i].childNodes[0].innerHTML);
    var height = bars[i].style.height;
    var barval=document.getElementById("ele")
    bars[i].style.backgroundColor = "#FF4949";
    while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
      bars[j].style.backgroundColor = "darkblue";
      bars[j + 1].style.height = bars[j].style.height;
      bars[j + 1].childNodes[0].innerText = 
      bars[j].childNodes[0].innerText;
      j = j - 1;
      for(var k=i;k>=0;k--){
        bars[k].style.backgroundColor = "Green";
      }
    }
    bars[j + 1].style.height = height;
    bars[j + 1].childNodes[0].innerHTML = key;
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );
    bars[i].style.backgroundColor = "Green";
  }
  end=1;
}

function counter()
{
document.getElementById("timer").innerHTML=count + "sec";
if(end==1)
{
  clearInterval(interval);
}
count++; 
}