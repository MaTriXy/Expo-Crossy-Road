# Capybara Crossy Road – Task Tracker

Track progress by checking off completed items.  
- [ ] = To Do
- [x] = Done

---

## 1. Core Theme & Branding

- [ ] **Game Title & Branding**
  - [ ] Update the game title, splash screen, and app icon to reflect the capybara theme.
  - [ ] Update `assets/images/title.png`, `assets/icons/app.png`, and related branding assets.
  - [ ] Adjust `app.json` for app name and icon.

---

## 2. Main Character: Capybara

- [ ] **3D Model**
  - [ ] Create/import a capybara 3D model (OBJ + texture PNG).
  - [ ] Place in `assets/models/characters/capybara/`.
- [ ] **Animations**
  - [ ] Idle, walk, jump, death (if supported by engine).
- [ ] **Sounds**
  - [ ] Capybara vocalizations for movement, jump, death, etc.
  - [ ] Add to `assets/audio/`.
- [ ] **Code Integration**
  - [ ] Register the capybara in `src/Characters.ts` and `src/Models.ts`.
  - [ ] Update `src/CrossyPlayer.ts` and `src/Node/Hero.ts` to use the capybara as the default character.

---

## 3. Capybara-Themed World

### a. Environment

- [ ] **Tiles**
  - [ ] Grass, water, road, railroad, etc. with capybara/nature motifs.
  - [ ] Update or add models/textures in `assets/models/environment/`.
  - [ ] Examples: lily pads, mud patches, reeds, riverbanks.

- [ ] **Obstacles**
  - [ ] Replace or reskin obstacles (logs, boulders, trees) with capybara-appropriate versions (e.g., floating fruit, reeds, picnic baskets).
  - [ ] Place new models in `assets/models/environment/`.

### b. Vehicles

- [ ] **Reskin Vehicles**
  - [ ] Make cars, trucks, trains more whimsical or nature-themed (e.g., fruit trucks, safari jeeps, boats).
  - [ ] Update models/textures in `assets/models/vehicles/`.

### c. UI & Visuals

- [ ] **UI Elements**
  - [ ] Update buttons, score, menus with capybara/nature motifs.
  - [ ] Update assets in `assets/images/buttons/` and related UI code in `src/components/`.

- [ ] **Color Palette**
  - [ ] Adjust `src/Colors.ts` for earthy, natural tones.

---

## 4. Audio

- [ ] **Background Music**
  - [ ] Add relaxing, nature-inspired music.
- [ ] **Sound Effects**
  - [ ] Capybara sounds for actions, nature sounds for environment, whimsical vehicle sounds.
- [ ] **Integration**
  - [ ] Update `src/Audio.ts` and `src/AudioManager.ts` to use new sounds.

---

## 5. Game Logic & Mechanics

- [ ] **Gameplay**
  - [ ] Core mechanics remain, but consider capybara-specific twists:
    - [ ] Capybara can swim (special water row logic).
    - [ ] Collectibles: e.g., fruit, reeds, or hats.
    - [ ] Power-ups: temporary speed boost, invincibility, etc.

- [ ] **Code Changes**
  - [ ] Update row logic in `src/Row/` (e.g., `Water.ts`, `Grass.ts`).
  - [ ] Add new collectible logic in `src/Node/` and `src/Particles/` if needed.

---

## 6. Menus & Screens

- [ ] **Home, Game Over, Settings**
  - [ ] Update to reflect capybara theme.
  - [ ] Update UI in `src/screens/` and `src/components/`.

---

## 7. Asset Checklist

- [ ] Capybara 3D model + textures
- [ ] Capybara sound effects
- [ ] Themed environment models/textures (tiles, obstacles)
- [ ] Themed vehicle models/textures
- [ ] UI icons/buttons with capybara/nature motifs
- [ ] New background music

---

## 8. Implementation Steps

- [ ] Design/collect all new assets (models, textures, audio, UI)
- [ ] Integrate capybara character (model, sounds, logic)
- [ ] Reskin world and vehicles (replace models/textures)
- [ ] Update UI and color palette
- [ ] Integrate new audio
- [ ] Implement any new mechanics (swimming, collectibles)
- [ ] Test all flows and polish

---

## 9. Optional: Unique Capybara Features

- [ ] **Capybara Family**
  - [ ] Unlockable skins (different capybaras, hats, accessories)
- [ ] **Friends**
  - [ ] Occasionally, a duck or bird rides on the capybara (cosmetic)
- [ ] **Photo Mode**
  - [ ] Take in-game screenshots of your capybara

---
