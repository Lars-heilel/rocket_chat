# 🚀 Rocket-Chat: Frontend

This is the frontend for the "Rocket-Chat" real-time chat application. The app is built with a modern tech stack, including React, Vite, TypeScript, and Redux Toolkit, and is designed with scalability and maintainability in mind.

**[➡️ Link to the Backend Repository](https://github.com/Lars-heilel/backend)**

---

### ✨ Key Features

-   **User Authentication:** Sign up, log in, log out, and password recovery.
-   **Real-time Communication:** Exchange messages in real-time via WebSockets (Socket.IO).
-   **Friendship System:** Send, accept/reject friend requests, view your friend list, and remove friends.
-   **User Search:** Find new users by email, name, or ID.
-   **Profile Management:** View your profile with plans for future editing capabilities.
-   **UI Customization:** Light and dark theme support.
-   **Responsive Design:** A seamless experience on both desktop and mobile devices.

### 🛠️ Tech Stack

-   **Framework:** [React 19](https://react.dev/)
-   **Bundler:** [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) (including RTK Query for API interactions)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Form Handling:** [React Hook Form](https://react-hook-form.com/)
-   **Validation:** [Zod](https://zod.dev/)
-   **Real-time:** [Socket.IO Client](https://socket.io/docs/v4/client-api/)

### 🏗️ Architecture

The project is built upon the **Feature-Sliced Design (FSD)** methodology. This ensures:

-   **Scalability:** Easily add new features without affecting existing ones.
-   **Predictability:** A clear and understandable file structure.
-   **Reusability:** Modules (entities, features, shared) are easy to reuse across different parts of the application.
-   **Low Coupling:** Layers are isolated from one another, which simplifies refactoring and testing.

### 🚀 Getting Started

To get the project running on your local machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/Lars-heilel/rocket_chat.git]
    cd [rocket-chat]
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Create the environment file:**
    Copy the contents of `.env.example` to a new file named `.env` in the project root.

    ```bash
    cp .env.example .env
    ```

4.  **Configure environment variables:**
    Open the `.env` file and specify the URL of your running backend:

    ```env
    # URL for REST API requests
    VITE_BACKEND_URL=http://localhost:3001

    # Path for WebSocket connection
    VITE_SOCKET_URL=/rocket_socket
    ```

    _Make sure the backend server is running and accessible at the specified URL._

5.  **Start the development server:**
    ```bash
    npm run dev
    ```
