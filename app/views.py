from flask import render_template

def index():
    return render_template('index.html')

def details():
    return render_template('details.html')

def not_found_404():
    return render_template('404.html')


