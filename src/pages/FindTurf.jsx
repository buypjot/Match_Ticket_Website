/** FindTurf — 3-step search: sport → city → search & book */
import React, { useState, useEffect } from 'react';
import { SPORTS, CITIES, useTurfs, useStats } from '../data';
import TurfCard from '../components/TurfCard';

function FindTurf() {
  const { turfs: TURFS, loading } = useTurfs();
  const { stats } = useStats();
  const [sport, setSport] = useState(null);

  const dynamicSports = SPORTS.map(s => {
    const count = TURFS.filter(t => t.s.some(sport => sport.toLowerCase().includes(s.n.toLowerCase()))).length;
    return { ...s, count, c: count > 0 ? `${count} Turfs` : "Coming Soon" };
  }).sort((a, b) => b.count - a.count);

  const dynamicCities = React.useMemo(() => {
    const baseCities = [...CITIES];
    const dbCities = [...new Set(TURFS.map(t => t.loc).filter(Boolean))];
    
    dbCities.forEach(loc => {
      if (!baseCities.some(bc => bc.n.toLowerCase() === loc.toLowerCase())) {
        baseCities.push({ e: "📍", n: loc, hot: false });
      }
    });

    return baseCities.map(c => {
      const count = TURFS.filter(t => t.loc && t.loc.toLowerCase().includes(c.n.toLowerCase())).length;
      return { ...c, count, c: count > 0 ? `${count} Turfs` : "Coming Soon" };
    }).sort((a, b) => {
      if (b.count !== a.count) return b.count - a.count;
      if (b.hot !== a.hot) return b.hot ? 1 : -1;
      return a.n.localeCompare(b.n);
    });
  }, [TURFS]);
  const [city, setCity] = useState(null);
  const [budget, setBudget] = useState("Any");
  const [date, setDate] = useState("");
  const [searched, setSearched] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSportModalOpen, setIsSportModalOpen] = useState(false);
  const [sportSearchQuery, setSportSearchQuery] = useState("");
  const [allIndianCities, setAllIndianCities] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries/cities/q?country=India');
        const json = await response.json();
        if (!json.error && Array.isArray(json.data)) {
          setAllIndianCities(json.data);
        }
      } catch (e) {
        console.error("Failed to fetch cities", e);
      }
    };
    fetchCities();
  }, []);

  const allAvailableCities = React.useMemo(() => {
    const dbCities = TURFS.map(t => t.loc).filter(Boolean);
    const combined = [...new Set([...allIndianCities, ...dbCities])];
    return combined.sort();
  }, [TURFS, allIndianCities]);

  const filteredModalCities = allAvailableCities.filter(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredModalSports = dynamicSports.filter(s => s.n.toLowerCase().includes(sportSearchQuery.toLowerCase()));
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
              <div className="cc" onClick={() => setIsModalOpen(true)}>
                <span className="cico">🔍</span><div className="cnm">More Cities</div><div className="ccnt">Search All</div>
              </div>
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
                  <div onClick={() => setIsSportModalOpen(true)} style={{ background: "var(--bg3)", border: "1px solid var(--lime3)", borderRadius: 10, padding: "12px 16px", fontSize: 15, fontWeight: 700, color: "var(--lime)", cursor: "pointer", display: "flex", justifyContent: "space-between" }}>
                    <span>{SPORTS.find(s => s.n === sport)?.e} {sport}</span> <span>🔍</span>
                  </div>
                </div>
                <div>
                  <label className="flbl">City</label>
                  <div onClick={() => setIsModalOpen(true)} style={{ background: "var(--bg3)", border: "1px solid var(--lime3)", borderRadius: 10, padding: "12px 16px", fontSize: 15, fontWeight: 700, color: "var(--lime)", cursor: "pointer", display: "flex", justifyContent: "space-between" }}>
                    <span>{CITIES.find(c => c.n === city)?.e} {city}</span> <span>🔍</span>
                  </div>
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
      {isModalOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 20 }} onClick={() => setIsModalOpen(false)}>
          <div style={{ background: "var(--bg2)", width: "100%", maxWidth: 500, borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column", maxHeight: "80vh", border: "1px solid var(--border)" }} onClick={e => e.stopPropagation()}>
            <div style={{ padding: 20, borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 12 }}>
              <input 
                type="text" 
                placeholder="Search city..." 
                autoFocus
                value={searchQuery} 
                onChange={e => setSearchQuery(e.target.value)} 
                style={{ flex: 1, background: "var(--bg3)", border: "1px solid var(--border)", padding: "12px 16px", borderRadius: 10, color: "var(--text)", fontSize: 16 }} 
              />
              <button onClick={() => setIsModalOpen(false)} style={{ background: "transparent", border: "none", color: "var(--muted)", fontSize: 24, cursor: "pointer" }}>×</button>
            </div>
            <div style={{ overflowY: "auto", padding: 10, flex: 1 }}>
              {filteredModalCities.length > 0 ? filteredModalCities.map((c, i) => {
                const count = TURFS.filter(t => t.loc && t.loc.toLowerCase() === c.toLowerCase()).length;
                return (
                  <div key={i} onClick={() => { setCity(c); setSearched(false); setIsModalOpen(false); setSearchQuery(""); }} style={{ padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--bg3)", cursor: "pointer", transition: "all .2s" }} onMouseOver={e => e.currentTarget.style.background = 'var(--bg3)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                    <span style={{ fontSize: 16, fontWeight: 500, color: "var(--text)" }}>{c}</span>
                    <span style={{ fontSize: 13, color: count > 0 ? "var(--lime)" : "var(--muted)" }}>{count > 0 ? `${count} Turfs` : "No Turfs"}</span>
                  </div>
                );
              }) : (
                <div style={{ padding: 40, textAlign: "center", color: "var(--muted)" }}>No cities found</div>
              )}
            </div>
          </div>
        </div>
      )}
      {isSportModalOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 20 }} onClick={() => setIsSportModalOpen(false)}>
          <div style={{ background: "var(--bg2)", width: "100%", maxWidth: 500, borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column", maxHeight: "80vh", border: "1px solid var(--border)" }} onClick={e => e.stopPropagation()}>
            <div style={{ padding: 20, borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", gap: 12 }}>
              <input 
                type="text" 
                placeholder="Search sport..." 
                autoFocus
                value={sportSearchQuery} 
                onChange={e => setSportSearchQuery(e.target.value)} 
                style={{ flex: 1, background: "var(--bg3)", border: "1px solid var(--border)", padding: "12px 16px", borderRadius: 10, color: "var(--text)", fontSize: 16 }} 
              />
              <button onClick={() => setIsSportModalOpen(false)} style={{ background: "transparent", border: "none", color: "var(--muted)", fontSize: 24, cursor: "pointer" }}>×</button>
            </div>
            <div style={{ overflowY: "auto", padding: 10, flex: 1 }}>
              {filteredModalSports.length > 0 ? filteredModalSports.map((s, i) => (
                <div key={i} onClick={() => { setSport(s.n); setSearched(false); setIsSportModalOpen(false); setSportSearchQuery(""); }} style={{ padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--bg3)", cursor: "pointer", transition: "all .2s" }} onMouseOver={e => e.currentTarget.style.background = 'var(--bg3)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                  <span style={{ fontSize: 16, fontWeight: 500, color: "var(--text)" }}>{s.e} {s.n}</span>
                  <span style={{ fontSize: 13, color: s.count > 0 ? "var(--lime)" : "var(--muted)" }}>{s.c}</span>
                </div>
              )) : (
                <div style={{ padding: 40, textAlign: "center", color: "var(--muted)" }}>No sports found</div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default FindTurf;
