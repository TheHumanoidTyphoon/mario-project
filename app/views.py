from flask import render_template
from app.app import app

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/details')
def details():
    return render_template('details.html')

@app.route('/404')
def not_found_404():
    return render_template('error handles/404.html')


