document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('button').addEventListener('click', function (event) {
    let inputBox = document.getElementById('item');
    let inputValue = inputBox.value;
    let listitem = createNewListItem(inputValue);
    let list = document.querySelector('ul');
    list.appendChild(listitem);
  });
});
function createNewListItem(itemText) {
  console.log(itemText);
  let li = document.createElement('li');
  let span = document.createElement('span');
  let spanText = document.createTextNode(itemText);
  span.appendChild(spanText);
  li.appendChild(span);
  let button = document.createElement('button');
  let text = document.createTextNode('delete');
  button.addEventListener('click', function (event) {
    console.log('item list deleted: ' + itemText);
    li.remove();
  });
  button.appendChild(text);
  li.appendChild(button);
  console.log("createElement", li);
  return li;
}