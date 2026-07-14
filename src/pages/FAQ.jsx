/** FAQ — Frequently Asked Questions, 20 Q&A, accordion */
import React, { useState } from 'react';
import FaqItem from '../components/FaqItem';

const FAQS = [
  {
    q: "What is Turf Booking Software?",
    a: "Turf Booking Software is a digital solution that helps turf owners manage bookings, customer details, payments and available slots from a single dashboard. Match Ticket automates the entire booking process, reduces manual work and helps owners manage their turf business efficiently."
  },
  {
    q: "How can I manage turf bookings online?",
    a: "Match Ticket allows turf owners to manage online bookings, view available slots, accept reservations, track customer details and monitor all bookings from one platform. This saves time and eliminates manual booking registers."
  },
  {
    q: "How does Match Ticket help turf owners?",
    a: "Match Ticket helps turf owners automate daily operations including booking management, slot scheduling, payment tracking and customer management. It simplifies business operations and improves booking accuracy."
  },
  {
    q: "How do I avoid double bookings for my turf?",
    a: "Match Ticket updates slot availability in real time. Once a booking is confirmed, the selected time slot becomes unavailable, preventing double bookings and scheduling conflicts."
  },
  {
    q: "Can customers book turf slots online?",
    a: "Yes. Customers can search available turfs, choose a convenient time slot and complete their booking online through Match Ticket. The booking is instantly reflected in the owner's dashboard."
  },
  {
    q: "What is the best Turf Booking Software in India?",
    a: "Match Ticket is designed for cricket turfs, football grounds and sports facilities. It helps owners automate bookings, manage customers, collect payments and monitor business performance from one platform."
  },
  {
    q: "Can I manage multiple turfs with one account?",
    a: "Yes. Match Ticket allows owners to manage multiple turf locations from a single account, making it easy to monitor bookings, payments and schedules across all branches."
  },
  {
    q: "Can I manage turf bookings from my mobile?",
    a: "Yes. Match Ticket is accessible from mobile devices, allowing turf owners to monitor bookings, customers and payments anytime and from anywhere."
  },
  {
    q: "How do I manage available time slots?",
    a: "Match Ticket provides a slot management system where owners can create, edit, block or update available booking slots in real time."
  },
  {
    q: "Can I block unavailable slots?",
    a: "Yes. Owners can manually block maintenance periods, private events or unavailable time slots to prevent customer bookings during those hours."
  },
  {
    q: "Can customers make online payments?",
    a: "Yes. Match Ticket supports online payment collection, making it convenient for customers to confirm their bookings securely."
  },
  {
    q: "How can I track booking payments?",
    a: "Every booking and payment is recorded inside Match Ticket, allowing owners to monitor completed payments, pending amounts and booking history."
  },
  {
    q: "Can I manage customer details?",
    a: "Yes. Match Ticket stores customer information along with booking history, making repeat bookings and customer management much easier."
  },
  {
    q: "Is Match Ticket suitable for cricket and football turfs?",
    a: "Yes. Match Ticket is suitable for cricket turfs, football grounds, badminton courts, pickleball courts and other sports facilities that require online booking management."
  },
  {
    q: "Can I reduce manual work using Match Ticket?",
    a: "Absolutely. Match Ticket automates bookings, payments, slot management and customer records, significantly reducing manual work and paperwork."
  },
  {
    q: "How can I increase turf bookings?",
    a: "By offering online booking, easy slot availability, quick payments and a better customer experience through Match Ticket, turf owners can attract more customers and increase bookings."
  },
  {
    q: "Is Match Ticket suitable for small turf businesses?",
    a: "Yes. Whether you own a single turf or multiple sports venues, Match Ticket helps simplify operations and supports business growth."
  },
  {
    q: "How do I get started with Match Ticket?",
    a: "Getting started is simple. Register your turf, configure available slots, set pricing and begin accepting online bookings through Match Ticket."
  },
  {
    q: "Why should I choose Match Ticket?",
    a: "Match Ticket combines booking management, slot scheduling, payment tracking and customer management into one easy-to-use platform, helping turf owners save time and grow their business."
  },
  {
    q: "Does Match Ticket help manage my entire turf business?",
    a: "Yes. Match Ticket is more than a booking platform. It helps manage bookings, customers, payments, schedules and day-to-day operations, giving turf owners complete control over their business from a single dashboard."
  },
];

function FAQ({ navigate }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <main id="main-content" className="pg" role="main" aria-label="Match Ticket FAQ">

      {/* ── Hero ── */}
      <div className="pghero">
        <div className="pghero-grid"/><div className="pghero-glow"/>
        <div className="pghero-inner" style={{maxWidth:820}}>
          <div className="badge a1"><div className="bdot"/>Support</div>
          <h1 className="a2" style={{fontFamily:"var(--D)",fontSize:"clamp(44px,7vw,86px)",lineHeight:.9,letterSpacing:2,marginBottom:14}}>
            FREQUENTLY ASKED<br/><span className="hl">QUESTIONS.</span>
          </h1>
          <p className="a3" style={{fontSize:"clamp(14px,2vw,17px)",color:"var(--muted)",maxWidth:560,lineHeight:1.7,marginBottom:0}}>
            Everything you need to know about Match Ticket — turf booking, slot management, payments and more.
          </p>
        </div>
      </div>

      {/* ── FAQ Accordion ── */}
      <div style={{maxWidth:860,margin:"0 auto",padding:"clamp(40px,6vw,80px) clamp(16px,5vw,64px)"}}>

        {/* Stats strip */}
        <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:48}}>
          {[
            {n:"20",l:"Questions Answered"},
            {n:"500+",l:"Turfs Listed"},
            {n:"24/7",l:"Support Available"},
          ].map((s,i)=>(
            <div key={i} style={{flex:"1 1 140px",background:"var(--bg2)",border:"1px solid var(--border)",borderRadius:12,padding:"16px 20px",textAlign:"center"}}>
              <div style={{fontFamily:"var(--D)",fontSize:32,color:"var(--lime)",letterSpacing:2,lineHeight:1}}>{s.n}</div>
              <div style={{fontSize:11,color:"var(--muted)",marginTop:4,textTransform:"uppercase",letterSpacing:".08em"}}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Accordion list */}
        <div>
          {FAQS.map((item, i) => (
            <FaqItem
              key={i}
              q={`${i + 1}. ${item.q}`}
              a={item.a}
              open={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* CTA strip */}
        <div style={{marginTop:56,background:"var(--bg2)",border:"1px solid var(--border)",borderRadius:16,padding:"clamp(28px,4vw,44px)",textAlign:"center"}}>
          <div style={{fontSize:36,marginBottom:14}}>🏟️</div>
          <h2 style={{fontFamily:"var(--D)",fontSize:"clamp(26px,4vw,40px)",letterSpacing:2,marginBottom:10}}>
            STILL HAVE <span className="hl">QUESTIONS?</span>
          </h2>
          <p style={{fontSize:15,color:"var(--muted)",lineHeight:1.65,marginBottom:28,maxWidth:420,margin:"0 auto 28px"}}>
            Our team is ready to help you get started with Match Ticket. Reach out via WhatsApp or contact page.
          </p>
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
            <button className="bl" style={{padding:"14px 36px",fontSize:15,borderRadius:10}} onClick={()=>navigate("list-turf")}>
              🚀 List Your Turf
            </button>
            <button className="bg" style={{padding:"14px 36px",fontSize:15,borderRadius:10}} onClick={()=>navigate("contact")}>
              📞 Contact Us
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FAQ;
