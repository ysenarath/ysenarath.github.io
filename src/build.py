import json

from staticjinja import Site

with open('src/projects.json', 'r', encoding='utf-8') as fp:
    projects = json.load(fp)

with open('src/research.json', 'r', encoding='utf-8') as fp:
    research = json.load(fp)

with open('src/timeline.json', 'r', encoding='utf-8') as fp:
    timeline = json.load(fp)

contexts = [
    ('projects.html', dict(projects=projects)),
    ('research.html', dict(research=research)),
    ('timeline.html', dict(timeline=timeline)),
]

if __name__ == "__main__":
    site = Site.make_site(contexts=contexts)
    # enable automatic reloading
    site.render(use_reloader=True)
