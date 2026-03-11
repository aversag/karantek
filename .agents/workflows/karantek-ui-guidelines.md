---
description: how to structure and align UI blocks globally on Karantek
---

# Karantek Global UI Layout & Alignment Guidelines

When modifying or creating new content blocks on the Karantek website, ensure strict adherence to the following structural and alignment rules to maintain a premium, clean, and consistent aesthetic.

## 1. Centered Blocks
All major section containers (blocks) must be centered on the page.
- **Rule**: Use `.container` or `max-w-[size] mx-auto` to ensure the overall block of content (grids, text containers) sits in the center of the screen.

## 2. Left-Aligned Typography
While the containers are centered in the viewport, the typography (titles, subtitles, and introductory paragraphs) must be left-aligned.
- **Rule**: Use `text-left` and `items-start` on title wrappers.
- **Rule**: Title underlines/decorative bars must originate from the left (e.g., remove `margin: '0 auto'` and replace with `margin: '0'`).
- **Rationale**: A strong left alignment for text creates a clear reading line and a more editorial, high-end feel, contrasting beautifully with the centered structural block.

## 3. The Hero Exception (First Block)
The very first section under the header (the Hero section) must remain completely left-aligned (both structural content and text) within its container.
- **Rule**: The Hero section does not follow the "centered block" rule. Its content sits elegantly on the left side of the screen, leaving negative space or background assets (like spheres) on the right.
- **Rationale**: Visually, this is more "classe" (premium) as it introduces the user to the site with a strong, definitive visual anchor before flowing into the centered blocks below.

## Developer Implementation Note
When refactoring existing `text-center` sections:
1. Change `text-center` to `text-left` on the title container.
2. Change `items-center` to `items-start` if flexbox is used.
3. Ensure the parent container keeping the block centered (`mx-auto`) remains intact so the grid and content still float in the middle of the screen.
