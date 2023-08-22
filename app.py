from flask import Flask, render_template, request, redirect, url_for
from story import Story


app = Flask(__name__)

story = Story(
    ["place", "noun", "verb", "adjective", "plural_noun"],
    """Once upon a time in a long-ago {place}, there lived a
       large {adjective} {noun}. It loved to {verb} {plural_noun}."""
)

@app.route('/')
def index():
    prompts = story.prompts
    return render_template('questions.html', prompts=prompts)

@app.route('/story', methods=["POST"])
def show_story():
    answers = request.form
    result = story.generate(answers)
    return render_template('story.html', result=result)

if __name__ == "__main__":
    app.run(debug=True)


