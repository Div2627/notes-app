const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const PORT = 3000;

// GET - Get all notes
app.get("/notes", (req, res) => {
    const data = fs.readFileSync("notes.json", "utf-8");
    const notes = JSON.parse(data);

    res.json(notes);
});

// POST - Create a new note
app.post("/notes", (req, res) => {
    const data = fs.readFileSync("notes.json", "utf-8");
    const notes = JSON.parse(data);

    const newNote = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content
    };

    notes.push(newNote);

    fs.writeFileSync(
        "notes.json",
        JSON.stringify(notes, null, 2)
    );

    res.status(201).json(newNote);
});

// DELETE - Delete a note
app.delete("/notes/:id", (req, res) => {
    const data = fs.readFileSync("notes.json", "utf-8");
    const notes = JSON.parse(data);

    const noteId = Number(req.params.id);

    const updatedNotes = notes.filter(note => note.id !== noteId);

    if (updatedNotes.length === notes.length) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    fs.writeFileSync(
        "notes.json",
        JSON.stringify(updatedNotes, null, 2)
    );

    res.json({
        message: "Note deleted successfully"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});