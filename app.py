from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'your_secret_key'  # Change this to a secure key
jwt = JWTManager(app)

# In-memory user storage (for demonstration purposes)
users = {}

@app.route('/signup', methods=['POST'])
def signup():
    username = request.json.get('username')
    password = request.json.get('password')
    if username in users:
        return jsonify(message="User  already exists."), 400
    users[username] = generate_password_hash(password)
    return jsonify(message="User  registered successfully."), 201

@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('username')
    password = request.json.get('password')
    user_password = users.get(username)
    if user_password and check_password_hash(user_password, password):
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token), 200
    return jsonify(message="Invalid credentials."), 401

@app.route('/update_profile', methods=['POST'])
@jwt_required()
def update_profile():
    current_user = get_jwt_identity()
    name = request.json.get('name')
    mobile = request.json.get('mobile')
    email = request.json.get('email')
    password = request.json.get('password')

    # Update user information logic here
    # For example, update the user in the database
    # Access variables to avoid unused variable errors
    print(f"User: {current_user}, Name: {name}, Mobile: {mobile}, Email: {email}, Password: {password}")
    return jsonify(
        message="Profile updated successfully.",
        user=current_user,
        name=name,
        mobile=mobile,
        email=email
    ), 200
@app.route('/verify_kyc', methods=['POST'])
@jwt_required()
def verify_kyc():
    current_user = get_jwt_identity()
    # KYC verification logic here
    print(f"KYC verification for user: {current_user}")
    return jsonify(message="KYC verification initiated.", user=current_user), 200
@app.route('/add_bank_account', methods=['POST'])
@jwt_required()
def add_bank_account():
    current_user = get_jwt_identity()
    account_number = request.json.get('accountNumber')
    bank_name = request.json.get('bankName')

    # Logic to add bank account
    print(f"User: {current_user}, Account Number: {account_number}, Bank Name: {bank_name}")
    return jsonify(message="Bank account added successfully.", user=current_user, accountNumber=account_number, bankName=bank_name), 200
@app.route('/update_security', methods=['POST'])
@jwt_required()
def update_security():
    current_user = get_jwt_identity()
    twofa_code = request.json.get('twofaCode')
    pin = request.json.get('pin')

    # Logic to update security settings
    print(f"User: {current_user}, 2FA Code: {twofa_code}, PIN: {pin}")
    return jsonify(
        message="Security settings updated successfully.",
        user=current_user,
        twofaCode=twofa_code,
        pin=pin
    ), 200

if __name__ == '__main__':
    app.run(debug=True)
