Apologies for the issue you encountered. It seems that the links you provided are not direct links to the image files. To display the images correctly in the README.md file on GitHub, you need to use the direct image URLs. Here's an updated version of the README.md file with the correct image URLs:

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

![List Contacts](https://i.ibb.co/jvXQG7D/screenshot-list-contacts.png)

2. Get a contact by ID:

```bash
node index.js --action get --id <contact-id>
```

![Get Contact](https://i.ibb.co/LQP4WS0/screenshot-get-contact.png)

3. Add a new contact:

```bash
node index.js --action add --name <contact-name> --email <contact-email> --phone <contact-phone>
```

![Add Contact](https://i.ibb.co/VjZj32W/screenshot-add-contact.png)

4. Remove a contact by ID:

```bash
node index.js --action remove --id <contact-id>
```

![Remove Contact](https://i.ibb.co/h86jkYM/screenshot-remove-contact.png)

## License

This project is licensed under the [MIT License](LICENSE).

```

Make sure to replace `<repository-url>`, `<project-directory>`, `<contact-id>`, `<contact-name>`, `<contact-email>`, and `<contact-phone>` with the appropriate values for your project.
```
