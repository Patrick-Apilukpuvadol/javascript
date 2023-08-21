let pokemonTeam = [
	"pikachu",
	"mewtwo",
	"zapdos",
	"charmander",
	"eevee",
	"bulbasaur",
	"agumon", // Digimon?!
	"oshawott",
	"chikorita",
	"teddiursa",
	"weedle",
	"squirtle",
	"psyduck",
	"meowth"
]

//Numerators vs Iterators
//Numerator works off the index of the value in the array
//Iterators works off the specified value in the array

// for loops
// for (counter, condition, incrementer){action}
for(let i = 0; 1 < pokemenTeam.length; i++){
    console.log(pokemenTeam[i] + " is at index " + i);
}
// for of 
let counter = 2;
for (const [index, pokemonName] of pokemonTeam.entries()) {
	if (index < 2){
		continue;
	}
	if (index == counter){
		console.log(pokemonTeam[index] + " is at index " + index);
		counter += 2;
	}
}


// for in 






// while loop


// do while loop 

do {

} while ()

/*

{
	block of stuff to do 
}

(condition to check )

*/