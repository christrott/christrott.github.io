# christrott.com.au

Source for my personal site at **[www.christrott.com.au](https://www.christrott.com.au)**, an overview of my work as a frontend / full-stack engineer, plus the game-jam projects I build in my spare time.

## Stack

- **React 19**, built with **Vite** (migrated from Create React App)
- **Bulma 1.0** + **Sass** for layout and theming (dark theme set on the `<html>` element)
- **react-icons** for the social links
- **Vitest** + **React Testing Library** for tests
- Hosted on **GitHub Pages**, deployed from the `gh-pages` branch, custom domain via `public/CNAME`

## Project structure

```
index.html              Page template (Vite entry point)
vite.config.js          Build, dev server and test config
public/                 Static files copied as-is: favicon, manifest, CNAME
src/
  index.jsx             Mounts the app
  App.jsx / App.scss    App shell and global theme variables
  components/
    Navbar/             Sticky navigation and mobile menu
    Content/
      Hero.jsx          Header: name, title, summary, LinkedIn / CV buttons (edit the constants at the top)
      About.jsx         About Me section
      Experience.jsx    Work history cards
      SideProjects.jsx  Game jam cards
  data/
    experience.js       Jobs, dates, highlights and tech tags (edit here)
    sideProjects.js     Game jam entries (add an `image` to show a screenshot)
```

To update jobs or games, edit the files in `src/data/`. The components read from them.

## Running locally

Requires Node 20.19+ (or 22.12+) and Yarn.

```bash
yarn install
yarn start    # dev server on http://localhost:3000
yarn test     # tests in watch mode (Vitest)
yarn build    # production build to /build
yarn preview  # serve the production build locally
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
- [x] Migrate off Create React App to Vite
- [x] Mobile photo layout, link-preview tags, manifest name and favicon
- [x] Footer and labelled social icon links
- [x] Header section and single scrolling page
- [x] Experience cards with role, dates and tech tags; separate side-projects section

Next:

- [ ] Screenshots for the side-project cards
- [ ] Navbar style pass and some style zest
- [ ] Accessibility pass (focus states, contrast, burger as a real button)
