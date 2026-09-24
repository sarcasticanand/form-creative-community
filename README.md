# FORM — Creative company

An interactive product demo for a community where creatives discover original work, meet collaborators, and find early supporters.

## Try the demo

https://sarcasticanand.github.io/form-creative-community/

## Features

- Discover and filter creative work; search artists and projects.
- Explore artist profiles, project credits, process notes, and AI disclosures.
- Follow creators, save projects, leave feedback, and record early picks.
- Browse collaboration opportunities and draft introductions.
- Publish a text-only demo project.
- Explore audience points, perks, project backing, and simulated artist coin trading.
- Responsive layouts, scroll reveals, and reduced-motion controls.

## Prototype scope

People and projects are fictional. Changes reset on refresh. Messages are not delivered. All backing and trading use simulated money; there are no payments, royalties, live markets, media uploads, or Spotify/YouTube integrations.

## Run locally

Serve this folder with any static web server, such as `python3 -m http.server 4173`, then open `http://localhost:4173`.

GitHub Pages publishes the repository root. No build step or dependencies are required.

## Image credits

Desert artwork generated for FORM. Reference photography by Francesco Albertazzi and Ben Scott on Unsplash, and Erik Mclean on Pexels. Full source links appear in the demo’s feature guide and project details. Photos illustrate fictional portfolios.

## Interaction audit — 25 September 2026

Fixed a shared click handler that treated clicks inside dialogs as page navigation. Form inputs, labels, selectors, and dialog content now remain interactive. Long dialogs keep their close control visible, validation errors explain missing input, and status messages are visible inside dialogs.

Navigation no longer depends on browser view transitions. Support and circle tabs have restorable URLs. Likes update card counts, introductions can be reviewed, the studio feed respects following, and insufficient balances/points show explanations.

Validation: 15 automated interaction suites; 44 page/viewport combinations at 320, 390, 768, and 1280 pixels; browser checks with actual clicks and typing for publishing, introductions, comments, backing, and coin trades.

Run regression checks with `npm ci && npm test`. These test dependencies are for development only; the website remains buildless.

This audit repairs the prototype. A live community still requires real authentication, durable data, uploads, messaging, moderation, and production operations. Financial features remain simulations.
