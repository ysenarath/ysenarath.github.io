import json
import pandas as pd

from staticjinja import Site

with open("data/index.json", "r", encoding="utf-8") as fp:
    index = json.load(fp)

with open("data/projects.json", "r", encoding="utf-8") as fp:
    projects = json.load(fp)

# with open("data/research.json", "r", encoding="utf-8") as fp:
#     research = json.load(fp)
#     # columns: 'title', 'authors', 'year', 'conference', 'description'

df = pd.read_csv("data/citations.csv")
# Authors,Title,Publication,Volume,Number,Pages,Year,Publisher

# fill in publication with Publisher if missing
df["Publication"] = df["Publication"].fillna(df["Publisher"])

# if df["Publication"].isna().any():
#     row = df[df["Publication"].isna()].iloc[0]
#     raise ValueError(f"Missing publication for {row['Title']}")
df = (
    df.rename(
        columns={
            "Authors": "authors",
            "Title": "title",
            "Publication": "conference",
            "Year": "year",
            "Publisher": "publisher",
            "Pages": "pages",
        }
    )
    # change year to int
    .astype({"year": int})
    .sort_values("year", ascending=False)
)
research = {"items": df.to_dict(orient="records")}

with open("data/timeline.json", "r", encoding="utf-8") as fp:
    timeline = json.load(fp)

contexts = [
    ("index.html", dict(**index, timeline=timeline)),
    ("projects.html", dict(projects=projects)),
    ("research.html", dict(research=research)),
]

if __name__ == "__main__":
    site = Site.make_site(contexts=contexts, outpath="dist")
    # enable automatic reloading
    site.render(use_reloader=True)
