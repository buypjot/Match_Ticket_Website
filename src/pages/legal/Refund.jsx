/** Refund Policy — no-refund policy + Option B payment collection service */
import React, { useState } from 'react';
import PolicyShell, { PolH, PolP, PolDiv, PolEff, PolUl, PolBox } from '../../components/PolicyShell';

function Refund({ navigate }) {
  return (
    <PolicyShell badge="Legal" title="REFUND POLICY." navigate={navigate}>
      <PolEff d="21 April 2026"/>
      <div style={{background:"var(--lime2)",border:"1px solid var(--lime3)",borderRadius:12,padding:"14px 20px",marginBottom:24,display:"flex",alignItems:"center",gap:10}}>
        <span style={{fontSize:20}}>📌</span>
        <div>
          <div style={{fontSize:13,fontWeight:700,color:"var(--lime)",marginBottom:3}}>Cancellation Policy Summary</div>
          <div style={{fontSize:13,color:"var(--muted)",lineHeight:1.6}}>Confirmed bookings are <strong style={{color:"var(--text)"}}>non-cancellable and non-refundable</strong>. In case of payment failure where booking is not confirmed, a full refund is issued within 5–7 working days after verification.</div>
        </div>
      </div>
      <PolBox warn>
        <div style={{display:"flex",gap:14,alignItems:"flex-start"}}>
          <span style={{fontSize:28,flexShrink:0}}>⚠️</span>
          <div>
            <div style={{fontSize:15,fontWeight:700,color:"var(--text)",marginBottom:6}}>Important Notice</div>
            <p style={{fontSize:14,color:"var(--muted)",lineHeight:1.7,margin:0}}>Please read this policy carefully before making any booking. By completing a payment, you acknowledge and agree to these terms in full.</p>
          </div>
        </div>
      </PolBox>
      <PolDiv/>
      <PolH t="1. No Refund Policy"/>
      <PolBox warn>
        <p style={{fontSize:15,fontWeight:700,color:"var(--text)",marginBottom:8}}>Strictly no refunds will be provided after a successful booking or payment has been made.</p>
        <p style={{fontSize:14,color:"var(--muted)",lineHeight:1.7,margin:0}}>All transactions are final. Once an amount is paid, it is non-returnable and non-refundable under any circumstances for completed or confirmed bookings.</p>
      </PolBox>
      <PolH t="2. Confirmed Bookings"/>
      <PolP t="Refunds are not available for any bookings that have been confirmed by the system. This includes cases where the user is unable to attend the scheduled session or wishes to cancel for personal reasons."/>
      <PolH t="3. Technical or Payment Failures"/>
      <PolP t="In the rare event of a technical glitch or payment failure where the amount is deducted but the booking is not confirmed, a refund may be processed after thorough verification by our support team."/>
      <PolUl items={[
        "Users must provide proof of payment and transaction details for investigation",
        "Disputes must be reported within 24 hours of the transaction",
        "Our support team will review the request and their decision will be final",
      ]}/>
      <PolH t="4. Support Team Verification"/>
      <PolP t="Any disputes regarding payments must be reported within 24 hours of the transaction. Our support team will review the request and their decision will be final."/>
      <PolH t="5. Match Ticket Payment Collection Service"/>
      <PolBox>
        <div style={{fontSize:13,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--lime)",marginBottom:12}}>For Turf Owners Without a Payment Portal</div>
        <p style={{fontSize:15,color:"var(--text)",lineHeight:1.7,marginBottom:14}}>For turf owners who do not have their own payment portal such as Razorpay, Match Ticket offers a Managed Payment Collection service.</p>
        <PolUl items={[
          "Match Ticket will collect booking payments from players on behalf of the turf owner.",
          "Collected amounts will be transferred to the turf owner on the next working business day.",
          "Transfers will NOT be made on Sundays or public holidays — processed on the next available working day.",
          "A settlement report will be shared with the turf owner for every transfer made.",
          "This service is available on Pro and Elite plans. Processing fees may apply.",
        ]}/>
        <div style={{background:"var(--bg3)",border:"1px solid var(--border)",borderRadius:10,padding:"14px 18px",marginTop:8}}>
          <div style={{fontSize:13,fontWeight:700,color:"var(--lime)",marginBottom:10}}>Transfer Schedule</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
            {[
              ["Monday to Saturday","Transferred next working day"],
              ["Sunday","No transfer — processed on Monday"],
              ["Public Holidays","No transfer — processed next working day"],
              ["Payment Failures","Investigated within 24 hours"],
            ].map(([k,v],i)=>(
              <div key={i} style={{background:"var(--card)",borderRadius:8,padding:"10px 14px"}}>
                <div style={{fontSize:12,fontWeight:700,color:"var(--text)",marginBottom:3}}>{k}</div>
                <div style={{fontSize:12,color:"var(--muted)"}}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </PolBox>
      <PolH t="6. How to Report a Payment Issue"/>
      <PolUl items={[
        "Contact our support team within 24 hours of the transaction",
        "Provide your booking ID, transaction ID, and proof of payment",
        "Our team will investigate and respond within 1 business day",
        "The final decision on any refund or transfer dispute rests with Match Ticket support",
      ]}/>
      <PolBox>
        <div style={{fontSize:14,fontWeight:700,color:"var(--text)",marginBottom:8}}>Report a Payment Issue</div>
        <div style={{fontSize:14,color:"var(--muted)",marginBottom:4}}>WhatsApp: +91 89402 61212</div>
        <div style={{fontSize:14,color:"var(--muted)",marginBottom:4}}>Email: contact@matchticket.in</div>
        <div style={{fontSize:13,color:"var(--muted2)"}}>Support Hours: Monday to Sunday, 8 AM to 10 PM IST
Buyp Technologies Private Limited | GST: 33AAJCB6933B1ZZ | CIN: U72900TN2021PTC141881</div>
      </PolBox>
    </PolicyShell>
  );
}

export default Refund;
