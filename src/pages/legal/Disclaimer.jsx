/** Disclaimer — intermediary (IT Act Section 79), injury liability, no-warranty, limitation of liability */
import React from 'react';
import PolicyShell, { PolH, PolP, PolDiv, PolEff, PolUl, PolBox } from '../../components/PolicyShell';

function Disclaimer({ navigate }) {
  return (
    <PolicyShell badge="Legal" title={<>DISCLAIMER &<br/><span className="hl">LIABILITY.</span></>} navigate={navigate}>
      <PolEff d="21 April 2026"/>
      <PolP t="Please read this Disclaimer carefully before using Match Ticket. By accessing or using the platform, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer."/>
      <PolDiv/>

      <PolH t="1. Platform Role — Intermediary Only"/>
      <PolP t="Match Ticket (operated by Buyp Technologies Private Limited) is an online intermediary platform that connects players with turf owners. We do not own, operate, manage, or control any sports turf, ground, or sports facility listed on the platform."/>
      <PolP t="Match Ticket acts solely as a technology platform that facilitates the discovery, booking, and payment process between players and turf owners. All sports facilities are independently owned and operated by third-party turf owners (Partners/Vendors) who are solely responsible for their facilities."/>

      <PolH t="2. No Liability for Physical Injury or Damage"/>
      <PolBox warn>
        <div style={{fontSize:14,fontWeight:700,color:"var(--text)",marginBottom:8}}>Important Safety Notice</div>
        <PolP t="Match Ticket is NOT liable for any personal injury, death, property damage, or loss of any kind arising from the use of any turf or sports facility booked through our platform. This includes but is not limited to:"/>
      </PolBox>
      <PolUl items={[
        "Sports injuries, accidents, or fatalities occurring at any listed turf",
        "Damage to personal belongings, equipment, or vehicles at the turf premises",
        "Injury caused by the condition, maintenance, or safety of the turf surface or equipment",
        "Incidents involving other players, spectators, or third parties at the venue",
        "Health risks or medical emergencies arising during play",
      ]}/>
      <PolP t="Users participate in sports activities entirely at their own risk. Match Ticket strongly recommends that users verify the safety standards of any turf before booking, wear appropriate protective gear, and obtain personal sports/accident insurance where applicable."/>

      <PolH t="3. Turf Owner Responsibility"/>
      <PolP t="Each turf owner listed on Match Ticket is solely responsible for:"/>
      <PolUl items={[
        "The safety, maintenance, and condition of their turf and facilities",
        "Compliance with all local laws, safety regulations, and municipal requirements",
        "Holding all required licences and permits for operating a sports facility",
        "Adequate insurance coverage for their facility and players",
        "The accuracy of information about their turf listed on the platform",
        "Any injury, accident, or damage occurring on their premises",
      ]}/>

      <PolH t="4. Accuracy of Information"/>
      <PolP t="While Match Ticket makes reasonable efforts to ensure that all information on the platform — including turf details, pricing, availability, and amenities — is accurate and up to date, we do not warrant or represent that such information is complete, current, or error-free."/>
      <PolP t="Turf owners are responsible for keeping their listings accurate. Match Ticket is not liable for any loss or inconvenience caused by inaccurate or outdated information provided by turf owners."/>

      <PolH t="5. Payment and Transaction Disputes"/>
      <PolP t="Match Ticket provides payment facilitation services but is not a bank or financial institution. We are not liable for any payment failures, bank errors, gateway downtimes, or delays caused by third-party payment processors. All payment disputes should be reported within 24 hours as detailed in our Refund Policy."/>

      <PolH t="6. Third-Party Links and Services"/>
      <PolP t="The Match Ticket platform may contain links to third-party websites or integrate third-party services (such as payment gateways, mapping services, or communication tools). Match Ticket has no control over such third-party services and is not responsible for their content, privacy practices, or reliability."/>

      <PolH t="7. No Warranty"/>
      <PolP t="The Match Ticket platform is provided on an AS IS and AS AVAILABLE basis without any warranty of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. Match Ticket does not warrant that the platform will be uninterrupted, error-free, or free of viruses or other harmful components."/>

      <PolH t="8. Limitation of Liability"/>
      <PolP t="To the fullest extent permitted by applicable law, Buyp Technologies Private Limited, its directors, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including but not limited to loss of revenue, loss of data, loss of goodwill, or personal injury — arising from:"/>
      <PolUl items={[
        "Your use of or inability to use the Match Ticket platform",
        "Any booking made or attempted through the platform",
        "Any interaction with turf owners, players, or other users",
        "Any unauthorised access to or alteration of your data",
        "Any force majeure event as described in our Terms and Conditions",
      ]}/>
      <PolP t="In no event shall our total liability to you exceed the amount you paid to Match Ticket (if any) in the 3 months preceding the event giving rise to the claim."/>

      <PolH t="9. Governing Law"/>
      <PolP t="This Disclaimer is governed by the laws of India. Any disputes arising from this Disclaimer shall be subject to the jurisdiction of courts in Tenkasi, Tamil Nadu, or resolved through arbitration as specified in our Terms and Conditions."/>

      <PolH t="10. Updates to This Disclaimer"/>
      <PolP t="Match Ticket may update this Disclaimer from time to time. The updated version will be posted with a revised effective date. Continued use of the platform after any update constitutes acceptance of the revised Disclaimer."/>

      <PolBox>
        <div style={{fontSize:14,fontWeight:700,color:"var(--text)",marginBottom:6}}>Buyp Technologies Private Limited</div>
        <div style={{fontSize:13,color:"var(--muted)",marginBottom:3}}>158 P, Railway Road, Tenkasi, Tamil Nadu – 627 811</div>
        <div style={{fontSize:13,color:"var(--muted)",marginBottom:3}}>CIN: U72900TN2021PTC141881  |  GST: 33AAJCB6933B1ZZ</div>
        <div style={{fontSize:13,color:"var(--muted)"}}>contact@matchticket.in  |  +91 89402 61212</div>
      </PolBox>

      <div style={{marginTop:40,display:"flex",gap:12,flexWrap:"wrap"}}>
        <button className="bo sm" onClick={()=>navigate("terms")}>Terms and Conditions</button>
        <button className="bo sm" onClick={()=>navigate("refund")}>Refund Policy</button>
        <button className="bo sm" onClick={()=>navigate("grievance")}>Grievance Policy</button>
        <button className="bo sm" onClick={()=>navigate("contact")}>Contact Us</button>
      </div>
    </PolicyShell>
  );
}

export default Disclaimer;
