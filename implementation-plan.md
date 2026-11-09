# DIMPU — Birthday Experience: Proposed Implementation Plan

**Status:** Proposal only — awaiting approval  
**Birthday date:** November 10  
**Public deployment:** Not authorized or performed

## Product direction

Create a polished, editorial birthday experience that feels personal and cinematic without assuming or implying a specific relationship. The experience should be warm, friendly, sophisticated, and responsive on mobile and desktop. Photography supplied in this workspace is the only proposed photographic source; do not substitute stock imagery.

## Architecture proposal

- Create a self-contained static web application in `website\`; no project currently exists.
- Proposed stack: Vite + React + TypeScript, with semantic HTML, custom CSS, and a small set of focused components. The final stack can be adjusted before implementation if you prefer a different framework.
- Keep all application source, configuration, and deployable assets inside `website\`.
- Use original photos as read-only source material. After approval, create optimized derivatives in `website\public\images\`; never transform, rename, or overwrite originals in the workspace root.
- Use responsive image sizing and lazy loading for non-hero imagery; avoid unnecessary runtime dependencies.
- No backend, account system, tracking, or external image service is needed for the proposed static experience.

## Proposed experience (subject to approval)

1. **Opening / hero:** An elegant, high-impact birthday greeting for Dimpu, with a clear November 10 birthday cue and a deliberate photographic focal point.
2. **Photo-led story:** A curated sequence or editorial collage, chosen only after the photographs are actually reviewed. Captions should be supplied or approved by the user; use neutral copy in the meantime and avoid relationship assumptions.
3. **Interactive reveal:** A small, purposeful interaction (for example, a tap-to-reveal birthday note) that works by touch and keyboard, with reduced-motion support.
4. **Closing moment:** A concise birthday wish and a graceful end-state rather than a generic template.

Exact copy, photo order, visual crops, and motion are to be developed after approval and visual review. The inventory did not inspect the photographs’ content.

## Visual and interaction principles

- Art-direct a restrained editorial layout with generous whitespace, confident typography, warm color, and image-led composition.
- Make photographs the visual source of truth; choose `object-fit` and focal positions only after reviewing each selected image.
- Design mobile-first, verify common narrow and wide viewport layouts, and preserve legible contrast.
- Keep animation subtle; respect `prefers-reduced-motion` and provide accessible focus states and labels.
- Keep interaction optional and understandable; no autoplay audio or disruptive overlays.

## Media handling and privacy

- Preserve original filenames and bytes at their current location.
- Build a reviewed photo-selection manifest after the user approves visual inspection; do not infer identity, relationship, event, or context from the images.
- Generate web-sized derivatives only inside the application folder, with filenames that do not alter source files.
- Confirm final photo selection and all personal message text with the user before implementation completion.
- No images or site content will be uploaded, shared, or deployed without explicit approval.

## Delivery and verification

After approval:

1. Confirm the proposed creative direction, stack, and photo-review approach.
2. Review/curate the source photographs with the user, and agree on any copy.
3. Implement the responsive experience under `website\`.
4. Run the project’s build and available checks; test mobile/desktop layouts, keyboard use, and reduced-motion behavior.
5. Present a local preview for review and fix issues.
6. Ask for explicit approval of the finished content and destination before any public deployment.
7. Only then configure a static HTTPS host and share the public link.

No hosting provider or public deployment has been selected. A public HTTPS link is a later, approval-gated step.

## Decisions requiring approval

- Approve creation of a new `website\` application while preserving the original photos.
- Approve Vite + React + TypeScript as the initial implementation stack (or specify another).
- Approve visual review and curation of the 12 supplied photos before choosing image placement/crops.
- Approve the proposed friendly, neutral, editorial tone; provide or approve any personalized message.
- Approve the finished site before public hosting/deployment.
