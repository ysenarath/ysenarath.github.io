import json

from staticjinja import Site

with open('src/projects.json', 'r', encoding='utf-8') as fp:
    projects = json.load(fp)

contexts = [
    ('projects.html', dict(projects=projects))
]

if __name__ == "__main__":
    site = Site.make_site(contexts=contexts)
    # enable automatic reloading
    site.render(use_reloader=True)
