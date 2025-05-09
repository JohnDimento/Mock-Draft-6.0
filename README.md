# Mock Draft 6.0

A modern, responsive mock draft website that displays NFL draft picks with interactive descriptions.

## Features

- Clean, modern UI design
- Responsive layout for both desktop and mobile devices
- Interactive pick descriptions:
  - Desktop: Hover over picks to see descriptions
  - Mobile: Tap picks to view descriptions in a modal
- Organized by rounds
- Easy to update draft data

## Setup

1. Clone the repository
2. Open `index.html` in your browser
3. To update the draft data, modify the `draftData` object in `script.js`

## File Structure

- `index.html` - Main HTML structure
- `styles.css` - Styling and responsive design
- `script.js` - Interactive functionality and draft data
- `players.json` - Player data (if applicable)

## Customization

To add or modify draft picks:
1. Open `script.js`
2. Locate the `draftData` object
3. Add or modify picks following the existing format:
```javascript
{
    pick: number,
    team: "Team Name",
    player: "Player Name",
    description: "Pick description"
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome) 