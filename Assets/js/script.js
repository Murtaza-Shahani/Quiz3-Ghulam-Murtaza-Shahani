function showForm(provider) {
    document.getElementById('emailPasswordForm').style.display = 'block';

    // Example of printing output using DOM
    var selectedProvider = document.getElementById('selectedProvider');
    selectedProvider.innerHTML = 'You chose to sign up with ' + provider;
}

function printValues(event) {
    event.preventDefault();
    var emailValue = document.getElementById('email').value;
    var passwordValue = document.getElementById('password').value;

    alert('Email: ' + emailValue + '\nPassword: ' + passwordValue);
}
