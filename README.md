# Heejun Kwon | Personal Homepage

This is my personal homepage for Sungkyunkwan University's SWE2021 Personal Homepage & Peer Contribution assignment. It introduces my academic background, experience, selected projects, certifications, and contact details.

The site uses plain HTML, CSS, and JavaScript. It has no third-party frontend dependencies or build step.

## Repository structure

| File | Purpose |
| --- | --- |
| `index.html` | English homepage content, section navigation, and contact links |
| `style.css` | Typography, layout, responsive breakpoints, and keyboard focus styles |
| `script.js` | Marks the current navigation link when the URL fragment changes |
| `404.html` | Custom page for missing routes on GitHub Pages |
| `favicon.ico` | Monochrome initials for browser tabs |
| `social-preview.png` | Open Graph image for shared links |
| `README.md` | Project overview and instructions for previewing and publishing |

## Preview locally

From the repository root, run this command with Python 3 installed.

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in a browser. Use the top navigation to jump between sections, and use Tab to check keyboard navigation. The page content and section links also work with JavaScript disabled.

For a local preview of the custom error page, open [http://127.0.0.1:8000/404.html](http://127.0.0.1:8000/404.html). Python’s static server uses its own error response for missing URLs, while GitHub Pages serves the custom page.

## Edit the content

Edit the section text, project cards, or contact links in `index.html`. If a section ID changes, update the corresponding navigation link. The page title, search description, and Open Graph tags are in the document head. Edit shared layout and typography in `style.css`, and update the error page copy in `404.html`.

## Publish with GitHub Pages

1. After review, add the site files to the root of the repository's `main` branch and push the approved changes.
2. Open **Settings → Pages** in the GitHub repository.
3. Under **Build and deployment**, select **Deploy from a branch** as the source.
4. Select **main** and **/ (root)**, then click **Save**.
5. Once the Pages deployment completes, open the site URL shown in **Settings → Pages**.
