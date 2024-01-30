// let matrix = [
//     [0, 1, '^^'],
//     [0, '^^', 2],
//     ['^^', 1, 2],
//     ['^^', 1, '^^']
// ];
// let matrix = [
//     [0, 1, 2],
//     [0, 2, 2],
//     [2, 1, 2],
//     [2, 1, 2]
// ];

// function logEachMatrixItem(matrix){
//     for( let i = 0; i < matrix.length; i++ ){
//         for( let j = 0; j < matrix[i].length; j++){
//             console.log( `item {${i},${j}} - ${matrix[i][j]}`);
//         }
//     }
// }

/*
function logEachMatrixItem(matrix){
    let cats = [];
    for( let i = 0; i < matrix.length; i++ ){
        for( let j = 0; j < matrix[i].length; j++){
            console.log( `item {${i},${j}} - ${matrix[i][j]}`);
            if (matrix [i][j] === '^^' ){
                cats.push(j);
            }
        }
    }
    console.log(cats);
    console.log(cats.length);
}
logEachMatrixItem(matrix);
*/
// Второе задание
/*let members = [
    'Matt',
     777,
    'John',
    'conny',
    ' Yakov ',
    'ann',
     null
];
console.log(members.length);
if (Array.isArray(members)) {
    let result;
    let team = [];
    for(let i = 0 ; i < members.length; i++){
        if(typeof members[i] === 'string'){
        result = members[i].trim().slice(0,1);
        team.push(result);
        team.sort((a, b) => a.localeCompare(b));
        }
    }
    console.log(team.join('').toUpperCase());
    }
return false;
*/
//сумма цифр

/*
function getSumOfDigits(n) {
    let res;
    let sum = 0;
    let substr;

    res = n.toString();
    //   console.log(res.length);
      for(let i = 0; i < res.length; i++){
        sum = sum + Number(res[i]);
      }

      if(sum.toString().length==2){
        substr = sum.toString();
        sum = Number(substr[0]) + Number (substr[1]);
        }
    return sum;
        // console.log(sum);
        // console.log(typeof sum);
  }

getSumOfDigits(100);
*/
// проверка MAС адреса
/*
let regexp = /^[0-9a-f]{2}(-[0-9a-f]{2}){5}$/i;

console.log(regexp.test('00-1B-63-84-45-E6'));

*/

//*****************Бинарное дерево поиска */
class Node {
    constructor(data) {
      this.data = data;
      this.left = null;  //потомок слева
      this.right = null; //потомок справа
    }
  }
  
  
  class BinarySearchTree {
    constructor() {
      this.rootTree = null;  //создаем корень дерева 
    }
    root() {
      if (!this.rootTree) {
        return null;
      } else {
        return this.rootTree;
      }
    } 
  
    add(data) {
    this.rootTree = addData(this.rootTree, data);
  
    function addData(nodeTree, data) {
        if (!nodeTree) {
            return new Node(data); //если узла нет, добавляем его
        }
  
        if (nodeTree.data === data) {
        return nodeTree;              //вернуть текущий узел
        }
  
        if (data < nodeTree.data) {
            nodeTree.left = addData(nodeTree.left, data); //обновляем узлы влево
        } else {
            nodeTree.right = addData(nodeTree.right, data); //обновляем узлы вправо
        }
        return nodeTree;
        }
    }
  
    has(data) {
      return hasSearch(this.rootTree, data);
  
      function hasSearch(nodeTree, data) {
        if (!nodeTree) {
          return false;                 //если узел ненайден вернуть false
        }    
        if (nodeTree.data === data) {
            return true;                    //если узел найден вернуть true
        }  
        return data < nodeTree.data ?
        hasSearch(nodeTree.left, data):  //ищем в левом узле
        hasSearch(nodeTree.right, data);  //ищем в правом узле
        }
    }
  
    find(data) {
      return findNode(this.rootTree, data);
  
      function findNode(nodeTree, data) {
        if (!nodeTree) {
          return null;
        }
    
        if (nodeTree.data === data) {
            return nodeTree;
        }  
  
        return data < nodeTree.data ?
        findNode(nodeTree.left, data):
        findNode(nodeTree.right, data);
        }
    }
  
  
    remove(data) {
      this.rootTree = removeNode(this.rootTree, data);
  
      function removeNode(nodeTree, data) {
        if (!nodeTree) {
          return null;               //точка остановки рекурсии если узла нет
        }
    
      if (data < nodeTree.data) {
          nodeTree.left = removeNode(nodeTree.left, data);  //обновляем левую ветку
          return nodeTree;
        } else if (nodeTree.data < data) { 
          nodeTree.right = removeNode(nodeTree.right, data); //обновляем правую ветку
          return nodeTree;
        } else {
          if (!nodeTree.left && !nodeTree.right) {
            return null;                                //если текущий узел является листом
          }
          if (!nodeTree.left) {
            nodeTree = nodeTree.right;
            return nodeTree;                //обновляем провое дерево  
          }
          if (!nodeTree.right) {
            nodeTree = nodeTree.left;
            return nodeTree;                //обновляем левое дерево 
          }
          let minRight = nodeTree.right;
          while (minRight.left) {
            minRight = minRight.left;
          }
          nodeTree.data = minRight.data;
          nodeTree.right = removeNode(nodeTree.right, minRight.data);
  
          return nodeTree;
        }
        }
      }
  
    min() {                           //минимальный элемент дерева              
      let nodeTree = this.rootTree;
      if (!this.rootTree) {
        return;
      }
      while (nodeTree.left) {
        nodeTree = nodeTree.left;
      }
      return nodeTree.data;
    }
  
max() {                                 //максимальный элемент дерева  
      if (!this.rootTree) {
        return;
      }
      let nodeTree = this.rootTree;
      while (nodeTree.right) {
        nodeTree = nodeTree.right;
      }
      return nodeTree.data;
    }
  }
const bst = new BinarySearchTree();
function addData(){
    bst.add(13);
    bst.add(15);
    bst.add(9);
    bst.add(18);
    bst.add(32);
    bst.add(25);
    console.log(bst);
}
function getData(){
    console.log(bst.min());
    console.log(bst.max());
    console.log(bst.root());
}
function hasData(data){
    console.log(bst.has(data))
}
function findData(data){
    console.log('find:',bst.find(data))
}

addData();
getData();
hasData(25);
findData(18);
