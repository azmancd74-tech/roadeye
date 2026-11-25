import { useEffect } from "react";

/* ---------- icons ---------- */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function IconRoad() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3 3 21M18 3l3 18M12 4v3M12 11v3M12 18v3" {...stroke} />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" {...stroke} />
      <circle cx="12" cy="10" r="2.6" {...stroke} />
    </svg>
  );
}

function IconGauge() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 18a8 8 0 1 1 16 0" {...stroke} />
      <path d="M12 18l4.2-5" {...stroke} />
      <circle cx="12" cy="18" r="1.6" {...stroke} />
    </svg>
  );
}

function IconMap() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 3 3 5.5v15L9 18l6 3 6-2.5v-15L15 6 9 3Z" {...stroke} />
      <path d="M9 3v15M15 6v15" {...stroke} />
    </svg>
  );
}

function IconChart() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20V4M4 20h16" {...stroke} />
      <path d="M8 16v-4M12 16V8M16 16v-6" {...stroke} />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3Z" {...stroke} />
      <path d="m9 12 2 2 4-4" {...stroke} />
    </svg>
  );
}

function IconArrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" {...stroke} />
    </svg>
  );
}

/* ---------- data ---------- */

const features = [
  {
    icon: <IconRoad />,
    title: "Real-time edge detection",
    body: "Model YOLOv11n berjalan pada Raspberry Pi 5 sendiri, jadi lubang dikesan serta-merta apabila kamera melintasinya — tanpa perlu menghantar data ke awan.",
  },
  {
    icon: <IconPin />,
    title: "GPS on every detection",
    body: "Modul GNSS LC76G menandakan setiap bingkai dengan latitud dan longitud, kemudian Nominatim menukar koordinat itu kepada nama tempat yang mudah difahami.",
  },
  {
    icon: <IconGauge />,
    title: "Three-level severity",
    body: "Liputan kotak sempadan memisahkan kerosakan kecil, sederhana dan kritikal, supaya pasukan boleh mengutamakan lubang yang paling dalam dahulu.",
  },
  {
    icon: <IconMap />,
    title: "Live map view",
    body: "Setiap laporan muncul pada peta Leaflet dan OpenStreetMap, diwarnakan mengikut tahap keterukan dan boleh ditapis mengikut status pembaikan.",
  },
  {
    icon: <IconChart />,
    title: "Analytics that hold up",
    body: "Papan pemuka Recharts merumuskan jumlah, trend dan taburan keterukan — bukti untuk pasukan penyelenggaraan, bukan agakan.",
  },
  {
    icon: <IconShield />,
    title: "Admin workflow",
    body: "Pasukan jalan raya boleh mengemas kini atau menutup laporan, memadam rekod pendua, dan melampirkan foto tangkapan sebagai bukti pembaikan.",
  },
];

const steps = [
  { title: "Capture", body: "Kamera Pi merakam keadaan jalan semasa kenderaan bergerak." },
  { title: "Detect", body: "YOLOv11n menilai bingkai dan menanda setiap lubang yang ditemui." },
  { title: "Report", body: "Imej, GPS dan keterukan dihantar ke backend FastAPI." },
  { title: "Act", body: "Papan pemuka memetakan, menyusun keutamaan dan menyalurkannya kepada pasukan." },
];

const stack = [
  { group: "Edge AI", items: ["Raspberry Pi 5", "YOLOv11n", "LC76G GNSS"] },
  { group: "Backend", items: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "geopy", "Nominatim"] },
  { group: "Frontend", items: ["React", "Vite", "Tailwind CSS", "React Router", "Axios", "React-Leaflet", "Recharts"] },
];

const awards = [
  {
    tag: "Anugerah",
    title: "Gold medal — MPI26",
    body: "Dipersembahkan di pertandingan Inovasi dan Reka Cipta Politeknik Malaysia (MPI26).",
  },
  {
    tag: "Penerbitan",
    title: "IJSET Vol. 1 (2026)",
    body: "Penulisan semakan rakan sebaya tentang saluran pengesanan dan keputusan ujian lapangan.",
  },
  {
    tag: "Akademik",
    title: "Final Year Project",
    body: "Disiapkan di UC TATI oleh Muhammad Muttaqin bin Zainal.",
  },
];

/* ---------- page ---------- */

export default function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="nav">
        <div className="container nav__inner">
          <a className="brand" href="#top">
            <span className="brand__mark">
              <IconRoad />
            </span>
            <span className="brand__name">
              RoadEye
              <small>Pengesanan lubang jalan</small>
            </span>
          </a>

          <nav className="nav__links" aria-label="Utama">
            <a href="#features">Ciri-ciri</a>
            <a href="#how">Cara kerja</a>
            <a href="#stack">Teknologi</a>
            <a href="#contact">Hubungi</a>
          </nav>

          <div className="nav__actions">
            <a className="btn btn--ghost btn--sm" href="https://github.com/azmancd74-tech/roadeye" target="_blank" rel="noreferrer">
              Sumber
            </a>
            <a className="btn btn--primary btn--sm" href="#contact">
              Minta demo
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* hero */}
        <section className="hero">
          <div className="container hero__grid">
            <div>
              <span className="eyebrow">Smart city · Road safety</span>
              <h1>
                Every pothole, <br />
                <em>found the moment it appears.</em>
              </h1>
              <p className="lede">
                RoadEye mengubah Raspberry Pi 5 menjadi pemeriksa jalan raya. Ia mengesan kerosakan secara masa nyata,
                menandakan setiap penemuan dengan koordinat GPS, dan menghantarnya ke papan pemuka yang boleh terus
                ditindakbalas oleh pasukan penyelenggaraan.
              </p>
              <div className="hero__cta">
                <a className="btn btn--primary" href="#how">
                  Lihat cara kerjanya
                  <IconArrow />
                </a>
                <a className="btn btn--ghost" href="#features">
                  Terokai ciri-ciri
                </a>
              </div>
              <p className="hero__note">
                <span className="dot" /> Diuji di jalan raya Malaysia
              </p>
            </div>

            <div className="mock" aria-hidden="true">
              <div className="mock__bar">
                <span>Aliran pengesanan</span>
                <span className="mock__live">
                  <span /> langsung
                </span>
              </div>
              <div className="mock__view">
                <div className="mock__road" />
                <div className="mock__hole" />
                <div className="mock__box" />
                <div className="mock__tag">lubang · 0.94</div>
                <div className="mock__hud">
                  <div className="mock__chip">3.1523, 101.6122</div>
                  <div className="mock__chip">KRITIKAL</div>
                </div>
              </div>
              <dl className="mock__foot">
                <div className="mock__stat">
                  <dt>Keterukan</dt>
                  <dd>Kritikal</dd>
                </div>
                <div className="mock__stat">
                  <dt>Longitud</dt>
                  <dd>101.6122</dd>
                </div>
                <div className="mock__stat">
                  <dt>Latitud</dt>
                  <dd>3.1523</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* stats */}
        <section className="stats">
          <div className="container">
            <div className="stats__grid">
              <div className="stat">
                <strong>80.8%</strong>
                <span>mAP@0.5</span>
              </div>
              <div className="stat">
                <strong>0.77</strong>
                <span>Skor F1</span>
              </div>
              <div className="stat">
                <strong>6,613</strong>
                <span>Imej beranotasi</span>
              </div>
              <div className="stat">
                <strong>100</strong>
                <span>Epok latihan</span>
              </div>
            </div>
          </div>
        </section>

        {/* features */}
        <section className="section" id="features">
          <div className="container">
            <div className="section-head reveal" data-reveal>
              <span className="eyebrow">What it does</span>
              <h2>From a passing camera to a repair order.</h2>
              <p>
                Enam komponen yang bergerak serentak: tangkapan, pengesanan, koordinat, keterukan, pemetaan dan gelung
                admin yang menutup setiap laporan.
              </p>
            </div>

            <div className="cards">
              {features.map((feature) => (
                <article className="card reveal" data-reveal key={feature.title}>
                  <div className="card__icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* how it works */}
        <section className="section section--tight" id="how">
          <div className="container">
            <div className="section-head reveal" data-reveal>
              <span className="eyebrow">Pipeline</span>
              <h2>Four steps, under a second.</h2>
              <p>Satu laluan peranti tepi menghasilkan laporan lengkap dengan lokasi dan keutamaan — tanpa tinjauan manual.</p>
            </div>

            <div className="steps">
              {steps.map((step, index) => (
                <article className="step reveal" data-reveal key={step.title}>
                  <div className="step__num">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* architecture */}
        <section className="section">
          <div className="container">
            <div className="arch reveal" data-reveal>
              <div className="arch__flow">
                <div className="node">
                  <strong>Peranti tepi</strong>
                  <span>Pi 5 · YOLOv11n</span>
                </div>
                <span className="arrow">
                  <IconArrow />
                </span>
                <div className="node">
                  <strong>FastAPI</strong>
                  <span>Python · SQLAlchemy</span>
                </div>
                <span className="arrow">
                  <IconArrow />
                </span>
                <div className="node">
                  <strong>MySQL</strong>
                  <span>pengesanan · status</span>
                </div>
                <span className="arrow">
                  <IconArrow />
                </span>
                <div className="node">
                  <strong>Papan pemuka</strong>
                  <span>React · Leaflet</span>
                </div>
              </div>
              <div className="arch__legend">
                <span>
                  <code>POST /add-pothole</code> imej + GPS + keterukan
                </span>
                <span>
                  <code>GET /dashboard-stats</code> kiraan langsung
                </span>
                <span>
                  <code>PUT /update-status/&#123;id&#125;</code> jejak pembaikan
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* stack */}
        <section className="section section--tight" id="stack">
          <div className="container">
            <div className="section-head reveal" data-reveal>
              <span className="eyebrow">Under the hood</span>
              <h2>Built with tools that stay out of the way.</h2>
              <p>Setiap lapisan ringan dan boleh diganti tanpa meruntuhkan yang lain.</p>
            </div>
            <div className="stack">
              {stack.map((group) => (
                <div className="stack__group reveal" data-reveal key={group.group}>
                  <h4>{group.group}</h4>
                  <div className="chips">
                    {group.items.map((item) => (
                      <span className="chip" key={item}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* recognition */}
        <section className="section section--tight">
          <div className="container">
            <div className="recognition">
              {awards.map((award) => (
                <article className="award reveal" data-reveal key={award.title}>
                  <span className="award__tag">{award.tag}</span>
                  <h3>{award.title}</h3>
                  <p>{award.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* contact */}
        <section className="section" id="contact">
          <div className="container">
            <div className="cta reveal" data-reveal>
              <h2>Ready to map your roads?</h2>
              <p>
                Prototaip ini sudah berjalan dari hujung ke hujung: pengesanan tepi, penandaan GPS, peta langsung dan
                paparan admin. Hubungi kami untuk melihatnya di jalan anda sendiri.
              </p>
              <div className="cta__row">
                <a className="btn btn--primary" href="mailto:azmancd74@gmail.com">
                  E-mel pasukan
                </a>
                <a className="btn btn--ghost" href="https://github.com/azmancd74-tech/roadeye" target="_blank" rel="noreferrer">
                  Lihat repositori
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} RoadEye · Projek Tahun Akhir, UC TATI</span>
          <span>Dibina oleh Muhammad Muttaqin bin Zainal</span>
        </div>
      </footer>
    </>
  );
}
