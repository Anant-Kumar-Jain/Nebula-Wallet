# Nebula-Wallet

Nebula Wallet is a Bitcoin wallet application that simplifies global freelance transactions by leveraging Bitcoin. It includes user authentication, payment functionalities, and a dashboard to view Bitcoin trends.

## Features

- User Authentication (Signup/Login)
- Bitcoin Wallet Management
- Real-Time Bitcoin Prices
- Integrated Chat
- Transaction Management
- User Dashboard with Bitcoin Trend Chart
- Profile Management (KYC, Bank Account, Security Settings)

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript, Chart.js
- **Backend**: Python, Flask, Flask-JWT-Extended
- **Smart Contract**: Motoko (DFINITY)
- **Database**: In-memory storage (for demonstration purposes)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/nebula_wallet.git
   cd nebula_wallet

2. Install backend dependencies: Make sure you have Python and pip installed. Then run:
   ```bash 
   pip install -r backend/requirements.txt

3. Build and deploy the smart contract: Make sure you have DFINITY SDK installed. Then run:
   ```bash
   cd smart_contract
   dfx build
   dfx deploy

4. Run the backend:
   ```bash
   cd backend
   python app.py

5. Open the frontend: Open frontend/index.html in your browser.


Usage
Signup: Create a new account by providing a username and password.
Login: Access your account using your credentials.
Dashboard: View your wallet options and Bitcoin trends.
Profile Management: Update your profile, verify KYC, manage bank accounts, and update security settings.

Security Considerations
Files not to share on GitHub:

`backend/app.py`: Ensure that sensitive information such as the JWT secret key is not hardcoded or exposed.
Any configuration files that contain API keys, database credentials, or sensitive information should be excluded from version control.
   
# License
This project is licensed under the MIT License.

# Author
**Anant Kumar Jain**

# Contributor
- **Aryan Jangir**
- **Angel Saini** 
- **Akshita Sharma**

# Acknowledgments
- Thanks to the contributors and libraries that made this project possible.
- Also I give special thanks to the Chatgpt, BlackBox and Github Copilot To help in this project.
- And also give special thanks to ICP Ninja.
