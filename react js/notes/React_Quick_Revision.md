# ⚛️ React.js Quick Revision Guide

> Essential concepts with examples for rapid review

---

## 📚 Quick Navigation Index

### 🚀 [Quick Setup](#-quick-setup) | 📋 [Core Concepts](#-core-concepts) | 🧩 [React Fundamentals](#-react-fundamentals)

### ⚡ [Hooks Essentials](#-hooks-essentials) | 🔄 [Common Patterns](#-common-patterns) | 📂 [Project Structure](#-project-structure)

### 🛠️ [Essential ES6+](#️-essential-es6-for-react) | 🚨 [Common Mistakes](#-common-mistakes--solutions) | 🎯 [Quick Commands](#-quick-commands)

### 🏆 [Key Takeaways](#-key-takeaways) | 💡 [Interview Q&A](#-quick-interview-questions)

---

## 🚀 Quick Setup
```bash
npm create vite@latest my-app
cd my-app && npm install && npm run dev
```

---

## 📋 Core Concepts

### 1. 🌱 What is React?
**Component-based library for building UIs**
```jsx
// Component = Reusable piece of UI
function Welcome() {
  return <h1>Hello World!</h1>;
}
```

### 2. 📚 Library vs Framework
- **Library (React):** You control it, choose when to use
- **Framework (Angular):** It controls you, follow its rules

### 3. 🌐 Virtual DOM
**React's secret sauce for performance**
- Creates lightweight copy of Real DOM
- Compares old vs new (diffing)
- Updates only changed parts
- Result: 10x faster updates

### 4. 🎨 JSX Rules
```jsx
// ✅ Correct JSX
function App() {
  return (
    <div className="container">  {/* className not class */}
      <img src="photo.jpg" />    {/* Self-closing tags */}
      <h1>Hello {name}!</h1>     {/* JS in curly braces */}
    </div>
  );
}
```

### 5. 📱 SPA vs MPA
- **SPA:** One page, content changes dynamically (Gmail, Facebook)
- **MPA:** Multiple pages, full page reloads (Traditional websites)

---

## 🧩 React Fundamentals

### 1. Functional Components
```jsx
// Modern way - Function component
const UserCard = ({ name, age }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};
```

### 2. Props (Data from Parent to Child)
```jsx
// Parent Component
function App() {
  return <UserCard name="Kunal" age={25} />;
}

// Child Component
function UserCard({ name, age }) {
  return <h1>Hello {name}, you are {age} years old</h1>;
}
```

### 3. State (Component Memory)
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### 4. Lists & Keys
```jsx
function TodoList() {
  const todos = [
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build Project" }
  ];
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}
```

### 5. Conditional Rendering
```jsx
function Greeting({ isLoggedIn, username }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back, {username}!</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}
```

---

## ⚡ Hooks Essentials

### 1. useState - Component State
```jsx
const [state, setState] = useState(initialValue);

// Examples
const [name, setName] = useState('');
const [count, setCount] = useState(0);
const [user, setUser] = useState({ name: '', age: 0 });

// Update object state (immutable)
setUser({ ...user, age: 26 });
```

### 2. useEffect - Side Effects
```jsx
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  
  // Runs after every render
  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]); // Dependencies array
  
  return <div>{user?.name}</div>;
}
```

### 3. useRef - DOM Access
```jsx
import { useRef } from 'react';

function LoginForm() {
  const emailRef = useRef();
  
  const handleSubmit = () => {
    console.log(emailRef.current.value);
    emailRef.current.focus();
  };
  
  return (
    <div>
      <input ref={emailRef} type="email" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
```

---

## 🔄 Common Patterns

### 1. Form Handling
```jsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <form>
      <input 
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input 
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </form>
  );
}
```

### 2. API Calls
```jsx
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## 📂 Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Button/
│   └── Header/
├── pages/              # Route components
│   ├── Home/
│   └── About/
├── hooks/              # Custom hooks
├── utils/              # Helper functions
├── services/           # API calls
├── App.jsx
└── main.jsx
```

---

## 🛠️ Essential ES6+ for React

### 1. Arrow Functions
```jsx
// Instead of: function(name) { return "Hello " + name; }
const greet = (name) => `Hello ${name}`;

// Event handlers
<button onClick={() => setCount(count + 1)}>Click</button>
```

### 2. Destructuring
```jsx
// Props destructuring
function UserCard({ name, age, email }) {
  return <div>{name} - {email}</div>;
}

// State destructuring
const [count, setCount] = useState(0);
```

### 3. Spread Operator
```jsx
// Update object state
const [user, setUser] = useState({ name: 'John', age: 25 });
setUser({ ...user, age: 26 });

// Combine arrays
const allItems = [...items1, ...items2];
```

### 4. Template Literals
```jsx
const message = `Hello ${name}, you are ${age} years old`;

return (
  <div className={`user-card ${isActive ? 'active' : ''}`}>
    {message}
  </div>
);
```

---

## 🚨 Common Mistakes & Solutions

### 1. Mutating State Directly
```jsx
// ❌ Wrong
user.age = 26;
setUser(user);

// ✅ Correct
setUser({ ...user, age: 26 });
```

### 2. Missing Keys in Lists
```jsx
// ❌ Wrong
{items.map(item => <li>{item.name}</li>)}

// ✅ Correct
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

### 3. useEffect Dependencies
```jsx
// ❌ Wrong - Missing dependency
useEffect(() => {
  fetchUser(userId);
}, []); // userId missing!

// ✅ Correct
useEffect(() => {
  fetchUser(userId);
}, [userId]);
```

---

## 🎯 Quick Commands

```bash
# Create React App
npm create vite@latest my-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Install packages
npm install react-router-dom
npm install axios
```

---

## 🏆 Key Takeaways

1. **React = Components + Props + State**
2. **JSX = HTML-like syntax in JavaScript**
3. **useState = Component memory**
4. **useEffect = Side effects (API calls, timers)**
5. **Props flow down, Events bubble up**
6. **Always use keys in lists**
7. **Never mutate state directly**
8. **Destructure props for cleaner code**

---

## 💡 Quick Interview Questions

**Q: What is React?**
A: JavaScript library for building user interfaces using components

**Q: Virtual DOM vs Real DOM?**
A: Virtual DOM is faster - updates only changed parts, not entire page

**Q: useState vs useEffect?**
A: useState manages component state, useEffect handles side effects

**Q: Props vs State?**
A: Props are read-only data from parent, State is component's own data

---

🎉 **You're ready to build React apps!** This covers 80% of what you'll use daily in React development.