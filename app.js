/* ==========================================================================
   OMARCHY × HYPRLAND DOJO — APPLICATION ENGINE & DWINDLE SIMULATOR
   ========================================================================== */

(() => {
  // --------------------------------------------------------------------------
  // 1. CURRICULUM DATA (5 PROGRESSIVE DOJO LEVELS)
  // --------------------------------------------------------------------------
  const DOJO_LEVELS = [
    {
      id: 1,
      shortName: "Survival",
      badge: "LEVEL 1 OF 5 • THE SURVIVAL KIT",
      title: "Don't Panic: The Golden Rule of Omarchy",
      story: `
        <p>Welcome to <strong>Omarchy</strong>! If you're coming from macOS, Windows, or GNOME, opening Hyprland for the first time feels like sitting in a cockpit with no buttons—where is the dock? Where is the minimize button? Why did my terminal just stretch across the entire monitor?!</p>
        <p>Take a breath. DHH designed Omarchy around one liberating rule: <strong>You only need to memorize ONE shortcut: <kbd>Super</kbd> + <kbd>K</kbd></strong>. Everything else flows from your fingertips.</p>
      `,
      mentalModelTitle: "Stop Reaching for the Mouse to Launch or Close",
      mentalModelBody:
        "In Omarchy, the Super key (Windows / Command key) is your steering wheel. Super + Return spawns a terminal, Super + B opens your browser, Super + Space opens Walker (your Spotlight-style launcher), and Super + W closes the focused window.",
      proTip: `<strong>🔥 Pro Tip:</strong> Break the <kbd>Alt</kbd> + <kbd>F4</kbd> or <kbd>Ctrl</kbd> + <kbd>Q</kbd> habit! In Omarchy, <kbd>Super</kbd> + <kbd>W</kbd> gracefully closes <em>any</em> active window—whether it's a terminal, browser, or native app.`,
      missions: [
        { id: "m1_k", text: "Open the live keybinding overlay (Super + K)", cmd: "show-k" },
        { id: "m1_term", text: "Spawn a new Ghostty Terminal (Super + Return)", cmd: "spawn-term" },
        { id: "m1_launcher", text: "Open the Walker App Launcher (Super + Space)", cmd: "launcher" },
        { id: "m1_close", text: "Close the focused window cleanly (Super + W)", cmd: "close-win" }
      ]
    },
    {
      id: 2,
      shortName: "Dwindle",
      badge: "LEVEL 2 OF 5 • THE DWINDLE SPIRAL",
      title: "Why Did My Window Open There?! (Dwindle Mastery)",
      story: `
        <p>The #1 frustration for Hyprland newcomers is unpredictability: <em>"I opened a third window and now it's a tiny square in the bottom corner!"</em></p>
        <p>Hyprland uses the <strong>Dwindle layout</strong> by default. Here is the secret: <strong>A new window ALWAYS splits whichever window you currently have focused!</strong> Wider windows split side-by-side; taller windows split top-and-bottom, creating a Fibonacci-like spiral.</p>
      `,
      mentalModelTitle: "You Control the Split Axis with Super + J",
      mentalModelBody:
        "Don't like how two adjacent windows are stacked? Press Super + J! It immediately flips the split between Horizontal (side-by-side) and Vertical (top-and-bottom). Need more breathing room? Use Super + = to grow or Super + - to shrink.",
      proTip: `<strong>🔥 Pro Tip:</strong> Before pressing <kbd>Super</kbd> + <kbd>Return</kbd> to open a new window, glance at which window has the <strong>glowing active border</strong>. That focused window is the exact box that will be cut in half!`,
      missions: [
        { id: "m2_three", text: "Have at least 3 tiled windows open on the workspace", cmd: "spawn-editor" },
        { id: "m2_split", text: "Flip the split orientation with Super + J", cmd: "toggle-split" },
        { id: "m2_grow", text: "Grow the active window's ratio (Super + =)", cmd: "grow-win" },
        { id: "m2_shrink", text: "Shrink the active window's ratio (Super + -)", cmd: "shrink-win" }
      ]
    },
    {
      id: 3,
      shortName: "Flow & Swap",
      badge: "LEVEL 3 OF 5 • NAVIGATION & REARRANGING",
      title: "Surfing Tiles: Focus vs. Swapping",
      story: `
        <p>Now that you understand the Dwindle tree, how do you move around and rearrange windows without dragging titlebars?</p>
        <p>In Omarchy, <kbd>Super</kbd> + <kbd>Arrow Keys</kbd> moves your <strong>focus</strong> (watch the glowing border jump). Hold <kbd>Shift</kbd> as well (<kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>Arrows</kbd>) to physically <strong>swap</strong> the window into that neighbor's slot!</p>
      `,
      mentalModelTitle: "When in Doubt, Float or Fullscreen",
      mentalModelBody:
        "Some windows (like calculators, file pickers, or settings dialogs) look weird when stretched into a tile. Press Super + T to float any window above the grid, or Super + F to zoom the focused tile to fullscreen temporarily.",
      proTip: `<strong>🔥 Pro Tip (The Mouse Escape Hatch):</strong> Brain frozen mid-meeting? Hold <kbd>Super</kbd> and <strong>Left-Click Drag</strong> anywhere inside a window to move it, or <kbd>Super</kbd> + <strong>Right-Click Drag</strong> to resize it with your mouse—no tiny window borders required!`,
      missions: [
        { id: "m3_focus", text: "Move focus between tiled windows (Super + Arrows)", cmd: "focus-next" },
        { id: "m3_swap", text: "Swap the active window's position (Super + Shift + Arrows)", cmd: "swap-next" },
        { id: "m3_float", text: "Toggle a window into Floating mode (Super + T)", cmd: "toggle-float" },
        { id: "m3_full", text: "Toggle Fullscreen on the active window (Super + F)", cmd: "toggle-fullscreen" }
      ]
    },
    {
      id: 4,
      shortName: "Workspaces",
      badge: "LEVEL 4 OF 5 • WORKSPACE ZEN",
      title: "Never Minimize Again: The 1–5 Workspace Flow",
      story: `
        <p>If you try to open 7 windows on Workspace 1, Hyprland will slice your screen into microscopic postage stamps. <strong>That's because tiling window managers don't use minimizing—they use Workspaces!</strong></p>
        <p>Give every task its own room: Workspace <code>1</code> for coding, <code>2</code> for your browser, <code>3</code> for Slack/Discord, <code>4</code> for music/notes. Switching rooms with <kbd>Super</kbd> + <kbd>1..5</kbd> is instantaneous.</p>
      `,
      mentalModelTitle: "2–3 Windows Max Per Workspace",
      mentalModelBody:
        "The sweet spot on a single monitor is 1 to 3 windows per workspace. If a workspace feels cramped, press Super + Shift + 2 (or 3) to throw the current window onto another workspace!",
      proTip: `<strong>🔥 Pro Tip:</strong> <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>2</kbd> moves the window to Workspace 2 <em>and</em> follows it there. Want toyeet a window to Workspace 2 <strong>without leaving Workspace 1</strong>? Add <kbd>Alt</kbd>: <kbd>Super</kbd> + <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>2</kbd>!`,
      missions: [
        { id: "m4_ws2", text: "Switch to Workspace 2 (Super + 2)", cmd: "ws-2" },
        { id: "m4_move", text: "Throw a window to another workspace (Super + Shift + 2)", cmd: "move-ws-2" },
        { id: "m4_ws1", text: "Jump back to Workspace 1 (Super + 1)", cmd: "ws-1" }
      ]
    },
    {
      id: 5,
      shortName: "Ninja Moves",
      badge: "LEVEL 5 OF 5 • OMARCHY POWER FEATURES",
      title: "Scratchpads, Tab Groups & 'Pop-and-Pin'",
      story: `
        <p>Ready for the moves that make Omarchy users look like wizards? Hyprland has three built-in superpowers that solve every edge case of tiling window management:</p>
        <p>1️⃣ <strong>Pop &amp; Pin (<kbd>Super</kbd> + <kbd>O</kbd>)</strong>: Floats a window in the corner and <em>pins</em> it so it follows you across every workspace (perfect for a video call or tutorial!).<br>
        2️⃣ <strong>Window Groups (<kbd>Super</kbd> + <kbd>G</kbd>)</strong>: Turns a tile into a tabbed container so multiple windows share one footprint.<br>
        3️⃣ <strong>The Scratchpad (<kbd>Super</kbd> + <kbd>S</kbd>)</strong>: A hidden pocket dimension for your todo list or music player.</p>
      `,
      mentalModelTitle: "Hybrid Tiling > Rigid Tiling",
      mentalModelBody:
        "You don't have to be a tiling purist! Combining a 2-column Dwindle layout with a Tabbed Group (Super + G), a hidden Scratchpad (Super + S), and a pinned Picture-in-Picture window (Super + O) gives you the best of both worlds.",
      proTip: `<strong>🔥 Pro Tip:</strong> Once you create a Window Group with <kbd>Super</kbd> + <kbd>G</kbd>, cycle through its tabs using <kbd>Super</kbd> + <kbd>Alt</kbd> + <kbd>Tab</kbd>, or pop a window back out of the group with <kbd>Super</kbd> + <kbd>Alt</kbd> + <kbd>G</kbd>!`,
      missions: [
        { id: "m5_pop", text: "Pop & Pin a window across all workspaces (Super + O)", cmd: "pop-pin" },
        { id: "m5_group", text: "Toggle a Tabbed Window Group on a tile (Super + G)", cmd: "toggle-group" },
        { id: "m5_stash", text: "Stash a window into the Scratchpad (Super + Alt + S)", cmd: "move-scratchpad" },
        { id: "m5_peek", text: "Summon/Toggle the Scratchpad overlay (Super + S)", cmd: "toggle-scratchpad" }
      ]
    }
  ];

  // --------------------------------------------------------------------------
  // 2. PRO TIPS DEEP-DIVE CARDS
  // --------------------------------------------------------------------------
  const PRO_TIPS_DATA = [
    {
      num: "SECRET #01",
      title: "The 'Pop & Pin' Picture-in-Picture Trick",
      keys: ["Super", "O"],
      desc: "Watching a conference talk or coding tutorial while working across 3 workspaces? Press Super + O on that window. Omarchy floats it, shrinks it neatly, and pins it so it stays visible even when you switch workspaces!",
      simCmd: "pop-pin"
    },
    {
      num: "SECRET #02",
      title: "Three Flavors of Fullscreen (Fake Fullscreen!)",
      keys: ["Super", "Ctrl", "F"],
      desc: "Super + F takes over the whole monitor. Super + Alt + F stretches full-width. Selection #3—Super + Ctrl + F—tells the app it's fullscreen while keeping it inside its small tile! Great for hiding browser tab bars on a reference doc.",
      simCmd: "toggle-fullscreen"
    },
    {
      num: "SECRET #03",
      title: "Silent Window Yeet (Stay Where You Are)",
      keys: ["Super", "Shift", "Alt", "1-9"],
      desc: "Normally, Super + Shift + 3 moves the active window to Workspace 3 AND switches your view to Workspace 3. Add Alt (Super + Shift + Alt + 3) to toss clutter away to another workspace without interrupting your current screen.",
      simCmd: "move-ws-2"
    },
    {
      num: "SECRET #04",
      title: "Pocket Dimension: The Scratchpad",
      keys: ["Super", "Alt", "S"],
      desc: "Have a terminal running a dev server, btop, or Obsidian notes that you check every 10 minutes? Press Super + Alt + S to stash it into the invisible Scratchpad. Then press Super + S anytime from any workspace to peek at it!",
      simCmd: "move-scratchpad"
    },
    {
      num: "SECRET #05",
      title: "Turn Any Cramped Tile into Browser-Style Tabs",
      keys: ["Super", "G"],
      desc: "When 4 terminals on one workspace get too narrow, press Super + G to turn the focused window into a Group, then Super + Shift + Arrow neighboring windows into it. Cycle tabs with Super + Alt + Tab!",
      simCmd: "toggle-group"
    },
    {
      num: "SECRET #06",
      title: "Mouse-Driven Tiling (Super + Drag)",
      keys: ["Super", "Left/Right Mouse"],
      desc: "You never have to hunt for a 2px window border to resize in Hyprland. Hold Super and Left-Click drag anywhere inside a window to move/swap it, or hold Super and Right-Click drag anywhere inside to resize effortlessly.",
      simCmd: "grow-win"
    },
    {
      num: "SECRET #07",
      title: "Instant Split Flip When Dwindle Guesses Wrong",
      keys: ["Super", "J"],
      desc: "Because Dwindle splits in a spiral, every second split is vertical. If you want two wide horizontal stacked terminals instead of side-by-side columns, press Super + J to rotate the split axis 90 degrees immediately.",
      simCmd: "toggle-split"
    },
    {
      num: "SECRET #08",
      title: "Safe Config Overrides in bindings.conf",
      keys: ["~/.config/hypr/bindings.conf"],
      desc: "Omarchy ships opinionated defaults in ~/.local/share/omarchy/config/hypr/. Never edit those directly! Put your own unbind/bind commands in ~/.config/hypr/bindings.conf so Omarchy updates never wipe your muscle memory.",
      simCmd: "show-k"
    }
  ];

  // --------------------------------------------------------------------------
  // 3. COMPLETE CHEAT SHEET DIRECTORY
  // --------------------------------------------------------------------------
  const CHEATSHEET_BINDS = [
    { cat: "essentials", keys: ["Super", "K"], action: "Open Interactive Keybindings Help Overlay", detail: "The #1 shortcut in Omarchy—shows all live shortcuts", simCmd: "show-k" },
    { cat: "essentials", keys: ["Super", "Space"], action: "Open Walker Application Launcher", detail: "Fuzzy-search apps, calculators, and system commands", simCmd: "launcher" },
    { cat: "essentials", keys: ["Super", "Alt", "Space"], action: "Open Omarchy Main Menu", detail: "Access theme switcher, updates, fonts, and system tools", simCmd: "launcher" },
    { cat: "essentials", keys: ["Super", "Return"], action: "Launch Terminal (Ghostty / Alacritty)", detail: "Opens a new terminal splitting the currently focused tile", simCmd: "spawn-term" },
    { cat: "essentials", keys: ["Super", "B"], action: "Launch Default Web Browser", detail: "Opens Chromium / Zen Browser in the current workspace", simCmd: "spawn-browser" },
    { cat: "essentials", keys: ["Super", "W"], action: "Close Focused Window", detail: "Gracefully closes any active application window", simCmd: "close-win" },
    { cat: "tiling", keys: ["Super", "← ↓ ↑ →"], action: "Move Window Focus", detail: "Jump active focus border in the arrow direction", simCmd: "focus-next" },
    { cat: "tiling", keys: ["Super", "Shift", "← ↓ ↑ →"], action: "Swap Tiled Window Position", detail: "Swap the active window with its neighbor in that direction", simCmd: "swap-next" },
    { cat: "tiling", keys: ["Super", "J"], action: "Flip Dwindle Split Orientation", detail: "Rotate split between side-by-side and top-and-bottom", simCmd: "toggle-split" },
    { cat: "tiling", keys: ["Super", "="], action: "Grow Focused Window Size", detail: "Expand the active tile's split ratio", simCmd: "grow-win" },
    { cat: "tiling", keys: ["Super", "-"], action: "Shrink Focused Window Size", detail: "Reduce the active tile's split ratio", simCmd: "shrink-win" },
    { cat: "tiling", keys: ["Super", "T"], action: "Toggle Floating vs. Tiling Mode", detail: "Pop window above the tiling grid or snap it back in", simCmd: "toggle-float" },
    { cat: "tiling", keys: ["Super", "F"], action: "Toggle Fullscreen", detail: "Expand focused window to fill the entire display", simCmd: "toggle-fullscreen" },
    { cat: "workspaces", keys: ["Super", "1 – 9"], action: "Switch to Workspace 1–9", detail: "Teleport directly to workspace number N", simCmd: "ws-2" },
    { cat: "workspaces", keys: ["Super", "Shift", "1 – 9"], action: "Move Window to Workspace 1–9", detail: "Send focused window to workspace N and follow it", simCmd: "move-ws-2" },
    { cat: "workspaces", keys: ["Super", "Shift", "Alt", "1 – 9"], action: "Silently Send Window to Workspace 1–9", detail: "Move window to workspace N without leaving current workspace", simCmd: "move-ws-2" },
    { cat: "workspaces", keys: ["Super", "Tab"], action: "Next / Previous Workspace", detail: "Cycle quickly between active workspaces", simCmd: "ws-2" },
    { cat: "advanced", keys: ["Super", "O"], action: "Pop Out & Pin Window (Sticky PiP)", detail: "Float and pin window so it appears on every workspace", simCmd: "pop-pin" },
    { cat: "advanced", keys: ["Super", "G"], action: "Toggle Window Grouping (Tabbed Tile)", detail: "Convert tile into a tabbed container group", simCmd: "toggle-group" },
    { cat: "advanced", keys: ["Super", "Alt", "Tab"], action: "Cycle Tabs Inside Window Group", detail: "Switch active window inside a Super + G tabbed group", simCmd: "toggle-group" },
    { cat: "advanced", keys: ["Super", "Alt", "S"], action: "Move Window to Scratchpad", detail: "Hide active window inside the secret scratchpad workspace", simCmd: "move-scratchpad" },
    { cat: "advanced", keys: ["Super", "S"], action: "Toggle Scratchpad Overlay", detail: "Summon or hide your stashed scratchpad window anywhere", simCmd: "toggle-scratchpad" },
    { cat: "system", keys: ["Super", "Ctrl", "Space"], action: "Omarchy Theme & Wallpaper Picker", detail: "Hot-swap Tokyo Night, Catppuccin, Gruvbox, Rose Pine, etc.", simCmd: "cycle-theme" },
    { cat: "system", keys: ["Super", "Escape"], action: "System Power & Lock Menu", detail: "Lock screen, suspend, restart, or power off", simCmd: "show-k" }
  ];

  // --------------------------------------------------------------------------
  // 4. MUSCLE MEMORY ARCADE SCENARIOS
  // --------------------------------------------------------------------------
  const ARCADE_QUESTIONS = [
    {
      tag: "DWINDLE LAYOUT",
      question: "You opened a 3rd terminal and it split into a skinny vertical column instead of stacking horizontally. What flips the split axis?",
      hint: "It's right on the home row under your right index finger.",
      correct: "Super + J",
      options: [
        { keys: "Super + J", desc: "Toggle split orientation (Horizontal ↔ Vertical)" },
        { keys: "Super + V", desc: "Paste clipboard manager" },
        { keys: "Super + R", desc: "Enter resize submap" },
        { keys: "Super + Tab", desc: "Switch workspace" }
      ],
      explanation: "Spot on! Super + J instantly rotates the current Dwindle split between horizontal and vertical."
    },
    {
      tag: "SURVIVAL RULE #1",
      question: "You completely blanked on how to screenshot or lock the screen in Omarchy. Which single keybind opens the live cheat sheet?",
      hint: "Think 'K' for Keybindings!",
      correct: "Super + K",
      options: [
        { keys: "Super + K", desc: "Open Omarchy Keybindings Overlay" },
        { keys: "Super + H", desc: "Move focus left" },
        { keys: "Ctrl + Alt + Del", desc: "Close all windows" },
        { keys: "Super + ?", desc: "Unbound key" }
      ],
      explanation: "Yes! DHH's golden rule: never memorize everything, just remember Super + K."
    },
    {
      tag: "WINDOW STATES",
      question: "A file-picker or calculator window opened up stretched across half your monitor. How do you pop it into Floating mode?",
      hint: "Think 'T' for Toggle tiling/floating.",
      correct: "Super + T",
      options: [
        { keys: "Super + T", desc: "Toggle Tiling / Floating state" },
        { keys: "Super + F", desc: "Toggle Fullscreen" },
        { keys: "Super + W", desc: "Close active window" },
        { keys: "Super + P", desc: "Toggle pseudotile" }
      ],
      explanation: "Nailed it! Super + T toggles any window between Floating and Tiling."
    },
    {
      tag: "PRO WORKFLOW",
      question: "You're watching a YouTube livestream and want it to float in the corner AND follow you across all workspaces. What's the bind?",
      hint: "Pop 'O'ut and Pin!",
      correct: "Super + O",
      options: [
        { keys: "Super + O", desc: "Pop out & Pin window across workspaces" },
        { keys: "Super + P", desc: "Pseudo-tile mode" },
        { keys: "Super + S", desc: "Toggle scratchpad" },
        { keys: "Super + G", desc: "Toggle window group" }
      ],
      explanation: "Boom! Super + O pops the window out and pins it across every workspace."
    },
    {
      tag: "SCRATCHPAD",
      question: "You want to hide your Spotify or Notes window in the secret Scratchpad pocket so you can summon it anytime with Super + S. How do you stash it there?",
      hint: "Add Alt to the Scratchpad key!",
      correct: "Super + Alt + S",
      options: [
        { keys: "Super + Alt + S", desc: "Move active window into the Scratchpad" },
        { keys: "Super + S", desc: "Toggle viewing the Scratchpad" },
        { keys: "Super + W", desc: "Close the window" },
        { keys: "Super + Shift + 9", desc: "Move to Workspace 9" }
      ],
      explanation: "Exact! Super + Alt + S stashes the window into the Scratchpad, and Super + S toggles it into view."
    },
    {
      tag: "REARRANGING TILES",
      question: "Your code editor is on the right half of the screen, and you want to swap it to the left half using the keyboard. What do you press?",
      hint: "Super + Arrows moves focus; add Shift to move the window itself!",
      correct: "Super + Shift + ←",
      options: [
        { keys: "Super + Shift + ←", desc: "Swap focused window to the left" },
        { keys: "Super + ←", desc: "Move focus to the left window" },
        { keys: "Alt + Tab", desc: "Cycle window focus" },
        { keys: "Super + Ctrl + ←", desc: "Workspace navigation" }
      ],
      explanation: "Correct! Super + Arrows moves focus; Super + Shift + Arrows swaps the physical tiles."
    },
    {
      tag: "TABBED GROUPS",
      question: "You have 4 terminals open on one workspace and want to combine them into a single tabbed container. Which shortcut starts a Window Group?",
      hint: "Think 'G' for Group!",
      correct: "Super + G",
      options: [
        { keys: "Super + G", desc: "Toggle Window Group (Tabbed container)" },
        { keys: "Super + T", desc: "Toggle Floating" },
        { keys: "Super + J", desc: "Flip split direction" },
        { keys: "Super + B", desc: "Open Browser" }
      ],
      explanation: "Nice! Super + G turns the tile into a tabbed group (and Super + Alt + Tab cycles the tabs)."
    },
    {
      tag: "CLEAN EXIT",
      question: "You're done with a terminal window and want to close it the Omarchy way (instead of Alt + F4). What do you press?",
      hint: "Same letter used to close a browser tab!",
      correct: "Super + W",
      options: [
        { keys: "Super + W", desc: "Close active window" },
        { keys: "Super + X", desc: "Cut text" },
        { keys: "Super + Escape", desc: "Open Power Menu" },
        { keys: "Super + C", desc: "Copy selection" }
      ],
      explanation: "Easy! Super + W closes any focused window in Omarchy."
    }
  ];

  // --------------------------------------------------------------------------
  // 5. APPLICATION STATE, COOKIE PERSISTENCE & SIMULATOR ENGINE
  // --------------------------------------------------------------------------
  const COOKIE_NAME = "omarchy_dojo_state";

  const state = {
    xp: 0,
    completedMissions: new Set(),
    currentLevelIdx: 0,
    activeTab: "dojo",
    theme: "tokyo-night",
    superLatched: true,
    theaterMode: false,
    fsBannerDismissed: false,
    configToggles: ["vim_nav", "zen_mode", "center_float"],
    activeWorkspace: 1,
    nextWinId: 1,
    focusedWinId: null,
    fullscreenWinId: null,
    scratchpadVisible: false,
    // Each window: { id, ws, appType, title, cmdPreview, splitDir: 'v'|'h', ratio: 0.5, floating: false, pinned: false, grouped: false, groupTabs: [], inScratchpad: false }
    windows: [],
    arcade: {
      qIndex: 0,
      streak: 0,
      bestStreak: 0,
      score: 0,
      timerId: null,
      timeLeft: 100,
      answered: false
    }
  };

  function saveUserStateToCookie() {
    const payload = {
      xp: state.xp,
      completedMissions: Array.from(state.completedMissions),
      currentLevelIdx: state.currentLevelIdx,
      activeTab: state.activeTab,
      theme: state.theme,
      superLatched: state.superLatched,
      theaterMode: state.theaterMode,
      fsBannerDismissed: state.fsBannerDismissed,
      configToggles: state.configToggles,
      arcadeBestStreak: state.arcade.bestStreak,
      arcadeScore: state.arcade.score
    };
    const serialized = encodeURIComponent(JSON.stringify(payload));
    // Save for 365 days in browser cookie
    document.cookie = `${COOKIE_NAME}=${serialized}; path=/; max-age=31536000; SameSite=Lax`;
    try {
      localStorage.setItem(COOKIE_NAME, JSON.stringify(payload));
    } catch (_) {}
  }

  function loadUserStateFromCookie() {
    let raw = null;
    const cookies = document.cookie ? document.cookie.split("; ") : [];
    for (const c of cookies) {
      if (c.startsWith(`${COOKIE_NAME}=`)) {
        raw = decodeURIComponent(c.substring(COOKIE_NAME.length + 1));
        break;
      }
    }
    if (!raw) {
      try {
        raw = localStorage.getItem(COOKIE_NAME);
      } catch (_) {}
    }
    if (!raw) return;

    try {
      const data = JSON.parse(raw);
      if (typeof data.xp === "number") state.xp = data.xp;
      if (Array.isArray(data.completedMissions)) {
        state.completedMissions = new Set(data.completedMissions);
      }
      if (
        typeof data.currentLevelIdx === "number" &&
        data.currentLevelIdx >= 0 &&
        data.currentLevelIdx < DOJO_LEVELS.length
      ) {
        state.currentLevelIdx = data.currentLevelIdx;
      }
      if (typeof data.activeTab === "string") state.activeTab = data.activeTab;
      if (typeof data.theme === "string") state.theme = data.theme;
      if (typeof data.superLatched === "boolean") state.superLatched = data.superLatched;
      if (typeof data.theaterMode === "boolean") state.theaterMode = data.theaterMode;
      if (typeof data.fsBannerDismissed === "boolean") {
        state.fsBannerDismissed = data.fsBannerDismissed;
      }
      if (Array.isArray(data.configToggles)) {
        state.configToggles = data.configToggles;
      }
      if (typeof data.arcadeBestStreak === "number") {
        state.arcade.bestStreak = data.arcadeBestStreak;
      }
      if (typeof data.arcadeScore === "number") {
        state.arcade.score = data.arcadeScore;
      }
    } catch (_) {}
  }

  function resetAllUserProgress() {
    // Expire cookie immediately & clear localStorage backup
    document.cookie = `${COOKIE_NAME}=; path=/; max-age=0; SameSite=Lax`;
    try {
      localStorage.removeItem(COOKIE_NAME);
    } catch (_) {}

    state.xp = 0;
    state.completedMissions = new Set();
    state.currentLevelIdx = 0;
    state.activeTab = "dojo";
    state.theme = "tokyo-night";
    state.superLatched = true;
    state.theaterMode = false;
    state.fsBannerDismissed = false;
    state.configToggles = ["vim_nav", "zen_mode", "center_float"];
    state.arcade.streak = 0;
    state.arcade.bestStreak = 0;
    state.arcade.score = 0;

    // Update UI controls to default
    const themeSelect = document.getElementById("themeSelect");
    if (themeSelect) themeSelect.value = state.theme;
    applyTheme(state.theme, false);

    updateRankAndXpUI();
    document.getElementById("arcadeStreak").textContent = "0 🔥";
    document.getElementById("arcadeBestStreak").textContent = "0 🏆";
    document.getElementById("arcadeScore").textContent = "0";

    const superBtn = document.getElementById("superLatchBtn");
    if (superBtn) superBtn.classList.add("active");
    const superStatus = document.getElementById("superLatchStatus");
    if (superStatus) superStatus.textContent = "HELD (AUTO-LATCH ON)";

    const dojoLayout = document.querySelector(".dojo-layout");
    if (dojoLayout) dojoLayout.classList.remove("theater-mode");
    const simTheaterBtn = document.getElementById("simTheaterBtn");
    const bannerTheaterBtn = document.getElementById("bannerTheaterBtn");
    if (simTheaterBtn) simTheaterBtn.textContent = "◧ Wide Sim";
    if (bannerTheaterBtn) bannerTheaterBtn.textContent = "◧ Expand Simulator";

    document.getElementById("fullscreenBanner")?.classList.remove("hidden");

    document.querySelectorAll("#configToggles input").forEach((chk) => {
      chk.checked = state.configToggles.includes(chk.value);
    });
    updateConfigSnippet(false);

    switchTab("dojo", false);
    resetSimulatorDesk();
    renderCurrentLesson();
    showOsd(["↺ Reset"], "Cleared saved cookie progress & restored default options");
  }

  const APP_TEMPLATES = {
    term: [
      {
        title: "ghostty ~ neovim",
        icon: "🐚",
        lines: [
          "❯ nvim ~/.config/hypr/bindings.conf",
          "# Omarchy personal keybindings",
          "bind = SUPER, Return, exec, ghostty",
          "bind = SUPER, J, togglesplit"
        ]
      },
      {
        title: "ghostty ~ btop",
        icon: "📊",
        lines: [
          "CPU  [||||||..........] 24%   MEM 4.1G / 32G",
          "hypland        0.8%   waybar       0.2%",
          "ghostty        1.1%   walker       0.0%"
        ]
      },
      {
        title: "ghostty ~ lazygit",
        icon: "🌿",
        lines: [
          "▼ Staged Changes (2)",
          "  M index.html",
          "  M app.js",
          "✓ Ready to deploy on Netlify"
        ]
      }
    ],
    browser: [
      {
        title: "chromium — manual.omacom.io",
        icon: "🌐",
        lines: [
          "Omarchy Manual // Window Management",
          "• Super + Space → Walker Launcher",
          "• Super + K     → Keybinding Cheat Sheet",
          "• Super + O     → Pop & Pin Window"
        ]
      }
    ],
    editor: [
      {
        title: "nvim — src/dwindle_dojo.rs",
        icon: "⚡",
        lines: [
          "fn split_focused_tile(node: &mut Tile) {",
          "    node.direction = node.direction.flip();",
          "    // Press Super + J to flip axis!",
          "}"
        ]
      }
    ]
  };

  // Initialize default simulator windows on Workspace 1 & 2
  function resetSimulatorDesk() {
    state.nextWinId = 1;
    state.activeWorkspace = 1;
    state.fullscreenWinId = null;
    state.scratchpadVisible = false;
    state.windows = [
      {
        id: state.nextWinId++,
        ws: 1,
        appType: "editor",
        title: "nvim — ~/.config/hypr/bindings.conf",
        icon: "⚡",
        lines: [
          "# Welcome to the Live Hyprland Simulator!",
          "# Notice the glowing border around this focused window.",
          "# Any new window you spawn splits the FOCUSED window!",
          "bind = SUPER, K, exec, omarchy-help"
        ],
        splitDir: "v", // vertical seam = side-by-side columns
        ratio: 0.54,
        floating: false,
        pinned: false,
        grouped: false,
        groupTabs: ["bindings.conf"],
        inScratchpad: false
      },
      {
        id: state.nextWinId++,
        ws: 1,
        appType: "term",
        title: "ghostty ~ omarchy-cli",
        icon: "🐚",
        lines: [
          "❯ omarchy status",
          "✔ WM: Hyprland (dwindle spiral layout)",
          "✔ Try pressing [Enter], [J], [T], [O], [G], or [W]!"
        ],
        splitDir: "h", // horizontal seam = stacked top/bottom
        ratio: 0.5,
        floating: false,
        pinned: false,
        grouped: false,
        groupTabs: ["ghostty"],
        inScratchpad: false
      }
    ];
    state.focusedWinId = state.windows[1].id;
    renderSimulator();
    showOsd(["❖ Ready"], "Interactive Hyprland Desk Reset");
  }

  // Get visible tiled windows on current workspace
  function getWorkspaceTiledWindows(ws = state.activeWorkspace) {
    return state.windows.filter(
      (w) => w.ws === ws && !w.floating && !w.pinned && !w.inScratchpad
    );
  }

  // Get floating or pinned windows visible on current workspace
  function getWorkspaceOverlayWindows(ws = state.activeWorkspace) {
    return state.windows.filter(
      (w) =>
        (!w.inScratchpad && (w.pinned || (w.floating && w.ws === ws))) ||
        (w.inScratchpad && state.scratchpadVisible)
    );
  }

  // Ensure focusedWinId is valid on current workspace
  function ensureValidFocus() {
    const visible = [
      ...getWorkspaceOverlayWindows(),
      ...getWorkspaceTiledWindows()
    ];
    if (!visible.some((w) => w.id === state.focusedWinId)) {
      state.focusedWinId = visible.length ? visible[visible.length - 1].id : null;
    }
  }

  // Calculate Dwindle Binary Split Boxes for tiled windows
  function computeDwindleRects(tiledWins) {
    const rects = new Map();
    if (tiledWins.length === 0) return rects;

    // If a tiled window is fullscreened on this workspace
    if (
      state.fullscreenWinId &&
      tiledWins.some((w) => w.id === state.fullscreenWinId)
    ) {
      rects.set(state.fullscreenWinId, { x: 0, y: 0, w: 100, h: 100 });
      return rects;
    }

    let box = { x: 0, y: 0, w: 100, h: 100 };
    for (let i = 0; i < tiledWins.length; i++) {
      const win = tiledWins[i];
      if (i === tiledWins.length - 1) {
        rects.set(win.id, { ...box });
      } else {
        const r = Math.min(0.75, Math.max(0.25, win.ratio || 0.5));
        if (win.splitDir === "v") {
          // Side-by-side split
          const leftW = box.w * r;
          rects.set(win.id, { x: box.x, y: box.y, w: leftW, h: box.h });
          box = { x: box.x + leftW, y: box.y, w: box.w - leftW, h: box.h };
        } else {
          // Top-and-bottom split
          const topH = box.h * r;
          rects.set(win.id, { x: box.x, y: box.y, w: box.w, h: topH });
          box = { x: box.x, y: box.y + topH, w: box.w, h: box.h - topH };
        }
      }
    }
    return rects;
  }

  // Render Waybar + Hyprland Tiling Canvas
  function renderSimulator() {
    ensureValidFocus();
    const canvas = document.getElementById("hyprCanvas");
    if (!canvas) return;

    // Update Waybar workspace pills
    document.querySelectorAll("#waybarWorkspaces .ws-pill").forEach((btn) => {
      const wsNum = Number(btn.dataset.ws);
      const hasWins = state.windows.some(
        (w) => w.ws === wsNum && !w.inScratchpad && !w.pinned
      );
      btn.classList.toggle("active", wsNum === state.activeWorkspace);
      btn.classList.toggle("occupied", hasWins);
    });

    // Update Scratchpad indicator in Waybar
    const scratchCount = state.windows.filter((w) => w.inScratchpad).length;
    const scratchPill = document.getElementById("waybarScratchpadPill");
    if (scratchPill) {
      scratchPill.classList.toggle("hidden", scratchCount === 0);
      scratchPill.textContent = `📦 Scratchpad (${scratchCount})`;
    }

    // Update split direction indicator
    const focusedWin = state.windows.find((w) => w.id === state.focusedWinId);
    const splitDirEl = document.getElementById("waybarSplitDir");
    if (splitDirEl && focusedWin) {
      splitDirEl.textContent =
        focusedWin.splitDir === "v" ? "side-by-side (⬌)" : "top-bottom (⬍)";
    }

    const tiledWins = getWorkspaceTiledWindows();
    const overlayWins = getWorkspaceOverlayWindows();
    const rects = computeDwindleRects(tiledWins);

    canvas.innerHTML = "";

    if (tiledWins.length === 0 && overlayWins.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-workspace-msg";
      empty.innerHTML = `
        <div class="big-glyph">❖</div>
        <strong>Workspace ${state.activeWorkspace} is Empty</strong>
        <span>Press <kbd>Super</kbd> + <kbd>Return</kbd> (or click <strong>+ Terminal</strong> below) to spawn your first window!</span>
      `;
      canvas.appendChild(empty);
      return;
    }

    const GAP_PCT = 0.8;

    // Render Tiled Windows
    tiledWins.forEach((win, idx) => {
      const rect = rects.get(win.id);
      if (!rect) return;
      const el = createWindowElement(win, idx, tiledWins.length);
      el.style.left = `calc(${rect.x}% + ${GAP_PCT / 2}%)`;
      el.style.top = `calc(${rect.y}% + ${GAP_PCT / 2}%)`;
      el.style.width = `calc(${rect.w}% - ${GAP_PCT}%)`;
      el.style.height = `calc(${rect.h}% - ${GAP_PCT}%)`;
      canvas.appendChild(el);
    });

    // Render Floating / Pinned / Scratchpad Windows
    overlayWins.forEach((win, idx) => {
      const el = createWindowElement(win, idx, overlayWins.length);
      el.classList.add("floating");
      if (win.pinned) {
        el.classList.add("pinned");
        // Bottom-right Picture-in-Picture corner
        el.style.width = "36%";
        el.style.height = "38%";
        el.style.left = "61%";
        el.style.top = "58%";
      } else if (win.inScratchpad) {
        // Centered dropdown scratchpad style
        el.style.width = "64%";
        el.style.height = "62%";
        el.style.left = "18%";
        el.style.top = "16%";
      } else {
        // Standard centered floating window
        const offset = (idx % 3) * 4;
        el.style.width = "54%";
        el.style.height = "56%";
        el.style.left = `${22 + offset}%`;
        el.style.top = `${20 + offset}%`;
      }
      canvas.appendChild(el);
    });
  }

  function createWindowElement(win, idx, totalTiled) {
    const el = document.createElement("div");
    el.className = "hypr-window";
    if (win.id === state.focusedWinId) el.classList.add("focused");

    const badgesHtml = [];
    if (win.inScratchpad) {
      badgesHtml.push(`<span class="win-badge badge-pin">📦 SCRATCHPAD</span>`);
    } else if (win.pinned) {
      badgesHtml.push(`<span class="win-badge badge-pin">📌 PINNED (ALL WS)</span>`);
    } else if (win.floating) {
      badgesHtml.push(`<span class="win-badge badge-float">FLOATING</span>`);
    } else if (state.fullscreenWinId === win.id) {
      badgesHtml.push(`<span class="win-badge badge-pin">FULLSCREEN</span>`);
    } else {
      const dirLabel = win.splitDir === "v" ? "⬌ H-Split" : "⬍ V-Split";
      badgesHtml.push(`<span class="win-badge badge-split">${dirLabel}</span>`);
    }

    if (win.grouped) {
      badgesHtml.push(`<span class="win-badge badge-group">🗂️ GROUP (${win.groupTabs.length})</span>`);
    }

    const groupBarHtml = win.grouped
      ? `<div class="win-group-tabs">
          ${win.groupTabs
            .map(
              (t, i) =>
                `<span class="win-group-tab ${
                  i === win.groupTabs.length - 1 ? "active" : ""
                }">${t}</span>`
            )
            .join("")}
        </div>`
      : "";

    const linesHtml = (win.lines || [])
      .map((l) => `<div>${escapeHtml(l)}</div>`)
      .join("");

    const isFocused = win.id === state.focusedWinId;
    const footerHint = isFocused
      ? `<span>● FOCUSED (Active Border)</span><span>Next split: ${
          win.splitDir === "v" ? "Side-by-Side ⬌" : "Top/Bottom ⬍"
        }</span>`
      : `<span>Click or Super+Arrows to focus</span><span>WS ${win.ws}</span>`;

    el.innerHTML = `
      <div class="win-titlebar">
        <div class="win-title-left">
          <span>${win.icon || "🐚"}</span>
          <strong>${escapeHtml(win.title)}</strong>
        </div>
        <div class="win-badges">${badgesHtml.join("")}</div>
      </div>
      ${groupBarHtml}
      <div class="win-body">
        <div class="win-code-lines">${linesHtml}</div>
        <div class="split-preview-line">${footerHint}</div>
      </div>
    `;

    el.addEventListener("click", (e) => {
      e.stopPropagation();
      state.focusedWinId = win.id;
      renderSimulator();
    });

    return el;
  }

  // --------------------------------------------------------------------------
  // 6. EXECUTING HYPRLAND COMMANDS IN SIMULATOR
  // --------------------------------------------------------------------------
  function executeSimCommand(cmd) {
    ensureValidFocus();
    const focused = state.windows.find((w) => w.id === state.focusedWinId);

    switch (cmd) {
      case "spawn-term":
      case "spawn-browser":
      case "spawn-editor": {
        const typeKey =
          cmd === "spawn-browser"
            ? "browser"
            : cmd === "spawn-editor"
            ? "editor"
            : "term";
        const pool = APP_TEMPLATES[typeKey];
        const tpl = pool[state.nextWinId % pool.length];

        // If focused window is a Group, add as a new tab inside that group!
        if (focused && focused.grouped && !focused.floating && !focused.inScratchpad) {
          focused.groupTabs.push(`${typeKey}-${state.nextWinId++}`);
          focused.title = tpl.title;
          focused.lines = tpl.lines;
          showOsd(["Super", "Return"], `Added tab to Group (${focused.groupTabs.length} tabs)`);
          completeMission("m1_term");
          renderSimulator();
          return;
        }

        // Determine alternating Dwindle spiral direction based on current focused window
        let nextSplitDir = "v";
        if (focused) {
          nextSplitDir = focused.splitDir === "v" ? "h" : "v";
        }

        const newWin = {
          id: state.nextWinId++,
          ws: state.activeWorkspace,
          appType: typeKey,
          title: tpl.title,
          icon: tpl.icon,
          lines: tpl.lines,
          splitDir: nextSplitDir,
          ratio: 0.5,
          floating: false,
          pinned: false,
          grouped: false,
          groupTabs: [tpl.title.split(" ")[0]],
          inScratchpad: false
        };

        // Insert right after the focused window so it splits the focused window!
        const idx = focused ? state.windows.findIndex((w) => w.id === focused.id) : -1;
        if (idx >= 0) {
          state.windows.splice(idx + 1, 0, newWin);
        } else {
          state.windows.push(newWin);
        }
        state.focusedWinId = newWin.id;
        state.fullscreenWinId = null;

        const keyLabel =
          cmd === "spawn-browser" ? "B" : cmd === "spawn-editor" ? "N" : "Return";
        showOsd(["Super", keyLabel], `Spawned ${tpl.title}`);

        if (cmd === "spawn-term") completeMission("m1_term");
        if (getWorkspaceTiledWindows().length >= 3) completeMission("m2_three");
        renderSimulator();
        break;
      }

      case "close-win": {
        if (!focused) {
          showOsd(["Super", "W"], "No active window to close");
          return;
        }
        state.windows = state.windows.filter((w) => w.id !== focused.id);
        if (state.fullscreenWinId === focused.id) state.fullscreenWinId = null;
        ensureValidFocus();
        showOsd(["Super", "W"], `Closed ${focused.title}`);
        completeMission("m1_close");
        renderSimulator();
        break;
      }

      case "toggle-split": {
        const tiled = getWorkspaceTiledWindows();
        if (tiled.length < 2) {
          showOsd(["Super", "J"], "Open at least 2 tiled windows to flip split!");
          return;
        }
        // In dwindle, the split between the focused window and its neighbor is governed by the parent/focused node
        const targetIdx = tiled.findIndex((w) => w.id === state.focusedWinId);
        const splitOwner =
          targetIdx === tiled.length - 1 ? tiled[targetIdx - 1] : tiled[targetIdx];
        if (splitOwner) {
          splitOwner.splitDir = splitOwner.splitDir === "v" ? "h" : "v";
          showOsd(
            ["Super", "J"],
            `Flipped Dwindle Split → ${
              splitOwner.splitDir === "v" ? "Side-by-Side (⬌)" : "Top-and-Bottom (⬍)"
            }`
          );
          completeMission("m2_split");
          renderSimulator();
        }
        break;
      }

      case "grow-win":
      case "shrink-win": {
        const tiled = getWorkspaceTiledWindows();
        if (tiled.length < 2) {
          showOsd(["Super", cmd === "grow-win" ? "=" : "-"], "Need 2+ windows to resize split");
          return;
        }
        const targetIdx = tiled.findIndex((w) => w.id === state.focusedWinId);
        const splitOwner =
          targetIdx === tiled.length - 1 ? tiled[targetIdx - 1] : tiled[targetIdx];
        const delta = cmd === "grow-win" ? 0.08 : -0.08;
        splitOwner.ratio = Math.min(0.75, Math.max(0.25, (splitOwner.ratio || 0.5) + delta));
        showOsd(
          ["Super", cmd === "grow-win" ? "=" : "-"],
          `${cmd === "grow-win" ? "Grew" : "Shrank"} tile split ratio (${Math.round(
            splitOwner.ratio * 100
          )}%)`
        );
        completeMission(cmd === "grow-win" ? "m2_grow" : "m2_shrink");
        renderSimulator();
        break;
      }

      case "focus-next": {
        const visible = [
          ...getWorkspaceTiledWindows(),
          ...getWorkspaceOverlayWindows()
        ];
        if (visible.length < 2) {
          showOsd(["Super", "Arrows"], "Need 2+ windows to cycle focus");
          return;
        }
        const curIdx = visible.findIndex((w) => w.id === state.focusedWinId);
        const nextWin = visible[(curIdx + 1) % visible.length];
        state.focusedWinId = nextWin.id;
        showOsd(["Super", "→"], `Moved focus to ${nextWin.title}`);
        completeMission("m3_focus");
        renderSimulator();
        break;
      }

      case "swap-next": {
        const tiled = getWorkspaceTiledWindows();
        if (tiled.length < 2) {
          showOsd(["Super", "Shift", "Arrows"], "Need 2+ tiled windows to swap");
          return;
        }
        const curTiledIdx = tiled.findIndex((w) => w.id === state.focusedWinId);
        const nextTiledIdx = (curTiledIdx + 1) % tiled.length;
        const winA = tiled[curTiledIdx];
        const winB = tiled[nextTiledIdx];
        const idxA = state.windows.indexOf(winA);
        const idxB = state.windows.indexOf(winB);
        state.windows[idxA] = winB;
        state.windows[idxB] = winA;
        showOsd(["Super", "Shift", "→"], `Swapped tile position with ${winB.title}`);
        completeMission("m3_swap");
        renderSimulator();
        break;
      }

      case "toggle-float": {
        if (!focused) return;
        focused.floating = !focused.floating;
        if (!focused.floating) focused.pinned = false;
        state.fullscreenWinId = null;
        showOsd(
          ["Super", "T"],
          focused.floating ? "Floated active window above grid" : "Snapped window back into Dwindle tiles"
        );
        completeMission("m3_float");
        renderSimulator();
        break;
      }

      case "toggle-fullscreen": {
        if (!focused) return;
        focused.floating = false;
        focused.pinned = false;
        state.fullscreenWinId =
          state.fullscreenWinId === focused.id ? null : focused.id;
        showOsd(
          ["Super", "F"],
          state.fullscreenWinId ? "Fullscreen ON (Super + F to restore)" : "Restored Dwindle tile layout"
        );
        completeMission("m3_full");
        renderSimulator();
        break;
      }

      case "pop-pin": {
        if (!focused) return;
        focused.pinned = !focused.pinned;
        focused.floating = focused.pinned;
        state.fullscreenWinId = null;
        showOsd(
          ["Super", "O"],
          focused.pinned
            ? "📌 Popped & Pinned! Try switching workspaces (Super + 2)—it follows you!"
            : "Unpinned window and returned to tile"
        );
        completeMission("m5_pop");
        renderSimulator();
        break;
      }

      case "toggle-group": {
        if (!focused) return;
        focused.grouped = !focused.grouped;
        if (focused.grouped && focused.groupTabs.length < 2) {
          focused.groupTabs = [focused.title.split(" ")[0], "zsh-2", "logs"];
        }
        showOsd(
          ["Super", "G"],
          focused.grouped
            ? "🗂️ Created Tabbed Window Group! (Super + Alt + Tab cycles tabs)"
            : "Ungrouped window container"
        );
        completeMission("m5_group");
        renderSimulator();
        break;
      }

      case "move-scratchpad": {
        if (!focused) return;
        focused.inScratchpad = true;
        focused.floating = true;
        state.scratchpadVisible = false;
        ensureValidFocus();
        showOsd(
          ["Super", "Alt", "S"],
          "📦 Stashed window into hidden Scratchpad! Press Super + S to peek."
        );
        completeMission("m5_stash");
        renderSimulator();
        break;
      }

      case "toggle-scratchpad": {
        const scratchWins = state.windows.filter((w) => w.inScratchpad);
        if (scratchWins.length === 0) {
          // Create a helpful scratchpad window if none exists yet
          const noteWin = {
            id: state.nextWinId++,
            ws: state.activeWorkspace,
            appType: "editor",
            title: "scratchpad — todo.md (Obsidian / Neovim)",
            icon: "📦",
            lines: [
              "# Secret Scratchpad Pocket (Super + S)",
              "- [x] Learn Super + K",
              "- [x] Flip Dwindle splits with Super + J",
              "- [ ] Deploy Omarchy Dojo to Netlify"
            ],
            splitDir: "v",
            ratio: 0.5,
            floating: true,
            pinned: false,
            grouped: false,
            groupTabs: ["todo.md"],
            inScratchpad: true
          };
          state.windows.push(noteWin);
          state.scratchpadVisible = true;
          state.focusedWinId = noteWin.id;
        } else {
          state.scratchpadVisible = !state.scratchpadVisible;
          if (state.scratchpadVisible) {
            state.focusedWinId = scratchWins[0].id;
          } else {
            ensureValidFocus();
          }
        }
        showOsd(
          ["Super", "S"],
          state.scratchpadVisible ? "📦 Scratchpad Summoned" : "📦 Scratchpad Hidden"
        );
        completeMission("m5_peek");
        renderSimulator();
        break;
      }

      case "launcher": {
        toggleWalkerOverlay();
        showOsd(["Super", "Space"], "Walker App Launcher");
        completeMission("m1_launcher");
        break;
      }

      case "show-k": {
        const overlay = document.getElementById("inSimKOverlay");
        overlay.classList.toggle("hidden");
        showOsd(["Super", "K"], "Omarchy Live Keybinding Cheat Sheet");
        completeMission("m1_k");
        break;
      }

      case "cycle-theme": {
        const select = document.getElementById("themeSelect");
        const nextIdx = (select.selectedIndex + 1) % select.options.length;
        select.selectedIndex = nextIdx;
        applyTheme(select.value);
        showOsd(["Super", "Ctrl", "Space"], `Switched Omakase Theme → ${select.value}`);
        break;
      }

      default: {
        if (cmd.startsWith("ws-")) {
          const targetWs = Number(cmd.replace("ws-", ""));
          state.activeWorkspace = targetWs;
          state.fullscreenWinId = null;
          ensureValidFocus();
          showOsd(["Super", String(targetWs)], `Switched to Workspace ${targetWs}`);
          if (targetWs === 2) completeMission("m4_ws2");
          if (targetWs === 1) completeMission("m4_ws1");
          renderSimulator();
        } else if (cmd.startsWith("move-ws-")) {
          const targetWs = Number(cmd.replace("move-ws-", ""));
          if (focused) {
            focused.ws = targetWs;
            state.activeWorkspace = targetWs;
            showOsd(
              ["Super", "Shift", String(targetWs)],
              `Moved window to Workspace ${targetWs}`
            );
            if (targetWs === 2) {
              completeMission("m4_move");
              completeMission("m4_ws2");
            }
            renderSimulator();
          }
        }
      }
    }
  }

  // Show OSD Key Toast inside simulator
  let osdTimeout = null;
  function showOsd(keysArr, actionText) {
    const keysEl = document.getElementById("osdKeys");
    const actEl = document.getElementById("osdAction");
    const osd = document.getElementById("keyOsd");
    if (!keysEl || !actEl || !osd) return;

    keysEl.innerHTML = keysArr.map((k) => `<kbd>${escapeHtml(k)}</kbd>`).join(" + ");
    actEl.textContent = actionText;
    osd.style.opacity = "1";
    osd.style.transform = "translateY(0)";

    clearTimeout(osdTimeout);
    osdTimeout = setTimeout(() => {
      osd.style.opacity = "0.75";
    }, 2400);
  }

  // Walker Launcher Modal inside Simulator
  const WALKER_APPS = [
    { name: "Ghostty Terminal", cmd: "spawn-term", icon: "🐚", hint: "Super + Return" },
    { name: "Chromium / Zen Browser", cmd: "spawn-browser", icon: "🌐", hint: "Super + B" },
    { name: "Neovim Code Editor", cmd: "spawn-editor", icon: "⚡", hint: "Super + N" },
    { name: "Omarchy Theme Switcher", cmd: "cycle-theme", icon: "🎨", hint: "Super + Ctrl + Space" },
    { name: "Keybinding Help Overlay", cmd: "show-k", icon: "⌨️", hint: "Super + K" },
    { name: "Toggle Scratchpad Notes", cmd: "toggle-scratchpad", icon: "📦", hint: "Super + S" }
  ];

  function toggleWalkerOverlay(forceState) {
    const overlay = document.getElementById("walkerOverlay");
    const input = document.getElementById("walkerInput");
    const isHidden = overlay.classList.contains("hidden");
    const nextShow = typeof forceState === "boolean" ? forceState : isHidden;

    if (nextShow) {
      overlay.classList.remove("hidden");
      input.value = "";
      renderWalkerItems("");
      setTimeout(() => input.focus(), 30);
    } else {
      overlay.classList.add("hidden");
    }
  }

  function renderWalkerItems(query) {
    const container = document.getElementById("walkerResults");
    const q = query.trim().toLowerCase();
    const filtered = WALKER_APPS.filter(
      (a) => a.name.toLowerCase().includes(q) || a.hint.toLowerCase().includes(q)
    );
    container.innerHTML = filtered
      .map(
        (app, i) => `
        <button class="walker-item ${i === 0 ? "selected" : ""}" data-cmd="${app.cmd}">
          <span>${app.icon} <strong>${escapeHtml(app.name)}</strong></span>
          <kbd>${escapeHtml(app.hint)}</kbd>
        </button>
      `
      )
      .join("");

    container.querySelectorAll(".walker-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        toggleWalkerOverlay(false);
        executeSimCommand(btn.dataset.cmd);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. DOJO CURRICULUM & GAMIFIED XP PROGRESSION
  // --------------------------------------------------------------------------
  function renderLevelSelector() {
    const nav = document.getElementById("levelSelector");
    nav.innerHTML = DOJO_LEVELS.map((lvl, idx) => {
      const allDone = lvl.missions.every((m) => state.completedMissions.has(m.id));
      return `
        <button class="level-pill ${idx === state.currentLevelIdx ? "active" : ""} ${
        allDone ? "completed" : ""
      }" data-idx="${idx}">
          <span class="lvl-num">${allDone ? "✓ " : ""}LVL ${lvl.id}</span>
          <span class="lvl-name">${escapeHtml(lvl.shortName)}</span>
        </button>
      `;
    }).join("");

    nav.querySelectorAll(".level-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.currentLevelIdx = Number(btn.dataset.idx);
        saveUserStateToCookie();
        renderCurrentLesson();
      });
    });
  }

  function renderCurrentLesson() {
    renderLevelSelector();
    const lvl = DOJO_LEVELS[state.currentLevelIdx];
    document.getElementById("lessonBadge").textContent = lvl.badge;
    document.getElementById("lessonTitle").textContent = lvl.title;
    document.getElementById("lessonStory").innerHTML = lvl.story;
    document.getElementById("mentalModelTitle").textContent = lvl.mentalModelTitle;
    document.getElementById("mentalModelBody").textContent = lvl.mentalModelBody;
    document.getElementById("lessonProTip").innerHTML = lvl.proTip;

    const doneCount = lvl.missions.filter((m) => state.completedMissions.has(m.id)).length;
    document.getElementById("missionProgressText").textContent = `${doneCount}/${lvl.missions.length} Completed`;

    const listEl = document.getElementById("missionList");
    listEl.innerHTML = lvl.missions
      .map((m) => {
        const isDone = state.completedMissions.has(m.id);
        return `
        <li class="mission-item ${isDone ? "done" : ""}">
          <div class="mission-left">
            <span class="mission-check">${isDone ? "✓" : ""}</span>
            <span>${escapeHtml(m.text)}</span>
          </div>
          <button class="mission-try-btn" data-cmd="${m.cmd}" title="Execute this shortcut in the simulator">
            ${isDone ? "↺ Replay" : "⚡ Do It"}
          </button>
        </li>
      `;
      })
      .join("");

    listEl.querySelectorAll(".mission-try-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        executeSimCommand(btn.dataset.cmd);
      });
    });

    document.getElementById("prevLevelBtn").disabled = state.currentLevelIdx === 0;
    const nextBtn = document.getElementById("nextLevelBtn");
    if (state.currentLevelIdx === DOJO_LEVELS.length - 1) {
      nextBtn.textContent = "⚡ Test Reflexes in Arcade →";
    } else {
      nextBtn.textContent = `Next: Level ${state.currentLevelIdx + 2} →`;
    }
  }

  function completeMission(missionId) {
    if (!state.completedMissions.has(missionId)) {
      state.completedMissions.add(missionId);
      addXp(25);
      saveUserStateToCookie();
      renderCurrentLesson();
    }
  }

  function updateRankAndXpUI() {
    document.getElementById("xpCounter").textContent = `${state.xp} XP`;
    const rankEl = document.getElementById("rankTitle");
    if (state.xp >= 350) {
      rankEl.textContent = "Rank: DHH Omakase Grandmaster";
    } else if (state.xp >= 220) {
      rankEl.textContent = "Rank: Hyprland Tiling Ninja";
    } else if (state.xp >= 100) {
      rankEl.textContent = "Rank: Dwindle Apprentice";
    } else {
      rankEl.textContent = "Rank: Floating Refugee";
    }
  }

  function addXp(amount) {
    state.xp += amount;
    updateRankAndXpUI();
    saveUserStateToCookie();
  }

  // --------------------------------------------------------------------------
  // 8. MUSCLE MEMORY ARCADE ENGINE
  // --------------------------------------------------------------------------
  function loadArcadeQuestion() {
    clearInterval(state.arcade.timerId);
    state.arcade.answered = false;
    state.arcade.timeLeft = 100;

    const q = ARCADE_QUESTIONS[state.arcade.qIndex % ARCADE_QUESTIONS.length];
    document.getElementById("arcadeCategoryTag").textContent = `SCENARIO #${
      (state.arcade.qIndex % ARCADE_QUESTIONS.length) + 1
    } • ${q.tag}`;
    document.getElementById("arcadeQuestion").textContent = q.question;
    document.getElementById("arcadeHint").textContent = `💡 ${q.hint}`;
    document.getElementById("arcadeFeedback").classList.add("hidden");

    const shuffled = [...q.options].sort(() => Math.random() - 0.5);
    const grid = document.getElementById("arcadeOptionsGrid");
    grid.innerHTML = shuffled
      .map(
        (opt) => `
      <button class="arcade-option-btn" data-keys="${escapeHtml(opt.keys)}">
        <div class="keycap-combo">
          ${opt.keys
            .split(" + ")
            .map((k) => `<kbd>${escapeHtml(k)}</kbd>`)
            .join("<span>+</span>")}
        </div>
        <span class="key-desc">${escapeHtml(opt.desc)}</span>
      </button>
    `
      )
      .join("");

    grid.querySelectorAll(".arcade-option-btn").forEach((btn) => {
      btn.addEventListener("click", () => handleArcadeAnswer(btn.dataset.keys));
    });

    const fill = document.getElementById("arcadeTimerFill");
    fill.style.width = "100%";

    state.arcade.timerId = setInterval(() => {
      if (state.arcade.answered) return;
      state.arcade.timeLeft -= 1.25;
      fill.style.width = `${Math.max(0, state.arcade.timeLeft)}%`;
      if (state.arcade.timeLeft <= 0) {
        clearInterval(state.arcade.timerId);
        handleArcadeAnswer("__TIMEOUT__");
      }
    }, 150);
  }

  function handleArcadeAnswer(chosenKeys) {
    if (state.arcade.answered) return;
    state.arcade.answered = true;
    clearInterval(state.arcade.timerId);

    const q = ARCADE_QUESTIONS[state.arcade.qIndex % ARCADE_QUESTIONS.length];
    const isCorrect = chosenKeys === q.correct;

    document.querySelectorAll("#arcadeOptionsGrid .arcade-option-btn").forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.keys === q.correct) {
        btn.classList.add("correct");
      } else if (btn.dataset.keys === chosenKeys) {
        btn.classList.add("wrong");
      }
    });

    const fbBox = document.getElementById("arcadeFeedback");
    const fbText = document.getElementById("arcadeFeedbackText");
    fbBox.classList.remove("hidden");

    if (isCorrect) {
      state.arcade.streak += 1;
      state.arcade.bestStreak = Math.max(state.arcade.bestStreak, state.arcade.streak);
      const pts = 50 + state.arcade.streak * 10;
      state.arcade.score += pts;
      addXp(20);
      fbText.innerHTML = `<strong style="color: var(--accent-green);">✔ Nailed It! (+${pts} pts)</strong> ${escapeHtml(
        q.explanation
      )}`;
    } else {
      state.arcade.streak = 0;
      fbText.innerHTML = `<strong style="color: var(--accent-red);">✕ Not quite!</strong> The right bind is <code>${escapeHtml(
        q.correct
      )}</code>. ${escapeHtml(q.explanation)}`;
    }

    document.getElementById("arcadeStreak").textContent = `${state.arcade.streak} 🔥`;
    document.getElementById("arcadeBestStreak").textContent = `${state.arcade.bestStreak} 🏆`;
    document.getElementById("arcadeScore").textContent = String(state.arcade.score);
    saveUserStateToCookie();
  }

  // --------------------------------------------------------------------------
  // 9. PRO TIPS & CHEAT SHEET + CONFIG BUILDER RENDERERS
  // --------------------------------------------------------------------------
  function renderProTips() {
    const grid = document.getElementById("protipsGrid");
    grid.innerHTML = PRO_TIPS_DATA.map(
      (tip) => `
      <article class="protip-card">
        <div class="protip-top">
          <div class="protip-header">
            <span class="protip-num">${escapeHtml(tip.num)}</span>
            <div class="keycap-combo">
              ${tip.keys.map((k) => `<kbd>${escapeHtml(k)}</kbd>`).join("<span>+</span>")}
            </div>
          </div>
          <h3>${escapeHtml(tip.title)}</h3>
          <p>${escapeHtml(tip.desc)}</p>
        </div>
        <div class="protip-footer">
          <span style="font-size:0.74rem; color:var(--text-muted);">Omarchy Built-in</span>
          <button class="btn-xs try-in-dojo-btn" data-cmd="${tip.simCmd}">
            🥋 Demo in Simulator →
          </button>
        </div>
      </article>
    `
    ).join("");

    grid.querySelectorAll(".try-in-dojo-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        switchTab("dojo");
        setTimeout(() => executeSimCommand(btn.dataset.cmd), 120);
      });
    });
  }

  let activeCsCat = "all";
  function renderCheatSheet() {
    const searchVal = (document.getElementById("csSearchInput")?.value || "")
      .trim()
      .toLowerCase();
    const container = document.getElementById("csListContainer");

    const filtered = CHEATSHEET_BINDS.filter((b) => {
      const matchesCat = activeCsCat === "all" || b.cat === activeCsCat;
      const matchesSearch =
        !searchVal ||
        b.action.toLowerCase().includes(searchVal) ||
        b.detail.toLowerCase().includes(searchVal) ||
        b.keys.join(" + ").toLowerCase().includes(searchVal);
      return matchesCat && matchesSearch;
    });

    container.innerHTML = filtered
      .map(
        (b) => `
      <div class="cs-row">
        <div class="cs-row-info">
          <strong>${escapeHtml(b.action)}</strong>
          <span>${escapeHtml(b.detail)}</span>
        </div>
        <div style="display:flex; align-items:center; gap:0.6rem;">
          <div class="keycap-combo">
            ${b.keys.map((k) => `<kbd>${escapeHtml(k)}</kbd>`).join("<span>+</span>")}
          </div>
          <button class="mission-try-btn cs-sim-btn" data-cmd="${b.simCmd}" title="Try in Simulator">Test</button>
        </div>
      </div>
    `
      )
      .join("");

    container.querySelectorAll(".cs-sim-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        switchTab("dojo");
        setTimeout(() => executeSimCommand(btn.dataset.cmd), 100);
      });
    });
  }

  function updateConfigSnippet(persist = true) {
    const checked = Array.from(
      document.querySelectorAll("#configToggles input:checked")
    ).map((el) => el.value);
    state.configToggles = checked;
    if (persist) saveUserStateToCookie();

    const lines = [
      "# ==========================================================",
      "# ~/.config/hypr/bindings.conf",
      "# Personal Omarchy overrides (safe across system updates!)",
      "# Reload anytime with: hyprctl reload",
      "# ==========================================================",
      ""
    ];

    if (checked.includes("vim_nav")) {
      lines.push(
        "# 1. Vim-Style Focus & Swap (Super + Ctrl + H/J/K/L)",
        "bind = SUPER CTRL, H, movefocus, l",
        "bind = SUPER CTRL, L, movefocus, r",
        "bind = SUPER CTRL, K, movefocus, u",
        "bind = SUPER CTRL, J, movefocus, d",
        ""
      );
    }

    if (checked.includes("zen_mode")) {
      lines.push(
        "# 2. Distraction-Free Zen Mode (Toggle Waybar)",
        "bind = SUPER, Z, exec, pkill -SIGUSR1 waybar",
        ""
      );
    }

    if (checked.includes("center_float")) {
      lines.push(
        "# 3. Float & Center Active Window @ 70% Screen Size",
        "bind = SUPER ALT, T, togglefloating",
        "bind = SUPER ALT, T, resizeactive, exact 70% 70%",
        "bind = SUPER ALT, T, centerwindow",
        ""
      );
    }

    if (checked.includes("swap_master")) {
      lines.push(
        "# 4. Promote Focused Tile to Top of Dwindle Tree",
        "bind = SUPER, M, swapnext, prev",
        ""
      );
    }

    if (checked.includes("webapps")) {
      lines.push(
        "# 5. Quick Omarchy Web App Launchers",
        "bind = SUPER SHIFT, G, exec, omarchy-launch-webapp 'https://github.com'",
        "bind = SUPER SHIFT, A, exec, omarchy-launch-webapp 'https://claude.ai'",
        ""
      );
    }

    document.getElementById("generatedConfigCode").textContent = lines.join("\n");
  }

  function renderGlobalKModal() {
    const cols = document.getElementById("globalKColumns");
    const groups = [
      { title: "🚀 Launch & Survival", cat: "essentials" },
      { title: "📐 Tiling & Dwindle", cat: "tiling" },
      { title: "🗂️ Workspaces 1–9", cat: "workspaces" },
      { title: "💎 Pro Moves & Scratchpad", cat: "advanced" }
    ];

    cols.innerHTML = groups
      .map((g) => {
        const items = CHEATSHEET_BINDS.filter((b) => b.cat === g.cat);
        return `
        <div class="k-col-box">
          <h4>${g.title}</h4>
          ${items
            .map(
              (item) => `
            <div class="k-bind-item">
              <span>${escapeHtml(item.action)}</span>
              <div class="keycap-combo">
                ${item.keys.map((k) => `<kbd>${escapeHtml(k)}</kbd>`).join("+")}
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      `;
      })
      .join("");
  }

  // --------------------------------------------------------------------------
  // 10. KEYBOARD INTERACTION & EVENT LISTENERS
  // --------------------------------------------------------------------------
  function switchTab(tabId, persist = true) {
    state.activeTab = tabId;
    if (persist) saveUserStateToCookie();
    document.querySelectorAll(".mode-tab").forEach((t) => {
      const active = t.dataset.tab === tabId;
      t.classList.toggle("active", active);
      t.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll(".tab-panel").forEach((p) => {
      p.classList.toggle("active", p.id === `tab-${tabId}`);
    });

    if (tabId === "arcade") {
      loadArcadeQuestion();
    } else {
      clearInterval(state.arcade.timerId);
    }
  }

  function applyTheme(themeName, persist = true) {
    state.theme = themeName;
    document.documentElement.setAttribute("data-theme", themeName);
    if (persist) saveUserStateToCookie();
  }

  function togglePageFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }

  function toggleTheaterMode() {
    const dojoLayout = document.querySelector(".dojo-layout");
    if (!dojoLayout) return;
    const isTheater = dojoLayout.classList.toggle("theater-mode");
    state.theaterMode = isTheater;
    saveUserStateToCookie();
    const simTheaterBtn = document.getElementById("simTheaterBtn");
    const bannerTheaterBtn = document.getElementById("bannerTheaterBtn");
    const label = isTheater ? "◧ Show Lesson Sidebar" : "◧ Wide Sim";
    if (simTheaterBtn) simTheaterBtn.textContent = label;
    if (bannerTheaterBtn) {
      bannerTheaterBtn.textContent = isTheater
        ? "◧ Show Lesson Sidebar"
        : "◧ Expand Simulator";
    }
    showOsd(
      ["View"],
      isTheater
        ? "Wide Simulator Mode ON (100% Width)"
        : "Split Lesson + Simulator View Restored"
    );
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function initEvents() {
    // Tab switching
    document.querySelectorAll(".mode-tab").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.tab));
    });

    // Theme Switcher
    const themeSelect = document.getElementById("themeSelect");
    themeSelect.addEventListener("change", () => applyTheme(themeSelect.value));

    // Global Super + K Modal
    const globalKModal = document.getElementById("globalKModal");
    document.getElementById("openSuperKBtn").addEventListener("click", () => {
      globalKModal.classList.remove("hidden");
      completeMission("m1_k");
    });
    document.getElementById("closeGlobalKModal").addEventListener("click", () => {
      globalKModal.classList.add("hidden");
    });
    globalKModal.addEventListener("click", (e) => {
      if (e.target === globalKModal) globalKModal.classList.add("hidden");
    });

    // In-Sim K Overlay close
    document.getElementById("closeInSimKBtn").addEventListener("click", () => {
      document.getElementById("inSimKOverlay").classList.add("hidden");
    });

    // Waybar buttons
    document.getElementById("waybarMenuBtn").addEventListener("click", () => {
      executeSimCommand("launcher");
    });
    document.getElementById("waybarScratchpadPill").addEventListener("click", () => {
      executeSimCommand("toggle-scratchpad");
    });
    document.querySelectorAll("#waybarWorkspaces .ws-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        executeSimCommand(`ws-${btn.dataset.ws}`);
      });
    });

    // Walker search input
    const walkerInput = document.getElementById("walkerInput");
    walkerInput.addEventListener("input", () => renderWalkerItems(walkerInput.value));
    walkerInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        toggleWalkerOverlay(false);
      } else if (e.key === "Enter") {
        const firstBtn = document.querySelector("#walkerResults .walker-item");
        if (firstBtn) {
          toggleWalkerOverlay(false);
          executeSimCommand(firstBtn.dataset.cmd);
        }
      }
    });

    // Tactile Deck Buttons
    document.querySelectorAll(".tactile-deck .key-btn").forEach((btn) => {
      btn.addEventListener("click", () => executeSimCommand(btn.dataset.cmd));
    });

    // Super Key Auto-Latch Toggle
    const superBtn = document.getElementById("superLatchBtn");
    superBtn.addEventListener("click", () => {
      state.superLatched = !state.superLatched;
      superBtn.classList.toggle("active", state.superLatched);
      document.getElementById("superLatchStatus").textContent = state.superLatched
        ? "HELD (AUTO-LATCH ON)"
        : "OFF (CLICK TO LATCH)";
      saveUserStateToCookie();
    });

    // Reset All Saved Progress & Options Button
    document
      .getElementById("resetProgressBtn")
      ?.addEventListener("click", resetAllUserProgress);

    // Reset Simulator Desk
    document.getElementById("resetSimBtn").addEventListener("click", resetSimulatorDesk);

    // Fullscreen & Wide Simulator (Theater) Controls
    document
      .getElementById("togglePageFullscreenBtn")
      ?.addEventListener("click", togglePageFullscreen);
    document
      .getElementById("bannerFullscreenBtn")
      ?.addEventListener("click", togglePageFullscreen);
    document
      .getElementById("simFullscreenMonitorBtn")
      ?.addEventListener("click", togglePageFullscreen);

    document
      .getElementById("simTheaterBtn")
      ?.addEventListener("click", toggleTheaterMode);
    document
      .getElementById("bannerTheaterBtn")
      ?.addEventListener("click", toggleTheaterMode);

    document
      .getElementById("dismissFsBannerBtn")
      ?.addEventListener("click", () => {
        state.fsBannerDismissed = true;
        saveUserStateToCookie();
        document.getElementById("fullscreenBanner")?.classList.add("hidden");
      });

    document.addEventListener("fullscreenchange", () => {
      const isFs = Boolean(document.fullscreenElement);
      const fsLabel = document.getElementById("fullscreenBtnLabel");
      const bannerBtn = document.getElementById("bannerFullscreenBtn");
      const simFsBtn = document.getElementById("simFullscreenMonitorBtn");
      if (fsLabel) fsLabel.textContent = isFs ? "Exit Fullscreen" : "Go Fullscreen";
      if (bannerBtn) {
        bannerBtn.textContent = isFs ? "⛶ Exit Fullscreen" : "⛶ Enter Fullscreen Now";
      }
      if (simFsBtn) {
        simFsBtn.textContent = isFs ? "⛶ Exit Fullscreen" : "⛶ Fullscreen";
      }
    });

    // Level Navigation
    document.getElementById("prevLevelBtn").addEventListener("click", () => {
      if (state.currentLevelIdx > 0) {
        state.currentLevelIdx--;
        saveUserStateToCookie();
        renderCurrentLesson();
      }
    });
    document.getElementById("nextLevelBtn").addEventListener("click", () => {
      if (state.currentLevelIdx < DOJO_LEVELS.length - 1) {
        state.currentLevelIdx++;
        saveUserStateToCookie();
        renderCurrentLesson();
      } else {
        switchTab("arcade");
      }
    });

    // Arcade Next Button
    document.getElementById("nextArcadeQuestionBtn").addEventListener("click", () => {
      state.arcade.qIndex++;
      loadArcadeQuestion();
    });

    // Cheat Sheet Search & Category Pills
    document.getElementById("csSearchInput").addEventListener("input", renderCheatSheet);
    document.querySelectorAll("#csCategoryPills .filter-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        document
          .querySelectorAll("#csCategoryPills .filter-pill")
          .forEach((p) => p.classList.remove("active"));
        pill.classList.add("active");
        activeCsCat = pill.dataset.cat;
        renderCheatSheet();
      });
    });

    // Config Builder Toggles & Copy
    document.querySelectorAll("#configToggles input").forEach((chk) => {
      chk.addEventListener("change", updateConfigSnippet);
    });
    document.getElementById("copyConfigBtn").addEventListener("click", (e) => {
      const code = document.getElementById("generatedConfigCode").textContent;
      navigator.clipboard?.writeText(code);
      e.target.textContent = "✓ Copied!";
      setTimeout(() => {
        e.target.textContent = "📋 Copy Snippet";
      }, 1600);
    });

    // Global Keyboard Handler for Live Dojo Simulator
    window.addEventListener("keydown", (e) => {
      // Ignore if typing inside an input/search box
      if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) {
        if (e.key === "Escape") {
          toggleWalkerOverlay(false);
          globalKModal.classList.add("hidden");
        }
        return;
      }

      if (e.key === "Escape") {
        toggleWalkerOverlay(false);
        document.getElementById("inSimKOverlay").classList.add("hidden");
        globalKModal.classList.add("hidden");
        return;
      }

      // Only intercept Dojo simulator shortcuts when Dojo tab is active and Super Latch (or Meta/Alt) is active
      const dojoActive = document.getElementById("tab-dojo").classList.contains("active");
      if (!dojoActive) return;

      const superActive = state.superLatched || e.metaKey || e.altKey;
      if (!superActive) return;

      const key = e.key.toLowerCase();

      if (e.key === "Enter") {
        e.preventDefault();
        executeSimCommand("spawn-term");
      } else if (key === "b") {
        e.preventDefault();
        executeSimCommand("spawn-browser");
      } else if (key === "n") {
        e.preventDefault();
        executeSimCommand("spawn-editor");
      } else if (key === "w") {
        e.preventDefault();
        executeSimCommand("close-win");
      } else if (key === "j") {
        e.preventDefault();
        executeSimCommand("toggle-split");
      } else if (key === "t") {
        e.preventDefault();
        executeSimCommand("toggle-float");
      } else if (key === "f") {
        e.preventDefault();
        executeSimCommand("toggle-fullscreen");
      } else if (key === "o") {
        e.preventDefault();
        executeSimCommand("pop-pin");
      } else if (key === "g") {
        e.preventDefault();
        executeSimCommand("toggle-group");
      } else if (key === "s" && e.altKey) {
        e.preventDefault();
        executeSimCommand("move-scratchpad");
      } else if (key === "s") {
        e.preventDefault();
        executeSimCommand("toggle-scratchpad");
      } else if (key === "k") {
        e.preventDefault();
        executeSimCommand("show-k");
      } else if (e.key === " ") {
        e.preventDefault();
        executeSimCommand("launcher");
      } else if (e.key === "=" || e.key === "+") {
        e.preventDefault();
        executeSimCommand("grow-win");
      } else if (e.key === "-") {
        e.preventDefault();
        executeSimCommand("shrink-win");
      } else if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        if (e.shiftKey) {
          executeSimCommand("swap-next");
        } else {
          executeSimCommand("focus-next");
        }
      } else if (["1", "2", "3", "4", "5"].includes(e.key)) {
        e.preventDefault();
        if (e.shiftKey) {
          executeSimCommand(`move-ws-${e.key}`);
        } else {
          executeSimCommand(`ws-${e.key}`);
        }
      } else if (["!", "@", "#", "$", "%"].includes(e.key)) {
        // Shift + 1..5 on US layout produces ! @ # $ %
        e.preventDefault();
        const shiftMap = { "!": 1, "@": 2, "#": 3, "$": 4, "%": 5 };
        executeSimCommand(`move-ws-${shiftMap[e.key]}`);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 11. BOOTSTRAP
  // --------------------------------------------------------------------------
  function init() {
    loadUserStateFromCookie();

    // Apply restored user options & progress to UI
    const themeSelect = document.getElementById("themeSelect");
    if (themeSelect) themeSelect.value = state.theme;
    applyTheme(state.theme, false);

    updateRankAndXpUI();
    document.getElementById("arcadeBestStreak").textContent = `${state.arcade.bestStreak} 🏆`;
    document.getElementById("arcadeScore").textContent = String(state.arcade.score);

    const superBtn = document.getElementById("superLatchBtn");
    if (superBtn) superBtn.classList.toggle("active", state.superLatched);
    const superStatus = document.getElementById("superLatchStatus");
    if (superStatus) {
      superStatus.textContent = state.superLatched
        ? "HELD (AUTO-LATCH ON)"
        : "OFF (CLICK TO LATCH)";
    }

    if (state.theaterMode) {
      document.querySelector(".dojo-layout")?.classList.add("theater-mode");
      const simTheaterBtn = document.getElementById("simTheaterBtn");
      const bannerTheaterBtn = document.getElementById("bannerTheaterBtn");
      if (simTheaterBtn) simTheaterBtn.textContent = "◧ Show Lesson Sidebar";
      if (bannerTheaterBtn) bannerTheaterBtn.textContent = "◧ Show Lesson Sidebar";
    }

    if (state.fsBannerDismissed) {
      document.getElementById("fullscreenBanner")?.classList.add("hidden");
    }

    document.querySelectorAll("#configToggles input").forEach((chk) => {
      chk.checked = state.configToggles.includes(chk.value);
    });

    resetSimulatorDesk();
    renderCurrentLesson();
    renderProTips();
    renderCheatSheet();
    updateConfigSnippet(false);
    renderGlobalKModal();
    initEvents();

    if (state.activeTab && state.activeTab !== "dojo") {
      switchTab(state.activeTab, false);
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
