# ⚛️ React User List

A simple and responsive **User List application built with React.js**.
The project fetches user information from the **JSONPlaceholder REST API** and displays each user in a reusable card component.

## 🚀 Features

* 👥 Displays a list of users
* 🌐 Fetches data from a REST API
* ⚛️ Uses React functional components
* 🔄 Uses `useEffect` for API data fetching
* 📦 Uses `useState` to manage user data
* 🧩 Uses reusable `Card` components
* 📱 Fully responsive design
* 🎨 Clean and simple card-based UI
* 🏢 Displays company information
* 📍 Displays user's city
* 📧 Displays email and phone number

## 🛠️ Technologies Used

* ⚛️ React.js
* 🟨 JavaScript
* 🌐 Fetch API
* 🔄 React Hooks

  * `useState`
  * `useEffect`
* 🎨 CSS
* 📡 JSONPlaceholder API


### 1️⃣ Fetch User Data

The application uses `fetch()` to get user information from the JSONPlaceholder API.

```javascript
const report = await fetch(
  "https://jsonplaceholder.typicode.com/users"
);
```

### 2️⃣ Convert Response to JSON

```javascript
const users = await report.json();
```

### 3️⃣ Store Users in State

```javascript
setUsers(users);
```

The `users` state stores the API response.

### 4️⃣ Display Users

The `map()` method is used to create a card for each user.

```javascript
users.map((user) => {
  return <Card key={user.id} user={user} />;
})
```

### 5️⃣ Reusable Card Component

The `Card` component receives user information through **props**.

```javascript
<Card user={user} />
```

It displays:

* 👤 Name
* 📧 Email
* 📞 Phone
* 📍 City
* 🏢 Company

## 📱 Responsive Design

The application is designed to work on different screen sizes.

### 💻 Desktop

Multiple user cards are displayed in a row.

### 📱 Tablet

The card width adjusts automatically for smaller screens.

### 📲 Mobile

The cards become wider and fit comfortably on small screens.

## 🌐 API Used

**JSONPlaceholder**

The project uses the following endpoint:

```text
https://jsonplaceholder.typicode.com/users
```

JSONPlaceholder provides fake REST API data for testing and learning purposes.

## 🎯 Learning Objectives

This project helped me practice:

* ⚛️ React component creation
* 🪝 React Hooks
* 📦 State management using `useState`
* 🔄 Side effects using `useEffect`
* 🌐 API integration
* 📡 Fetch API
* 🧩 Props and reusable components
* 🔁 Array `map()` method
* 🎨 Responsive CSS
* 📱 Mobile-friendly UI






