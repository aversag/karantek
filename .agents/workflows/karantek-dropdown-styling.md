---
description: how to style and maintain the main Karantek Header Dropdown Menu (Offres)
---

# Karantek Custom Dropdown Styling Guide

When editing the dropdown menu in \`src/components/Header.tsx\`, you must strictly follow these rules to maintain the site's high-end, airy aesthetic.

## 1. CRITICAL: Tailwind JIT Padding Bug Workaround

Due to a specific Tailwind configuration issue in this project's environment, **certain large spacing and gap classes (like \`p-16\`, \`gap-16\`) are dropped during JIT compilation**, resulting in a completely unpadded, broken box.

To prevent the elements from collapsing onto the borders:

- **DO NOT USE** Tailwind classes for the main dropdown padding and grid gap.
- **USE INLINE STYLES FOR CRITICAL SPACING:**
  - On the outer dropdown container: \`style={{ padding: '64px', maxWidth: '850px' }}\`
  - On the inner grid container: \`style={{ columnGap: '64px', rowGap: '40px' }}\`

## 2. Visual Harmony (Colors & Glassmorphism)

The dropdown must perfectly match the Karantek dark navy branding, avoiding generic slate/gray blacks.

- **Background**: Use exactly \`bg-[#101830]/95\` to match the site's dark mode palette with a 95% opacity for readability over light/busy backgrounds.
- **Blur**: \`backdrop-blur-2xl\`
- **Borders**: Subtly visible glass border \`border border-[rgba(255,255,255,0.08)]\`.
- **Corners**: Extremely rounded \`rounded-[2rem]\` to contain the huge 64px padding.
- **Shadow**: Use multi-layered elevation to pop off the page: \`shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.05)]\`.

## 3. Interaction & Transitions

- The dropdown should appear gracefully on hover using group states on the parent wrapper: \`opacity-0 invisible group-hover:opacity-100 group-hover:visible\`.
- Use a slight Y-axis slide to add physical weight: \`transition-all duration-400 translate-y-2 group-hover:translate-y-0\`.
- Keep an invisible hover bridge (\`before:absolute before:-top-6 before:left-0 before:w-full before:h-6\`) so the menu doesn't close while the user moves their mouse down to click a link.
