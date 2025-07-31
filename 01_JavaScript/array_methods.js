const notes = [
  {
    title: "Grocery List",
    content: "Milk, Bread, Eggs, Butter",
    isPinned: true,
  },
  {
    title: "Meeting Notes",
    content: "Discuss project milestones and deadlines.",
    isPinned: false,
  },
  {
    title: "Ideas",
    content: "Start a blog about JavaScript tips.",
    isPinned: true,
  },
];

const numbers = [1, 2, 3, 4, 5];

const titles = notes.map((note) => note.title);

const pinnedNote = notes.filter((note) => note.isPinned);

const total = numbers.reduce((acc, number) => acc + number, 1);

console.log(total);
