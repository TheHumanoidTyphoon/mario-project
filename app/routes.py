from app.app import app
from app.views import index, details

app.add_url_rule('/', view_func=index)
app.add_url_rule('/details.html', view_func=details)