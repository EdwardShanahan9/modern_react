const note = {
  title: "Ternary Operator",
  description: "The ternary operator is a shorthand for an if-else statement.",
  isPinned: true,
};

const noteText = `Title: ${note.title}
Description: ${note.description}, status: ${
  note.isPinned ? "Pinned" : "Not Pinned"
}`;

console.log(noteText);
