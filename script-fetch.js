async function fetchFoxImage() {
  console.log("Hello world! :)");

  //IMPORTANT INFOMATION
  //Rule of Thumb - if its a promise - await it
  //fetch -> fox API (URL) -> Async (await)

  //const === Immutable (final)
  const foxResult = await fetch("https://randomfox.ca/floof/");
  const bookResult = await fetch(
    "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
  );

  const foxData = await foxResult.json(); // <-- convert readable stream to json
  const bookData = await bookResult.json();
  const foxImageElement = document.getElementById("foxImage");
  foxImageElement.src = foxData.image;

  console.log(foxData.image);
  console.log(bookData.docs[0].title);
  console.log(bookData.docs[1].title);
}

async function main() {
  await fetchFoxImage();
  const newFoxButton = document.getElementById("newFoxButton");
  newFoxButton.addEventListener("click", fetchFoxImage);
}

//start function
main();
