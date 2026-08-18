const noteForm = document.getElementById("noteForm");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const notesContainer = document.getElementById("notesContainer");


// Get and display all notes
async function loadNotes() {
    const response = await fetch("/notes");
    const notes = await response.json();

    notesContainer.innerHTML = "";

    notes.forEach(note => {
        const noteElement = document.createElement("div");

        noteElement.className = "note";

        noteElement.innerHTML = `
            <h2>${note.title}</h2>
            <p>${note.content}</p>
            <button class="delete-btn" onclick="deleteNote(${note.id})">
                Delete
            </button>
        `;

        notesContainer.appendChild(noteElement);
    });
}


// Create a new note
noteForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = titleInput.value;
    const content = contentInput.value;

    await fetch("/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            content: content
        })
    });

    titleInput.value = "";
    contentInput.value = "";

    loadNotes();
});


// Delete a note
async function deleteNote(id) {
    await fetch(`/notes/${id}`, {
        method: "DELETE"
    });

    loadNotes();
}


// Load notes when page opens
loadNotes();