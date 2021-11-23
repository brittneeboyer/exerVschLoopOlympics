// Preliminaries
for (var i = 0; i < 10; i++){
    console.log(i)
}

for (var i = 10 - 1; i >= 0; i--){
    console.log(i)
}

var fruit = ["banana", "orange", "apple", "kiwi"]
for (var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

// Bronze Medal
var numb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
for (var i = 0; i < numb.length; i++){
    console.log(numb)
}

for (var i = 0; i < 100; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}

const fruity = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for (var i = 0; i < fruity.length; i+= 2){
    console.log(fruity[i])
}

// Silver Medal
const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

for (var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray.name)
}

for (var i = 0; i < peopleArray.length; i++){
    console.log(peopleArray.name),
    console.log(peopleArray.occupation)
}

