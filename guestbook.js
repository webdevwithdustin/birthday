const SHEET_ID = '1AiaqLFJP30Pylfix7SC4wSZzTXPYUY994faLysWHq6s'; // Replace with your Google Sheet ID
const API_KEY = 'AIzaSyC0KfULyZLrneb4f52_duQBqMBSRegw-QE';   // Replace with your API key

// Load Google API client
function loadClient() {
    gapi.load('client', () => {
        gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
        }).then(() => {
            console.log('Google API client loaded.');
            fetchEntries();
        });
    });
}

// Submit a new entry
document.getElementById('guestbook-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: 'A:B',
        valueInputOption: 'RAW',
        resource: {
            values: [[name, message]],
        },
    }).then(() => {
        alert('Your message has been added!');
        fetchEntries();
    }).catch(err => console.error('Error adding entry:', err));
});

// Fetch entries from Google Sheets
function fetchEntries() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SHEET_ID,
        range: 'A:B',
    }).then(response => {
        const entries = response.result.values || [];
        const list = document.getElementById('entries-list');
        list.innerHTML = '';
        entries.forEach(([name, message]) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${name}: ${message}`;
            list.appendChild(listItem);
        });
    }).catch(err => console.error('Error fetching entries:', err));
}

// Initialize the client on load
loadClient();