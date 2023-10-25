type StringOrNumber = string | number;

type ObjWithName = {
    name: string,
    uid: StringOrNumber
}

const logDetails = (uid: StringOrNumber, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

logDetails(12345, "TV");

const greet = (user: ObjWithName) => {
    console.log(`${user.name} say hello`);
}

greet({ name: "Ghafor Sabury", uid: 7875097654 });
greet({ name: "Mohammad Karimi", uid: '9097' });
