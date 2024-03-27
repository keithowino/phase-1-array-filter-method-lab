// Code your solution here

// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// const drivers = [
//   {
//     name: 'Bobby',
//     hometown: 'Pittsburgh' },
//   {
//     name: 'Sammy',
//     hometown: 'New York' } ,
//   {
//     name: 'Sally',
//     hometown: 'Cleveland' },
//   {
//     name: 'Annette',
//     hometown: 'Los Angeles' },
//   {
//     name: 'Bobby',
//     hometown: 'Tampa Bay' }
// ];

function findMatching(names, str){

  function pick(value){
    let lowerStr = str.toLowerCase();

    if(value.toLowerCase() === lowerStr){
      return value;
    };
  };

  return names.filter(pick);
};

function fuzzyMatch(names, beginningStr){

  function beginningMatch(value){
    let len = beginningStr.length;
    let match = value.slice(0, len) === beginningStr;

    if(match){
      return value;
    };
  };

  return names.filter(beginningMatch);
};

function matchName(names, str){

  function propertyMatch(value){
    return value.name === str ? value : undefined;
  };

  return names.filter(propertyMatch)
};

console.log(findMatching(drivers, "bobby"));