# ❖ Omarchy × Hyprland Dojo

[![GitHub Repo](https://img.shields.io/badge/GitHub-postjohannes%2Fomarchy--hyprland--dojo-7aa2f7?style=flat-square&logo=github)](https://github.com/postjohannes/omarchy-hyprland-dojo)
[![Netlify](https://img.shields.io/netlify/d82b8aa2-e294-4c14-9ad4-fcd06035ea2d)](https://omarchy-hyprland-dojo.netlify.app/)
[![Built with Antigravity](https://img.shields.io/badge/Built%20with-Antigravity-bb9af7?style=flat-square)](https://github.com/postjohannes/omarchy-hyprland-dojo)
[![License: MIT](https://img.shields.io/badge/License-MIT-e0af68?style=flat-square)](https://opensource.org/licenses/MIT)


> **From "Floating Window Refugee" to Hyprland Tiling Ninja.**
> An interactive browser-based tutorial, live **Dwindle Tiling Simulator**, gamified **Muscle Memory Arcade**, and **Pro-Tips Reference** for mastering the **Hyprland** window manager in [**Omarchy**](https://omarchy.org) (DHH's opinionated Arch Linux + Hyprland environment).

---

## 🎯 Why This Exists

Jumping into **Omarchy** from macOS, Windows, or a traditional floating desktop environment can feel intimidating at first:
- *Why did my third terminal open in the bottom-right corner?*
- *Where did the minimize button go?*
- *How do I float a squished dialog or keep a video visible across workspaces?*

**Omarchy × Hyprland Dojo** lets you learn and practice Hyprland's **Dwindle spiral layout** and keyboard-driven philosophy right inside your browser—without worrying about messing up your active desktop session.

---

## ✨ Key Features

### 1. 🥋 Interactive Tiling Dojo (Live Hyprland Simulator)
- **Authentic Dwindle Binary-Tree Engine**: Experience how Hyprland splits the *currently focused* window, and practice flipping split axes (`Super + J`), resizing split ratios (`Super + =` / `Super + -`), moving focus (`Super + Arrows`), and swapping tiles (`Super + Shift + Arrows`).
- **Auto-Latched `❖ SUPER` Key**: Because browsers and host operating systems intercept the physical `Super` (Meta/Windows) key, the simulator includes an auto-latched `❖ SUPER` mode. Just press `Enter`, `B`, `W`, `J`, `T`, `F`, `O`, `G`, `S`, `1–5`, or `Arrow Keys` directly on your keyboard—or click the tactile mechanical keycap deck!
- **5 Progressive Levels with Hands-On Missions**:
  1. **Level 1 — The Survival Kit**: The Golden Rule (`Super + K`), Walker Launcher (`Super + Space`), Terminal (`Super + Return`), and Clean Close (`Super + W`).
  2. **Level 2 — The Dwindle Spiral**: Understanding why windows open where they do, flipping splits (`Super + J`), and resizing (`Super + =` / `Super + -`).
  3. **Level 3 — Surfing & Swapping**: Moving focus (`Super + Arrows`) vs. swapping tiles (`Super + Shift + Arrows`), floating (`Super + T`), fullscreen (`Super + F`), and the `Super + Mouse Drag` escape hatch.
  4. **Level 4 — Workspace Zen**: Replacing window minimizing with instant workspace switching (`Super + 1..5`), moving windows (`Super + Shift + 1..5`), and silent background throwing (`Super + Shift + Alt + 1..5`).
  5. **Level 5 — Omarchy Ninja Moves**: Picture-in-Picture **Pop & Pin** (`Super + O`), **Tabbed Window Groups** (`Super + G`), and the hidden **Scratchpad** (`Super + Alt + S` / `Super + S`).

### 2. ⚡ Muscle Memory Arcade
- A timed reflex game with real-world Hyprland scenarios, streak multipliers, and XP progression to wire Omarchy shortcuts straight into your fingers.

### 3. 💎 8 Omarchy Pro Secrets
- Actionable workflow cards covering fake fullscreen (`Super + Ctrl + F`), sticky Picture-in-Picture (`Super + O`), scratchpad stashing, and mouse-driven tiling, each with a **"🥋 Demo in Simulator"** button.

### 4. ⌨️ Searchable Cheat Sheet & `~/.config/hypr/bindings.conf` Builder
- Instant filterable directory of Omarchy shortcuts plus an interactive config generator that outputs safe personal overrides for `~/.config/hypr/bindings.conf` (so Omarchy updates never overwrite your custom binds).

### 5. 🎨 11 Omakase Dark & Light Themes + Cookie Persistence
- **6 Dark Themes**: Tokyo Night, Catppuccin Mocha, Gruvbox Material, Rosé Pine, Kanagawa Wave, Everforest Dark.
- **5 Light Themes**: Rosé Pine Dawn, Catppuccin Latte, Tokyo Night Day, Gruvbox Paper, Everforest Cream.
- **Persistent Progress**: Automatically saves your XP, completed missions, high scores, and UI preferences in a browser cookie (`omarchy_dojo_state`) with a one-click **`↺ Reset`** button in the header.

---

## 🤝 Contributing (PRs Are Very Welcome!)

**Everyone is welcome to submit Pull Requests with useful improvements!** Whether you're an Omarchy veteran or someone who just figured out a neat Hyprland trick, your contributions make this dojo better for the whole community.

### Great Ideas for Pull Requests
- 🎯 **New Arcade Scenarios**: Add fun, practical questions to `ARCADE_QUESTIONS` in [`app.js`](./app.js).
- 💎 **Extra Pro Tips**: Share a killer Omarchy/Hyprland workflow tip in `PRO_TIPS_DATA` in [`app.js`](./app.js).
- 🛠️ **Config Builder Presets**: Add useful, update-safe `~/.config/hypr/bindings.conf` snippets.
- 🎨 **New Omakase Themes**: Add new `[data-theme="..."]` palettes in [`styles.css`](./styles.css) and [`index.html`](./index.html).
- 🥋 **Simulator Enhancements**: Improve window animations, add submap demos, or multi-monitor workspace visualizations.

### How to Submit a PR
1. Fork [https://github.com/postjohannes/omarchy-hyprland-dojo](https://github.com/postjohannes/omarchy-hyprland-dojo)
2. Create a feature branch (`git checkout -b feature/my-awesome-tip`)
3. Commit your changes (`git commit -m "Add new pro tip / arcade scenario"`)
4. Push to your fork and open a **Pull Request**!

---

## 🚀 Quick Start (Run Locally)

Zero build steps or external frameworks required—it runs natively in any modern browser.

```bash
# 1. Clone the repository
git clone https://github.com/postjohannes/omarchy-hyprland-dojo.git
cd omarchy-hyprland-dojo

# 2. Start a local static server (opens on http://localhost:3000)
npm run dev
```

*(Or simply open `index.html` directly in your browser!)*

---

## 🙏 Credits & Acknowledgments

- **Created with [Antigravity](https://deepmind.google)** — Designed and built pair-programming with Antigravity.
- **Inspired by [Omarchy](https://omarchy.org)** by David Heinemeier Hansson (DHH) & the [Hyprland](https://hyprland.org) community.
