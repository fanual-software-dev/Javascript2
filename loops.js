// Question number 1

const Given_year = 2012

try { 

    if(Given_year%4==0){
        console.log(Given_year,' is a leap year.')
    }

    else{
        throw new Error(' the given year is not leap year.')
    }
}
catch(error){
    console.log(error)
}


// Question number 2

for (let year = 2014; year <= 2050; year++) {
    let date = new Date(year, 0, 1); // January is month 0
    if (date.getDay() === 0) {
        console.log(`January 1st, ${year} is a Sunday.`);
    }
}

//  Question number 3

for (let i = 0;i<=15;i++ ){
    if(i%2!=0){
        console.log(i,' is odd')
    }

    else{
        console.log(i,' is even')
    }
}

// Question number 4

function Check_Palindrome(given){
    let i = 0
    let j = given.length-1

    while (i<given.length && j>-1){
        if (given[i]!=given[j]){
            return console.log(`${given} is not palindrome`)
        }

        i++
        j--
    }

    return console.log(`${given} is palindrome`)
}

Check_Palindrome('madm')
