function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return "please provide an array";
    }

    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
const friends = ["kutub", "lion", "shamol", "sabbir"];
const myBigBuddy = megaFriend(friends);
// console.log(myBigBuddy);

// index of diye check kora
// if(friends.indexOf("lion") != -1){
//     console.log("lion exist");
// }

// include diye check kora
// if(friends.includes("lion") == true){
//     console.log("lion exist using includes");
// }
// else{
//     console.log("fox does not exist");
// }

//concat multiple array
const first = [1, 2, 3,];
const second = [4, 5 ,6];
const combined = first.concat(second);
console.log(combined);