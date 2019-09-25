function create(name) {
  return {
    id: cuid(),
    name: name,
    checked: false
  };
}

function validateName(name) {
  //if (!name) throw new Error('Name does not exits - Name must not be blank');
  if (name === '') throw new Error('Name must not be blank');
}

export default {
  create,
  validateName
};
