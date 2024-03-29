import item from './item.js';

const items = [];
let hideCheckedItems = false;

function findById(id) {
  console.dir(this.items);
  let foundId = this.items.find(item => item.id === id);
  return foundId;
}

function addItem(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndToggleChecked(id) {
  let foundToggleChecked = this.findById(id);
  if (foundToggleChecked) {
    foundToggleChecked.checked = !foundToggleChecked.checked;
  } else {
    console.log(`Cannot add item: ${error.message}`);
  }
}

function findAndUpdateName(id, newName) {
  try {
    item.validateName(newName);
    this.findById(id).name = newName;
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`);
  }
}

function findAndDelete(id) {
  this.items = this.items.filter(item => item.id !== id);
}

function toggleCheckedFilter() {
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  findById,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
