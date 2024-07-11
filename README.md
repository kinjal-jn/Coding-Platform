# CodeJECRC

A competitive programming platform tailored for students, integrating problem-solving, leaderboard, and real-time collaboration.

## Features

- Problem-solving
- Leaderboard
- Real-time collaboration

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js
- **Database**: Firebase
- **Containerization**: Docker

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/CodeJECRC.git
    cd CodeJECRC
    ```

2. **Install dependencies:**
    ```sh
    cd frontend && npm install
    cd ../backend && npm install
    ```

3. **Configure Firebase:**
   - Create a Firebase project and replace the configuration in `frontend/src/firebaseConfig.js`.

4. **Run the application:**
    ```sh
    docker-compose up --build
    ```

## Usage

- Register/Login
- Solve problems
- View leaderboard
- Collaborate in real-time

## Contributing

1. Fork the repo
2. Create a branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push (`git push origin feature-branch`)
5. Open a pull request

