const inventory = [];
for (let i = 0; i < 10; i++){
  inventory.push("Empty");
}

function addItem(item){
  for (let i = 0; i < inventory.length; i++){
    if (inventory[i] === "Empty"){
      inventory[i] = item;
      console.log(`Додано предмет: "${item}" у слот ${i}`);
      return true;
    }
  }
  console.log(`Рюкзак переповнений! Не вдалося додати "${item}" `); 
  return false;
}
function removeItem(item){
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i] === item) {
      inventory[i] = "Empty";
      console.log(`Видалено предмет: "${item}" зі слота ${i}`);
      return true;
    }
  }
  console.log(`Предмет "${item}" не знайдено в інвентарі`);
  return false;
};
function compact(){
  const items = [];
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i] !== "Empty") {
      items.push(inventory[i]);
    }
  }
  while (items.length < inventory.length) {
    items.push("Empty");
  }
  for (let i = 0; i < inventory.length; i++) {
    inventory[i] = items[i];
  }
  console.log("Інвентар успішно ущільнено!"); }


addItem("Річ");
addItem("Річ2");
addItem("Річ3");
console.log("Поточний інвентар:", inventory);

removeItem("Річ2");
console.log("Поточний інвертар", inventory)

compact();
console.log("Поточний інвертар:", inventory);