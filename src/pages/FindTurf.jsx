/** FindTurf — 3-step search: sport → city → search & book */
import React, { useState } from 'react';
import { SPORTS, CITIES, useTurfs, useStats } from '../data';
import TurfCard from '../components/TurfCard';

function FindTurf() {
  const { turfs: TURFS, loading } = useTurfs();
  const { stats } = useStats();
  const [sport, setSport] = useState(null);

  const dynamicSports = SPORTS.map(s => {
    const count = TURFS.filter(t => t.s.some(sport => sport.toLowerCase().includes(s.n.toLowerCase()))).length;
    return { ...s, c: count > 0 ? `${count} Turfs` : "Coming Soon" };
  });

  const dynamicCities = CITIES.map(c => {
    const count = TURFS.filter(t => t.loc.toLowerCase().includes(c.n.toLowerCase())).length;
    return { ...c, c: count > 0 ? `${count} Turfs` : "Coming Soon" };
  });
  const [city, setCity] = useState(null);
  const [budget, setBudget] = useState("Any");
  const [date, setDate] = useState("");
  const [searched, setSearched] = useState(false);
  const step = sport ? (city ? 3 : 2) : 1;
  const filtered = TURFS.filter(t => {
    const matchSport = !sport || sport === "All" || t.s.some(s => s.toLowerCase().includes(sport.toLowerCase()));
    const matchCity = !city || city === "All" || (t.loc && t.loc.toLowerCase().includes(city.toLowerCase()));
    let matchBudget = true;
    if (budget !== "Any" && t.p) {
      const priceMatch = t.p.match(/\d+/);
      if (priceMatch) {
        const price = parseInt(priceMatch[0], 10);
        if (budget === "Under Rs.500") matchBudget = price < 500;
        else if (budget === "Rs.500 to Rs.800") matchBudget = price >= 500 && price <= 800;
        else if (budget === "Above Rs.800") matchBudget = price > 800;
      }
    }
    return matchSport && matchCity && matchBudget;
  });
  return (
    <main className="pg" role="main" aria-label="Find a Turf">
      <div className="pghero">
        <div className="pghero-grid" /><div className="pghero-glow" />
        <div className="pghero-inner">
          <div className="badge a1"><div className="bdot" />Search and Book</div>
          <h1 className="a2" style={{ fontFamily: "var(--D)", fontSize: "clamp(46px,7vw,88px)", lineHeight: .9, letterSpacing: 2, marginBottom: 14 }}>FIND YOUR<br /><span className="hl">PERFECT TURF.</span></h1>
          <p className="a3" style={{ fontSize: 16, color: "var(--muted)", maxWidth: 480, lineHeight: 1.65 }}>{stats.turfs}+ verified turfs across {stats.cities} cities and {SPORTS.length} sports. Book in under 60 seconds.</p>
        </div>
      </div>
      <div style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)", padding: "14px clamp(16px,5vw,64px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", gap: 0, flexWrap: "wrap", rowGap: 8 }}>
          {[{ n: 1, l: "Choose Sport" }, { n: 2, l: "Choose City" }, { n: 3, l: "Search and Book" }].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: step >= s.n ? "var(--lime)" : "var(--card)", border: step >= s.n ? "none" : "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, color: step >= s.n ? "#000" : "var(--muted)", transition: "all .3s" }}>{step > s.n ? "✓" : s.n}</div>
                <span style={{ fontSize: 13, fontWeight: 600, color: step >= s.n ? "var(--text)" : "var(--muted)" }}>{s.l}</span>
              </div>
              {i < 2 && <div style={{ width: 56, height: 1, background: step > s.n ? "var(--lime)" : "var(--border)", margin: "0 14px", transition: "all .3s" }} />}
            </div>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(32px,5vw,56px) clamp(16px,5vw,64px)" }}>
        <div style={{ marginBottom: 50 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 6 }}>Step 1</div>
              <h2 className="h2" style={{ marginBottom: 0 }}>CHOOSE YOUR SPORT</h2>
            </div>
            {sport && <button className="bo sm" onClick={() => { setSport(null); setSearched(false); }}>Clear</button>}
          </div>
          <div className="g6">
            {dynamicSports.map((s, i) => (
              <div key={i} className={`sc${sport === s.n ? " on" : ""}`} style={{ background: s.bg }} onClick={() => { setSport(s.n); setSearched(false); }}>
                {s.isNew && <div className="snew">NEW</div>}
                <span className="semo">{s.e}</span><div className="snm">{s.n}</div><div className="scnt">{s.c}</div>
              </div>
            ))}
          </div>
        </div>
        {sport && (
          <div style={{ marginBottom: 50 }} className="slide">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 6 }}>Step 2</div>
                <h2 className="h2" style={{ marginBottom: 0 }}>CHOOSE YOUR CITY</h2>
              </div>
              {city && <button className="bo sm" onClick={() => { setCity(null); setSearched(false); }}>Change</button>}
            </div>
            <div className="g6">
              {dynamicCities.map((c, i) => (
                <div key={i} className={`cc${city === c.n ? " on" : ""}`} onClick={() => { setCity(c.n); setSearched(false); }}>
                  <span className="cico">{c.e}</span><div className="cnm">{c.n}</div><div className="ccnt">{c.c}</div>
                  {c.hot && <div className="chot">Popular</div>}
                </div>
              ))}
            </div>
          </div>
        )}
        {sport && city && (
          <div className="slide">
            <div style={{ marginBottom: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 6 }}>Step 3</div>
              <h2 className="h2" style={{ marginBottom: 0 }}>REFINE AND SEARCH</h2>
            </div>
            <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 24, marginBottom: 28 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 12, alignItems: "end", marginBottom: 16 }}>
                <div>
                  <label className="flbl">Sport</label>
                  <div style={{ background: "var(--bg3)", border: "1px solid var(--lime3)", borderRadius: 10, padding: "12px 16px", fontSize: 15, fontWeight: 700, color: "var(--lime)" }}>{SPORTS.find(s => s.n === sport)?.e} {sport}</div>
                </div>
                <div>
                  <label className="flbl">City</label>
                  <div style={{ background: "var(--bg3)", border: "1px solid var(--lime3)", borderRadius: 10, padding: "12px 16px", fontSize: 15, fontWeight: 700, color: "var(--lime)" }}>{CITIES.find(c => c.n === city)?.e} {city}</div>
                </div>
                <div>
                  <label className="flbl">Date</label>
                  <input type="date" className="fin" value={date} onChange={e => setDate(e.target.value)} />
                </div>
                <button className="bg" style={{ padding: "12px 28px", whiteSpace: "nowrap" }} onClick={() => setSearched(true)} aria-label="Search available turfs">Search Turfs</button>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase" }}>Budget:</span>
                {["Any", "Under Rs.500", "Rs.500 to Rs.800", "Above Rs.800"].map(b => (
                  <div key={b} onClick={() => setBudget(b)} style={{ padding: "6px 15px", borderRadius: 100, border: "1px solid", borderColor: budget === b ? "var(--lime3)" : "var(--border)", fontSize: 12, fontWeight: 600, color: budget === b ? "var(--lime)" : "var(--muted)", background: budget === b ? "var(--lime2)" : "var(--card)", cursor: "pointer" }}>{b}</div>
                ))}
              </div>
            </div>
            {!searched && (
              <div style={{ textAlign: "center", padding: "48px 32px", background: "var(--card)", borderRadius: 20, border: "1px solid var(--lime3)" }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>🔍</div>
                <p style={{ color: "var(--muted)", fontSize: 16, marginBottom: 20 }}>Click Search Turfs to find {sport} courts in {city}</p>
                <button className="bl" onClick={() => setSearched(true)}>Search Turfs →</button>
              </div>
            )}
            {searched && (
              <div className="slide">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22, flexWrap: "wrap", gap: 12 }}>
                  <div style={{ fontSize: 14, color: "var(--muted)" }}>Found <strong style={{ color: "var(--text)" }}>{filtered.length} turfs</strong> for {sport} in {city}</div>
                </div>
                {loading ? (
                  <div style={{ textAlign: "center", padding: "40px", color: "var(--muted)" }}>Loading Turfs...</div>
                ) : filtered.length === 0 ? (
                  <div style={{ textAlign: "center", padding: "72px 32px", background: "var(--card)", borderRadius: 20, border: "1px solid var(--border)" }}>
                    <div style={{ fontSize: 52, marginBottom: 14 }}>🔍</div>
                    <h3 style={{ fontFamily: "var(--D)", fontSize: 32, marginBottom: 10 }}>No Turfs Found</h3>
                    <p style={{ color: "var(--muted)", marginBottom: 22 }}>No {sport} turfs in {city} yet. Try a different city.</p>
                    <button className="bl sm" onClick={() => { setCity(null); setSearched(false); }}>Change City</button>
                  </div>
                ) : (
                  <div className="g3">{filtered.map((t, i) => <TurfCard key={i} t={t} onBook={() => window.open(`https://app.matchticket.in/${t.public_url_slug}/booking`, '_blank')} />)}</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default FindTurf;
