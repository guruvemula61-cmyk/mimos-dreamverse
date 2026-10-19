
# Mimo's Dreamverse

**An Interactive Fantasy Web Experience Built with HTML, CSS, and JavaScript**

Mimo's Dreamverse is a creative, interactive website that transforms a simple browsing experience into a playful digital universe. Featuring a pastel-inspired interface, animated visual effects, an interactive dream garden, and personalized wish interactions, the project demonstrates how modern frontend fundamentals can be used to build engaging web experiences.

## Overview

The project is designed around a fantasy-inspired environment where users can interact with a character, explore a virtual garden, collect hidden elements, unlock surprises, and express their wishes.

The primary focus is on interactive storytelling, visual design, responsive layouts, and accessible user interactions without requiring a frontend framework or external JavaScript library.

## Key Features

- **Interactive Character:** Engage with Mimo through character interactions and animated effects.
- **Dynamic Visual Effects:** Experience an animated starfield and particle-based sparkle effects.
- **Day and Night Themes:** Switch between light and dark visual environments.
- **Interactive Dream Garden:** Discover and collect five flowers and five stars.
- **Unlockable Surprise:** Complete the garden collection to reveal a special interaction.
- **Wish Experience:** Enter a personal wish and receive an interactive response.
- **Surprise Messages:** Discover randomized inspirational messages.
- **Responsive Design:** Adapt the interface to desktop, tablet, and mobile screens.
- **Accessibility Support:** Includes keyboard focus indicators, accessible labels, and reduced-motion preferences.

## Technology Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure and content |
| CSS3 | Layout, gradients, animations, themes, and responsive styling |
| JavaScript | Interactive features, game logic, events, and dynamic effects |
| Google Fonts | Typography using Fredoka and Nunito |

## Project Structure

```text
mimos-dreamverse/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── mimo-star-baby.png
└── README.md
```

## Getting Started

### Prerequisites

- A modern web browser
- Visual Studio Code or another code editor
- Git, if cloning the repository

### Installation

Clone the repository:

```bash
git clone https://github.com/guruvemula61-cmyk/mimos-dreamverse.git
```

Navigate to the project directory:

```bash
cd mimos-dreamverse
```

Open the project in Visual Studio Code:

```bash
code .
```

Launch `index.html` using the Live Server extension or open it directly in a modern web browser.

Ensure that the character image is available at `assets/mimo-star-baby.png`.

## How to Use

1. Open the website and explore the main landing section.
2. Interact with Mimo to trigger visual effects.
3. Toggle between day and night themes.
4. Explore the Dream Garden and collect all available flowers and stars.
5. Unlock the garden surprise after completing the collection.
6. Enter a wish in the Dream Gift section.
7. Use the surprise interaction to reveal a randomized message.

## Implementation Details

### Interactive State Management

JavaScript event listeners handle user interactions and update the interface dynamically. The Dream Garden tracks collected flowers and stars and unlocks its reward when the collection is complete.

### Visual Design

CSS gradients, translucent surfaces, rounded components, shadows, and keyframe animations establish the website's visual identity. The layout uses responsive CSS rules to support different screen sizes.

### Background Animation

A canvas-based starfield creates a subtle animated background. The implementation also considers reduced-motion preferences and pauses animation when the page is hidden.

### Theme Switching

The day and night modes are implemented through a CSS class on the document body, allowing multiple visual properties to change together.

## Accessibility and Responsiveness

The project incorporates:

- Responsive layouts for desktop, tablet, and mobile devices.
- Visible keyboard focus indicators for interactive controls.
- Accessible labels for collectible garden elements.
- Reduced-motion support for users who prefer limited animation.
- Live announcements for selected interactive messages.

## Future Enhancements

Potential improvements include persistent wish storage, additional garden levels, more interactive characters, optional sound effects, and expanded personalization features.

## Project Information

**Project:** Mimo's Dreamverse  
**Category:** Frontend Web Development / Interactive Web Design  
**Author:** Vemula Guru Prasad  
**GitHub:** [guruvemula61-cmyk](https://github.com/guruvemula61-cmyk)

---

This project demonstrates the use of core web technologies to create an engaging, interactive, and responsive digital experience.
