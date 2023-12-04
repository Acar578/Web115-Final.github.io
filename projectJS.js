function generateMealPlan() {
    // Validate email before generating the meal plan
    var emailInput = document.getElementById('email');
    var email = emailInput.value;

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Get other user inputs
    var name = document.getElementById('name').value;
    var goal = document.getElementById('goal').value;

    // Get meal inputs for each day
    var mondayBreakfast = document.getElementById('monday-breakfast').value;
    var mondaySnack = document.getElementById('monday-snack').value;
    var mondayLunch = document.getElementById('monday-lunch').value;
    var mondayAfternoonSnack = document.getElementById('monday-afternoon-snack').value;
    var mondayDinner = document.getElementById('monday-dinner').value;

    var tuesdayBreakfast = document.getElementById('tuesday-breakfast').value;
    var tuesdaySnack = document.getElementById('tuesday-snack').value;
    var tuesdayLunch = document.getElementById('tuesday-lunch').value;
    var tuesdayAfternoonSnack = document.getElementById('tuesday-afternoon-snack').value;
    var tuesdayDinner = document.getElementById('tuesday-dinner').value;

    var wednesdayBreakfast = document.getElementById('wednesday-breakfast').value;
    var wednesdaySnack = document.getElementById('wednesday-snack').value;
    var wednesdayLunch = document.getElementById('wednesday-lunch').value;
    var wednesdayAfternoonSnack = document.getElementById('wednesday-afternoon-snack').value;
    var wednesdayDinner = document.getElementById('wednesday-dinner').value;

    var thursdayBreakfast = document.getElementById('thursday-breakfast').value;
    var thursdaySnack = document.getElementById('thursday-snack').value;
    var thursdayLunch = document.getElementById('thursday-lunch').value;
    var thursdayAfternoonSnack = document.getElementById('thursday-afternoon-snack').value;
    var thursdayDinner = document.getElementById('thursday-dinner').value;

    var fridayBreakfast = document.getElementById('friday-breakfast').value;
    var fridaySnack = document.getElementById('friday-snack').value;
    var fridayLunch = document.getElementById('friday-lunch').value;
    var fridayAfternoonSnack = document.getElementById('friday-afternoon-snack').value;
    var fridayDinner = document.getElementById('friday-dinner').value;

    var saturdayBreakfast = document.getElementById('saturday-breakfast').value;
    var saturdaySnack = document.getElementById('saturday-snack').value;
    var saturdayLunch = document.getElementById('saturday-lunch').value;
    var saturdayAfternoonSnack = document.getElementById('saturday-afternoon-snack').value;
    var saturdayDinner = document.getElementById('saturday-dinner').value;

    var sundayBreakfast = document.getElementById('sunday-breakfast').value;
    var sundaySnack = document.getElementById('sunday-snack').value;
    var sundayLunch = document.getElementById('sunday-lunch').value;
    var sundayAfternoonSnack = document.getElementById('sunday-afternoon-snack').value;
    var sundayDinner = document.getElementById('sunday-dinner').value;

    // Validate at least two of the three major meals for each day
    if (
        (mondayBreakfast === "" && mondayLunch === "" && mondayDinner === "") ||
        (tuesdayBreakfast === "" && tuesdayLunch === "" && tuesdayDinner === "") ||
        (wednesdayBreakfast === "" && wednesdayLunch === "" && wednesdayDinner === "") ||
        (thursdayBreakfast === "" && thursdayLunch === "" && thursdayDinner === "") ||
        (fridayBreakfast === "" && fridayLunch === "" && fridayDinner === "") ||
        (saturdayBreakfast === "" && saturdayLunch === "" && saturdayDinner === "") ||
        (sundayBreakfast === "" && sundayLunch === "" && sundayDinner === "")
    ) {
        alert('Please fill out at least two of the three major meals (Breakfast, Lunch, or Dinner) for each day.');
        return;
    }
    // Generate the meal plan HTML
    var mealPlanHTML = `
        <h2>${name}'s Meal Plan</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Goal for the Week:</strong> ${goal}</p>
        <h2>Weekly Meal Plan</h2>
        <div class="meal-plan-output">
            <p><strong>Monday:</strong></p>
            <ul>
                <li><strong>Breakfast:</strong> ${mondayBreakfast}</li>
                <li><strong>Snack:</strong> ${mondaySnack}</li>
                <li><strong>Lunch:</strong> ${mondayLunch}</li>
                <li><strong>Afternoon Snack:</strong> ${mondayAfternoonSnack}</li>
                <li><strong>Dinner:</strong> ${mondayDinner}</li>
            </ul>
            <!-- Repeat similar structure for other days of the week -->
            <p><strong>Tuesday:</strong></p>
            <ul>
                <li><strong>Breakfast:</strong> ${tuesdayBreakfast}</li>
                <li><strong>Snack:</strong> ${tuesdaySnack}</li>
                <li><strong>Lunch:</strong> ${tuesdayLunch}</li>
                <li><strong>Afternoon Snack:</strong> ${tuesdayAfternoonSnack}</li>
                <li><strong>Dinner:</strong> ${tuesdayDinner}</li>
            </ul>
            <p><strong>Wednesday:</strong></p>
            <ul>
                <li><strong>Breakfast:</strong> ${wednesdayBreakfast}</li>
                <li><strong>Snack:</strong> ${wednesdaySnack}</li>
                <li><strong>Lunch:</strong> ${wednesdayLunch}</li>
                <li><strong>Afternoon Snack:</strong> ${wednesdayAfternoonSnack}</li>
                <li><strong>Dinner:</strong> ${wednesdayDinner}</li>
            </ul>
            <p><strong>Thursday:</strong></p>
            <ul>
                <li><strong>Breakfast:</strong> ${thursdayBreakfast}</li>
                <li><strong>Snack:</strong> ${thursdaySnack}</li>
                <li><strong>Lunch:</strong> ${thursdayLunch}</li>
                <li><strong>Afternoon Snack:</strong> ${thursdayAfternoonSnack}</li>
                <li><strong>Dinner:</strong> ${thursdayDinner}</li>
            </ul>
            <p><strong>Friday:</strong></p>
            <ul>
                <li><strong>Breakfast:</strong> ${fridayBreakfast}</li>
                <li><strong>Snack:</strong> ${fridaySnack}</li>
                <li><strong>Lunch:</strong> ${fridayLunch}</li>
                <li><strong>Afternoon Snack:</strong> ${fridayAfternoonSnack}</li>
                <li><strong>Dinner:</strong> ${fridayDinner}</li>
            </ul>
            <p><strong>Saturday:</strong></p>
            <ul>
                <li><strong>Breakfast:</strong> ${saturdayBreakfast}</li>
                <li><strong>Snack:</strong> ${saturdaySnack}</li>
                <li><strong>Lunch:</strong> ${saturdayLunch}</li>
                <li><strong>Afternoon Snack:</strong> ${saturdayAfternoonSnack}</li>
                <li><strong>Dinner:</strong> ${saturdayDinner}</li>
            </ul>
            <p><strong>Sunday:</strong></p>
            <ul>
                <li><strong>Breakfast:</strong> ${sundayBreakfast}</li>
                <li><strong>Snack:</strong> ${sundaySnack}</li>
                <li><strong>Lunch:</strong> ${sundayLunch}</li>
                <li><strong>Afternoon Snack:</strong> ${sundayAfternoonSnack}</li>
                <li><strong>Dinner:</strong> ${sundayDinner}</li>
            </ul>
        </div>
    `;

    // Open a new window and write the meal plan HTML
    var newWindow = window.open();
    newWindow.document.write(mealPlanHTML);
}

function validateEmail(email) {
    // Use a simple email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function clearMealPlan() {
    // Clear all input fields
    document.getElementById('mealPlanForm').reset();
}

function printMealPlan() {
    // Print the meal plan
    window.print();
}
