var length = 20;

var includeLowerCase = true;
var includeUpperCase = true;
var includeDigits = true;
var includeSymbols = true;

var random = new Random();

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var digits = "1234567890";
var symbols = "!@#$%^&*()_+-=,.<>/?;:'\"[]{}\\|`~";

var randomCharacter = "";
var password = "";

randomCharacter += includeUpperCase ? upperCase : "";
randomCharacter += includeDigits ? digits : "";
randomCharacter += includeSymbols ? symbols : "";
randomCharacter += includeLowerCase ? lowerCase : "";

for (int i = 0; i < length; i++)
{
    password += randomCharacter[random.Next(0, randomCharacter.Length)];
}

Console.WriteLine("Generated password: " + password);
