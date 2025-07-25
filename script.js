const API_URL = 'http://localhost:5000'; // Update with your backend URL

// Signup function
async function signup(username, password) {
    const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    alert(data.message);
}

// Login function
async function login(username, password) {
    const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (data.access_token) {
        alert('Login successful!');
        localStorage.setItem('token', data.access_token);
        window.location.href = 'dashboard.html';
    } else {
        alert(data.message);
    }
}

// Function to receive payment
function receivePayment() {
    alert("Functionality to receive payment will be implemented.");
}

// Function to send payment
function sendPayment() {
    alert("Functionality to send payment will be implemented.");
}

// Function to hold Bitcoin and show trend chart
async function holdBitcoin() {
    document.getElementById('trend-chart').style.display = 'block';
    const bitcoinData = await fetchBitcoinTrend();
    displayBitcoinChart(bitcoinData);
}

// Function to fetch Bitcoin trend data
async function fetchBitcoinTrend() {
    const response = await fetch('https://api.coindesk.com/v1/bpi/historical/close.json?currency=USD');
    const data = await response.json();
    return data.bpi; // Return the Bitcoin price data
}

// Function to display Bitcoin trend chart
function displayBitcoinChart(data) {
    const ctx = document.getElementById('bitcoinChart').getContext('2d');
    const labels = Object.keys(data);
    const prices = Object.values(data);

    const bitcoinChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Bitcoin Price (USD)',
                data: prices,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                    y: {
                        title: {
                            display: true,
                            text: 'Price (USD)'
                        }
                    }
                }
            }
        });
}

// Function to update profile
async function updateProfile() {
    const name = document.getElementById('kyc-name').value;
    const mobile = document.getElementById('mobile-number').value;
    const email = document.getElementById('email-address').value;
    const password = document.getElementById('password').value;

    const response = await fetch(`${API_URL}/update_profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ name, mobile, email, password }),
    });
    const data = await response.json();
    alert(data.message);
}

// Function to verify KYC
async function verifyKYC() {
    const response = await fetch(`${API_URL}/verify_kyc`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    });
    const data = await response.json();
    alert(data.message);
}

// Function to add bank account
async function addBankAccount() {
    const accountNumber = document.getElementById('bank-account-number').value;
    const bankName = document.getElementById('bank-name').value;

    const response = await fetch(`${API_URL}/add_bank_account`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ accountNumber, bankName }),
    });
    const data = await response.json();
    alert(data.message);
}

// Function to update security settings
async function updateSecuritySettings() {
    const twofaCode = document.getElementById('twofa-code').value;
    const pin = document.getElementById('pin').value;

    const response = await fetch(`${API_URL}/update_security`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ twofaCode, pin }),
    });
    const data = await response.json();
    alert(data.message);
}

// Event listeners for forms

const profileForm = document.getElementById('profile-form');
if (profileForm) {
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        updateProfile();
    });
}

const bankAccountForm = document.getElementById('bank-account-form');
if (bankAccountForm) {
    bankAccountForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addBankAccount();
    });
}

const securityForm = document.getElementById('security-form');
if (securityForm) {
    securityForm.addEventListener('submit', function(event) {
        event.preventDefault();
        updateSecuritySettings();
    });
}
