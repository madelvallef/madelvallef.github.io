# Site compliance and accessibility audit

**Reviewed:** 26 September 2026  
**Scope:** the public home page and the privacy, cookie, and terms-of-use pages.

## Outcome

The site is a small, static academic website with no sales, accounts, newsletter, comments, embedded media, or web forms. The implementation now uses locally hosted fonts, consent-gated page-view analytics, explicit legal navigation, descriptive controls, and responsive layouts. No testimonials, commercial reviews, fabricated metrics, or hidden lead-capture flows were found.

### Design and implementation score

| Dimension            | Score | Evidence                                                                                                                                                                        |
| -------------------- | ----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Accessibility        |   4/4 | Semantic landmarks and heading order; skip link; descriptive image alternatives; named controls; visible keyboard focus; 44 px mobile controls; no inaccessible form widgets.   |
| Performance          |   3/4 | Static output, lazy-loaded research preview, locally hosted variable fonts, no pre-consent third-party font request. The font files remain the largest reusable UI assets.      |
| Responsive design    |   4/4 | No horizontal overflow at 320 px or 1280 px in automated checks; navigation and consent actions reflow at small widths.                                                         |
| Theming and contrast |   4/4 | Token-based light/dark themes. Tested foreground/background pairs exceed WCAG AA for normal text; the only lower-contrast `--faint` token is not used.                          |
| Anti-patterns        |   4/4 | Pass: research-specific structure, restrained palette, no generic feature-card grid, decorative gradient, fake social proof, inflated statistics, or ambiguous calls to action. |

**Total: 19/20 — Excellent.**

## Privacy and third-party findings

- Google Analytics measurement ID `G-XQQDQDW68N` is not loaded before affirmative consent.
- Accept and decline are available on the first layer; the choice can be reopened from every footer and expires after six months.
- GA advertising storage, personalisation, user-data signals, Google Signals, and ad-personalisation signals are denied or disabled in code.
- The GA property was verified with event and user retention set to two months, return-based extension disabled, and enhanced measurement disabled. The remaining measurement is the standard consented page view.
- Google Analytics showed zero connected site tags. Repository review found no iframe, video, map, payment, newsletter, comment, or form integration. The service-by-service record is in `docs/third-party-inventory.md`.
- GitHub Pages necessarily receives technical hosting/security requests. Ordinary outbound links transfer a visitor to their chosen third party only when clicked.
- Google Fonts calls were removed; Alegreya and Public Sans are served from the site under their included OFL licences.

## User-requested checklist

| Request                            | Result                                                                                                                                                                                                                                         |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Privacy policy                     | Implemented and expanded for hosting, analytics, email contact, retention, providers, rights, security, and changes.                                                                                                                           |
| Terms and conditions               | Implemented as non-commercial terms of use; ordinary browsing is not presented as acceptance of a sales contract.                                                                                                                              |
| Cookie policy and consent          | Implemented. Optional Analytics requires opt-in; theme and consent preferences are explained separately.                                                                                                                                       |
| Refund policy                      | Not applicable and intentionally omitted because the site has no sales, payments, subscriptions, donations, or checkout.                                                                                                                       |
| Form consent and keyboard support  | No web form exists. The contact action is a clear `mailto:` link, so no fictitious checkbox was added. All interactive elements are keyboard operable.                                                                                         |
| Data minimisation and analytics    | Implemented in site code and GA property configuration; only consented standard page views remain.                                                                                                                                             |
| Third-party integrations           | Reviewed; GitHub Pages and optional GA are the only automatic external services. Profile and research links activate only on click.                                                                                                            |
| Alternative text                   | All content images have descriptive alternatives; the background image is decorative and hidden from assistive technology.                                                                                                                     |
| Colour contrast                    | Verified for both themes; active text pairs meet WCAG AA.                                                                                                                                                                                      |
| Clear button labels                | Verified; labels describe their action, including “Email Miguel,” “Accept analytics,” “Decline,” and “Analytics settings.”                                                                                                                     |
| Fake reviews or unsupported claims | No reviews/testimonials were present. Subjective claims such as “high-quality,” “state-of-the-art,” and “better policies” were replaced with factual wording. Scholarly claims inside a linked paper abstract remain attributed to that paper. |
| Operator information               | Name, professional role, Santiago location, and contact email are provided without exposing a residential address or fictitious business registration.                                                                                         |
| Image rights                       | Audited, but three image sources and the favicon remain undocumented. See `docs/asset-rights-register.md`; these are the principal unresolved publication risks.                                                                               |
| Local law                          | Reviewed against Chilean privacy, consumer, copyright, and forthcoming data-protection rules. See `docs/compliance-audit-2026-09-26.md`.                                                                                                       |

## Remaining risks

1. **P1 — Image provenance.** Do not represent the landscape, portrait, paper preview, or favicon as cleared until the evidence listed in the asset register is retained. Replace any asset whose provenance cannot be reconstructed.
2. **P1 — December 2026 Chilean reform.** Before 1 December 2026, review Google and GitHub contractual roles, subprocessors, transfer locations, and international-transfer safeguards against Law No. 21,719 and any new regulator guidance.
3. **P2 — Consent withdrawal cleanup.** Withdrawal stops future measurement after reload, but historical Google data is not automatically deleted. The policy states this limitation accurately.
4. **P2 — Future features.** A form, newsletter, embedded video/map, booking tool, payment, advertising, or downloadable gated content would change this assessment and must be reviewed before launch.

This audit is a practical technical and legal-risk review, not legal advice.
