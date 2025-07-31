// Destructuring Example using Arrays

const notes = [
  {
    title: "Grocery List",
    content: "Milk, Bread, Eggs, Butter",
  },
  {
    title: "Meeting Notes",
    content: "Discuss project milestones and deadlines.",
  },
  {
    title: "Ideas",
    content: "Start a blog about JavaScript tips.",
  },
];

const [firstNote, secondnote, ...otherNotes] = notes;

console.log(firstNote);
console.log(secondnote);
console.log(otherNotes);

// Rest operator example

const { title, content } = firstNote;

console.log(title);
console.log(content);
