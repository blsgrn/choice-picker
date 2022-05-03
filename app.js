const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
});

function createTags(input) {
  const tags2 = input.split(","); //create the list
  const tags1 = tags2.filter((tag) => tag.trim() !== ""); //returns items that satisfy the condition
  const tags = tags1.map((tag) => tag.trim()); //to each item performs a function .i.e remove white space and returns a list

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}
