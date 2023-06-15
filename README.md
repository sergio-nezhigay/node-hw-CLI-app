Certainly! Here's an updated version of the README.md file that includes links to the screenshots:

````markdown
# Contact Management CLI

A command-line interface (CLI) application for managing contacts.

## Prerequisites

- Node.js installed on your machine

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```
````

2. Navigate to the project directory:

```bash
cd <project-directory>
```

3. Install the dependencies:

```bash
npm install
```

## Usage

To use the Contact Management CLI, run the following command:

```bash
node index.js [options]
```

### Options

- `-a, --action <type>`: Specify the action to perform on contacts. Available actions are:

  - `list`: List all contacts.
  - `get`: Get a contact by ID.
  - `add`: Add a new contact.
  - `remove`: Remove a contact by ID.

- `-i, --id <type>`: The ID of the contact (required for `get` and `remove` actions).

- `-n, --name <type>`: The name of the contact (required for `add` action).

- `-e, --email <type>`: The email of the contact (required for `add` action).

- `-p, --phone <type>`: The phone number of the contact (required for `add` action).

Note: Replace `<type>` with the appropriate data type for each option argument.

### Examples

1. List all contacts:

```bash
node index.js --action list
```

![List Contacts](https://ibb.co/jvXQG7D)

2. Get a contact by ID:

```bash
node index.js --action get --id <contact-id>
```

![Get Contact](https://ibb.co/LQP4WS0)

3. Add a new contact:

```bash
node index.js --action add --name <contact-name> --email <contact-email> --phone <contact-phone>
```

![Add Contact](https://ibb.co/VjZj32W)

4. Remove a contact by ID:

```bash
node index.js --action remove --id <contact-id>
```

![Remove Contact](https://ibb.co/h86jkYM)

## License

This project is licensed under the [MIT License](LICENSE).

```

Make sure to replace `<repository-url>`, `<project-directory>`, `<contact-id>`, `<contact-name>`, `<contact-email>`, and `<contact-phone>` with the appropriate values for your project.
```
