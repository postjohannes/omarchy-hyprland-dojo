# ❖ Omarchy × Hyprland Dojo

An interactive tutorial, live **Dwindle Tiling Simulator**, gamified **Muscle Memory Arcade**, and **Pro-Tips Reference** designed to take you from a "Floating Window Refugee" to an **Omarchy + Hyprland Tiling Ninja**.

## ✨ Features

1. **🥋 Interactive Tiling Dojo (Live Hyprland Simulator)**
   - **Real Dwindle Spiral Engine**: Watch how Hyprland splits the *currently focused* window, and practice flipping split orientations (`Super + J`), resizing split ratios (`Super + =` / `Super + -`), moving focus (`Super + Arrows`), and swapping tiles (`Super + Shift + Arrows`).
   - **Auto-Latched `❖ SUPER` Mode**: Because browsers and host window managers intercept the physical OS `Super` key, the simulator features an auto-latched `Super` toggle so you can simply press `Enter`, `W`, `J`, `T`, `F`, `O`, `G`, `S`, `1–5`, or `Arrows` right in your browser—or click the tactile mechanical keycap deck.
   - **5 Progressive Levels** with hands-on missions and XP rank progression:
     - **Level 1**: The Golden Rule (`Super + K`) & Survival Kit (`Super + Space`, `Super + Return`, `Super + W`)
     - **Level 2**: Mastering the Dwindle Spiral (`Super + J`, `Super + =`, `Super + -`)
     - **Level 3**: Flow, Swapping, Floating & Fullscreen (`Super + Arrows`, `Super + Shift + Arrows`, `Super + T`, `Super + F`)
     - **Level 4**: Workspace Zen (`Super + 1..5`, `Super + Shift + 1..5`, `Super + Shift + Alt + 1..5`)
     - **Level 5**: Omarchy Ninja Moves — Pop & Pin (`Super + O`), Window Groups (`Super + G`), and the Secret Scratchpad (`Super + Alt + S` / `Super + S`)
2. **⚡ Muscle Memory Arcade**
   - Timed scenario quizzes that train your fingers to react to real-world Hyprland layout situations without thinking.
3. **💎 8 Omarchy Pro Secrets**
   - Deep-dive workflow cards with one-click **"Demo in Simulator"** buttons.
4. **⌨️ Searchable Cheat Sheet & `~/.config/hypr/bindings.conf` Builder**
   - Filterable reference of Omarchy's keybindings plus a safe customization generator for `~/.config/hypr/bindings.conf`.
5. **🎨 Omakase Theme Switcher**
   - Switch live between **Tokyo Night**, **Catppuccin Mocha**, **Gruvbox Material**, **Rosé Pine**, **Kanagawa Wave**, and **Everforest Dark**.

---

## 🚀 Running Locally

```bash
npm run dev
# Opens on http://localhost:3000
```

Or open `index.html` directly in any modern browser.

---

## 🌐 Deploying to Netlify

This project includes a pre-configured [`netlify.toml`](./netlify.toml) with zero build overhead:

- **Option A — Netlify Drag & Drop**: Drag the project folder directly into [app.netlify.com/drop](https://app.netlify.com/drop).
- **Option B — Netlify CLI**:
  ```bash
  npx netlify-cli deploy --prod --dir=.
  ```
- **Option C — Git Push**: Push this repository to GitHub/GitLab and connect it in Netlify (`Publish directory: .`, no build command needed).
