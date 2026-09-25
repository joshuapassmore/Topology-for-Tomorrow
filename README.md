# Topology for Tomorrow (T4T)

The website of the Topology for Tomorrow research group at the University of
the Western Cape, built with Jekyll and **jekyll-theme-slate** (the same theme
as Joshua Passmore's personal website).

[Visit the website](https://joshuapassmore.org/Topology-for-Tomorrow/)

## Edit the website on GitHub

Open a file, click the pencil icon, edit the Markdown, and **Commit changes**.
GitHub Pages rebuilds the site automatically. Deployment progress appears
under **Actions**. You do not need to edit HTML or install anything locally.

| Content | File |
| --- | --- |
| Landing page | `index.md` |
| Upcoming and past seminar talks | `seminars.md` |
| Members | `members.md` |
| Research philosophy | `philosophy.md` |
| PDF abstracts | `abstracts/` |
| Site title, description and navigation | `_config.yml` |

Keep the front matter (the settings between the `---` lines at the top of each
page). The `permalink` settings preserve the existing website addresses.

Examples enclosed in `{% comment %}` and `{% endcomment %}` are hidden. Copy an
example **outside** these markers to display it, then replace the example details.
Remove the corresponding “will be added soon” message when adding real content.

## Add a seminar and its abstract

1. In `abstracts/`, choose **Add file → Upload files**, upload the PDF and commit.
   Use a filename without spaces, such as `2026-10-16-speaker-name.pdf`.
2. Open `seminars.md`, copy the commented example outside the comment, and replace
   the speaker, title, date, time and venue.
3. Set the PDF link to the exact filename:

   ```liquid
   [Abstract (PDF)]({{ '/abstracts/2026-10-16-speaker-name.pdf' | relative_url }})
   ```

4. Commit the changes. Omit the PDF link until a real abstract is available.

List upcoming talks in date order. After a talk, move its entry to **Past talks**,
most recent first. This move is manual. Keep PDFs in `abstracts/` so archived
links remain valid. Give local times in SAST (UTC+2).

## Mathematics

MathJax 4.0.0 is enabled throughout the site. Kramdown protects formulas from
Markdown processing when you use double-dollar delimiters.

For **inline** mathematics, keep the formula within a paragraph:

```text
Let $$f : X \to Y$$ be continuous.
```

For **displayed** mathematics, put the delimiters on their own lines, with blank
lines before and after the block:

```text
$$
a \wedge \bigvee_{i \in I} b_i
= \bigvee_{i \in I}(a \wedge b_i).
$$
```

Use single backslashes as shown. These forms preserve subscripts, alignment
characters and other TeX syntax without Markdown interpreting them. Single
dollar inline delimiters also work for simple expressions, but `$$...$$` is the
recommended form for these Markdown pages. Do not put formulas inside backticks
or fenced code blocks unless you want to show the source instead of typesetting it.

The small compatibility step in `assets/mathjax-config.js` converts Kramdown's
math elements into the delimiters MathJax 4 expects. MathJax loads from jsDelivr
and requires an internet connection. It typesets mathematical TeX, not full
LaTeX documents; upload compiled abstract PDFs separately.

## Theme and publishing

The standard Slate stylesheet supplies the layout, colours and typography.
`_layouts/default.html` supplies a shared header, text navigation and footer.
`assets/css/style.scss` only adds navigation and accessibility adjustments.

GitHub Pages is configured to publish from **main / (root)**. Keep `_config.yml`
and do not add a `.nojekyll` file, which would disable Jekyll processing.
The `baseurl` makes internal links work at `/Topology-for-Tomorrow/`; use
`relative_url` for links to site pages and PDFs. If the site moves to its own
domain, update `url` and `baseurl` together.

## Optional local preview

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000/Topology-for-Tomorrow/`.
