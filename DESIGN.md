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

Motion supports reading order for a first-time visitor and never decorates. On load the hero cascades in as four pieces (name, biography, actions, profile column), rising 8px with 60ms between them over a still landscape. It settles within about 0.7s, so it reads as choreography rather than loading. Below it, section content rises 12px and fades in once, the first time it scrolls into view. Elements that enter together cascade at 70ms, and the paper preview wipes in from the top. Interactive feedback stays lightweight: color transitions, a 3px lift on the paper preview, and a 0.97 press on buttons. Only `opacity`, `transform`, and `clip-path` animate, with the `--ease` and `--ease-in-out` tokens. When reduced motion is requested, or the reveal script cannot run, the motion is skipped and all content shows immediately.
