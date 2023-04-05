from app.app import app
from app.views import index, details, not_found_404

app.add_url_rule('/', index)
app.add_url_rule('/details.html', details)
app.add_url_rule('/404.html', not_found_404)
