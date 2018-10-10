let action = process.argv[2]
let amount = Number(process.argv[3])
let balance = 1000

if ( isNaN(amount)){
    console.log(`oh no, u passed ${process.argv[3]} instead of a number`)


} else if (action == 'give'){

    balance += amount
    console.log('thanks for your deposit')
    // console.log('you now have,' +balance+' dollars');
    console.log(`you now have, ${balance} dollars`);

    // console.log('gonna do some depositing');
} else if (action == 'take'){

    balance -= amount
    console.log(`you've just taken out ${amount}`)
    console.log(`you've got ${amount} left`)

} else {
    console.log('sorry,'+ action+' is not a function')
    console.log(`why dont you try 'give' or 'take'`)
}
