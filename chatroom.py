from flask import Flask, render_template, request, redirect, url_for
import sqlite3
import os

app = Flask(__name__)

DB_PATH = "chat.db"

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            message TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()

# THIS MUST BE HERE
init_db()

# --- Routes ---
@app.route('/chatroom')
def chatroom():
    conn = get_db()
    posts = conn.execute(
        "SELECT username, message FROM posts ORDER BY id DESC"
    ).fetchall()
    conn.close()
    return render_template('chatroom.htm', posts=posts)

@app.route('/post', methods=['POST'])
def post_message():
    username = request.form.get('username', 'Anonymous')
    message = request.form.get('message')

    if message:
        conn = get_db()
        conn.execute(
            "INSERT INTO posts (username, message) VALUES (?, ?)",
            (username, message)
        )
        conn.commit()
        conn.close()

    return redirect(url_for('chatroom'))

if __name__ == '__main__':
    app.run(debug=True)