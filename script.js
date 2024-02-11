//sum of two added arrays sum  store the linked list value in reverse

// var addTwoNumbers = function(l1, l2) {
//     for(var i=0;i>l1.length;i--){
//         var sum1= sum1+i;
//     }
//     for(var j =0;j>l2.length;j--){
//         var sum2= sum2+j;
//     }
//     var n=sum1+sum2;
//     for(var i=0;i<n.length;i++){
//         var tot=[i++];
//         //let tot[i]=tot[i]+i;
//     }
//     var  addTwoNumbes=[]
//     var  addTwoNumber=tot;
//     let []=addTwoNumber;
//     return addTwoNumbers;
// }

// console.log(addTwoNumbers(l1=[1,3,2],l2=[3,3,4]))

//answer of leetcode problem addTwoNumbers

// function addTwoNumbers(l1, l2) {
//     let list = new ListNode(0);
//     let currentNode = list;
  
//     let sum = 0;
//     let carry = 0;
  
//     while (l1 !== null || l2 !== null || sum > 0) {
//       if (l1 !== null) {
//         sum += l1.val;
//         l1 = l1.next;
//       }
  
//       if (l2 !== null) {
//         sum += l2.val;
//         l2 = l2.next;
//       }
  
//       carry = Math.floor(sum / 10);
//       sum = sum % 10;
  
//       currentNode.next = new ListNode(sum);
//       currentNode = currentNode.next;
  
//       sum = carry;
//       carry = 0;
//     }
  
//     return list.next;
//   }
//   l1=[1,2,3];
//   l2=[2,3,1];
//   console.log(addTwoNumbers(l1,l2));
  //how to add each inex sum in an array
var canvas = document.getElementById('loading_animation');
var ctx = canvas.getContext('2d');
ctx.fillStyle = '#00000088';

var final = [];
var list1 = [
    [Math.floor(canvas.width / 2), 0],
    [Math.floor(canvas.width / 2), Math.floor(canvas.height / 2)]
];
var list2 = [
    [canvas.width - 1, 0],
    [canvas.width - 1, canvas.height - 1],
    [0, canvas.height - 1],
    [0, 0]
];
var last = [Math.floor(canvas.width / 2), 0];

for (var x = Math.floor(canvas.width / 2); x < canvas.width; x += 1) {
    var path = list1.concat([[x, 0]]).concat(list2).concat([last]);
    final.push(path);
}
list2.shift();
for (var y = 1; y < canvas.height; y += 1) {
    var path = list1.concat([[canvas.width - 1, y]]).concat(list2).concat([last]);
    final.push(path);
}
list2.shift();
for (var x = canvas.width - 2; x >= 0; x -= 1) {
    var path = list1.concat([[x, canvas.height - 1]]).concat(list2).concat([last]);
    final.push(path);
}
list2.shift();
for (var y = canvas.height - 2; y >= 0; y -= 1) {
    var path = list1.concat([[0, y]]).concat(list2).concat([last]);
    final.push(path);
}
list2.shift();
for (var x = 1; x < Math.floor(canvas.width / 2); x += 1) {
    var path = list1.concat([[x, 0]]).concat(list2).concat([last]);
    final.push(path);
}
function RenderAnimation() {
    var path = final.shift();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(path[0][0], path[0][1]);
    for (let i = 1; i < path.length; i++) {
        ctx.lineTo(path[i][0], path[i][1]);
    }
    ctx.closePath();
    ctx.fill();
    if (final.length > 0) {
        window.requestAnimationFrame(RenderAnimation);
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

RenderAnimation();