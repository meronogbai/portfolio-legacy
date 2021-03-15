const outputListFromTags = tags => {
  const list = document.createElement('ul');
  tags.forEach(tag => {
    const listItem = document.createElement('li');
    listItem.textContent = tag.node.topic.name;
    listItem.className = 'bg-gray-700 text-white inline-block px-2 py-1 rounded mr-1 mt-1';
    list.appendChild(listItem);
  });
  return list;
};

export default outputListFromTags;
