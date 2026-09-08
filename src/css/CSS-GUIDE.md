# CTT CSS Guide

The global stylesheet is split into numbered files. **Keep the numbered import order** in `src/css/custom.css` because later files contain overrides for earlier rules.

## Where to edit things

| File | What belongs here |
| --- | --- |
| `01-theme-core.css` | Core CTT themes and their base colors/layout rules. Start here when changing a theme's main palette. |
| `02-seasonal-and-galaxy-theme.css` | AMOLED, Halloween, Christmas, Galaxy base styling, and shared theme styling. |
| `03-site-layout-and-components.css` | General site components: blockquotes, pagination, footer, admonitions, tables, responsive foundations, and theme-effect safety. |
| `04-search-and-homepage.css` | Search result UI, search panel behavior, homepage/hero, and Default-theme final overrides. |
| `05-theme-tokens-and-normalization.css` | Global CSS variables/tokens and the shared theme contract, including navbar, mobile navigation, breadcrumbs/TOC, and tables. |
| `06-shared-components-and-hero.css` | Shared cards, pagination, forms, controls, navbar search, search results, footer, and hero styling across themes. |
| `07-light-dark-theme-overrides.css` | Light/dark variants and theme-specific navbar/sidebar/TOC/component overrides. |
| `08-theme-effects-and-galaxy-polish.css` | Theme picker/native controls, final spacing, Galaxy glass UI, glow, animated effects, and visual polish. |
| `09-galaxy-mobile-navigation.css` | Galaxy-specific mobile drawer, navbar, page flow, and mobile navigation fixes. |
| `10-galaxy-stars-and-resource-cards.css` | Galaxy star-field animation plus mobile resource-card rules. |
| `11-mobile-cards-search-and-toc.css` | Mobile resource cards, mobile search, back-to-top, and the mobile **On this page** TOC styling/behavior support. |
| `12-mobile-navigation-toc-and-logo.css` | Final mobile navigation, viewport/full-bleed rules, **On this page** final positioning, mobile navbar, color-mode behavior, and logo overrides. |

## Quick map

- **Change a theme's main colors:** `01-theme-core.css`
- **Change Galaxy stars:** `10-galaxy-stars-and-resource-cards.css`
- **Change Galaxy glass/effects:** `08-theme-effects-and-galaxy-polish.css`
- **Change search:** `04-search-and-homepage.css` and `06-shared-components-and-hero.css`
- **Change resource cards:** `10-galaxy-stars-and-resource-cards.css` and `11-mobile-cards-search-and-toc.css`
- **Change the mobile navbar/menu:** `09-galaxy-mobile-navigation.css` and `12-mobile-navigation-toc-and-logo.css`
- **Change the mobile "On this page" bar/TOC:** `11-mobile-cards-search-and-toc.css` and especially `12-mobile-navigation-toc-and-logo.css`
- **Change desktop navbar/logo:** start with `05-theme-tokens-and-normalization.css`, `06-shared-components-and-hero.css`, and `12-mobile-navigation-toc-and-logo.css` only if the rule is shared/final.
- **Change general page spacing/layout:** `03-site-layout-and-components.css` and `04-search-and-homepage.css`
- **Change global variables:** `05-theme-tokens-and-normalization.css`

## Important

These files are intentionally numbered. Do not alphabetize or reorder the imports unless you also review the cascade.

The split is organizational only: selectors and rules were kept in their existing module so the current visual behavior is preserved.
