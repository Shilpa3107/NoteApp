# NoteApp

A simple full-stack web application to create, view, edit, and delete notes. Built with **Next.js**, **Tailwind CSS**, and **MongoDB**.

## Features

- **Create Notes** – Add a new note with a title and content.
- **View Notes** – See all notes on the dashboard.
- **Edit Notes** – Update the title and content of existing notes.
- **Delete Notes** – Remove notes you no longer need.
- **Timestamps** – Each note includes a creation date.

## Tech Stack

- **Frontend & Backend** – Next.js (App Router)
- **Styling** – Tailwind CSS
- **Database** – MongoDB (local / Compass)
- **Icons / Assets** – Stored in `public/assets`


## Project Structure

noteapp/
│

├─ app/

│ ├─ page.tsx # Home page / dashboard

│ ├─ create/page.tsx # Page to create a new note

│ ├─ edit/[id]/page.tsx # Page to edit a note

│ ├─ components/

│ │ ├─ Header.tsx

│ │ ├─ NoteCard.tsx

│ │ └─ FloatingAddButton.tsx

│ └─ api/

│ └─ notes/

│ └─ route.ts # API routes: GET, POST, PUT, DELETE

├─ types/

│ └─ note.ts # Shared Note interface

├─ public/assets/ # Icons (edit, delete, plus)

├─ .env.local # Environment variables

└─ package.json

## Getting Started

1. Clone the repo
```bash
git clone https://github.com/Shilpa3107/NoteApp.git
cd noteapp
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables

Create a .env.local file in the project root:

```bash
MONGO_URI=mongodb://127.0.0.1:27017/noteapp
```

4. Run the development server
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## API Routes

| Method | URL           | Description                     |
|--------|---------------|---------------------------------|
| GET    | /api/notes    | Fetch all notes or single note  |
| POST   | /api/notes    | Create a new note               |
| PUT    | /api/notes    | Update an existing note         |
| DELETE | /api/notes    | Delete a note by ID             |

## How to Use

1. Open the app in the browser.
2. Click the **+ button** to create a note.
3. Edit a note using the **edit icon**.
4. Delete a note using the **trash icon**.
5. Notes appear instantly on the dashboard.
6. Delete a note using the trash icon
7. Notes appear instantly on the dashboard
