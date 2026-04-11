//^ array filter
const players = [34, 55, 64, 65, 70, 77, 74, 79]
const selectedPlayers = players.filter(player => player >= 70)
// console.log(selectedPlayers);

const members = ['ma', 'baba', 'miraj', 'shahajadi', 'labib']
const lengthResult = members.filter(member => member.length >= 4)
// console.log(lengthResult);

//^ array find
const players1 = [34, 55, 64, 65, 70, 77, 74, 79]
const findPlayer = players1.find(player=>player>77)
console.log(findPlayer);