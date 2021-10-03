const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const title = document.querySelector("h1");
console.log(title);

let count = 0;

btn1.addEventListener("click",function(e){
  // console.log(123);
  count += 1;
  title.textContent = count;
})

btn2.addEventListener("click",function(e){
  // console.log(123);
  count -= 1;
  title.textContent = count;
})
