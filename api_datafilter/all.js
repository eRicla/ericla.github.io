let ary = [];

axios.get('https://api.kcg.gov.tw/api/service/Get/b4dd9c40-9027-4125-8666-06bef1756092')
  .then(function (response) {
   ary = response.data.data.retVal;
     renderData();
  });

const filter = document.querySelector(".filter");
const list = document.querySelector(".list");
const table = document.querySelector("table");

function renderData() {
  function init(){
    let str1=""
    ary.forEach(function(item,index){
    // console.log(item);
    // str1 += `<li>${item.sarea}，${item.ar}</li>`
    str1 += `<tr><td>${item.sarea}</td> <td>${item.sna}</td> <td>${item.ar}</tr></tr>`
    table.innerHTML = str1;
    
  })
  }
  
  init()

  filter.addEventListener("click",function(e){
      if(e.target.value == undefined){
        return;
      }
      let str=""
      ary.forEach(function(item,index){
        if(e.target.value == "全部"){
          str += `<tr><td>${item.sarea}</td> <td>${item.sna}</td> <td>${item.ar}</tr></tr>`
        }else if (e.target.value == item.sarea){ 
          str += `<tr><td>${item.sarea}</td> <td>${item.sna}</td> <td>${item.ar}</tr></tr>`
        }
      })
      table.innerHTML = str;
  })
} 
