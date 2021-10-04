let ary = [];

axios.get('https://api.kcg.gov.tw/api/service/Get/b4dd9c40-9027-4125-8666-06bef1756092')
  .then(function (response) {
   ary = response.data.data.retVal;
     renderData();
  });

const filter = document.querySelector(".filter");
const list = document.querySelector(".list");

function renderData() {
  function init(){
    let str1=""
    ary.forEach(function(item,index){
    // console.log(item);
    str1 += `<li>${item.sarea}，${item.ar}</li>`
    list.innerHTML = str1;
  })
  }
  
  init()

  filter.addEventListener("click",function(e){
      if(e.target.value == undefined){
        return;
      }
      let str=""
      //篩選 = 全部 or 鳳山區
      ary.forEach(function(item,index){
        if(e.target.value == "全部"){
          str += `<li>${item.sarea}，${item.ar}</li>`
        }else if (e.target.value == item.sarea){ 
          str += `<li>${item.sarea}，${item.ar}</li>`
        }
      })
      list.innerHTML = str;
  })
} 


