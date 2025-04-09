function cToF(celsius) {
    console.log(`${celsius}°C is ${(celsius * 9 / 5 + 32)}°F.`);
}

function fToC(fahrenheit) {
    console.log(`${fahrenheit}°F is ${((fahrenheit - 32) * 5 / 9)}°C.`);
}

// Exemplu de utilizare
cToF(60); // Output: 60°C is 140°F.
fToC(45); // Output: 45°F is 7.222222222222222°C.
