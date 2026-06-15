import express from "express";

const app = express();
const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "A Joke", content: "This is a Joke" },
    { id: 2, title: "Another Joke", content: "This is another Joke" },
    { id: 3, title: "Third Joke", content: "This is third Joke" },
    { id: 4, title: "Forth Joke", content: "This is forth Joke" },
    { id: 5, title: "Fifth Joke", content: "This is fifth Joke" }
  ];

  res.send(jokes)

});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
