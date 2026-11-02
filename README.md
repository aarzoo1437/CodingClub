# Little Coding Club

A static, no-database coding challenge website built with HTML, CSS and vanilla JavaScript modules.

## Run locally
Because this project uses JavaScript modules, open it through a local server (not by double-clicking index.html).

If Python is installed:
1. Open Terminal in this folder.
2. Run: `python3 -m http.server 8000`
3. Visit: http://localhost:8000

Or use the VS Code Live Server extension.

## Daily challenge workflow
1. Open the site without a `#challenge=` link and choose **Admin settings** in the footer.
2. Fill in the theme (Hearts, Friendly Web Hero, Green Girl Hero, Taco Fiesta, Purple Cosmic, Berry Pop, VALORANT Agents, or VALORANT Immortal II), first-page content, reset activity, DSA question, MCQs and next-topic choices. Add or remove MCQs as needed.
3. Choose **Create today's share link**, copy the generated link, and send it to your friend.
4. The challenge content is encoded in that link. Opening it loads the challenge without a backend or a daily deployment. Save a new link for each day's challenge.
5. When your friend submits feedback, their email app opens a message addressed to `gargaarzoo24@gmail.com` with their check-in, coding answer, MCQ answers, score, feedback and requested topic. She needs to press **Send**.

The builder remembers the last challenge in that browser. Each generated link contains its own complete content, so previously sent links keep their original challenge. The admin panel is hidden on the shared practice link.

VALORANT agent portraits and the Immortal II badge load from the Valorant API media CDN, so the device needs internet access to show those images.

The **03 · TODAY'S TINY RESET** illustration itself is clickable (and keyboard-accessible). Activating it plays a short 3D pop/tilt effect; VALORANT agents dash forward and the Immortal II badge spins. The Hearts, Purple Cosmic, and Green Girl themes use stronger saturated palettes. Berry Pop depicts clustered beautyberries on leafy stems.

The Spider-Man web theme uses a full-page comic-book background with a textured crimson skyline and large web corners, plus the animated swing scene inside the reset card.

Berry, Green Girl, Hearts and Taco themes use full-page reference-style wallpapers hosted by Unsplash, WallpaperDog, WallpaperCave and Wallpapers.com. They load from those image hosts, so visitors need an internet connection for them to appear.

## Static-site limitations
There is no backend or database. A browser-only builder cannot update the original page globally, but it creates a share link containing the complete challenge. Response delivery uses the visitor's email app; this static site cannot send email silently, so the visitor must press Send.

## Folder structure
- `index.html`: page structure and screens
- `css/style.css`: layout, responsive styling and theme palettes
- `js/questions.js`: daily content you edit
- `js/themes.js`: theme-specific mini interactions
- `js/quiz.js`: MCQ rendering and scoring
- `js/app.js`: navigation, check-in, feedback and app setup
