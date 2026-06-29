/** Terms & Conditions — 22 sections including Force Majeure, Severability, IT Act 2000, Arbitration */
import React, { useState } from 'react';
import PolicyShell, { PolH, PolP, PolDiv, PolEff, PolUl, PolBox } from '../../components/PolicyShell';

function Terms({ navigate }) {
  return (
    <PolicyShell badge="Legal" title="TERMS AND CONDITIONS." navigate={navigate}>
      <PolEff d="21 April 2026"/>
      <PolP t="Welcome to Match Ticket. These Terms and Conditions govern your use of our mobile applications and services, including both the User App and Partner App. By accessing or using our platform, you agree to be bound by these Terms."/>
      <PolDiv/>
      <PolH t="1. Definitions"/>
      <PolUl items={[
        "Match Ticket refers to our platform, including mobile apps and services",
        "User refers to individuals booking turfs",
        "Partner or Vendor refers to turf owners or managers listing turfs",
        "Services refers to booking, scheduling, and turf management features",
      ]}/>
      <PolH t="2. Eligibility"/>
      <PolP t="You must be at least 18 years old to use our platform. By using the app, you confirm that you have the legal capacity to enter into this agreement."/>
      <PolH t="3. Account Registration"/>
      <PolUl items={[
        "You must provide accurate and complete information",
        "You are responsible for maintaining account confidentiality",
        "You are responsible for all activities under your account",
      ]}/>
      <PolP t="We reserve the right to suspend or terminate accounts with false or misleading information."/>
      <PolH t="4. Platform Use"/>
      <PolBox>
        <div style={{fontSize:13,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--lime)",marginBottom:10}}>For Users</div>
        <PolUl items={["Browse and book turfs","View availability and pricing","Receive booking confirmations and updates"]}/>
        <div style={{fontSize:13,fontWeight:700,letterSpacing:".08em",textTransform:"uppercase",color:"var(--lime)",marginBottom:10,marginTop:14}}>For Partners</div>
        <PolUl items={["List and manage turfs","Set pricing, availability, and schedules","Accept and manage bookings including manual bookings"]}/>
      </PolBox>
      <PolH t="5. Booking and Payments"/>
      <PolUl items={[
        "All bookings are subject to availability",
        "Pricing is determined by the Partner",
        "Payments must be completed as per the app process",
      ]}/>
      <PolP t="We may not be responsible for disputes related to pricing set by Partners."/>
      <PolH t="6. Cancellations and Refunds"/>
      <PolUl items={[
        "Cancellation and refund policies may vary by Partner",
        "Users should review policies before booking",
        "We are not liable for disputes between Users and Partners regarding refunds",
      ]}/>
      <PolP t="Please refer to our full Refund Policy for complete details."/>
      <PolH t="7. Partner Responsibilities"/>
      <PolP t="Partners agree to:"/>
      <PolUl items={[
        "Provide accurate turf details and pricing",
        "Honor confirmed bookings",
        "Maintain proper service quality",
        "Avoid double bookings and fraudulent activities",
      ]}/>
      <PolP t="Failure to comply may result in suspension or removal from the platform."/>
      <PolH t="8. Prohibited Activities"/>
      <PolUl items={[
        "Use the app for illegal or unauthorized purposes",
        "Provide false information",
        "Attempt to hack, disrupt, or misuse the platform",
        "Interfere with other users or bookings",
      ]}/>
      <PolH t="9. Intellectual Property"/>
      <PolP t="All content on our platform — logos, design, text, software — is owned by Match Ticket or Buyp Technologiesnologies Private Limited or its licensors. You may not copy, modify, distribute, or use our content without permission."/>
      <PolH t="10. Limitation of Liability"/>
      <PolBox warn>
        <div style={{fontSize:14,fontWeight:700,color:"var(--text)",marginBottom:10}}>Our platform acts as a bridge connecting Users and Partners. We are not responsible for:</div>
        <PolUl items={["Quality of turf facilities","Injuries, damages, or losses during matches","Disputes between Users and Partners"]}/>
        <p style={{fontSize:14,color:"var(--muted)",margin:0}}>Use the platform at your own risk.</p>
      </PolBox>
      <PolH t="11. Termination"/>
      <PolP t="We reserve the right to suspend or terminate accounts, or restrict access to services if users or partners violate these Terms."/>
      <PolH t="12. Privacy"/>
      <PolP t="Your use of our platform is also governed by our Privacy Policy."/>
      <PolH t="13. Third-Party Services"/>
      <PolP t="Our platform may include third-party integrations (payments, notifications, analytics). We are not responsible for their services or policies."/>
      <PolH t="14. Changes to Terms"/>
      <PolP t="We may update these Terms at any time. Continued use of the app after changes means you accept the updated Terms."/>
      <PolH t="15. IT Act 2000 — Intermediary Status"/>
      <PolP t="Match Ticket operates as an intermediary under Section 2(1)(w) of the Information Technology Act 2000. As an intermediary, Buyp Technologies Private Limited is not responsible for information or content posted by turf owners or users on the platform, provided that Match Ticket:"/>
      <PolUl items={[
        "Does not initiate the transmission of third-party content",
        "Does not select the receiver of the transmission",
        "Does not select or modify the information contained in the transmission",
        "Takes down unlawful content expeditiously upon receiving actual knowledge or a court order",
      ]}/>
      <PolP t="This intermediary protection applies under Section 79 of the IT Act 2000. Match Ticket reserves the right to remove any content that violates these Terms, applicable law, or our policies."/>

      <PolH t="16. Governing Law and Dispute Resolution"/>
      <PolP t="These Terms shall be governed by the laws of India. Any dispute arising out of or in connection with these Terms shall first be attempted to be resolved through good-faith negotiation. If not resolved within 30 days, disputes shall be referred to arbitration under the Arbitration and Conciliation Act 1996, with the seat of arbitration in Tenkasi, Tamil Nadu, India. The arbitration shall be conducted in English by a sole arbitrator agreed upon by both parties."/>
      <PolP t="For disputes where arbitration is not applicable, the courts of Tenkasi, Tamil Nadu shall have exclusive jurisdiction."/>

      <PolH t="17. Force Majeure"/>
      <PolP t="Match Ticket shall not be liable for any delay or failure to perform its obligations under these Terms if such delay or failure is caused by circumstances beyond its reasonable control, including but not limited to: acts of God, natural disasters, floods, earthquakes, epidemics or pandemics, war, civil unrest, government actions, power failures, internet outages, strikes, or failures of third-party service providers (including payment gateways and cloud infrastructure providers)."/>
      <PolP t="In such events, Match Ticket will use reasonable efforts to notify affected users and restore services as quickly as possible. Turf bookings affected by force majeure events will be handled on a case-by-case basis in good faith."/>

      <PolH t="18. Severability"/>
      <PolP t="If any provision of these Terms is found by a court or arbitrator of competent jurisdiction to be invalid, illegal, or unenforceable, that provision shall be modified to the minimum extent necessary to make it enforceable, or if modification is not possible, it shall be severed from these Terms. The remaining provisions of these Terms shall continue in full force and effect and shall not be affected by any such invalidity or unenforceability."/>

      <PolH t="19. Entire Agreement"/>
      <PolP t="These Terms, together with the Privacy Policy, Refund Policy, Cookie Policy, Grievance Redressal Policy, and any other policies published on the Match Ticket platform, constitute the entire agreement between you and Buyp Technologies Private Limited with respect to your use of the platform. They supersede all prior agreements, representations, warranties, and understandings — whether written or oral — between you and Match Ticket relating to the subject matter hereof."/>

      <PolH t="20. Waiver"/>
      <PolP t="The failure of Match Ticket to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision. Any waiver of any provision of these Terms will be effective only if in writing and signed by a duly authorised representative of Buyp Technologies Private Limited."/>

      <PolH t="21. Grievance Redressal"/>
      <PolP t="For any complaints or concerns about these Terms or the platform, please contact our Grievance Officer as detailed at matchticket.in/grievance. We are committed to resolving all grievances within 15 working days as required by IT Rules 2021."/>

      <PolH t="22. Contact Us"/>
      <PolBox>
        <div style={{fontSize:15,fontWeight:700,color:"var(--text)",marginBottom:6}}>Match Ticket — Legal Queries</div>
        <div style={{fontSize:14,color:"var(--muted)"}}>Email: contact@matchticket.in</div>
      </PolBox>
    </PolicyShell>
  );
}

export default Terms;
