function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowerCaseCharacters = "abcdefghijklmnopqrstuwxyz";
    const upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
    const numberCharacters = "0123456789";
    const symbolCharacters = "!@#$%^&*()_+-=,.<>/?;:'\"[]{}\\|`~";

    let allowedCharacters = "";
    let password = "";

    allowedCharacters += includeLowercase ? lowerCaseCharacters : "";
    allowedCharacters += includeUppercase ? upperCaseCharacters : "";
    allowedCharacters += includeNumbers ? numberCharacters : "";
    allowedCharacters += includeSymbols ? symbolCharacters : "";

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedCharacters.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    } 
    
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
        password += allowedCharacters[randomIndex];
    }

    return password;
}

const passwordLength = 20;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowerCase,
                                  includeUpperCase,
                                  includeNumbers,
                                  includeSymbols);

console.log(`Generated password: ${password}`);
