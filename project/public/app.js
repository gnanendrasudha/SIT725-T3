document.getElementById('addEntryButton').addEventListener('click', async () => {
    const input = document.getElementById('entryInput');
    const entry = input.value;

    if (!entry) {
        alert('Please enter a value.');
        return;
    }

    try {
        const response = await fetch('/add-entry', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ entry })
        });
        const data = await response.json();
        if (data.success) {
            updateEntries(data.entries);
            input.value = '';
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

function updateEntries(entries) {
    const container = document.getElementById('entriesContainer');
    container.innerHTML = '';
    entries.forEach(entry => {
        const div = document.createElement('div');
        div.textContent = entry;
        container.appendChild(div);
    });
}
