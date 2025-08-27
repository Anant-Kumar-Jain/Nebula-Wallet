import sqlite3

# Function to create the database and tables
def create_database():
    # Connect to SQLite database (or create it if it doesn't exist)
    conn = sqlite3.connect('wallet.db')
    cursor = conn.cursor()

    # Create users table
    # This table will store user credentials, profile info, and security settings.
    # Note: Storing passwords in plain text is insecure. 
    # In a real application, you should store a hashed version of the password.
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            name TEXT,
            mobile TEXT,
            email TEXT,
            kyc_verified INTEGER DEFAULT 0, -- 0 for false, 1 for true
            twofa_code TEXT,
            pin TEXT
        )
    ''')

    # Create bank_accounts table
    # This table will store bank account details linked to a user.
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS bank_accounts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            account_number TEXT NOT NULL,
            bank_name TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users (id)
        )
    ''')

    print("Database 'wallet.db' and tables created successfully.")

    # Commit changes and close the connection
    conn.commit()
    conn.close()

# Run the function to create the database
if __name__ == '__main__':
    create_database()