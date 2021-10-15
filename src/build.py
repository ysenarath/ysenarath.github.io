import json

from staticjinja import Site

with open('src/index.json', 'r', encoding='utf-8') as fp:
    index = json.load(fp)

with open('src/projects.json', 'r', encoding='utf-8') as fp:
    projects = json.load(fp)

with open('src/research.json', 'r', encoding='utf-8') as fp:
    research = json.load(fp)

with open('src/timeline.json', 'r', encoding='utf-8') as fp:
    timeline = json.load(fp)

contexts = [
    ('docs/index.html', dict(**index, timeline=timeline)),
    ('docs/projects.html', dict(projects=projects)),
    ('docs/research.html', dict(research=research)),
]

if __name__ == "__main__":
    site = Site.make_site(contexts=contexts)
    # enable automatic reloading
    site.render(use_reloader=True)
