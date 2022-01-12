const box = document.querySelector('div');
let elems = box.children;
console.log(elems);

for (let node of elems) {
  console.log(node.textContent);
}