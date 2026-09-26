# Peer-site comparison: legal and privacy presentation

**Reviewed:** 26 September 2026  
**Sites:** Federico Huneeus, Diego Huerta, and Pablo Muñoz Henríquez  
**Purpose:** Determine the visible convention followed by comparable personal academic economics websites.

## Bottom line

The three comparison sites use a much lighter public presentation than Miguel's site originally did. In this sample:

- **0 of 3** link to a separate privacy policy;
- **0 of 3** link to a cookie policy or expose cookie names, identifiers, or expiration periods;
- **0 of 3** link to terms and conditions;
- **0 of 3** mention refunds;
- **0 of 3** present commercial or company information;
- **0 of 3** have a contact form; contact is by email;
- **0 of 3** displayed a cookie-consent banner in a clean browser session observed from Chile.

This is evidence of the **presentation norm** for this small peer group, not proof that every peer's privacy implementation is legally sufficient.

## Direct observations

| Site                                                           | Visible legal material                                                                      | Consent banner  | Tracking observed in a clean session                                                                                                       | Form | Identity/contact presentation                                                            |
| -------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ---- | ---------------------------------------------------------------------------------------- |
| [Federico Huneeus](https://www.fedehuneeus.com/)               | No linked privacy, cookie, terms, or refund page; common legal routes returned 404          | None            | Squarespace created `crumb`, `ss_cvr`, and `ss_cvt`; the page source has its cookie banner and restrictive-cookie-policy settings disabled | None | Academic identity, email, telephone, and work addresses                                  |
| [Diego Huerta](https://www.diegohuertad.com/)                  | No linked privacy, cookie, terms, or refund page; common legal routes returned 404          | None            | No cookies or analytics requests detected                                                                                                  | None | Academic identity, email, and university address                                         |
| [Pablo Muñoz Henríquez](https://sites.google.com/view/pablomh) | No author-provided privacy, cookie, terms, or refund page; common legal routes returned 404 | None from Chile | Google Sites loaded a Google Analytics tag and created Google/Analytics cookies automatically                                              | None | Academic identity, affiliation, and email; Google Sites supplies its own platform footer |

The observations used each public homepage, its rendered interface, page source, browser storage, and network activity in a new browser context. Common routes such as `/privacy`, `/privacy-policy`, `/cookies`, `/terms`, and `/refunds` were also tested. A page under an unpredictable, unlinked URL cannot be ruled out.

## What this says about the unusual items

### Cookie codes and measurement IDs

Displaying codes such as `_ga`, `_ga_<container-id>`, or `G-…` prominently is **not the convention in this peer sample**. None of the three sites exposes cookie codes to visitors. The codes are technically real: Google documents `_ga` and `_ga_<container-id>` as its standard GA4 cookies, but the measurement ID is an implementation detail rather than something most visitors need in navigation or banner copy. See Google's [GA4 cookie documentation](https://support.google.com/analytics/answer/11397207?hl=en-ch).

If Analytics remains enabled on Miguel's site, a concise notice can say that optional Google Analytics cookies are used for aggregate visit statistics and link to a short privacy notice. Exact cookie names can be omitted from the visible banner. A separate cookie page is not needed for consistency with these peers.

### Privacy page and consent banner

Neither a visible privacy page nor a banner is standard among these three sites. However, two peers do in fact create analytics/platform cookies:

- Squarespace describes `ss_cvr` and `ss_cvt`, observed on Federico's site, as analytics/performance cookies used to identify unique visitors and track sessions. See [The cookies Squarespace uses](https://support.squarespace.com/hc/en-us/articles/360001264507-The-cookies-Squarespace-uses).
- Pablo's Google Site loaded Google Analytics and set `_ga`-family cookies in the Chilean test session. Google says its Sites consent dialog is shown to viewers in EU locations where required, so a banner can vary by visitor region. See [Cookies notification in European Union countries](https://support.google.com/sites/answer/9396802?hl=en).

Consequently, the absence of a banner on a peer site should not be treated as proof that tracking is absent or that the site's approach is legally preferable.

### Terms, refunds, and business information

Separate terms and conditions do not appear in this sample and make a noncommercial academic CV site resemble a service or commerce website. Refund language is plainly inapplicable where there are no products, payments, subscriptions, or donations. The peer convention is to show ordinary academic identity and contact information—not a company name, commercial address, tax identifier, or customer-service language.

### Forms

None of the peer sites has a contact form. All rely on an email address or email link. Therefore, no form-consent checkbox is part of the comparison standard. Adding one where no form exists would be misleading.

## Recommended presentation for Miguel's site

For a personal academic website that does not sell anything, the closest fit to these peers is:

1. No refunds page.
2. No general terms-and-conditions page.
3. No separate cookie-policy link and no cookie codes in the visible banner.
4. No commercial/business registration data; retain name, academic role, location at city/country level, and email.
5. No form-consent language while contact remains a simple email link.
6. Keep a short privacy notice only if Analytics remains enabled, with a plain-language analytics choice.
7. For the cleanest peer-like implementation, disable Analytics entirely; the banner and analytics-settings control can then also be removed. This would most closely match Diego Huerta's site, where no analytics or cookies were detected.

If Analytics is kept, Miguel's current opt-in model is more privacy-protective than the implementations observed on Federico's and Pablo's sites. It can still be presented much more quietly: one short banner sentence, clear **Allow statistics** / **No thanks** buttons, and a single short privacy page.

## Scope and caution

This is a descriptive comparison of three websites as accessed from Chile on 26 September 2026. Regional notices, later changes, and owner-only settings may differ. Peer omissions do not determine legal obligations; hosting, analytics, audience location, and applicable law remain relevant. This note is not legal advice.
