let data = [
    {
        Charge: "投幣式",
        name:"小花充電站"
    },
    {
        Charge: "免費",
        name:"小明充電站"
    },
    {
        Charge: "投幣式",
        name:"小狗充電站"
    },
    {
        Charge: "投幣式",
        name:"大同充電站"
    }
];

const list = document.querySelector(".list");

//初始值
function init(){
    let str=""
    data.forEach(function(item,index){
        let content = `<li>${item.name}，${item.Charge}</li>`;
        str += content;
    })
    list.innerHTML = str;
}

init();

//針對條件做篩選
const stationFilter = document.querySelector(".filter");
stationFilter.addEventListener("click",function(e){
    if (e.target.value == undefined) {
        return;
    }
    let str = "";
    data.forEach(function(item,index){
        if (e.target.value == "全部"){
            str += `<li>${item.name}，${item.Charge}</li>`
        }else if (e.target.value == item.Charge){
            str += `<li>${item.name}，${item.Charge}</li>`
        }
    })
    list.innerHTML = str;
})

//新增邏輯
const stationName = document.querySelector(".stationName");
const stationCharge = document.querySelector(".stationCharge");
const btn = document.querySelector(".btn");
// console.log(stationName,stationCharge,btn);

btn.addEventListener("click",function(e){
    // console.log(stationName.value);
    // console.log(stationCharge.value);
    let obj = {};
    obj.name = stationName.value;
    obj.Charge =stationCharge.value;
    console.log(obj);
    data.push(obj);
    init();
    stationName.value="";
    stationCharge.value="免費";
})