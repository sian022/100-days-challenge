# Day 1

## Date

2024-08-17

## Main Topic

`CSS Grid`

## Summary

`I learned how to use grid-template-areas to create a responsive dashboard design. I also learned other concepts along the way`

## Other Concepts

- **Font Face** Setting up your own font face with downloaded Fonts
- **HTML Elements Default Margins** Header elements (H1, H2), ul, li, etc have default margins and paddings

## Code Snippets

```scss
.DashboardLayout {
  display: grid;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  grid-template-columns: 1fr 6fr;
  grid-template-rows: auto 1fr;
  gap: $base-gap * 2;
  height: 100lvh;
  padding: $base-padding * 2;
  background-color: $color-background;
}

.HeaderContainer {
  grid-area: header;
}

.SidebarContainer {
  grid-area: sidebar;
}
```
