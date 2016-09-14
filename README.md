# Partido de la Red.org

## Development

1. Instalar [Docker](docker.com).
2. Clonar este repo.
3. En la consola, estando en la carpeta del repo, correr:
  * `docker run -it --rm --name partidodelared.org -p 4000:4000  -v "$PWD":/srv/jekyll -w /srv/jekyll jekyll/jekyll bundle exec jekyll serve --watch`
4. Ir a `http://127.0.0.1:4000`
5. Ω
