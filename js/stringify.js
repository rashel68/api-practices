const friends = [
    { name: 'minhaj', id: 341042, reg: 259562 },
    { name: 'Tamjid', id: 341045, reg: 258552 },
    { name: 'Rokib', id: 341025, reg: 259582 },
    { name: 'Hasan', id: 259537, reg: 341068 }
];

// JSON.stringify convert a string object 
const newFriend = JSON.stringify(friends);
// console.log(newFriend);


// JSON.parse convert string object to array of object 
const parseFriend = JSON.parse(newFriend);
// console.log(parseFriend);