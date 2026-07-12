# Design

## Direction

An academic research site with an editorial rhythm: restrained, spacious, and rooted in real research artifacts rather than decorative interface elements. A subdued Araucaria landscape creates a sense of place in the About section without competing with the biography.

## Color

Light mode uses a near-neutral cool canvas, deep blue-green ink, and a restrained spruce accent. Dark mode preserves the same relationship with a low-luminance blue-green surface. Text and interactive contrast must meet WCAG AA thresholds.

## Typography

- Display: Alegreya, a humanist serif used for headings and the wordmark.
- Body: Public Sans, used for prose, navigation, metadata, and controls.
- Reading measure: 65–75 characters where prose is long.

## Layout

- Maximum content width: 1120px.
- Spacing follows an 8px-derived rhythm with larger, fluid section intervals.
- Desktop papers use a preview-and-content composition; mobile stacks content naturally.
- The header is sticky, not fixed, so anchor navigation remains predictable.

## Components

- Links are textual and underlined on interaction; no decorative icon-only controls except the explicitly labelled theme toggle.
- Paper abstracts are expanded initially and use a native disclosure control.
- References form a simple editorial list rather than a card grid.
- Rounded rectangles and shadows are avoided unless they communicate an actual control state.

## Motion

Only lightweight color and position transitions are used for interactive feedback. All movement is neutralized when reduced motion is requested.
