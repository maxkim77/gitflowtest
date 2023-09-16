

// (function(x,y){return x+y})(2,3)

// // 화살표 함수
// (x,y) => x+y
// (let = (x,y) => x+y)(3,4)

// (()=>console.log("됩니다"))()


// const arr = ['참외', '키위', '감귤'];
// arr.forEach(function(item, index) {
//   console.log(item, index);
// 	arr[index] = index;
// });

// 결과
// 참외 0
// 키위 1
// 감귤 2


// const arr = ['참외', '키위', '감귤'];
// function callbackfn(item,index, arr){
//     console.log(item,`은 ${index}번째 입니다.`);
// }
// arr.forEach(callbackfn);

// const arr = [1, 2, 3];
// const newArr = arr.map(function(item, index) {
//   return item * index;
// });

// console.log(newArr);
// const arr = [1, 2, 3];
// function callbackfn(item){
//     return item*2
// }
// console.log(arr.map(callbackfn))
// console.log(arr)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArr = arr.filter(function(el) {
//   return el % 2 === 0;
// });

// console.log(newArr);

// const arr =[1,2,3,4,5];
// function filterFn(num){
//     return num%2 === 1;
// }
// const result = arr.filter(filterFn);
// // console.log(result);

// const arr = [1,2,3,4]
// function reducer(x,y) {
//     return x+y
// }
// const result = arr.reduce(reducer, 0);
// console.log(result);
// reduce를 이용해서 홀수만 누적하기
// const test = 11;
// if(test < 10){
//     console.log("참입니까?");
// }
// else{
//     console.log("거짓이군요!");
// }

const arr = [1,2,3];
function callbackfn(item){
    let resutlt;
    if (item %2 ===1 ){
        result = "홀수"
    } else {
        result = "짝수"
    }
    return result
}
console.log(callbackfn(10))
