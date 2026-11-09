# DIMPU — Birthday Experience: Proposed Project Structure

**Proposal only:** This structure does not exist yet. It should be created only after approval. Original photographs remain in the workspace root with their current names and bytes.

```text
D:\chitti love bday\
├── WhatsApp Image 2026-11-08 at 4.22.20 PM (1).jpeg   # original; untouched
├── ...                                                # other original photos; untouched
├── workspace-inventory.md
├── photo-file-list.csv
├── media-inventory.json
├── implementation-plan.md
├── proposed-project-structure.md
└── website\
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── public\
    │   ├── favicon.svg
    │   └── images\
    │       └── [approved, optimized derivatives only]
    └── src\
        ├── main.tsx
        ├── App.tsx
        ├── styles\
        │   └── global.css
        ├── components\
        │   ├── BirthdayHero.tsx
        │   ├── PhotoStory.tsx
        │   ├── NoteReveal.tsx
        │   └── BirthdayFooter.tsx
        └── data\
            └── photos.ts
```

## Structure notes

- `website\` is the project boundary; it keeps app files and dependencies separate from the photo archive.
- `public\images\` is reserved for user-approved, generated web derivatives—not originals.
- `src\data\photos.ts` would map curated derivative paths to neutral alt text and optional approved captions. No caption or relationship is to be inferred from image content.
- The final component names and asset strategy may change to fit the approved design; avoid creating unnecessary components or dependencies.
- Deployment configuration should be added only after the user approves the implementation and selects/approves a hosting destination.
