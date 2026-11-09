import { useEffect, useRef, useState } from "react";
import type { Photo } from "./photos";
import { photos } from "./photos";

const heroImage = "/images/photo-02.jpeg";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" fill="none">
      <path d="M3.75 9h10.5m-4.5-4.5L14.25 9l-4.5 4.5" />
    </svg>
  );
}

function App() {
  const [activePhoto, setActivePhoto] = useState<Photo | null>(null);
  const [noteOpen, setNoteOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activePhoto && !dialog.open) {
      dialog.showModal();
    } else if (!activePhoto && dialog.open) {
      dialog.close();
    }
  }, [activePhoto]);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Dimpu's birthday page, home">
          <span className="wordmark-mark">D</span>
          <span className="wordmark-label">A DAY FOR DIMPU</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#moments">THE MOMENTS</a>
          <a className="nav-note" href="#birthday-note">
            A LITTLE NOTE <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src={heroImage}
            alt=""
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow">
              <span className="eyebrow-line" />
              NOVEMBER 10 <span className="eyebrow-dot">·</span> A DAY TO CELEBRATE
            </p>
            <h1 id="hero-title">
              Here&apos;s to
              <br />
              <em>your</em> kind of
              <br />
              wonderful.
            </h1>
            <p className="hero-signoff">Happy birthday, Dimpu.</p>
            <a className="hero-link" href="#moments">
              <span>TAKE A LOOK AROUND</span>
              <span className="hero-link-icon">
                <ArrowIcon />
              </span>
            </a>
          </div>
          <div className="hero-index" aria-hidden="true">
            <span>01</span>
            <span className="hero-index-rule" />
            <span>11</span>
          </div>
          <p className="hero-caption">A little page, made just for today.</p>
        </section>

        <section className="intro" aria-labelledby="intro-title">
          <div className="intro-kicker">
            <span className="eyebrow-line" />
            A NOTE FOR NOVEMBER 10
          </div>
          <div className="intro-copy">
            <h2 id="intro-title">
              Another year of
              <br />
              <em>being you.</em>
            </h2>
            <p>
              May the year ahead bring bright little surprises, plenty of
              laughter, and more moments that feel like sunshine.
            </p>
          </div>
          <span className="intro-spark" aria-hidden="true">✳</span>
        </section>

        <section className="gallery-section" id="moments" aria-labelledby="gallery-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-eyebrow">
                <span className="eyebrow-line" />
                THE PHOTO ALBUM
              </p>
              <h2 id="gallery-title">
                Little moments.
                <br />
                <em>All the light.</em>
              </h2>
            </div>
            <p className="section-aside">
              A few snapshots, gathered
              <br />
              together for your day.
            </p>
          </div>

          <div className="photo-grid">
            {photos.map((photo, index) => (
              <button
                className={`photo-card photo-card-${photo.shape} photo-card-${index + 1}`}
                key={photo.src}
                type="button"
                onClick={() => setActivePhoto(photo)}
                aria-label={`Open photo ${index + 1}: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="photo-card-open" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <p className="gallery-footnote">
            <span>11</span> MOMENTS <span className="footnote-divider">/</span> TAP ANY PHOTO TO TAKE A CLOSER LOOK
          </p>
        </section>

        <section className="note-section" id="birthday-note" aria-labelledby="note-title">
          <div className="note-orbit note-orbit-one" aria-hidden="true" />
          <div className="note-orbit note-orbit-two" aria-hidden="true" />
          <div className="note-content">
            <p className="eyebrow note-eyebrow">
              <span className="eyebrow-line" />
              A SMALL SOMETHING
            </p>
            <h2 id="note-title">
              One more thing,
              <br />
              <em>before you go.</em>
            </h2>
            <p className="note-intro">
              There&apos;s a birthday wish tucked in here with your name on it.
            </p>
            <button
              className={`reveal-button${noteOpen ? " is-open" : ""}`}
              type="button"
              onClick={() => setNoteOpen((open) => !open)}
              aria-expanded={noteOpen}
              aria-controls="birthday-wish"
            >
              <span>{noteOpen ? "CLOSE YOUR NOTE" : "OPEN YOUR NOTE"}</span>
              <span className="reveal-button-icon" aria-hidden="true">
                {noteOpen ? "−" : "+"}
              </span>
            </button>
            <div
              className={`birthday-wish${noteOpen ? " is-visible" : ""}`}
              id="birthday-wish"
              aria-hidden={!noteOpen}
            >
              <span className="wish-star" aria-hidden="true">✳</span>
              <p>
                Dimpu, may this next trip around the sun be full of good
                surprises, easy laughter, and all the things that make you
                happiest.
              </p>
              <span className="wish-signoff">HAPPY BIRTHDAY, ALWAYS.</span>
            </div>
          </div>
          <span className="note-number" aria-hidden="true">10</span>
        </section>

        <footer className="site-footer">
          <a className="footer-top" href="#top">
            BACK TO THE TOP <span aria-hidden="true">↑</span>
          </a>
          <p className="footer-greeting">
            Made with <span aria-label="care">care</span> for Dimpu
          </p>
          <p className="footer-date">NOVEMBER 10 <span>·</span> YOUR DAY, YOUR WAY</p>
        </footer>
      </main>

      <dialog
        className="photo-dialog"
        ref={dialogRef}
        aria-label="Expanded photo"
        onCancel={() => setActivePhoto(null)}
        onClose={() => setActivePhoto(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) setActivePhoto(null);
        }}
      >
        {activePhoto && (
          <div className="dialog-frame">
            <button
              className="dialog-close"
              type="button"
              onClick={() => setActivePhoto(null)}
              aria-label="Close expanded photo"
              autoFocus
            >
              ×
            </button>
            <img src={activePhoto.src} alt={activePhoto.alt} />
            <p>{activePhoto.alt}</p>
          </div>
        )}
      </dialog>
    </>
  );
}

export default App;
