from staticjinja import Site


if __name__ == "__main__":
    site = Site.make_site()
    # enable automatic reloading
    site.render(use_reloader=True)