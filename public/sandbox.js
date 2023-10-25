"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
logDetails(12345, "TV");
const greet = (user) => {
    console.log(`${user.name} say hello`);
};
greet({ name: "Ghafor Sabury", uid: 7875097654 });
greet({ name: "Mohammad Karimi", uid: '9097' });
