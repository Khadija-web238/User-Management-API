const express = require('express');
const app = express();
app.use(express.json());

let users = [
  { id: 1, name: "Mohsin", email: "mohsin@example.com" },
  { id: 2, name: "Amna", email: "amna@example.com" },
];

let books = [
  { id: 1, name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 2, name: "To Kill a Mockingbird", author: "Harper Lee" },
];

let games = [
  { id: 1, name: "The Legend of Zelda", genre: "Action-Adventure" },
  { id: 2, name: "Super Mario Bros", genre: "Platformer" },
];

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  res.status(200).json(user);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Name and email are required",
    });
  }

  if (!email.includes('@')) {
    return res.status(400).json({
      error: "Email is not in a valid format",
    });
  }

  const newUser = {
    id: users.length + 1,
    name: name,
    email: email,
  };

  users.push(newUser);

  res.status(201).json({
    message: "User successfully created!",
    user: newUser,
  });
});

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Name and email are required",
    });
  }

  user.name = name;
  user.email = email;

  res.status(200).json({
    message: "User updated successfully!",
    user: user,
  });
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users.splice(index, 1);

  res.status(200).json({
    message: "User deleted successfully!",
  });
});

app.get('/books', (req, res) => {
  res.status(200).json(books);
});

app.get('/games', (req, res) => {
  res.status(200).json(games);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server Runs : http://localhost:${PORT}`);
});