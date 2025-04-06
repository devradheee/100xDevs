// For Loop
for (let i = 1; i <= 5; i++) {
    console.log(i); // print 1 to 5
}

// While Loop
let j = 1;

while (j <= 5) {
    console.log(j); // print 1 to 5
    j++;
}


// array of users
let users = [" Radheshyam", "Harkirat", "Deepak", "Rahul", "Rohit"];

// console.log(users[0]); //  Radheshyam
// console.log(users[1]); // Harkirat
// console.log(users[2]); // Deepak
// console.log(users[3]); // Rahul
// console.log(users[4]); // Rohit

// For Loop
for (let i = 0; i < 4; i++) {
    console.log(users[i]); // print  Radheshyam, Harkirat, Deepak, Rahul
}

let totalUsers = users.length;

for (let i = 0; i < totalUsers; i++) {
    console.log(users[i]); // print  Radheshyam, Harkirat, Deepak, Rahul, Rohit
}