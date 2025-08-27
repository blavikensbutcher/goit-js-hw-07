const listItems = document.querySelector("#categories");

console.log(`Number of categories: ${listItems.children.length}`);

for (const item of listItems.children) {
  const categoryName = item.querySelector("h2").textContent;
  const itemCount = item.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemCount}`);
}
