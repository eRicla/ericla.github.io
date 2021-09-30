const txt = document.querySelector(".txt");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn = document.querySelectorAll(".btn");
const title = document.querySelector("h1");

// txt.value += btn;
// console.log(btn);

function jsq(btn){
    txt.value += btn;
}

let minNum = 1;
let maxNum = 100;

//Math.random() 負責取得亂數, 它的值是小數, 介在0 ~ 1之間
//Math.floor() 負責把小數點去掉, 留下整數的部分
let answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
let count = 0;
console.log('正確答案是：', answer);

btn1.addEventListener("click",function(e){
    title.textContent = txt.value; //抓取輸入欄位值
    if (txt.value != answer && txt.value > answer){
        count += 1;
        title.textContent =  txt.value + `, 猜的數字太大, 已經猜了${count}次`;
        txt.value
        txt.value = '';
    }else if (txt.value != answer && txt.value < answer){
        count += 1;
        title.textContent = txt.value + `, 猜的數字太小, 已經猜了${count}次`;
        txt.value = '';
    }else{
        count += 1;
        title.textContent = txt.value + `, 恭喜猜對, 總共猜了${count}次`;
    }
})

btn2.addEventListener("click",function(e){
    txt.value = '';
})
