
# SQLite Database Repository

This repository contains a SQLite database and scripts for managing and interacting with the data. The database stores information related to [your project description here, e.g., user profiles, product information, etc.].

## Features

- **SQLite Database**: Lightweight and efficient database solution.
- **Data Management**: Includes scripts for data insertion, querying, updating, and deletion.
- **Schema Versioning**: SQL scripts to manage schema versions.
- **Multiple technologies**: The repository is also for supabase or prisma

## Table of Contents

- [Installation](#installation)
- [Database Schema](#database-schema)
- [Usage](#usage)
- [Sample Queries](#sample-queries)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- **SQLite**: Ensure that SQLite is installed on your system. You can download it from [SQLite Downloads](https://www.sqlite.org/download.html).


### Clone the Repository

```bash
git clone https://github.com/your-username/sqlite-database-repository.git
cd sqlite-database-repository
```


## Database Schema

The database schema is defined in the `db-local/schema` file. Below is an example of the table structure:

```sql
CREATE TABLE Users if not exists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    refreshToken TEXT,
    resetToken TEXT,
    CONSTRAINT email_unique UNIQUE (email)
);


You can modify or extend the schema according to your project's needs.

## Usage

You can interact with the SQLite database using SQLite's command-line tool, or through scripts (e.g., Python or any language that supports SQLite).

### Using SQLite CLI

1. Start the SQLite shell:
   ```bash
   sqlite3 my_database.db
   ```

2. Run a SQL query, e.g., to get all users:
   ```sql
   SELECT * FROM users;
   ```



## Sample Queries

Here are some sample queries you can run against the database:

- **Retrieve all users**:
  ```sql
  SELECT * FROM users;
  ```

- **Insert a new product**:
  ```sql
  INSERT INTO Users (name, email, password) VALUES ('Abraham', 'a@email.com', '1234');
  ```

- **Update a product's price**:
  ```sql
  UPDATE Users SET name = Juan WHERE id = 1;
  ```

- **Delete a user**:
  ```sql
  DELETE FROM users WHERE id = 2;
  ```

## Contributing

Contributions are welcome! Please follow the steps below to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit and push to your branch.
5. Open a pull request.

Please make sure your code follows the repository's coding standards and includes relevant tests.

## License

This project is licensed under the MIT License. 
