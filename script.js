// Define a customer object with various attributes and methods

const customer = {
    // Basic customer details
    name: "John Doe",
    birthDate: new Date("1990-01-01"), // Customer's birth date
    gender: "Male", // Customer's gender
    roomPreferences: ["King Bed", "Ocean View", "Accessible"], // Array of room preferences
    paymentMethod: "Credit Card", // Customer's preferred payment method
    
    // Mailing address as a sub-object
    mailingAddress: {
        street: "123 Main Street",
        city: "Bay Roberts",
        province: "NL",
        zip: "A0A 1G0"
    },
    
    // Contact details
    phoneNumber: "709-123-4567",
    
    // Check-in and check-out dates
    checkIn: new Date("2024-07-17"),
    checkOut: new Date("2024-07-20"),
    
    //Method to calculate the customer's age based on the birth date
    
    age: function() {
        const today = new Date(); // Current date
        let age = today.getFullYear() - this.birthDate.getFullYear(); // Calculate age
        const monthDifference = today.getMonth() - this.birthDate.getMonth(); // Calculate the difference in months
        // Adjust age if the current date is before the birth date in the current year
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < this.birthDate.getDate())) {
            age--;
        }
        return age; // Return the calculated age
    },

// Method to calculate the duration of stay based on the check-in and check-out dates
    durationOfStay: function() {
        const timeDifference = this.checkOut.getTime() - this.checkIn.getTime(); // Calculate the time difference in milliseconds
        const daysDifference = timeDifference / (1000 * 3600 * 24); // Convert the time difference to days
        return daysDifference; // Return the duration of the stay in days
    },

// Method to create a customer description with dynamically included details
    description: function() {
        return `
            <p>Name: ${this.name}</p>
            <p>Age: ${this.age()} years old </p>
            <p>Gender: ${this.gender}</p>
            <p>Room Preferences: ${this.roomPreferences.join(",")}</p>
            <p>Payment Method: ${this.paymentMethod}</p>
            <p>Mailing Address: ${this.mailingAddress.street}, ${this.mailingAddress.city}, ${this.mailingAddress.province}, ${this.mailingAddress.zip}</p>
            <p>Phone Number: ${this.phoneNumber}</p>
            <p>Check-In Date: ${this.checkIn.toDateString()}</p>
            <p>Check-Out Date: ${this.checkOut.toDateString()}</p>
            <p>Duration of Stay: ${this.durationOfStay()} days</p>
        `;    
    }
};

// Function to display the customer details on the web page
function displayCustomerDetails() {
    const customerDetailsDiv = document.getElementById('customer-details'); //Get the div element to display customers details
    customerDetailsDiv.innerHTML = customer.description(); // Set the inner HTML to the customer's description
}

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', (event) => {
    displayCustomerDetails();
});