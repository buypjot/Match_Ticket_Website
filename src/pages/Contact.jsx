/** Contact — player support + owner onboarding, form, FAQ */
import React, { useState } from 'react';
import FaqItem from '../components/FaqItem';

function Contact() {
  const [tab, setTab] = useState("player");
  const [faqOpen, setFaqOpen] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", msg: "", type: "" });
  const [sent, setSent] = useState(false);
  const setF = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const send = () => {
    if (form.name && form.email && form.msg) {
      const details = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nType: ${form.type}\nMessage: ${form.msg}`;
      
      // Send to Slack
      fetch("https://hooks.slack.com/services/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", {
        method: "POST",
        body: JSON.stringify({ text: details })
      }).catch(console.error);

      // Save to database
      fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      }).catch(console.error);

      setSent(true);
    }
  };
  const PLAYER_INFO = [
    { ico: "💬", t: "WhatsApp Support", v: "+91 63819 21416 — fastest response" },
    { ico: "📧", t: "Email Support", v: "support@matchticket.in — reply within 4 hours" },
    { ico: "🔄", t: "Refund Policy", v: "Cancel 4 hrs before slot for full refund. Within 4 hrs — 50% refund." },
    { ico: "❓", t: "Booking Help", v: "QR code, payment, or slot issues? WhatsApp us for instant help." },
    { ico: "⏰", t: "Support Hours", v: "Monday to Sunday, 8 AM to 10 PM IST" },
  ];
  const OWNER_INFO = [
    { ico: "📞", t: "Owner Success Team", v: "+91 91235 64005 — call or WhatsApp" },
    { ico: "📧", t: "Business Email", v: "owners@matchticket.in — partnerships and enterprise" },
    { ico: "🌐", t: "Website Setup", v: "We handle domain, theme, and launch — within 48 hours." },
    { ico: "📍", t: "Our Office", v: "Buyp Technologiesnologies Private Limited, 158 P, Railway Road, Tenkasi, Tamil Nadu – 627 811" },
    { ico: "⏰", t: "Office Hours", v: "Monday to Saturday, 9 AM to 7 PM IST" },
  ];
  const FAQS = [
    { q: "How long does it take to list my turf?", a: "Most owners are live within 48 hours. Signup, add your details, pick a theme, and our team handles the domain setup and launch." },
    { q: "What if I have a problem with my booking?", a: "WhatsApp us at +91 91235 64005 — we respond in under 2 hours, 7 days a week, 8 AM to 10 PM. Refunds are processed automatically per policy." },
    { q: "Do you offer a free trial for turf owners?", a: "Yes. Starter plan is free forever. Pro and Elite plans include a 30-day free trial — no credit card required. You only pay if you see value." },
    { q: "Can I change my plan later?", a: "Absolutely. Upgrade or downgrade anytime. When you upgrade you are charged the difference. Downgrade retains Pro features until the billing period ends." },
  ];
  return (
    <div className="pg">
      <div className="pghero">
        <div className="pghero-grid" /><div className="pghero-glow" />
        <div className="pghero-inner">
          <div className="badge a1"><div className="bdot" />Get In Touch</div>
          <h1 className="a2" style={{ fontFamily: "var(--D)", fontSize: "clamp(46px,7vw,88px)", lineHeight: .9, letterSpacing: 2, marginBottom: 14 }}>WE ARE HERE<br /><span className="hl">TO HELP.</span></h1>
          <p className="a3" style={{ fontSize: 16, color: "var(--muted)", maxWidth: 460, lineHeight: 1.65 }}>Player with a booking question or turf owner ready to get started — we are one message away.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 64px" }}>
        <div style={{ display: "flex", gap: 0, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: 5, width: "fit-content", margin: "0 auto 56px" }}>
          {[["player", "⚽ I am a Player"], ["owner", "🏟️ I am a Turf Owner"]].map(([k, l]) => (
            <button key={k} onClick={() => setTab(k)} style={{ padding: "11px 30px", borderRadius: 10, border: "none", fontFamily: "var(--B)", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all .25s", background: tab === k ? "var(--lime)" : "transparent", color: tab === k ? "#000" : "var(--muted)" }}>
              {l}
            </button>
          ))}
        </div>
        <div className="split" style={{ gap: 56 }}>
          <div>
            <div className="tag">{tab === "player" ? "Player Support" : "Owner Onboarding"}</div>
            <h2 className="h2">{tab === "player" ? "PLAYER SUPPORT." : "OWNER ONBOARDING."}</h2>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, marginBottom: 30 }}>
              {tab === "player"
                ? "Need help finding a turf, managing a booking, or got a QR question? We respond in under 2 hours on WhatsApp."
                : "Ready to list your turf? Our owner success team walks you through everything — website, domain, theme, live in 48 hours."}
            </p>
            <div className="ibox">
              {(tab === "player" ? PLAYER_INFO : OWNER_INFO).map((r, i) => (
                <div key={i} className="irow">
                  <div className="iico">{r.ico}</div>
                  <div><div className="ititle">{r.t}</div><div className="ival">{r.v}</div></div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="bl" style={{ padding: "13px 26px" }} onClick={() => window.open(tab === "player" ? "https://wa.me/916381921416" : "https://wa.me/919123564005", "_blank")}>💬 WhatsApp Now</button>
              <button className="bo" style={{ padding: "13px 22px" }} onClick={() => window.location.href = tab === "player" ? "mailto:support@matchticket.in" : "mailto:owners@matchticket.in"}>📧 Send Email</button>
            </div>
          </div>
          <div>
            {sent ? (
              <div style={{ background: "var(--card2)", border: "1px solid var(--border)", borderRadius: 22, padding: 48, textAlign: "center", animation: "slideUp .4s ease both" }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
                <div style={{ fontFamily: "var(--D)", fontSize: 38, letterSpacing: 2, marginBottom: 10 }}>MESSAGE SENT!</div>
                <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.65 }}>Thanks {form.name}! We will get back to you within 2 hours on WhatsApp or email.</p>
              </div>
            ) : (
              <div style={{ background: "var(--card2)", border: "1px solid var(--border)", borderRadius: 22, padding: 36 }}>
                <div style={{ fontFamily: "var(--D)", fontSize: 30, letterSpacing: 1, marginBottom: 6 }}>SEND A MESSAGE</div>
                <div style={{ fontSize: 14, color: "var(--muted)", marginBottom: 28 }}>Fill in the form — we will respond within 2 hours.</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
                  <div><label className="flbl">Your Name</label><input className="fin" placeholder="Full name" value={form.name} onChange={e => setF("name", e.target.value)} /></div>
                  <div><label className="flbl">Mobile</label><input className="fin" placeholder="+91 91235 64005" value={form.phone} onChange={e => setF("phone", e.target.value)} /></div>
                </div>
                <div style={{ marginBottom: 14 }}><label className="flbl">Email Address</label><input className="fin" placeholder="you@example.com" value={form.email} onChange={e => setF("email", e.target.value)} /></div>
                <div style={{ marginBottom: 14 }}>
                  <label className="flbl">I Am A</label>
                  <select className="fsel" value={form.type} onChange={e => setF("type", e.target.value)}>
                    <option value="">Select your role...</option>
                    <option>Player — Booking Help</option>
                    <option>Player — General Question</option>
                    <option>Turf Owner — Want to List My Turf</option>
                    <option>Turf Owner — Website or Domain Help</option>
                    <option>Partnership or Business Enquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div style={{ marginBottom: 18 }}><label className="flbl">Your Message</label><textarea className="fin" placeholder="Tell us how we can help..." value={form.msg} onChange={e => setF("msg", e.target.value)} /></div>
                <button className="bl" style={{ width: "100%", padding: 15, fontSize: 16, borderRadius: 11, justifyContent: "center" }} onClick={send}>Send Message →</button>
              </div>
            )}
          </div>
        </div>
        <div style={{ marginTop: 72 }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div className="tag" style={{ display: "flex", justifyContent: "center" }}>Common Questions</div>
            <h2 className="h2" style={{ textAlign: "center" }}>QUICK <span className="hl">ANSWERS.</span></h2>
          </div>
          <div style={{ maxWidth: 740, margin: "0 auto" }}>
            {FAQS.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} open={faqOpen === i} onToggle={() => setFaqOpen(faqOpen === i ? null : i)} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
