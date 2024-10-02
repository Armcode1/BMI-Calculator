function calculateBMI() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const results = document.getElementById('results');

    if (height === '' || weight === '') {
        results.innerHTML = "<p style='color:red;'>Please enter valid height and weight!</p>";
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    let resultMessage = `<h2>Your BMI: ${bmi}</h2>`;
    if (bmi < 18.6) {
        resultMessage += `<p style="color:orange;">You are underweight.</p>`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
        resultMessage += `<p style="color:green;">You have a normal weight.</p>`;
    } else {
        resultMessage += `<p style="color:red;">You are overweight.</p>`;
    }

    results.innerHTML = resultMessage;
}