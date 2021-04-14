//bai 1
// let str_input = prompt("nhập chuỗi");
// let arr = [];
// for(let i = str_input.length; i >0 ; i--){
//     arr.push(str_input[i-1]);
// }

// console.log(arr.join('anh'));

//bai 2
// let str_input = prompt("nhập chuỗi");
// let arr = [];
// for(let i = 0; i < str_input.length; i++){
//     arr.push(str_input[i]);
// }
// for(let i = 0 ; i < arr.length ; i++){
//    if(arr[i]==" "){
//             arr[i+1] = arr[i+1].toUpperCase();
//             arr[0] = arr[0].toUpperCase();
//         }

// }
// console.log(arr.join(''));



//bai 3 
// let input = prompt("nhập chuỗi");
// let arr = [];
// for(let i = 0; i < input.length; i++){
//     arr.push(input[i]);
// }
// let arr2 = [];
// arr2 = arr.filter((v,i) => arr.indexOf(v) === i );
// console.log(arr2.join());

//bai 4
// const mindX = [ {name : 'le', age : 21 , luong :1000000, cv: 'nv' },
//             {name : 'minh', age : 22 , luong :112400, cv: 'nv' },
//             {name : 'truong', age : 23 , luong :10325000, cv : 'nv' }
      
// ]

// let isloop = true;
// while(isloop){
//     let input = prompt("nhap chuoi");
//     if(input ==="r"){
//         console.table(mindX);
//         break;
//     }
//     if(input==="c"){
//         let name = prompt("nhập tên");
//         let age = prompt("nhập tuổi");
//         let luong = prompt("nhập lương");
//         let cv = prompt("nhập chức vụ");
//         let newperson = {
//             name : name,
//             age : age ,
//             luong : luong,
//             cv : cv
//         }
//         mindX.push(newperson);
//         console.log(mindX);
//         break;
//     }
//     if(input=="u"){
//         let index = prompt("vị trí muốn update");
//         let name = prompt("nhập tên");
//         let age = prompt("nhập tuổi");
//         let luong = prompt("nhập lương");
//         let cv = prompt("nhập chức vụ");
//         let newperson = {
//             name : name,
//             age : age ,
//             luong : luong,
//             cv : cv
//         }
//         mindX[index] = newperson;
//         console.table(mindX);
//         break;
//     }
//     if(input=="d"){
//         let index = prompt("vị trí muốn xóa"); 
//         mindX.splice(index,1);
//         console.table(mindX);
//         break;
//     }
    
// }


//bài 5
// let isloop = true;
// while(isloop){
// let ngay = Number(prompt("nhập ngày"));
// let thang = Number(prompt("nhập tháng"));
// let nam = Number(prompt("nhập năm"));
// if(ngay > 31|| thang > 12){

// alert(`${ngay}/${thang}/${nam} không hợp lệ`)
//  break;
// }
// if(ngay === 29 && thang === 2){
//     alert(`${ngay}/${thang}/${nam} không hợp lệ`)
    // break;
// }if(ngay === 31 && thang === 2 && thang === 4 &&thang === 6 &&thang === 9 &&thang === 11){
//     alert(`${ngay}/${thang}/${nam} không hợp lệ`)
        // break;
// }else{
//     alert(`${ngay}/${thang}/${nam} hợp lệ`)
//     if(ngay = 31){
//         alert(`ngay tiep theo la 1/${thang+1}/${nam}`)
//     }
    // break
// }