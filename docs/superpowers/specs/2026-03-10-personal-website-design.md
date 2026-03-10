# Personal Website Design — Hari Prasad Piridi

## Overview

Personal academic/industry website using the al-folio Jekyll theme, deployed on GitHub Pages at `hpiridi.github.io`. The site showcases a dual identity: Director of Data Science at Walmart and active Research Scholar with publications and patents.

## Repository & Deployment

- **Approach:** Fork `alshedivat/al-folio` → rename to `hpiridi.github.io`
- **Deployment:** GitHub Pages via GitHub Actions (al-folio ships `deploy.yml`)
- **Branch:** `main` (al-folio default)
- **Local dev:** Docker (`docker compose up`) for live preview at `localhost:4000`
- **URL:** `https://hpiridi.github.io`

## Pages & Navigation

Navigation order (left to right), controlled by `nav_order` in each page's front matter:

| Nav Item | Route | Source |
|----------|-------|--------|
| About | `/` | `_pages/about.md` — landing page with bio, photo, news, social links, selected papers |
| Publications | `/publications/` | `_pages/publications.md` — auto-rendered from `_bibliography/papers.bib` |
| Patents | `/patents/` | `_pages/patents.md` — custom page reading from `_data/patents.yml` |
| Projects | `/projects/` | `_pages/projects.md` — grid of cards from `_projects/*.md` files |
| Blog | `/blog/` | `_pages/blog.md` — technical posts from `_posts/` |
| Teaching | `/teaching/` | `_pages/teaching.md` — uses `_teachings/*.md` collection files |
| CV | `/cv/` | `_pages/cv.md` — data-driven from `_data/cv.yml` (rendercv format) + downloadable PDF |

### About Page (Landing)

- Professional headshot at `assets/img/prof_pic.jpg` (left), bio text (right)
- `latest_posts: true` — 3 most recent blog posts
- `selected_papers: true` — starred publications
- News timeline — individual markdown files in `_news/` directory (e.g., `_news/announcement_1.md` with `inline: true` for short items)
- Social icons configured in `_config.yml` social section: Google Scholar, LinkedIn, GitHub, ORCID, Twitter/X, Email, ResearchGate, Semantic Scholar

### Social Links Configuration

Configured in `_config.yml` under the social section:
```yaml
scholar_userid: <google-scholar-id>
orcid_id: <orcid-id>
github_username: hpiridi
linkedin_username: <linkedin-id>
twitter_username: <twitter-handle>
email: <email-address>
```
ResearchGate and Semantic Scholar may require custom social entries if not natively supported by the theme version.

### Patents Page (Custom)

- Data file: `_data/patents.yml`
- Custom Liquid template in `_pages/patents.md` — renders as a styled list with expandable abstracts
- Layout: card-style list, sorted by date (newest first), with status badges (granted/pending/filed)
- Fields per entry: `title`, `number`, `date_filed`, `date_granted`, `status` (filed/granted/pending), `inventors`, `abstract`, `link`

Example entry:
```yaml
- title: "Method for Real-Time Demand Forecasting"
  number: US-11,xxx,xxx
  status: granted
  date_granted: 2025-06-15
  inventors:
    - Hari Prasad Piridi
    - Co-Inventor Name
  abstract: "A system and method for..."
  link: https://patents.google.com/patent/...
```

The Liquid template iterates over `site.data.patents`, renders each entry as a card with title, patent number, status badge, inventor list, expandable abstract, and external link.

## Blog & Technical Content

- Posts in `_posts/` as `YYYY-MM-DD-title.md`
- Tags, categories, and TOC support

### Enabled features

| Feature | Purpose | How to activate |
|---------|---------|-----------------|
| MathJax/KaTeX | LaTeX equations | `enable_math: true` in `_config.yml` |
| Mermaid | Flowcharts, sequence diagrams | `mermaid: true` in post front matter |
| Jupyter notebooks | Render `.ipynb` as posts | Place `.ipynb` files in `_posts/`, uses `jekyll-jupyter-notebook` plugin |
| Syntax highlighting | Code blocks with theme | `github` (light) / `github-dark` (dark) via highlight.js |
| Code copy button | One-click copy | Enabled by default |
| Image galleries | Zoomable images | imagemagick integration |
| Citations in posts | BibTeX references | jekyll-scholar plugin |
| Giscus comments | GitHub Discussions-based | Requires full giscus config (see below) |

### Giscus Configuration

Requires setup via [giscus.app](https://giscus.app/) to obtain `repo_id`, `category`, and `category_id`. Full config in `_config.yml`:
```yaml
giscus:
  repo: hpiridi/hpiridi.github.io
  repo_id: <from-giscus-app>
  category: Announcements
  category_id: <from-giscus-app>
  mapping: pathname
  strict: 0
  reactions_enabled: 1
  emit_metadata: 0
  input_position: bottom
  theme: preferred_color_scheme
  lang: en
```

## Publications & Scholarly

- `jekyll-scholar` reads `_bibliography/papers.bib`
- Each entry renders: title, authors, venue, year, expandable abstract, links (PDF, DOI, code, slides)
- `selected={true}` in BibTeX flags papers for the About page
- Author name auto-bolded via scholar config:

```yaml
scholar:
  last_name: [Piridi]
  first_name: [Hari Prasad, H.P.]
```

Example BibTeX entry:
```bibtex
@inproceedings{piridi2025example,
  title     = {Your Paper Title},
  author    = {Piridi, Hari Prasad and Coauthor, Name},
  booktitle = {Conference Name},
  year      = {2025},
  selected  = {true},
  abstract  = {Brief abstract here...},
  pdf       = {link-to-pdf},
  code      = {github-repo-link},
  preview   = {thumbnail.png}
}
```

## CV

- **Format:** rendercv — `_data/cv.yml` follows the rendercv schema
- Primary view: data-driven HTML page
- Secondary: downloadable PDF at `assets/pdf/cv.pdf`, linked via front matter `cv_pdf: cv.pdf`

## Projects

- Grid layout with cards from `_projects/*.md`
- Each project front matter: `layout`, `title`, `description`, `img`, `importance` (sort order), `category` (filtering), optional `redirect` link

## Teaching

- Uses the `_teachings` collection with individual files in `_teachings/*.md`
- Each file: course/workshop with front matter (`title`, `description`, `year`, `institution`)
- Rendered via al-folio's built-in teaching template

## Theme & Configuration

- **Color mode:** Auto (system preference) — `enable_darkmode: true` (enables auto-detection + manual toggle)
- **Code themes:** `github` (light) / `github-dark` (dark) via highlight.js
- **SEO:** `jekyll-seo-tag` (Open Graph, Twitter cards), `jekyll-sitemap`

### Key `_config.yml` values

```yaml
url: https://hpiridi.github.io
baseurl: ""
title: Hari Prasad Piridi
first_name: Hari Prasad
last_name: Piridi
description: "Director, Data Science @ Walmart | Research Scholar"
blog_name: "Hari Prasad Piridi"
enable_math: true
enable_darkmode: true
imagemagick:
  enabled: true

scholar:
  last_name: [Piridi]
  first_name: [Hari Prasad, H.P.]

giscus:
  repo: hpiridi/hpiridi.github.io
  repo_id: <from-giscus-app>
  category: Announcements
  category_id: <from-giscus-app>
  mapping: pathname
  theme: preferred_color_scheme

social:
  scholar_userid: <google-scholar-id>
  orcid_id: <orcid-id>
  github_username: hpiridi
  linkedin_username: <linkedin-id>
  twitter_username: <twitter-handle>
  email: <email-address>
```

### Asset locations

| Asset | Path |
|-------|------|
| Profile photo | `assets/img/prof_pic.jpg` |
| CV PDF | `assets/pdf/cv.pdf` |
| Project images | `assets/img/projects/` |
| Publication thumbnails | `assets/img/publication_preview/` |

## Out of Scope

- Custom domain (can add later)
- Google Analytics (can add later)
- Multi-language support
- Custom Jekyll plugins beyond al-folio defaults
