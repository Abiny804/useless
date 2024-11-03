// List of participants
const participants = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward'];

// Mapping of voting to bulb illumination
const bulbMapping = {
    0: 3, // Alice -> Diana
    1: 4, // Bob -> Edward
    2: 0, // Charlie -> Alice
    3: 1, // Diana -> Bob
    4: 2  // Edward -> Charlie
};

// Reference to the participant list container
const participantListContainer = document.getElementById('participant-list');

// Function to create participant table rows
participants.forEach((participant, index) => {
    const row = document.createElement('tr');

    const bulbCell = document.createElement('td');
    const bulb = document.createElement('div');
    bulb.classList.add('bulb');
    bulb.id = 'bulb-' + index;
    bulbCell.appendChild(bulb);

    const nameCell = document.createElement('td');
    nameCell.textContent = participant;

    const voteCell = document.createElement('td');
    const voteButton = document.createElement('button');
    voteButton.textContent = 'Vote';
    voteButton.classList.add('vote-button');

    // Adding click event to the vote button
    voteButton.addEventListener('click', () => {
        // Turn off all bulbs
        document.querySelectorAll('.bulb').forEach(b => {
            b.classList.remove('on');
        });
        // Get the target bulb index and turn on the corresponding bulb
        const targetIndex = bulbMapping[index];
        if (targetIndex !== undefined) {
            document.getElementById('bulb-' + targetIndex).classList.add('on');
        }
    });

    voteCell.appendChild(voteButton);

    // Append cells to the row
    row.appendChild(bulbCell);
    row.appendChild(nameCell);
    row.appendChild(voteCell);

    // Append row to the table
    participantListContainer.appendChild(row);
});