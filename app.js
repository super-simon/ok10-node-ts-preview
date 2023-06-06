const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

const hubkaBobs = [
  {
    name: "Hubka Bob 1",
    age: 18,
    gender: "other",
  },
  {
    name: "Hubka Bob 2",
    age: 18,
    gender: "other",
  },
  {
    name: "Hubka Bob 3",
    age: 18,
    gender: "other",
  },
  {
    name: "Hubka Bob 4",
    age: 18,
    gender: "other",
  },
  {
    name: "Hubka Bob 5",
    age: 18,
    gender: "other",
  },
  {
    name: "Hubka Bob 6",
    age: 18,
    gender: "other",
  },
];

app.get("/hubkaBobs", (req, res) => {
  res.json(hubkaBobs);
});

app.post("/hubkaBobs", (req, res) => {
  hubkaBobs.push(req.body);

  res.status(201).json({ message: "Hubka Bob created." });
});

app.put("/hubkaBobs/:id", (req, res) => {
  const { id } = req.params;
  const updatedHubkaBobInfo = req.body;

  hubkaBobs[+id - 1] = updatedHubkaBobInfo;

  res
    .status(200)
    .json({ message: "Hubka Bob updatet", data: updatedHubkaBobInfo });
});

app.delete("/hubkaBobs/:id", (req, res) => {
  const { id } = req.params;
  hubkaBobs.splice(+id - 1, 1);

  res.status(200).json({ message: "Hubka Bob deleted" });
});

app.post;

const PORT = 5100;
app.listen(PORT, () => {
  console.log(`Server is started on ${PORT}`);
});
