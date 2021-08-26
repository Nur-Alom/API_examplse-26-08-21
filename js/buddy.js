
// function callBuddy() {
//     fetch('https://randomuser.me/api/?results=5')
//         .then(res => res.json())
//         .then(data => console.log(data))
// };

const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
};

const displayBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email}`;
        buddiesDiv.appendChild(p);
        console.log(buddy.name.first, buddy.name.last, buddy.name);
    }
}


