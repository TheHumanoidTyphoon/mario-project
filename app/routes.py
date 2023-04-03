from app.app import app
from app.views import index, details, not_found_404

app.add_url_rule('/', view_func=index)
app.add_url_rule('/details.html', view_func=details)
app.add_url_rule('/404.html', view_func=not_found_404)