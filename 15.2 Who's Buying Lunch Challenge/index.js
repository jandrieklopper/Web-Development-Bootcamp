var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
function whosPaying(names) {
  // Check if the array is empty
  if (names.length === 0) {
    return "The list of names is empty.";
  }

  // Generate a random index within the range of the array length
  const randomIndex = Math.floor(Math.random() * names.length);

  // Get the selected person's name
  const selectedPerson = names[randomIndex];

  // Return the formatted output
  return `${selectedPerson} is going to buy lunch today!`;
}
