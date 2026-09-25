# Topology for Tomorrow (T4T)

Website starter for the Topology for Tomorrow research group, based at the
University of the Western Cape (UWC).

The site has four pages, a responsive layout, and MathJax for LaTeX mathematics.
It is plain HTML and CSS: there is no build step or package installation.
Names, talks, abstracts and the research philosophy are deliberately left for
the group to supply. Examples inside HTML comments do not appear on the site.

## Publish with GitHub Pages

If Pages has not yet been enabled:

1. Open this repository's **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose **main** and **/ (root)**, then click **Save**.
4. Wait for the Pages deployment to finish. The Pages settings show the live URL.

The `.nojekyll` file tells GitHub Pages to publish these files directly.
Keep it in the repository root. No custom domain is required.

## Edit directly on GitHub

Open a file, click the pencil icon, make your changes, and choose
**Commit changes**. Once Pages is enabled, commits to the publishing branch
update the website automatically. See **Actions** for deployment progress.

| What to change | File |
| --- | --- |
| Landing page and introduction | `index.html` |
| Upcoming and past seminar talks | `seminars.html` |
| Members and their profiles | `members.html` |
| Research philosophy | `philosophy.html` |
| Abstract PDFs | `abstracts/` |
| Colours, type, spacing and layout | `assets/style.css` |
| MathJax configuration | `assets/mathjax-config.js` |

Search for `EDIT` or `TEMPLATE` in a page to find the intended editing locations.
HTML comments start with `<!--` and end with `-->`; their contents are hidden.
Copy template articles **outside** the surrounding comment to display them.
The shared header and footer are repeated in the four HTML files, so update all
four if you change the navigation or group name.

### Add a seminar and its abstract

1. Open `abstracts/` and choose **Add file → Upload files**. Upload a PDF with a
   filename such as `2026-10-16-speaker-name.pdf`, then commit it.
2. Open `seminars.html`. Copy the commented `<article class="talk"> … </article>`
   template into the relevant section, outside the comment.
3. Replace the example title, speaker, institution, date, time and venue.
   Use a machine-readable `datetime` such as `2026-10-16` and the matching
   written date. Give local times in SAST (UTC+2).
4. Set the abstract link to `abstracts/your-actual-filename.pdf`. Filenames are
   case-sensitive. Remove the link if there is no PDF yet.
5. Remove the empty-state message from that section once it contains talks.
6. Commit your changes.

List upcoming talks in date order and past talks with the most recent first.
After a talk, move its complete `<article>` from Upcoming talks to Past talks.
This move is manual; dates do not automatically change the section. Keep the
PDF in `abstracts/` so archived links continue to work.

### Add a member

In `members.html`, copy the commented member article into `members-grid`,
outside the comment. Replace the example details and website URL. Repeat for
each member, and remove the empty-state message once profiles are present.

### Write the research philosophy

In `philosophy.html`, replace the empty-state block with your text.
Use `<p>…</p>` for paragraphs and `<h2>…</h2>` for section headings. A commented
example is included. The starter does not propose a philosophy on your behalf.

## Mathematics with MathJax

MathJax 4.0.0 is enabled on all four pages. It loads from jsDelivr, so readers
need an internet connection for typesetting. The rest of the site works without
JavaScript. The version is pinned to avoid unexpected major/minor changes.

Write inline mathematics as `\(…\)` or `$…$`:

```html
<p>Let \(f : X \to Y\) be continuous.</p>
```

Write displayed mathematics as `\[…\]` or `$$…$$`:

```html
\[
  a \wedge \bigvee_{i \in I} b_i
  = \bigvee_{i \in I}(a \wedge b_i).
\]
```

Use ordinary single backslashes in HTML, as above. Use `\lt` and `\gt` for
less-than and greater-than signs, or escape HTML characters as `&lt;` and
`&gt;`. Write an alignment separator as `&amp;` in HTML source. A literal dollar
sign in ordinary prose can be written as `\$`. Keep formulas in normal text,
not inside `<code>` or `<pre>`, which MathJax intentionally skips.

MathJax typesets mathematical TeX; it does not compile full LaTeX documents.
Upload compiled abstract PDFs separately.

## Local preview

Open `index.html` in a browser. Navigation, styling and MathJax work without a
build. Alternatively, run `python3 -m http.server 8000` in this folder, then
open `http://localhost:8000`.

## Design notes

- All page and asset links are relative, so the site works under a repository
  subpath or a future custom domain.
- The site uses system fonts, a serif heading font and a small T4T favicon.
- It includes keyboard focus styles, a skip link, active navigation, responsive
  layouts, reduced-motion support and print styling.
- No member names, seminar events, PDF abstracts, institutional logos, contact
  details or research claims have been invented.

## References

- [GitHub Pages publishing settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [MathJax documentation](https://docs.mathjax.org/en/latest/web/start.html)
