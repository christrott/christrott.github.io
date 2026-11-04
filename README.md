# christrott.com.au

Source for my personal site at **[www.christrott.com.au](https://www.christrott.com.au)**, an overview of my work as a frontend / full-stack engineer, plus the game-jam projects I build in my spare time.

## Stack

- **React 19**, bootstrapped with Create React App (`react-scripts` 5)
- **Bulma 1.0** + **Sass** for layout and theming (dark theme set on the `<html>` element)
- **React Router** (`HashRouter`), so routes work on GitHub Pages without server rewrites
- **react-icons** for the social links
- Hosted on **GitHub Pages**, deployed from the `gh-pages` branch, custom domain via `public/CNAME`

## Project structure

```
public/                 HTML template, favicon, manifest, CNAME
src/
  App.js / App.scss     App shell and global theme variables
  components/
    Navbar/             Navigation, mobile menu and routes
    Content/
      About.jsx         About Me section
      Projects.jsx      Work history and side projects (data lives in this file)
```

To add or edit a project, update the `projectData` array in `src/components/Content/Projects.jsx`.

## Running locally

Requires Node 18+ and Yarn.

```bash
yarn install
yarn start    # dev server on http://localhost:3000
yarn test     # tests in watch mode
```

## Deploying

```bash
yarn deploy   # builds to /build and publishes it to the gh-pages branch
```

`predeploy` runs the production build automatically, and the `gh-pages` package pushes the result. Changes go live once GitHub Pages picks up the new commit.

## Roadmap

Done:

- [x] Update About Me text and profile image
- [x] Mobile burger / nav menu
- [x] Projects listing with details and links
- [x] Dark theme

Next:

- [ ] Header with name, title, one-line summary and LinkedIn / CV buttons
- [ ] Single scrolling page (About, Experience, Side projects, Contact)
- [ ] Experience cards with role, dates and tech tags; separate side-projects section with screenshots
- [ ] Stack the profile photo above the text on mobile
- [ ] Real meta description, Open Graph preview image and manifest name
- [ ] Navbar style pass and some style zest
- [ ] Accessibility pass (labels on icon links, focus states, contrast)
- [ ] Migrate off Create React App (deprecated) to Vite
