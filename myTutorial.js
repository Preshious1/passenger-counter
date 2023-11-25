console.log("HELLO WORLD");

//RUNNING JAVASCRIPT
var myName = "Precious";
console.log(myName);

//COMMENTS
// var num = 5; inline comments
/* this is a multiline comment
delete one
delete two
delete three */

/* //DATA TYPES
1. Undefined
2. null
3. boolean
4. string
5. symbol
6. number
7. object */

/* // DECLARING VARIABLES
var myName = "Precious";
let myName = "Precious"; // used within the scope of where you'll declare it
const pi = 3.14; // Can't be changed. Always constant
 */
//STORING VALUES WITH ASSIGNMENT OPERATOR
var a; // Declaring variable
var b = 2; // Declaring & Assigning 2 to b
console.log(a);
a = 8;
b = a;
//console.log(a);

//INITIALIZING VARIABLES WITH ASSIGNMENT OPERATORS
var a = 7;
var b = 5;
a = 4 + b;
console.log(a)

//UNINITIALIZED VARIABLES
var a = 3;
var b = 4;
var c = 7;
console.log(c);

var sum = 10 * 3;
console.log (sum);

var difference = 12 - 5;
console.log(difference);

//INCREMENT & DECREMENT
 var myTotal = 65;
 //myTotal += 1;
 myTotal ++;
 console.log(myTotal)

 //Decrement
 var mySum = 40;
 mySum --;
 console.log(mySum);

 //Decimal Numbers
 var myDecimalNumber = 6.89;
 myDecimalNumber ++;
 console.log(myDecimalNumber)

 //Multiply Decimals
 var product = 2.6 * 4.8;
 console.log(product)
 
 //FINDING A REMAINDER
 var myRemainder ;
 remainder = 11 % 3;
 //Used to determine if remainder is even or odd. if it is zero, it is even

 var a = 3;
 var b = 5;
 a = b + 7;
 b = a + b;
 console.log(a);
 console.log(b);

 //COMPOUND ASSIGNMENT WITH AUGMENTED SUBTRACTION
 // a -= 6. This means a = a - 6
 // a += 4. This means a = a + 4

 //DECLARE STRING VARIABLE
 var firstName = "Chibueze";
 var lastName = "Eke";
 fullName = firstName + " " + lastName;
 console.log(fullName);

 //ESCAPING LITERAL QUOTES
 var myText = "I am a \"double quoted\" string inside \"double quotes\""
 console.log(myText)

 //QUOTING STRINGS WITH SINGLE QUOTES
 var myOtherText = '<a href="http://www.example.com" target="_blank">Link </a>';
 // It is used instead of the \ 
 console.log(myOtherText);

 //ESCAPE SEQUENCES IN STRINGS
 /*
 \' single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \ form feed
 */

 var myStr = "FirstLine\n\tSecondLine\nThirdLine";
 console.log(myStr);

 //CONCATENATING STRINGS WITH PLUS OPERATOR
 var myFirstSentence = "I am a guy." + " I am from Umuahia"
 console.log(myFirstSentence);


 //CONCATENATING STRINGS WITH PLUS EQUALS OPERATOR
 var mySecondSentence = "God is good. ";
 mySecondSentence += "All the time"
 console.log(mySecondSentence);


 //CONSTRUCTING STRINGS WITH VARIABLES
 var myName = "Precious";
 var mySentence = "He said that his name is " + myName + ", who hails from Abia state."
 console.log(mySentence);

 //APPENDING VARIABLES TO STRINGS
var anAdjective = "beautiful!";
var myOtherSentence = "My girlfriend is very ";
myOtherSentence += anAdjective;
console.log(myOtherSentence)

//FIND LENGTH OF STRING
var firstName = "Chibueze";
firstName = firstName.length
console.log(firstName);

var lastName = "Eke";
lastName = lastName.length;
console.log(lastName);

var middleName = "Precious";
middleName = middleName.length;
console.log(middleName);

var countryName = "Nigeria";
countryName = countryName.length;
console.log(countryName);

//BRACKET NOTATION TO FIND FIRST CHARACTER IN A STRING

var firstName = "Chibueze";
firstName = firstName[6]
console.log(firstName);

var lastName = "Eke";
lastName = lastName[1];
console.log(lastName);

//STRING IMMUTABILITY
var myFirstName = "Chibueze";
myFirstName = "Chiboy";
console.log(myFirstName);

//BRACKET NOTATION TO FIND Nth CHARACTER IN A STRING
var firstName = "Chibueze";
firstName = firstName[4];
console.log(firstName);

//BRACKET NOTATION TO FIND LAST CHARACTER IN A STRING
var lastName = "Ujunwa";
lastLetterOflastName = lastName[lastName.length - 1];
console.log(lastLetterOflastName);

var middleName = "Precious"
lastLetterOfMiddleName = middleName[middleName.length - 1];
console.log(lastLetterOfMiddleName);

//BRACKET NOTATION TO FIND Nth-to-Last CHARACTER IN A STRING
var myMiddleName = "Precious";
thirdToTheLastLetterOfMiddleName = middleName[middleName.length - 3];
console.log(thirdToTheLastLetterOfMiddleName);

//WORD BLANKS
function wordBlanks(myNoun, myAdjective, myVerb) {
    //var result = "";
var result = "My name is " + myNoun + ", and I am very " + myAdjective + ". I " + myverb + "a lot"
return result;
}
console.log(wordBlanks("Precious", "handsome", "flex"));


function wordBlanks(myNoun, myAdjective, myVerb) {
    var reult = "";
    var result = "My name is " + myNoun + ", and I am very " + myAdjective + ". I " + myVerb + " a lot.";
    return result;
}
console.log(wordBlanks("Precious", "handsome", "flex"));

//STORE MULTIPLE VALUES IN ARRAYS
var myDetails = ["Precious", 25]

//NESTED ARRAYS
var myFam = [["Precious", 25], ["Kelechi", 23], ["Loveth", 28]]

//ACCESSING ARRAY DATA WITH INDEXES

var myNumbers = [50,60,70];
var mySelectedNumber = myNumbers[1];
console.log(mySelectedNumber);

var myAlphabets = ["S", "T", "U", "V", "W"]
var myChosenAlphabet = myAlphabets[0];
console.log(myChosenAlphabet); 

//MODIFY ARRAY DATA WITH INDEXES

var myNumberList = [2, 4, 6, 78];
myNumberList[2] = 43;
console.log(myNumberList);

var myExample = ["Amaka", "Oke", "Nneka"];
myExample[1] = "Emmanuela";
console.log(myExample);

//ACCESSING MULTI-DIMENSIONAL ARRAYS WITH INDEXES
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[3][0][1];
console.log(myData)

//MANIPULATE ARRAYS WITH PUSH(). This adds elements to the end of the array

var myArray = ["Precious", "Joe", "X-box"];
myArray.push(["happy", "joy"]);
console.log(myArray);

var myFam = ["Kelechi", "Chibueze"]
myFam.push(["Chinedu", "Uche"]);
console.log(myFam);

//MANIPULATE ARRAYS WITH POP(). This removes the last element

var mySkills = ["Wireframing", "Prototyping", "Lo-Fi"];
var removeSkill = mySkills.pop();
console.log(mySkills);

//MANIPULATE ARRAYS WITH SHIFT(). This removes the first element

var myNames = ["Chibueze", "Precious", "Eke"];
var removeName = myNames.shift();
console.log(myNames); 

//MANIPULATE ARRAYS WITH UNSHIFT(). This adds element to the beginning of an array

var myCars = ["Farrari", "Bugatti", "Maseratti"];
//myCars.shift();
myCars.unshift("Mercedez");
console.log(myCars);

//SHOPPING LIST

var myShoppingList = [["cereal", 4], ["milk", 5], ["bananas", 45]];
myShoppingList.shift();
myShoppingList.unshift(["detergent", 2]);
myShoppingList.push(["pepper", 5]);
myShoppingList.pop();
console.log(myShoppingList);

//REUSABLE FUNCTIONS

function myLocale() {
	console.log("Hello world");
}

myLocale(); // Call the function

function sayHello() {
    console.log("Hello, world!");
}

sayHello(); // Call the function


function myNewSkills() {
	console.log("Wireframing", "Prototyping", "Testing");
}

myNewSkills();

//PASSING VALUES TO FUNCTIONS WITH ARGUMENTS

function myFunctionWithDigits(a,b) {
	console.log(b - a);
	console.log(a * b);
	console.log(a / b);
}
myFunctionWithDigits(2,8);

//GLOBAL SCOPE AND FUNCTIONS

var myGlobal = 10;
function fun1() {

}
function fun2() {
	var output = "";
	if (typeof myGlobal != "undefined") {
		output += "myglobal: " + myGlobal; 
	}
	if (typeof oopsGlobal != "undefined") {
		output += " oopsGlobal: " + oopsGlobal;
	}
	console.log(output);
}
fun1();
fun2();

var myProperty = 5;
function myInterest() {
	ohGlobal = 3;

}
function myWorkHistory() {
	var result = "";
	if (typeof myProperty != "undefined") {
		result += myProperty;
	}
	if (typeof myWorkHistory != "undefined") {
		result += ohGlobal;
	}
	console.log(result);
}
myInterest();
myWorkHistory();

//LOCAL SCOPE AND FUNCTIONS

function myLocalScope() {
	var myVar = 5;
	console.log(myVar);
}
myLocalScope();
//console.log(myVar); This won't work  coz it is trying to access the variable outside the function


//GLOBAL VS LOCAL SCOPES IN FUNCTIONS

var outerWear = "T-shirt";
function myOutfit() {
	return outerWear;
}
console.log(myOutfit());

var mySurname = "Eke";
function myNewSurname() {
	var mySurname = "Jonathan";
	return mySurname;
}
console.log(myNewSurname());
console.log(mySurname);

var myNewFirtsname = "Mike";
function myOldFirstname() {
	return myNewFirtsname;
}
console.log(myOldFirstname())


//RETURN A VALUE FROM A FUNCTION WITH RETURN

function minusSeven(num) {
	return num - 10;
}
console.log(minusSeven(24));

function timesTwo(num) {
	return num * 2;
}
console.log(timesTwo(3));

//UNDERSTANDING UNDEFINED VALUE RETURNED FROM A FUNCTION

var sum = 0;
function addThree() {
	sum += 3;
	return sum;
}
console.log(addThree());

var myAge = 28;
function addToAge() {
	myAge += 5;
	return myAge;
}
console.log(addToAge());


//ASSIGNMENT WITH A RETURNED VALUE

var changed = 0;
function change(ourNum) {
	return (ourNum + 5) / 5;
	
}
changed = change(5);
console.log(change(10));
console.log(changed);

var changed = 0;
function change(myNum) {
	return (myNum + 5) / 5;
	
}
changed = change(5);

var processed = 0;
function processArg(myNum) {
	return (myNum + 4) / 5;
}
processed = processArg(21);
console.log(processed);


//STAND IN LINE

function nextInLine(arr, item) {
	arr.push(item)
	return arr.shift(item);
}
// console.log(nextInLine(1));
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//BOOLEAN VALUES
//True or False

function welcomeToBooleans() {
	return true;
}

function welcomeToBooleans() {
	return false;
}

//USE CONDITIONAL LOGIC WITH IF STATEMENTS
//Used to make decisions in code

function ourTrueOrFalse() {
	if (isItTrue) {
		return "Yes, it is true";
	}
	return "No, it's false";
}
console.log(ourTrueOrFalse(true));

function trueOrFalse(wasThatTrue) {
	if (wasThatTrue) {
		return "Yes, that was true";
	}
	return "No, that was false";
}
console.log(trueOrFalse(true));


function ourTrueOrFalse(isItTrue) {
    return isItTrue ? "Yes, it is true" : "No, it's false";
}

console.log(ourTrueOrFalse(false));


function myTeacher(Kevin) {
if (Kevin) {
	return "Yes, he is"
}
return "No, he isn't"
}
console.log(myTeacher(true));
console.log(myTeacher(false));

function ourTvBrand(Samsung) {
	if (Samsung) {
		return "Na Samsung"
	}
	return "No be samsung"
}
console.log(ourTvBrand(true));

function myOriginalSurname(Eke) {
	return Eke ? "Na Eke" : "No be Eke";
}
console.log(myOriginalSurname(true));

function myFakeFirstname(Mike) {
	if (Mike) {
		return "My fake firstname is Mike"
	}
	return "It is Ugo"
}
console.log(myFakeFirstname(false));

function myFakeFirstname(Chris) {
	return Chris ? "My fake firstname is Chris" : "No, it's not"
}
console.log(myFakeFirstname(true));

function myFirstSkill(Design) {
	if (Design) {
		return "My first skill is indeed Design"
	}
	return "No, it's not"
}
console.log(myFirstSkill(true));

function mySecondSkill(Prototyping) {
	return Prototyping ? "My second skill is indeed prototyping" : "No, it's not"
}
console.log(mySecondSkill(false));

//COMPARISON WITH THE EQUALITY OPERATOR

function testEqual(val) {
	if (val == 12) {
		return "Equal";
	}
	return "Not Equal";
}
console.log(testEqual(10));

//COMPARISON WITH THE STRICT EQUALITY OPERATOR

function testStrict(val) {
	if (val === 7) {
		return "Equal";
	}
	return "Not Equal";
}
console.log(testStrict(7));

//PRACTICE COMPARING DIFFERENT VALUES

function compareEquality(a, b) {
	if (a == b) {
		return "Equals"
	}
	return "Not Equal to"
}
console.log(compareEquality(10,"10"));


//COMPARISON WITH THE INEQUALITY OPERATOR

function compareInequality(a, b) {
	if (a != b) {
		return "Not Equal to"
	}
	return "Equals"
}
console.log(compareInequality(12, 24));

function testNotEqual(val) {
	if (val != 7) {
		return "Not Equal";
	}
	return "Equal";
}
console.log(testNotEqual(70));

//COMPARISON WITH STRICT INEQUALITY OPERATOR

function testNotEqual(val) {
	if (val !== 7) {
		return "Not Equal";
	}
	return "Equal";
}
console.log(testNotEqual(70));


//COMPARISON WITH THE LOGICAL AND OPERATOR

function testGreaterThan(val) {
	if (val > 100) {
		return "over 100"
	}
	if (val > 10) {
		return "over 10"
	}
	return "10 or under"
}
console.log(testGreaterThan(110));

function myTestGreaterThan(val) {
	if (val > 50){
		return "Greater than 50";
	}
	if (val > 25) {
		return "over 25";
	}
	if (val == 25) {
		return "Equals 25"
	}
	return "25 or under"
}
console.log(myTestGreaterThan(25));


//COMPARISON WITH GREATER THAN OR EQUAL TO OPERATOR

function testGreaterOrEqual(val) {
	if (val >= 20) {
		return "20 or over";
	}
	if (val >= 10 && val < 20) {
		return "10 or over";
	}
	return "less than 10"
}
console.log(testGreaterOrEqual(9));


//COMPARISON WITH LESS THAN TO OPERATOR


function testLessThan(val) {
	if (val < 25 && val > 5) {
		return "Under 25";
	}
	if (val < 5) {
		return "Under 5";
	}
	return "55 or Over";
}
console.log(testLessThan(4));


//COMPARISON WITH LESS THAN OR EQUAL TO OPERATOR

function testLessOrEqual(val) {
	if (val <= 60 && val >= 36) {
		return "60 or Less";
	}
	if (val <= 36) {
		return "36 or Less";
	}
}
console.log(testLessOrEqual(37));


function myTestLessOrEqual(val) {
	if (val <= 12) {
		return "Smaller than or Equal to 12";
	}
	if (val <= 24 && val >= 12) {
		return "Smaller than or Equal to 24";
	}
	return "More than 24";
}
console.log(myTestLessOrEqual(23));


//COMPARISON WITH THE LOGICAL AND OPERATOR
		//Checking if two things are true at the same time

function testLogicalAnd(val) {
	if (val <= 50) {
		if (val >= 25) {
			return "Yes";
		}
	}
	//This can be better represented this way:
	// if (val <= 50 val >= 25) {
		//return "Yes"
	//}
	return "No";
}
console.log(testLogicalAnd(26));

//COMPARISON WITH THE LOGICAL OR OPERATOR

function testLogicalOr(val) {
	if (val < 10) {
		return "Outside";
	}
	if (val > 20) {
		return "Outside";
	}
	//This can be better represented this way:
	//if (val < 10 || val > 20) {
		//return "Outside";
	//}
	return "Inside";
}
console.log(testLogicalOr(23));


//ELSE STATEMENTS

function myHouseNumber(val) {
	if (val == 3) {
		return "Yes";
	} else {
		return "No";
	}
}
console.log(myHouseNumber(3));

function mySiblings(val) {
	if (val == 2) {
		return "Yea, sure";
	} else {
		return "Nope";
	}
}
console.log(mySiblings(2));

function myNewAge(val) {
	if (val > 29) {
		return "It is what it is";
	} 
	if (val == 29) {
		return "Yeah, this is it"
	} else {
		return "Can't be true";
	}
}
console.log(myNewAge(2));

function testElse(val) {
	var result = "";
	if (val > 5) {
		result = "Bigger than 5";
	} else {
		result = "5 or Smaller"
	}
	return result
}
console.log(testElse(8));


//ELSE IF STATEMENTS

function testElseIf(val) {
	if (val > 10) {
		return "Greater than 10";
	} else if (val < 5) {
		return "Smaller than 5";
	} else {
		return "Between 5 and 10";
	}
}
console.log(testElseIf(5));

function myTestElseIf(val) {
	if (val > 40) {
		return "Greater than 40"
	} else if (val < 10) {
		return "Less than 10"
	} else {
		return "Between 10 and 40";
	}
}
console.log(myTestElseIf(24));

function myOtherTestElseIf(val) {
	if (val > 100) {
		return "Greater than 100";
	} else if (val < 45) {
		return "Less than 45";
	} else {
		return "Between 45 and 100"
	}
}
console.log(myOtherTestElseIf(34));

//CHAINING IF ELSE STATEMENTS

function testSize(num) {
if (num < 5) {
	return "Tiny"
} else if (num < 10) {
	return "Small";
} else if (num < 15) {
	return "Medium";
} else if (num < 20) {
	return "Large";
} else {
	return "Huge";
}
}
console.log(testSize(19));

//GOLF CODE

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
	if (strokes == 1) {
		return names[0];
	} else if (strokes <= par - 2) {
		return names[1];
	} else if (strokes == par - 1) {
		return names[2];
	} else if (strokes == par) {
		return names[3];
	} else if (strokes == par + 1) {
		return names[4];
	} else if (stroke == par + 2) {
		return names[5]
	} else if (strokes >= par + 3){
		return names[6];
	}
	return "Change Me";
}
console.log(golfScore(5, 4));


//SWITCH STATEMENTS

function caseInSwitch(val) {
	var answer = "";
	switch(val) {
		case 1:
			answer = "alpha";
			break;
			case 2:
				answer = "beta";
				break;
				case 3:
					answer = "gamma";
					break;
					case 4:
						answer = "delta";
	}
	return answer;
}
console.log(caseInSwitch(2));


//DEFAULT OPTION IN SWITCH STATEMENT

function switchOfStuff(val) {
	var answer = "";
	switch(val) {
		case "a":
			answer = "apple";
			break;
		case "b":
			answer = "bird";
			break;
		case "c":
			answer = "cat"
			break;
			default:
			answer = "stuff";
						 //This just serve as al else statement for sitch fxn
						//So, instead of returning an empty string, it returns "stuff"
			break;
	}
	return answer;
}
console.log(switchOfStuff("d"));


//MULTIPLE IDENTICAL OPTIONS IN SWITCH STATEMENTS
function sequentialSizes(val) {
	var answer = "";
	switch(val) {
		case 1:
		case 2:
		case 3:
			answer = "low"
			break;
		case 4:
		case 5:
		case 6:
			answer = "medium"
			break;
		case 7:
		case 8:
		case 9:
			answer = "high"
			break;
	}
	return answer
}
console.log(sequentialSizes(5));

//REPLACING IF ELSE CHAINS WITH SWITCH

function chainToSwitch(val) {
	var answer = "";

	switch(val) {
		case "bob":
		answer = "Marley";
		break;
		case 42:
		answer = "The answer";
		break;
		case 1:
		answer = "There is no #1";
		break;
		case 99:
		answer = "Missed me by this much!";
		break;
		case 7:
		answer = "Ate Nine";
		break;
	}
	//changing if's to switch
	// if (val === "bob") {
	// 	answer = "Marley";
	// } else if (val === 42) {
	// 	answer = "The answer";
	// } else if (val === 1) {
	// 	answer = "There is no #1";
	// } else if (val === 99) {
	// 	answer = "Missed me by this much!";
	// } else if (val === 7) {
	// 	answer = "Ate Nine";
	// } else {
	// 	answer = "void";
	// }
	return answer;
}
console.log(chainToSwitch(1));


// RETURNING BOOLEAN VALUES FROM FUNCTIONS

function isLess(a, b) {
	// if (a < b) {
	// 	return true;
	// } else {
	// 	return false;
	// }
	return a < b; //this is used to skip the if and else statements
}
console.log(isLess(100, 15));


//RETURNING EARLY PATTERN FROM FUNCTIONS

function abTest(a, b) {
	if (a < 0 || b < 0) {
		return undefined
	}
	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}
console.log(abTest(-2, 2));
console.log(abTest(2, 2));

//COUNTING CARDS

var count = 0;
function cc(card) {
	switch(card) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			count++;
			break;
		case 10:
		case "J":
		case "Q":
		case "K":
		case "A":
			count--;
			break;	
	}
	var holdbet = "Hold"
	if (count > 0) {
		holdbet = "Bet"
	}
	return count + " " + holdbet;
}
//cc(2); cc(3); cc(7); cc('K'); cc('A')
cc(2); cc("K"); cc(10); cc('K'); cc('A')
console.log(cc(4));


//BUILD JAVASCRIPT OBJECTS

var ourDog = {
//var object
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"]
	//"properties": values
};
console.log(ourDog);

var myDog = {
	"name": "Toni",
	"legs": 4,
	"tail": 1,
	"friends": []
};
console.log(myDog);


//ACCESSING OBJECT PROPERTIES WITH DOT NOTATION

var testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
};
var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
console.log(hatValue);
console.log(shirtValue);

//EXAMPLE
var myOwnFam = {
	"dad": "Jonathan",
	"mum": "Elizabeth",
	"sis": "Loveth",
	"myself": "Precious",
	"bro": "Moses"
};
var dadValue = myOwnFam.dad;
var mumValue = myOwnFam.mum;
var sisValue = myOwnFam.sis;
var myselfValue = myOwnFam.myself;
var broValue = myOwnFam.bro;

console.log(dadValue);
console.log(mumValue);
console.log(sisValue);
console.log(myselfValue);
console.log(broValue);


//ACCESSING OBJECT PROPERTIES WITH BRACKET NOTATION

var testObj = {
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
};
var entreeValue = testObj["an entree"];
var sideValue = testObj["my side"];
var drinkValue = testObj["the drink"];

console.log(entreeValue);
console.log(sideValue);
console.log(drinkValue);

var myFamily = {
	"lovely dad": "Big Joe",
	"sweet mum": "Ngoo bekee",
	"adorable sis": "Ada bekee",
	"wonderful bro": "Pusky" 
};
var dadValue = myFamily["lovely dad"];
var mumValue = myFamily["sweet mum"];
var sisValue = myFamily["adorable sis"];
var broValue = myFamily["wonderful bro"];

console.log(dadValue);
console.log(mumValue);
console.log(sisValue);
console.log(broValue);


//ACCESSING OBJECT PROPERTIES WITH VARIABLES

var testObj = {
	12: "Namaste",
	16: "Montana",
	19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];

console.log(player);

//UPDATING OBJECT PROPERTIES

var ourCat = {
	"name": "Julie",
	"legs": 4,
	"tail": 1,
	"friends": ["everything!"]
};
ourCat.name = "Fortuna";
console.log(ourCat);

var myFriend = {
	"name": "Wendy",
	"sex": "female",
	"origin": "rivers",
	"age": 26 
}
myFriend.name = "Ella";

var nameValue = myFriend.name;
var sexValue = myFriend.sex;
var originValue = myFriend.origin;
var ageValue = myFriend.age;

console.log(myFriend);


//ADD NEW PROPERTIES TO AN OBJECT

var ourDog = {
	"name": "Camper",
	"legs": 4,
	"tails": 1,
	"friends": ["everything!"]
};
ourDog.bark = "bow-wow";
console.log(ourDog);

var ourTelevisoin = {
	"brand": "samsung",
	"inches": 50,
	"type": "smart"
}
var brandValue = ourTelevisoin.brand;
var inchesValue = ourTelevisoin.inches;
var typeValue = ourTelevisoin.type;

ourTelevisoin.brand = "Panasonic";
console.log(ourTelevisoin);


var myDog = {
	"name": "Ikenna",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
};
myDog['bark'] = "woof!";

console.log(myDog);


//DELETE PROPERTIES FROM AN OBJECT

var myFrienda = {
	"name": "Fortune",
	"legs": 2,
	"hands": 2,
	"occupation": "Product Designer"
};
delete myFrienda.hands

console.log(myFrienda);

var myFullName = {
	"firstname": "Chibueze",
	"middlename": "Precious",
	"lastname": "Eke"
};
delete myFullName.middlename

console.log(myFullName);


//USING OBJECTS FOR LOOKUPS

function phoneticLookup(val) {
	var result = "";
var lookup = {
	"alpha": "Adams",
	"bravo": "Boston",
	"charlie": "Chicago",
	"delta": "Denver",
	"echo": "Easy",
	"foxtrot": "Frank"
};
result = lookup[val];
	// switch(val) {
	// 	case "alpha":
	// 		result = "Adams";
	// 		break;
	// 		case "bravo":
	// 		result = "Boston";
	// 		break;
	// 		case "charlie":
	// 		result = "Chicago";
	// 		break;
	// 		case "delta":
	// 		result = "Denver";
	// 		break;
	// 		case "echo":
	// 		result = "Easy";
	// 		break;
	// 		case "foxtrot":
	// 		result = "Frank";
	// 		break;
	// }
	return result
}
console.log(phoneticLookup("alpha"));


//TESTING OBJECTS FOR PROPERTIES

var myObj = {
	gift: "pony",
	pet: "kitten",
	bed: "sleigh"
};
function checkObj(checkProp) {

	if (myObj.hasOwnProperty(checkProp)) {
		return myObj[checkProp]
	} else {
		return "Not found"
	}
	//return "Change Me!";
}
console.log(checkObj("hello"));

var ourObj = {
	book: "The laws of human nature",
	fan: "Ox",
	mouse: "Hp",
	laptop: "Macbook" 
};
function checkOurObj(checkMyProp) {
	if (ourObj.hasOwnProperty(checkMyProp)) {
		return ourObj[checkMyProp]
	} else {
		return "Not available";
	}
}
console.log(checkOurObj("mouse"));


var kominiti = {
	backend: "Ikenna",
	frontend: "Josh",
	analyst: "Erin",
	QA: "Nabil",
	designer: "Fortune",
	writer: "Victoria"
}
function checkKominiti(prop) {
	if (kominiti.hasOwnProperty(prop)) {
		return kominiti[prop]
	} else {
		return 'No idea';
	}
}

//This could also work. Was just trying out stuff above. lol

// function checkKominiti(checkOurProp) {
// 	if (kominiti.hasOwnProperty(checkOurProp)) {
// 		return kominiti[checkOurProp]
// 	} else {
// 		return "Not available"
// 	}
//}
//console.log(checkKominiti("analyst"));

console.log(checkKominiti("accountant"));


var Afrikobo = {
	backend: "Kehinde",
	frontend: "Emmanuel"
}
function checkAfrikobo(prop) {
	if (Afrikobo.hasOwnProperty(prop)) {
		return Afrikobo[prop]
	} else {
		return "Not available"
	}
}
console.log(checkAfrikobo("frontend"));


var Elites = {
	writer: "Simeon",
	marketer: "Lizzy",
	media_guy: "Sam"
}
function checkElites(prop) {
	if (Elites.hasOwnProperty(prop)) {
		return Elites[prop]
	} else {
		return "Not a member"
	}
}
console.log(checkElites("designer"));


var House = {
	fan: "Ox",
	air_conditioner: "Hisense",
	laptop: "Macbook"
}
function checkHouse(prop) {
	if (House.hasOwnProperty(prop)) {
		return House[prop]
	} else {
		return "Not included"
	}
}
console.log(checkHouse("air_conditioner"));



//MANIPULATING COMPLEX OBJECTS

var myMusic = [
	{
		"artist": "Billy Joel",
		"title": "Piano Man",
		"release_year": 1973,
		"formats": [
			"CD",
			"8T",
			"LP"
		],
		"gold": true
	},
	{
		"artist": "Beau Carnes",
		"title": "Cereal Man",
		"release_year": 2003,
		"formats": [
			"YouTube video"
		]
	}

];


//ACCESSING NESTED OBJECTS

var myStorage = {
	"car": {
		"inside": {
			"glove box": "maps",
			"passenger seat": 'crumbs'
		},
		"outside": {
			"trunk": "jack"
		}
	}
};
var gloveBoxContents = myStorage.car.inside["glove box"];
var trunkContent = myStorage.car.outside.trunk;

console.log(gloveBoxContents);
console.log(trunkContent);


//ACCESSING NESTED ARRAYS

var myPlants = [
	{
		type: "flowers",
		list: [
			"rose",
			"tulip",
			"dandelion"
		]
	},
	{
		type: "trees",
		list: [
			"fir",
			"pine",
			"birch"
		]
	}
];

var secondTree = myPlants[1].list[1];

console.log(secondTree);


//RECORD COLLECTION

var collection = {
	//"id"
	"2548": {
		//"property": "value"
		"album": "Slippery When Wet",
		"artist": "Bon Jovi",
		"tracks": [
			"Let It Rock",
			"You Give Love a Bad Name"
		]
	},
	"2468": {
		"album": 1999,
		"artist": "Prince",
		"tracks": [
			1999,
			"Little Red Corvette"
		]
	},
	"1245": {
		"artist": "Robert Palmer",
		"tracks": [ ]
	},
	"5439": {
		"album": "ABBA Gold"
	}
};
//This is just for you to have a copy of the object
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
	if (value === "") {
		delete collection[id][prop]
	} else if (prop === "tracks") {
		collection[id][prop] = collection[id][prop] || [];
		collection[id][prop].push(value)
	} else {
		collection[id][prop] = value;
	}
	return collection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA"));


//ITERATE WITH WHILE LOOPS

var myArray = [];
var i = 0;
while(i < 5) {
	myArray.push(i);
	i++;
}
console.log(myArray);

var ourArray = [];
var i = 3;
while(i < 12) {
	ourArray.push(i);
	i++;
}
console.log(ourArray);

var myOwnArray = [];
var i = 5;
while(i < 8) {
	myOwnArray.push(i);
	i++;
}
console.log(myOwnArray);


//ITERATE WITH FOR LOOPS

var ourArray = [];
for (var i = 0; i < 5; i++) {
	ourArray.push(i);
}
console.log(ourArray);

var myOwnArray = [];
for(var i = 5; i < 15; i++ ) {
	myOwnArray.push(i);
}
console.log(myOwnArray);


var mArray = [];
//for(initialization; condition; final expression)
for(var i = 7; i < 9; i++) {
	mArray.push(i);
}
console.log(mArray);


//ITERATE ODD NUMBERS WITH A FOR LOOP

var ourArray = [];
for(var i = 0; i < 10; i += 2) {
	ourArray.push(i);
}
console.log(ourArray);

var myOwnArray = [];
for(var i = 2; i < 50; i += 2) {
	myOwnArray.push(i);
}
console.log(myOwnArray);


//COUNT BACKWARDS WITH A FOR LOOP

var ourArray = [];
for(var i = 10; i > 0; i -= 2) {
	ourArray.push(i);
}
console.log(ourArray);

var myOwnArray = [];
for (var i = 36; i > 12; i -= 3) {
	myOwnArray.push(i);
}
console.log(myOwnArray);


//ITERATE THROUGH AN ARRAY WITH A FOR LOOP

var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
	ourTotal += ourArr[i];
}
console.log(ourTotal);


var myArr = [2, 3, 4, 5, 6, 9, 12, 18];
var myTotal = 0;
for (var i = 0; i < myArr.length; i++) {
	myTotal += myArr[i];
}
console.log(myTotal);


//NESTING FOR LOOPS

function multiplyAll(arr) {
	var product = 1;

	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			product *= arr[i][j];
		}
	}
	return product
}
var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product);


//ITERATE WITH DO...WHILE LOOPS

var myArray = [];
var i = 10;

do {
	myArray.push(i);
	i++
} while (i < 5)
console.log(i, myArray);

var ourArray = [];
var i = 33;
do {
	ourArray.push(i);
	i++;
} while (i < 35);
console.log(i, ourArray);


//PROFILE LOOKUP

// var contacts = [
// 	{
// 		"firstName": "Akira",
// 		"lastName": "Laine",
// 		"number": "0543236543",
// 		"likes": ["Pizza", "Coding", "Brownie Points"]
// 	},
// 	{
// 		"firstName": "Harry",
// 		"lastName": "Potter",
// 		"number": "0994372684",
// 		"likes": ["Hogwarts", "Magic", "Hagrid"]
// 	},
// 	{
// 		"firstName": "Sherlock",
// 		"lastName": "Holmes",
// 		"number": "0487345643",
// 		"likes": ["Intriguing Cases", "Violin"]
// 	},
// 	{
// 		"firstName": "Kristian",
// 		"lastName": "Vos",
// 		"number": "unknown",
// 		"likes": ["Javascript", "Gaming", 'Foxes']
// 	}
// ];

// function lookUpProfile(name, prop) {
// 	for(var i = 0; i < contacts.length; i++) {
// 		if(contacts[i].firstName === name) {
// 			return contacts[i][prop] || "No such property";
// 		}
// 	}
// }

// var data = lookUpProfile("Akira", "likes");

// console.log(data);


//Exercise

var myContacts = [
	{
		"firstName": "Fortune",
		"lastName": "Chibueze",
		"number": "0543236543",
		"likes": ["Pizza", "Coding", "Brownie Points"]
	},
	{
		"firstName": "Ikenna",
		"lastName": "Ohuka",
		"number": "0994372684",
		"likes": ["Hogwarts", "Magic", "Hagrid"]
	},
	{
		"firstName": "Samuel",
		"lastName": "Nwali",
		"number": "0487345643",
		"likes": ["Intriguing Cases", "Violin"]
	},
	{
		"firstName": "Joshua",
		"lastName": "Balogun",
		"number": "unknown",
		"likes": ["Javascript", "Gaming", 'Foxes']
	}
];
function lookUpProfile(name, prop) {
	for(var i = 0; i < myContacts.length; i++) {
		if(myContacts[i].firstName === name) {
			return myContacts[i][prop] || "Doesn't exist"
		}
	}
}
var datum = lookUpProfile("Fortune", "likes")

console.log(datum);



// //GENERATE RANDOM FRACTIONS

function randomFraction() {

	return Math.random();
}
console.log(randomFraction());

//Example

function randomFraction() {
	return Math.random();
}
console.log(randomFraction());


// //GENERATE RANDOM WHOLE NUMBERS

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
	function randomWholeNum() {
		return Math.floor(Math.random() * 10);
	}
console.log(randomWholeNum());


//Example 1
function randomWholeNum() {
	return Math.floor(Math.random() * 4);
}
console.log(randomWholeNum());


//Example 2
function randomWholeNum() {
	return Math.floor(Math.random() * 80);
}
console.log(randomWholeNum());


//GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE

function ourRandomRange(ourMin, ourMax) {
	return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
ourRandomRange(1, 9);

function randomRange(myMin, myMax) {
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(5, 15);
console.log(myRandom);


//USE THE parseInt FUNCTION (this is used to convert a str to an int)

function convertToInteger(str) {
	return parseInt(str);
}
console.log(convertToInteger("56"));

//Example

function convertToInteger(str) {
	return parseInt(str);
}
console.log(convertToInteger("12"));


//USE THE parseInt FUNCTION WITH A Radix(this is for bases of numbers)

function convertToInteger(str) {
	return parseInt(str, 2)
}
console.log(convertToInteger("10011"));

//Example

function convertToInteger(str) {
	return parseInt(str, 2);
}
console.log(convertToInteger("1001"));

//USE THE CONDITIONAL(Ternary) OPERATOR


function checkEqual(a, b) {
	// if(a === b) {
	// 	return true;
	// } else {
	// 	return false;
	// }

	// condition ? statement-if-true : statement-if-false;
	return a === b ? true : false;
	return a === b;
}
console.log(checkEqual(1, 2));

//Example

function checkEqual(c, d) {
	return c === d ? true : false;
	return c === d; 
}
console.log(checkEqual(5, 5));


//USE MULTIPLE CONDITIONAL(Ternary) OPERATORS

function checkSign(num) {
	return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(10));

//Example

function checkSign(num) {
	return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}
console.log(checkSign(4));

//DIFFERENCES BETWEEN THE VAR & LET KEYWORDS

let catName = "Quincy"
let quote;

catName = "Beau";

function catTalk() {
	"use strict";

	catName = "Oliver"
	quote = catName + " says Meow!";
}
catTalk();


//COMPARE SCOPES OF VAR AND LET KEYWORDS

function checkScope() {
	"use strict";
	var i = "function scope";
	if (true) {
		i = "block scope";
		console.log("Block scope i is: ", i);
	}
	console.log("Function scope i is: ", i);
	return i;
}
checkScope();


function checkScope() {
	"use strict";
	let i = "function scope";
	if (true) {
		let i = "block scope";
		console.log("Block scope i is: ", i);
	}
	console.log("Function scope i is: ", i);
	return i;
}
checkScope();


//DECLARE A READ-ONLY VARIABLE WITH THE CONST KEYWORD

function printManyTimes(str) {
	"use strict";
	const SENTENCE = str + " is cool!";
	//sentence = str + " is amazing!"

	for(let i = 0; i < str.length; i += 2) {
		console.log(SENTENCE);
	}
}
printManyTimes("freeCodeCamp");


//MUTATE AN ARRAY DECLARED WITH CONST

const s = [5, 7, 2];
function editInPlace() {
	"use strict";
	//s =  [2, 5, 7];
	s[0] = 2;
	s[1] = 5;
	s[2] = 7;
}
editInPlace();

console.log(s);

//Example

const ROOMS = [214, 456, 789, 876];
function myEditInPlace() {
	"use strict";
	ROOMS[0] = 400;
	ROOMS[1] = 589;
	ROOMS[2] = 674;
	ROOMS[3] = 912;
}
myEditInPlace();

console.log(ROOMS);

//PREVENT OBJECT MUTATION

function freezeObj() {
	"use strict";
	const MATH_CONSTANTS = {
		PI: 3.14
	};

	Object.freeze(MATH_CONSTANTS); // use this if you don't want the constant to change

	try {
		MATH_CONSTANTS.PI = 99;
	} catch( ex ) {
		console.log(ex);
	}
	return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);


//USE ARROW FUNCTIONS TO WRITE CONCISE ANONYMOUS FUNCTIONS

var magic = function() {
	return new Date();
};
//The code above can be shortened to this:

var magic = () => new Date();
//or
const MAGIC = () => new Date();


//WRITE ARROW FUNCTIONS WITH PARAMETERS

// var myConcat = function(arr1, arr2) {
// 	return arr1.concat(arr2);

	//The fxn above can be shortened to:

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));


//WRITE HIGHER ORDER ARROW FUNCTIONS

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
	const squaredIntegers = arr.filter(num => Number.isInteger(num) && num >0).map(x => x * x);
	return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);


// const increment = (function() {
// 	return function increment(number, value = 1) {
// 		return number + value;
// 	};
// }) ();
// console.log(increment(5, 2));
// console.log(increment(5));


//Example

// const increment = (function() {
// 	return function increment(number, value = 2) {
// 		return number + value;
// 	};
// }) ();
// console.log(increment(2, 3));
// console.log(increment(8));

//Example

// const increment = (function() {
// 	return function increment(number, value = 68) {
// 		return number + value;
// 	};
// }) ();
// console.log(increment(12, 4));
// console.log(increment(12));

//Example

const increment = (function() {
	return function increment(number, value = 4) {
		return number - value;
	};
}) ();
console.log(increment(12, 8));
console.log(increment(20));


//USE THE REST OPERATOR WITH FUNCTION PARAMETERS

// const sum = (function() {
// 	return function sum(x, y, z) {
// 		// return function sum(...args) {
// 		const args = [x, y, z];
// 		return args.reduce((a, b) => a + b, 0);
// 	};
// }) ();
// console.log(sum(1, 2, 3))


//USE THE SPREAD OPERATOR TO EVALUATE ARRAYS IN-PLACE

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2 ;
(function() {
	arr2 = arr1;
	arr1[0] = "potato"
}) ();
console.log(arr2);


const arr3 = ["Fortune", "Chiemela", "Josef", "Prisca"];
let arr4;
(function() {
	arr4 = arr3;
	arr3[1] = "Ikenna"
}) ();
console.log(arr4);


const arr5 = ["Ngozi", "Adaeze", "Ella", "Wendy"];
let arr6;
(function() {
	arr6 = arr5;
	arr5[2] = "Ivy"
	arr5[0] = "Kelechi"
}) ();
console.log(arr6);

const arr7 = [4, 5, 7, 8, 10];
let arr8;
(function() {
	arr8 = [...arr7];
	arr7[1] = "Abiola"
}) ();
console.log(arr8);

//USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM OBJECTS

// var voxel = {x: 3.6, y: 7.4, z: 6.54};

// var x = voxel.x;
// var y = voxel.y;
// var z = voxel.z;

// const { x : a, y : b, z : c } = voxel;  // this is the destructuring syntax

const AVG_TEMPERATURES = {
	today: 77.5,
	tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
	"use strict";
	const { tomorrow : tempOfTomorrow} = avgTemperatures;
	return tempOfTomorrow;
}
console.log(getTempOfTmrw(AVG_TEMPERATURES));

//Examplel


	const AVG_DATES = {
		today: "November 18th, 2023",
		tomorrow: "November 19th, 2023"
	};
	function getDateOfTmrw(avgDates) {
		"use strict"
		const { tomorrow : dateOfTomorrow } = avgDates;
		return dateOfTomorrow;
	}
	function getDateOfTdy(avgDates) {
		"use strict"
		const { today : dateOfToday} = avgDates;
		return dateOfToday
	}
	console.log(getDateOfTmrw(AVG_DATES));
	console.log(getDateOfTdy(AVG_DATES));


	//DESTRUCTURING ASSIGNMENT WITH NESTED OBJECTS

	const LOCAL_FORECAST = {
		today: { min: 72, max: 83 },
		tomorrow: { min: 73.3, max: 84.6 }
	};
	function getMaxOfTmrw(forecast) {
		"use strict";
		const { tomorrow : { max  : maxOfTomorrow }} = forecast;
		return maxOfTomorrow;
	}

	function getMinOfToday(forecast) {
		"use strict";
		const { today : { min : minOfToday}} = forecast;
		return minOfToday;
	}

	function getMaxOfToday(forecast) {
		"use strict";
		const { today : { max : maxOfToday}} = forecast;
		return maxOfToday;
	}
	console.log(getMaxOfTmrw(LOCAL_FORECAST));
	console.log(getMinOfToday(LOCAL_FORECAST));
	console.log(getMaxOfToday(LOCAL_FORECAST));


	//USE DESTRUCTURING ASSIGNMENT TO ASSIGN VARIABLES FROM ARRAYS

	const [z, x, y] = [1, 2, 3, 4, 5, 6];
	console.log(z, x, y);


	let g = 8, h = 6;
	(() => {
		"use strict";
		[g, h] = [h, g];
	}) ();

	console.log(g, h);


	//USE DESTRUCTURING ASSIGNMENT WITH THE REST OPERATOR

	const source = [1,2,3,4,5,6,7,8,9,10];
	function removeFirstTwo(list) {
		const [ , , ...arr] = list;
		return arr;
	}
	const arr = removeFirstTwo(source);
	console.log(arr);
	console.log(source);

	//Example
	const myGoons = ["Ada", 'Nkechi', "Nneka", "Amaka"];
	function removeFirstThree(list) {
		const [ , , , ...arrM] = list;
		return arrM;
	}
	const arrM = removeFirstThree(myGoons);
	console.log(arrM)


	//USE DESTRUCTURING ASSIGNMENT TO PASS AN OBJECT AS A FUNCTION'S PARAMETERS

	const stats = {
		max: 56.78,
		standard_deviation: 4.34,
		median: 34.54,
		mode: 23.87,
		min: -0.75,
		average: 35.85
	};
	const half = (function() {
		return function half({ max, min }) { // used in API calls
			return (max + min) / 2.0;
		};
	}) ();
	console.log(stats);
	console.log(half(stats));



	//CREATE STRINGS USING TEMPLATE LITERALS

	const person = {
		name: "Eke Chibueze Precious",
		age: 28
	};
	const greeting = `Hello, my name is ${person.name}!
	I am ${person.age} years old.`;
	console.log(greeting);


	//Example

	const career = {
		title: "Product Designer",
		years: 4
	};
	const mySelf = `Hi, I am a ${career.title}.
	I have ${career.years} years of experience. Bye!`;
	console.log(mySelf);

//Anothe Example

	const result = {
		success: ["max-length", "no-amd", 'prefer-arrow-functions'],
		failure: ["no-var", "var-on-top", "linebreak"],
		skipped: ["id-blacklist", "no-dup-keys"]
	};
	function makeList(arr) {
		const resultDisplayArray = [];
		for (let i = 0; i < arr.length; i++) {
			resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
		}

		return resultDisplayArray;
	}
	const resultDisplayArray = makeList(result.failure);
	console.log(resultDisplayArray)


	//WRITE CONCISE OBJECT LITERAL DECLARATIONS USING SIMPLE FIELDS
	const createPerson = (name, age, gender) => {
		return {
			//key: value
			name: name,
			age: age,
			gender: gender
		};
	};
	console.log(createPerson("Eke Chibueze Precious", 28, "male"));

	//OR

	const createAPerson = (name, age, gender) => ( { name, age, gender});
	console.log(createAPerson("Ikenna Valentine", 28, "male"))


	//WRITE CONCISE DECLARATIVE FUNCTIONS

	const bicycle = {
		gear: 2,
		setGear: function(newGear) {
			"use strict";
			this.gear = newGear;
		}
	};
	bicycle.setGear(3);
	console.log(bicycle.gear);

	//OR
	const Bicycle = {
		gear: 2,
		setGear(newGear) {
			"use strict";
			this.gear = newGear;
		}
	};
	Bicycle.setGear(3);
	console.log(Bicycle.gear);

	//USE CLASS SYNTAX TO DEFINE A CONSTRUCTOR FUNCTION

	class SpaceShuttle {
		constructor(targetPlanet) {
		this.targetPlanet = targetPlanet;
	}
	}
	var zeus = new SpaceShuttle("Jupiter");
	console.log(zeus.targetPlanet);

	//Example

	function makeClass() {
		class Vegetable {
			constructor(name) {
				this.name = name;
			}
		}
		return Vegetable;

	}
	const Vegetable = makeClass();
	const carrot = new Vegetable("carrot");
	console.log(carrot.name);
	

	//USE GETTERS AND SETTERS TO CONTROL ACCESS TO AN OBJECT

	class book {
		constructor(author) {
			this._author = author;
		}
		get writer() {
			return this._author;
		}
		set writer(updatedAuthor) {
			this._author = updatedAuthor;
		}
	}
	function makeClass() {
		class Thermostat {
			constructor(temp) {
				this._temp = 5/9 * (temp - 32)
			}
			get temperature() {
				return this._temp;
			}
			set temperature(updatedTemp) {
				this._temp = updatedTemp
			}
		}
		return Thermostat;
	}

	const Thermostat = makeClass();
	const thermos = new Thermostat(76);
	let temp = thermos.temperature;
	thermos.temperature = 26;
	temp = thermos.temperature;

	console.log(temp);



	//UNDERSTAND THE DIFFERENCE BETWEEN IMPORT AND REQUIRE

	import { capitalizeString } from "./string_function.js" 
	const cap = capitalizeString("hello");

	console.log(cap);


	//USE EXPORT TO REUSE A CODE BLOCK

	const capitalizeString = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	export { capitalizeString };
	export const foo = "bar";
	export const bar = "foo";


	//USE * TO IMPORT EVERYTHING FROM A FILE

	import * as capitalizeStrings from "capitalize_strings";


	//CREATE AN EXPORT FALLBACK WITH EXPORT DEFAULT

	export default function subtract(x,y) {return x - y;}

	//IMPORT A DEFAULT EXPORT

	import subtract from "math_functions"
	subtract(7,4);



	//BUILDING A PASSENGER COUNTER APP

	