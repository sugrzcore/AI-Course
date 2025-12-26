# University Chatbot Project

This is our university group project: a simple chatbot that answers questions about the university and anything else you need! We built it using Node.js on the backend and the OpenAI API to generate answers. The frontend is clean, academic-style HTML with a chat interface, and it allows switching between different GPT models (GPT-4O-Mini, GPT-4.1-Mini, and GPT-3.5-Turbo). It’s designed to be easy to run and test, perfect for a small project or demo.

## What you need

1. **Node.js** (LTS version) – download and install it from the official site. Make sure `node -v` and `npm -v` work in your terminal.
2. **OpenAI API Key** – I didn't include my key for security, so you need to get your own and put it in a `.env` file.

## Setup

1. Put the folder somewhere on your computer.
2. Make sure you have `background.jpg` in the same folder as `chat.html` (you can replace it with your own image if you want).
3. Open a terminal inside the project folder and run:

```
npm install
```

This will install all the dependencies (express, cors, dotenv, openai, etc).

## Environment Variables

Create a file called `.env` in the project folder and put your API key in it:

```
OPENAI_API_KEY=sk-your-key-here
PORT=3000
```

## Running the Project

1. Start the backend server:

```
node server.js
```

or, if you have `nodemon`:

```
nodemon server.js
```

You should see:

```
Server listening at http://localhost:3000
```

2. Open `chat.html` in your browser.
3. Type a question, click send, and see the chatbot reply.
4. You can also click the buttons to switch between GPT models (GPT-4O-Mini, GPT-4.1-Mini, GPT-3.5-Turbo).

## Notes

* Don’t share your `.env` file, it has your API key.
* If something goes wrong, restart the server.
* To stop the server, press Ctrl + C.
* To update the server safely, stop it first, save changes, then start it again.

## Included Files

* `server.js` – backend code
* `chat.html` – frontend with chat box and model buttons
* `package.json` – project dependencies
* `README.md` – this file
* `background.jpg` – background image (replace if you want)

Everything is ready to run and can be pushed to GitHub.
