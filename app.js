// Qno:01
// var itemsArray = [
//     {name:"juice",price:"50", quantity:"3"},
//     {name:"cookie",price:"30", quantity:"9"},
//     {name:"shirt",price:"880", quantity:"1"},
//     {name:"pen",price:"100", quantity:"2"}];
//     let totalCostAllItems = 0;
//      itemsArray.forEach(item =>
//      {
//         var totalPrice = item.price * item.quantity;
//         console.log(item.name + ": " + totalPrice);
//         totalCostAllItems += totalPrice;
//      })
     
// console.log("Total price of all items: " + totalCostAllItems);

// Qno:02
// const user = {
//     name: "Umra Badar Wajid Ullah",
//     email: "umra@example.com",
//     password: "securePassword123",
//     age: 25,
//     gender: "Female",
//     city: "Karachi",
//     country: "Pakistan"
// };

// // Checking if 'age' and 'country' properties exist
// const hasAge = user.hasOwnProperty('age');
// const hasCountry = user.hasOwnProperty('country');

// // Checking if 'firstName' and 'lastName' properties exist
// const hasFirstName = user.hasOwnProperty('firstName');
// const hasLastName = user.hasOwnProperty('lastName');

// // Output the results
// console.log(`Age exists: ${hasAge}`); // true
// console.log(`Country exists: ${hasCountry}`); // true
// console.log(`First Name exists: ${hasFirstName}`); // false
// console.log(`Last Name exists: ${hasLastName}`); // false

// Qno:03
// Constructor function
// function User(name, email, password, age, gender, city, country) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//     this.age = age;
//     this.gender = gender;
//     this.city = city;
//     this.country = country;
// }

// // Creating multiple records using the constructor
// const user1 = new User("Umra Badar Wajid Ullah", "umra@example.com", "securePassword123", 20, "Female", "Karachi", "Pakistan");
// const user2 = new User("Ali Khan", "ali@example.com", "password456", 30, "Male", "Lahore", "Pakistan");
// const user3 = new User("Sara Ahmed", "sara@example.com", "mypassword789", 28, "Female", "Islamabad", "Pakistan");

// // Outputting the records
// console.log(user1);
// console.log(user2);
// console.log(user3);

// Qno:04
// Constructor function
function Person(name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

// Function to save records to localStorage
function saveToLocalStorage(person) {
    const records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    records.push(person);
    localStorage.setItem('populationRecords', JSON.stringify(records));
}

// Function to display records
function displayRecords() {
    const recordsOutput = document.getElementById('recordsOutput');
    const records = JSON.parse(localStorage.getItem('populationRecords')) || [];
    recordsOutput.textContent = JSON.stringify(records, null, 2);
}

// Event listener for form submission
document.getElementById('recordForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = document.getElementById('address').value;
    const education = document.getElementById('education').value;
    const profession = document.getElementById('profession').value;

    const newPerson = new Person(name, gender, address, education, profession);
    saveToLocalStorage(newPerson);
    displayRecords();

    // Clear the form
    event.target.reset();
});

// Display existing records on page load
document.addEventListener('DOMContentLoaded', displayRecords);


