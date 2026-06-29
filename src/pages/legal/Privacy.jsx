/** Privacy Policy — GDPR + DPDP Act 2023 + CERT-In 2022, 14 sections */
import React from 'react';
import PolicyShell, { PolH, PolP, PolDiv, PolEff, PolUl, PolBox } from '../../components/PolicyShell';

function Privacy({ navigate }) {
  return (
    <PolicyShell badge="Legal" title="PRIVACY POLICY." navigate={navigate}>
      <PolEff d="21 April 2026"/>
      <PolP t="Match Ticket operates mobile applications and services that connect users with turf owners and enable turf owners to manage their turf businesses, bookings, and schedules. This Privacy Policy explains how we collect, use, disclose, and protect your information when you use our apps."/>
      <PolDiv/>
      <PolH t="1. Information We Collect"/>
      <PolUl items={[
        "Personal Information: Name, phone number, email address.",
        "Account and Profile Data: Login credentials, profile details, preferences.",
        "Turf and Business Information (Partners): Turf name, location, address, pricing, amenities, images, availability, slots, and schedules.",
        "Booking and Transaction Data: Booking details (date, time, turf), customer details (for partners), payment-related information.",
        "Location Data: Approximate or precise location (if permission is granted) to find nearby turfs.",
        "Device and Usage Information: Device type, OS, app version, IP address, app usage logs and analytics.",
      ]}/>
      <PolH t="2. How We Use Your Information"/>
      <PolUl items={[
        "Create and manage your account",
        "Facilitate turf bookings and scheduling",
        "Enable partners to manage their turf business",
        "Provide notifications (bookings, updates, cancellations)",
        "Improve app functionality and user experience",
        "Provide customer support",
        "Detect and prevent fraud or misuse",
        "Comply with legal obligations",
      ]}/>
      <PolH t="3. Legal Basis for Processing (GDPR)"/>
      <PolP t="Where applicable, we rely on: Consent (when you allow us to collect data), Contractual necessity (to provide our services), Legal obligations (compliance with laws), and Legitimate interests (improving services and ensuring security)."/>
      <PolH t="4. Data Sharing and Disclosure"/>
      <PolP t="We do not sell your personal data. We may share your data:"/>
      <PolUl items={[
        "Between users and partners to enable bookings",
        "With trusted third-party service providers (hosting, analytics, notifications, payment gateways)",
        "When required by law or legal authorities",
        "To protect our rights, users, or prevent fraud",
      ]}/>
      <PolH t="5. Data Retention Policy"/>
      <PolP t="We retain your information only as long as necessary to provide services, maintain records, and comply with legal requirements. The following retention periods apply:"/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:16}}>
        {[
          ["User account data",          "Until account deletion + 90 days"],
          ["Booking records",            "3 years (GST Act requirement)"],
          ["Payment transaction logs",   "5 years (RBI + IT Act requirement)"],
          ["WhatsApp message logs",      "90 days"],
          ["Device & usage analytics",   "12 months rolling"],
          ["Grievance records",          "3 years (IT Rules 2021)"],
          ["CCTV / security logs",       "Not stored by Match Ticket"],
          ["Deleted account data",       "Purged within 90 days of deletion request"],
        ].map(([k,v],i)=>(
          <div key={i} style={{background:"var(--bg3)",borderRadius:8,padding:"10px 14px",border:"1px solid var(--border)"}}>
            <div style={{fontSize:11,color:"var(--muted)",marginBottom:3}}>{k}</div>
            <div style={{fontSize:12,fontWeight:700,color:"var(--text)"}}>{v}</div>
          </div>
        ))}
      </div>
      <PolP t="You can request deletion of your personal data at any time by emailing grievance@matchticket.in. Deletion requests are processed within 15 working days. Note that some data must be retained for legal compliance (GST, IT Act) even after deletion."/>
      <PolH t="6. Your Rights"/>
      <PolP t="Depending on your location, you may have the right to access your personal data, correct inaccurate information, request deletion, restrict processing, withdraw consent, or request data portability."/>
      <PolBox>
        <p style={{fontSize:15,color:"var(--muted)",lineHeight:1.7,margin:0}}>To exercise your rights, contact us at contact@matchticket.in</p>
      </PolBox>
      <PolH t="7. Data Security"/>
      <PolP t="We implement reasonable security measures such as secure servers and encryption, access controls, and regular system monitoring. However, no method of transmission over the internet is completely secure."/>
      <PolH t="8. Third-Party Services"/>
      <PolP t="We may use third-party services including cloud hosting providers, analytics tools, push notification services, and payment gateways. These services operate under their own privacy policies."/>
      <PolH t="9. Children's Privacy"/>
      <PolP t="Our platform is not intended for children under 13 years of age, and we do not knowingly collect personal data from children."/>
      <PolH t="10. International Data Transfers"/>
      <PolP t="Your information may be stored or processed outside your country. We ensure appropriate safeguards are implemented."/>
      <PolH t="11. DPDP Act 2023 — Indian Data Protection"/>
      <PolP t="Under the Digital Personal Data Protection Act 2023 (India), you have the following rights as a Data Principal:"/>
      <PolUl items={[
        "Right to access — request a summary of personal data we process about you",
        "Right to correction — request correction of inaccurate or incomplete data",
        "Right to erasure — request deletion of your personal data when no longer needed",
        "Right to grievance — file a complaint with our Grievance Officer within 15 days",
        "Right to nominate — nominate another person to exercise these rights on your behalf",
        "Right to withdraw consent — withdraw consent for data processing at any time (may affect service availability)",
      ]}/>
      <PolP t="To exercise any DPDP right, email: grievance@matchticket.in with subject: DPDP DATA REQUEST. We acknowledge within 24 hours and act within 15 days."/>

      <PolH t="12. CERT-In 2022 — Security Incident Reporting"/>
      <PolP t="In compliance with the CERT-In Directions 2022, Buyp Technologies Private Limited will report any cybersecurity incident involving user data to CERT-In within 6 hours of discovery. We will notify affected users as soon as it is safe and practicable to do so, and provide details of the breach and steps taken to mitigate harm."/>

      <PolH t="13. Changes to This Policy"/>
      <PolP t="We may update this Privacy Policy from time to time. Any changes will be posted with an updated effective date."/>
      <PolH t="14. Contact Us"/>
      <PolBox>
        <div style={{fontSize:15,fontWeight:700,color:"var(--text)",marginBottom:8}}>Match Ticket — Privacy Queries</div>
        <div style={{fontSize:14,color:"var(--muted)",marginBottom:4}}>Email: contact@matchticket.in</div>
        <div style={{fontSize:14,color:"var(--muted)"}}>Buyp Technologiesnologies Private Limited, 158 P, Railway Road, Tenkasi, Tamil Nadu – 627 811, India</div>
      </PolBox>
    </PolicyShell>
  );
}

export default Privacy;
