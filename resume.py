from jinja2 import Environment, FileSystemLoader
import os
import pandas as pd

df = pd.read_csv("data/citations.csv")
df["Publication"] = df["Publication"].fillna(df["Publisher"])
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
    .fillna("")
)
research = {"items": df.to_dict(orient="records")}


def render_resume_tex(template_name="resume.tex.jinja2"):
    # Load the Jinja2 environment and template
    env = Environment(loader=FileSystemLoader("templates"))
    template = env.get_template(template_name)

    # Render the template with the provided context
    rendered_tex = template.render(research=research)

    os.makedirs("dist/tex", exist_ok=True)

    # Write the rendered LaTeX to a file
    with open("dist/tex/resume.tex", "w") as f:
        f.write(rendered_tex)


if __name__ == "__main__":
    render_resume_tex()
