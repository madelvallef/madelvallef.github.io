# Miguel Del Valle — Academic Website

This repository builds the personal research website at [madelvallef.github.io](https://madelvallef.github.io). It is a root-level GitHub Pages user site powered by Jekyll, with a deliberately small local interface layer.

## Local development

Install the Ruby version specified by the GitHub Actions workflow, then run:

```powershell
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000/`. To produce the deployable site without serving it:

```powershell
$env:JEKYLL_ENV = "production"
bundle exec jekyll build
```

For JavaScript formatting checks:

```powershell
npm.cmd ci
npm.cmd run lint:prettier
```

## Updating site content

| Change                                            | File or folder                             | What to edit                                                                                                          |
| ------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| Biography, research areas, contact links, CV path | `_data/profile.yml`                        | Update the paragraphs in `bio` and the relevant field. Leave `google_scholar` empty until a valid profile URL exists. |
| Profile photo                                     | `assets/img/profile/miguel-del-valle.webp` | Replace the file while preserving the filename; use a square, optimized image.                                        |
| Introductory landscape                            | `assets/img/landing-background.webp`       | Replace with an optimized wide WebP image.                                                                            |
| CV                                                | `assets/files/miguel-del-valle-cv.pdf`     | Replace this one file; no code change is required.                                                                    |
| Working papers and work in progress               | `_data/research.yml`                       | Add, edit, reorder, or promote entries.                                                                               |
| References                                        | `_data/references.yml`                     | Add or reorder fields using `order`. Phone and address are stored but not displayed.                                  |
| Site metadata and canonical domain                | `_config.yml`                              | Update only for site-wide settings or a future custom domain.                                                         |

### Add a working paper

Copy the shape of the existing entry in `_data/research.yml` and set:

```yml
- id: short-paper-id
  section: working-papers
  order: 2
  title: Paper title
  authors:
    - name: Author Name
      url: https://example.com/
  status: Draft
  abstract: A concise abstract.
  keywords: [Keyword one, Keyword two]
  pdf: https://example.com/paper.pdf
  bibtex: /assets/bibliography/short-paper-id.bib
  preview: /assets/img/research/short-paper-id.png
```

All other supported fields are optional: `external_link`, `slides`, `appendix`, `replication_materials`, `code`, `data`, `doi`, `journal`, `submission_information`, and `featured`. Add a matching BibTeX file to `assets/bibliography/`; use only verifiable bibliographic fields.

To move an item from Work in Progress into Working Papers, change only:

```yml
section: working-papers
```

Use `section: work-in-progress` for unpublished projects. With no entries, the section intentionally shows only its heading.

## Deployment and rollback

- Work on a feature branch, never directly on `main`.
- The deployment workflow builds changes merged into `main` and publishes `_site` to `gh-pages`.
- Before structural work, create a tag: `git tag backup/<description> main`.
- Commit explicit files only: `git add _data/research.yml assets/bibliography/<paper>.bib`.
- Roll back a deployment by reverting the merge commit on `main`; do not force-push or rewrite history.

Git is the source of truth. Keep the active clone outside Dropbox. Dropbox is appropriate for source assets and extra backups, but not for `.git/`, generated `_site/`, or dependency folders.

## Future custom domain

1. Add the verified domain to `url` in `_config.yml`; keep `baseurl: ""`.
2. Add a root `CNAME` file containing only the domain.
3. Configure the DNS records in GitHub Pages, enable HTTPS, and rebuild the site.
4. Verify the canonical URL, sitemap, `robots.txt`, social preview, and all asset links after deployment.
