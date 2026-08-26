import React, { useState, useMemo, useEffect } from 'react';
import { TN_DISTRICTS } from '../data/districtLandingPages';

const ITEMS_PER_PAGE = 9;

export default function DistrictsHub({ navigate }) {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter districts based on search query
  const filteredDistricts = useMemo(() => {
    return TN_DISTRICTS.filter(dist => {
      return (
        dist.name.toLowerCase().includes(search.toLowerCase()) ||
        dist.tamilName.includes(search) ||
        (dist.famousPlace && dist.famousPlace.toLowerCase().includes(search.toLowerCase())) ||
        dist.popularAreas.some(area => area.toLowerCase().includes(search.toLowerCase())) ||
        dist.tagline.toLowerCase().includes(search.toLowerCase())
      );
    });
  }, [search]);

  // Reset to page 1 whenever search query changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  // Calculate pagination slice
  const totalPages = Math.ceil(filteredDistricts.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentDistricts = filteredDistricts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      const gridElem = document.getElementById('districts-grid-start');
      if (gridElem) {
        gridElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <main className="pg" role="main" aria-label="Tamil Nadu 38 Districts Turf Booking Software Directory">
      {/* ── Page Hero ── */}
      <div className="pghero">
        <div className="pghero-grid" />
        <div className="pghero-glow" />
        <div className="pghero-inner" style={{ maxWidth: 920, width: "100%", textAlign: "center" }}>
          
          <div className="badge a1" style={{ justifyContent: "center" }}>
            <div className="bdot" />
            Tamil Nadu Network · 38 Districts
          </div>

          <h1 className="a2" style={{ fontFamily: "var(--D)", fontSize: "clamp(34px, 5.5vw, 68px)", lineHeight: 0.95, letterSpacing: 2, marginBottom: 18 }}>
            TURF BOOKING SOFTWARE <span className="hl">ACROSS TAMIL NADU</span>
          </h1>

          <p className="a3" style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "var(--muted)", lineHeight: 1.7, marginBottom: 28, maxWidth: 760, margin: "0 auto 28px" }}>
            Match Ticket provides India's #1 cloud-based turf booking and ground management platform across all 38 districts of Tamil Nadu. Choose your district below for localized slot automation, UPI payments, and WhatsApp passes.
          </p>

          {/* ── Search Bar ── */}
          <div style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 18,
            padding: "16px 20px",
            maxWidth: 640,
            margin: "0 auto 16px",
            boxShadow: "0 12px 30px rgba(0,0,0,0.4)"
          }}>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="🔍 Search district (e.g. Chennai, Coimbatore, Madurai, Tenkasi)..."
                style={{
                  width: "100%",
                  padding: "14px 20px",
                  borderRadius: 12,
                  background: "var(--bg2)",
                  border: "1px solid var(--border)",
                  color: "#fff",
                  fontSize: 15,
                  outline: "none"
                }}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  style={{
                    position: "absolute",
                    right: 14,
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "none",
                    border: "none",
                    color: "var(--muted)",
                    cursor: "pointer",
                    fontSize: 16
                  }}
                  aria-label="Clear Search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div style={{ fontSize: 14, color: "var(--muted)" }}>
            Showing <strong style={{ color: "var(--lime)" }}>{filteredDistricts.length}</strong> of 38 districts · Page <strong style={{ color: "#fff" }}>{currentPage}</strong> of {totalPages}
          </div>
        </div>
      </div>

      {/* ── 9 Cards Per Page Grid ── */}
      <div className="sec" id="districts-grid-start">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 26
          }}>
            {currentDistricts.map((dist) => (
              <div
                key={dist.id}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.3)"
                }}
                className="sc"
              >
                {/* District Landmark Image Banner */}
                <div style={{ position: "relative", height: 190, overflow: "hidden" }}>
                  <img
                    src={dist.image}
                    alt={`Turf Booking Software in ${dist.name}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease"
                    }}
                    loading="lazy"
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(6,6,16,0.85) 100%)"
                  }} />
                  
                  {/* Tamil Badge Overlay */}
                  <div style={{
                    position: "absolute",
                    top: 14,
                    left: 14,
                    background: "rgba(0,0,0,0.75)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid var(--lime3)",
                    color: "var(--lime)",
                    padding: "4px 12px",
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 700,
                    fontFamily: "var(--B)"
                  }}>
                    தமிழ்நாடு · {dist.tamilName}
                  </div>

                  {/* Famous Landmark Badge */}
                  {dist.famousPlace && (
                    <div style={{
                      position: "absolute",
                      bottom: 12,
                      left: 16,
                      right: 16,
                      background: "rgba(0,0,0,0.65)",
                      backdropFilter: "blur(4px)",
                      padding: "4px 10px",
                      borderRadius: 6,
                      fontSize: 11,
                      color: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      gap: 6
                    }}>
                      <span>📍</span>
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {dist.famousPlace}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div style={{ padding: "22px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                  <div>
                    {/* Exact Requested Heading: Turf Booking Software in Districts Name */}
                    <h2 style={{
                      margin: "0 0 8px 0",
                      fontFamily: "var(--D)",
                      fontSize: 24,
                      color: "#fff",
                      letterSpacing: 0.8,
                      lineHeight: 1.15
                    }}>
                      Turf Booking Software in {dist.name}
                    </h2>

                    {/* Tagline / Subtitle */}
                    <div style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: "var(--lime)",
                      marginBottom: 12,
                      lineHeight: 1.4
                    }}>
                      {dist.tagline}
                    </div>

                    {/* Clean Localized Content */}
                    <p style={{
                      fontSize: 13,
                      color: "var(--muted)",
                      lineHeight: 1.65,
                      marginBottom: 20,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}>
                      {dist.description}
                    </p>
                  </div>

                  {/* View More Button */}
                  <button
                    onClick={() => navigate(dist.slug)}
                    style={{
                      width: "100%",
                      padding: "12px 18px",
                      background: "var(--lime2)",
                      border: "1px solid var(--lime3)",
                      color: "var(--lime)",
                      fontWeight: 800,
                      fontSize: 14,
                      borderRadius: 12,
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 8,
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "var(--lime)";
                      e.currentTarget.style.color = "#000";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "var(--lime2)";
                      e.currentTarget.style.color = "var(--lime)";
                    }}
                  >
                    <span>View More</span>
                    <span style={{ fontSize: 16 }}>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredDistricts.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--muted)" }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
              <h3 style={{ color: "#fff", fontSize: 20, marginBottom: 8 }}>No Districts Found</h3>
              <p>No district matched your search query "{search}". Try searching for another Tamil Nadu district name.</p>
              <button
                onClick={() => setSearch('')}
                style={{
                  marginTop: 16,
                  padding: "8px 20px",
                  background: "var(--lime)",
                  color: "#000",
                  fontWeight: 700,
                  borderRadius: 10,
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Reset Search
              </button>
            </div>
          )}

          {/* ── Previous / Next Pagination ── */}
          {totalPages > 1 && (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
              marginTop: 48,
              flexWrap: "wrap"
            }}>
              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{
                  padding: "10px 20px",
                  background: currentPage === 1 ? "rgba(255,255,255,0.04)" : "var(--card)",
                  color: currentPage === 1 ? "rgba(255,255,255,0.2)" : "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                ← Previous
              </button>

              {/* Numbered Page Buttons */}
              <div style={{ display: "flex", gap: 8 }}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        background: isActive ? "var(--lime)" : "var(--card)",
                        color: isActive ? "#000" : "var(--text)",
                        border: isActive ? "1px solid var(--lime)" : "1px solid var(--border)",
                        fontSize: 14,
                        fontWeight: 800,
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{
                  padding: "10px 20px",
                  background: currentPage === totalPages ? "rgba(255,255,255,0.04)" : "var(--card)",
                  color: currentPage === totalPages ? "rgba(255,255,255,0.2)" : "#fff",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  fontSize: 14,
                  fontWeight: 700,
                  cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                Next →
              </button>
            </div>
          )}

        </div>
      </div>

      {/* ── Bottom CTA Banner ── */}
      <div style={{ background: "var(--bg2)", borderTop: "1px solid var(--border)" }}>
        <div className="sec" style={{ textAlign: "center" }}>
          <h2 className="h2" style={{ textAlign: "center", marginBottom: 16 }}>
            OPERATE A TURF IN <span className="hl">TAMIL NADU?</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 580, margin: "0 auto 28px", lineHeight: 1.7 }}>
            Digitize your sports facility, automate slot schedules, and accept instant online payments with Match Ticket.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="bl" onClick={() => navigate("list-turf")}>List Your Turf Free →</button>
            <button className="bg" onClick={() => navigate("contact")}>Schedule a Free Demo</button>
          </div>
        </div>
      </div>
    </main>
  );
}
