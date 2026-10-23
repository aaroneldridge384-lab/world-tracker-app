Chronicles of the Realm: D&D 5e Campaign Manager & DM Workstation
A feature-rich, high-utility D&D 5e Campaign Manager and Dungeon Master (DM) Workstation built with Next.js (App Router), TypeScript, and Tailwind CSS. Designed for tabletop enthusiasts and homebrew creators, this application bridges modern web utility with a classic high-fantasy aesthetic.
Key Features
1. Automated 5e Rules & Character Wizard
4-Step Creation Wizard: Seamlessly guide players through choosing races, classes, backgrounds, and rolling stats.
Rule Engine: Automatically calculates Ability Modifiers, Proficiency Bonuses, Armor Class (AC) based on equipped gear, and spell slot progressions strictly following official D&D 5e SRD rules.
Party Roster: Track active health pools, inventory, and character notes with full roster delete capabilities.
2. Dynamic AI Art & Landscape Generator
Versatile Subject Routing: Automatically optimizes prompts and dimensions based on whether you are generating a Character Portrait, a City/Location Landscape, or a Tactical Map.
Zero-Config Generation: Powered by fast URL-based image generation to render portraits, castles, and battlegrounds on the fly without complex API key quotas.
3. Class & Level-Restricted Spell Grimoire
Spell Database: Comprehensive library of standard D&D 5e spells across cantrips and levels 1–9.
Auto-Filtering: Dynamically filters available spells based on each character's specific class and level progression.
4. Item Vault & Homebrew Forge
Standard Item Library: Access official weapons, armors, potions, and magic items.
Homebrew Item Forge: DMs and players can craft custom magic items (defining stats, attunement, weight, and bonuses) and drop them directly into character inventories.
5. Tactical Map Studio & Story Knowledge Graph
Map Canvas: Interactive grid environment for placing encounter nodes, regional pins, and tracking campaign locations with removal controls.
Story Graph: Interlinked wiki nodes, lore threads, and plot hooks to keep your campaign narrative organized.
Getting Started
Prerequisites
Node.js (v18+ recommended)
npm or yarn
Installation & Setup
Clone the repository or open your project folder in VS Code.
Install dependencies:
```
   npm install
   
   ```
Run the development server:
```
   npm run dev
   
   ```
Open http://localhost:3000 in your browser to view your DM Workstation.
Tech Stack
Framework: Next.js (App Router)
Language: TypeScript
Styling: Tailwind CSS
Persistence: Client-side state handling with local storage support
