# 🗂️ Kanban Task Management App

A simple and elegant Kanban-style task management app built using **React**, **TailwindCSS**, and **Dnd-kit**. Manage your tasks by dragging and dropping between columns like **To Do**, **In Progress**, and **Completed**. Tasks are persisted in `localStorage`.

🔗 [Live Demo](https://kanban-app-proj-2.netlify.app/)

![Home Page](https://github.com/Subramaniyajothi6/Kanban-App-Proj-2/blob/main/Home-Page.png)
![Create New Task](https://github.com/Subramaniyajothi6/Kanban-App-Proj-2/blob/main/Create-New-Task.png)

---

## 🚀 Features

- 📝 Create, edit, and delete tasks
- 📌 Organize tasks by status: To Do, In Progress, Done
- 📦 Drag-and-drop tasks between columns
- 💾 Data persistence with localStorage
- ⚡ Responsive and minimal UI
- 💅 Built with TailwindCSS
- 🧠 State management using React Context API

---

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **Dnd-kit**
- **Context API**
- **localStorage API**

---

## 📁 Project Structure

<details>
<summary><strong>Click to expand</strong></summary>

```plaintext
Kanban-App-Proj-2/
├── public/                         # Public assets and HTML file
│
├── src/                            # All source code lives here
│   ├── App.css                     # App-wide styles
│   ├── App.jsx                     # Root component
│   ├── Board.jsx                   # Kanban board layout
│   ├── index.css                   # Global styles
│   ├── main.jsx                    # Entry point
│
│   ├── assets/
│   │   └── react.svg
│
│   ├── components/
│   │   ├── Column.jsx
│   │   ├── CreateTask.jsx
│   │   ├── EditTaskModal.jsx
│   │   ├── SortableList.jsx
│   │   └── TaskForm.jsx
│
│   ├── context/
│   │   └── TaskContext.jsx
│
│   └── utils/
│       └── localStorage.js
```

</details>

---

## 🧪 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Subramaniyajothi6/Kanban-App-Proj-2.git
cd Kanban-App-Proj-2
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

---

## ✅ Todos & Improvements

- [ ] Add due dates and priority levels
- [ ] Add tag/category system
- [ ] Dark mode support
- [ ] Backend integration (optional)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [Dnd-kit](https://dndkit.com/)
- [TailwindCSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
