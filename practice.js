// let arr= [1,2,3,4,5,3,4,5];

// arr[arr.length]=6
//    console.log(arr);


// let arr=[1,2,3,4,5];
// delete arr[1];
// for (let i = 0; i < arr.length; i++) {
//    // console.log(arr[i]);
//    if (arr[i]==undefined) {
//       let hi = arr[i]
//       arr[i]=arr[i+1];
//    }
//    console.log(arr[i]);   
// }

let a = [12, 13, 14, 15, 17, 18, 19, 20]

let value1 = 11;
let ind1 = 0;
for (let i = a.length - 1; i >= 0; i--) {
    a[i + 1] = a[i]

    if(i == ind1){
        a[ind1] = value1;
    }
    
 }


