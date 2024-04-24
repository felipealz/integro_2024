var input = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

function apples(input) {
    const quantityBoxes = 4;

    // Divide the apples into boxes
    const box = [];
    for (let i = 0; i < input.length; i += quantityBoxes) {
        box.push(input.slice(i, i + quantityBoxes));
    }

    // Group the boxes into packages of two
    const packs = [];
    for (let i = 0; i < box.length; i += 2) {
        packs.push([box[i], box[i + 1]]);
    }

    // Distribute the packages among friends
    const friends = [];
    const numberFriends = packs.length / 2; // Each friend receives 2 packages
    for (let i = 0; i < numberFriends; i++) {
        friends.push([packs[i * 2], packs[i * 2 + 1]]);
    }

    return friends;
}

console.log(apples(input))