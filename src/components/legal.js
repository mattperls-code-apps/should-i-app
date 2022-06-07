/*
    src/components/legal.js
*/

import React from "react"
import { Pressable, Text, Linking, StyleSheet } from "react-native"
import { screen, colors } from "../constants"

const TermsAndConditions = () => {
    return (
        <Pressable>
            <Text style={styles.header}>Terms And Conditions</Text>
            <Text style={styles.normal}>
                <Text style={styles.subheader}>THE AGREEMENT: </Text>
                The use of the services on this App provided by DMP1LLC (hereinafter referred to as "App") are subject to the following Terms & Conditions, all parts and sub-parts of which are specifically incorporated by reference here.
                This Agreement shall govern the use of all pages on this App (hereinafter collectively referred to as "App") and any services provided by or on this App ("Services").
            </Text>
            <Text style={styles.subheader}>DEFINITIONS</Text>
            <Text style={styles.normal}>
                “Agreement” denotes to this Terms and Conditions and the Privacy Policy and other documents provided to you by the App.
            </Text>
            <Text style={styles.normal}>
                <Text style={styles.bold}>"We,"</Text> <Text style={styles.bold}>"us,"</Text> and <Text style={styles.bold}>"our"</Text> are references to SHOULD I.
            </Text>
            <Text style={styles.normal}>
                <Text style={styles.bold}>"User,"</Text> <Text style={styles.bold}>"you,"</Text> and <Text style={styles.bold}>"your" </Text>
                denotes the person who is accessing the App for taking or availing any service from us. User shall include the Company, partnership, sole trader, person, body corporate, or association taking services of this App.
            </Text>
            <Text style={styles.normal}>
                <Text style={styles.bold}>"App"</Text> shall mean and include <Text style={styles.bold}>Should I</Text> and any successor App of the Company or any of its affiliates.
            </Text>
            <Text style={styles.normal}>
                <Text style={styles.bold}>Parties</Text>: Collectively, the parties to this Agreement (We and You) will be referred to as Parties.
            </Text>
            <Text style={styles.subheader}>ASSENT & ACCEPTANCE</Text>
            <Text style={styles.normal}>
                PLEASE READ THESE TERMS OF USE, OUR PRIVACY POLICY, AND ALL APPLICABLE SUPPLEMENTAL TERMS (COLLECTIVELY, THE "TERMS") CAREFULLY, AS THEY CONTAIN TERMS AND CONDITIONS THAT IMPACT YOUR RIGHTS, OBLIGATIONS, AND REMEDIES IN CONNECTION WITH YOUR USE OF THE SERVICES AND CONTENT. FOR EXAMPLE, THE TERMS INCLUDE:
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>• YOUR OBLIGATION TO COMPLY WITH ALL APPLICABLE LAWS AND REGULATIONS.</Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>• LIMITATIONS OF OUR LIABILITY TO YOU; AND</Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>• A REQUIREMENT THAT YOU PURSUE CLAIMS OR SEEK RELIEF AGAINST US (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) ON AN INDIVIDUAL BASIS, RATHER THAN AS A PARTICIPANT IN ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING.</Text>
            <Text style={styles.normal}>
                YOUR ACCESS TO AND USE OF THE SERVICES IS CONDITIONED ON YOUR ACCEPTANCE OF AND COMPLIANCE WITH ALL APPLICABLE TERMS.
                If you do not agree to these Terms or our Privacy Policy, then please cease using the Services immediately.
                We reserve the right to change these Terms at any time (see “Changes to these Terms” below.)
                By accessing, browsing, and/or using the Services after updates to these Terms have been posted, you agree to be bound by the updated Terms.
                THESE TERMS AND OUR PRIVACY POLICY CONSTITUTE A BINDING AGREEMENT BETWEEN YOU AND DMP1LLC.
            </Text>
            <Text style={styles.subheader}>CODE OF CONDUCT</Text>
            <Text style={styles.normal}>
                It is against the rules of the app to use it in a way such that it encourages abusive, hateful, racist, bigoted, sexist, harassing, threatening, inflammatory, defamatory, knowingly false, vulgar, obscene, or pornographic ideas or actions.
                Your use of the app must not violate applicable laws, rules, and regulations.
            </Text>
            <Text style={styles.subheader}>LICENSE TO USE APP</Text>
            <Text style={styles.normal}>
                We may provide you with certain information because of your use of the App or Services.
                Such information may include but is not limited to documentation, data, or information developed by us and other materials which may assist in your use of the App or Services ("Our Materials").
                Subject to this Agreement, we grant you a non-exclusive, limited, non-transferable, and revocable license to use Our Materials solely in connection with your use of the App and Services.
                Our Materials may not be used for any other purpose, and this license terminates upon your cessation of use of the App or Services or at the termination of this Agreement.
            </Text>
            <Text style={styles.subheader}>GENERAL TERMS & CONDITIONS</Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                a) By submitting a question to The Company, you acknowledge that The Company is not responsible for any response or advice you receive or do not receive, and you further agree not to hold The Company liable for any loss, harm, injury, damage, or consequence of any kind resulting from your use of or reliance on the app.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                b) The company reserves the right to modify the Terms and Conditions of this app at any time.
            </Text>
            <Text style={styles.subheader}>INTELLECTUAL PROPERTY</Text>
            <Text style={styles.normal}>
                You agree that the App and all Services provided by us are the property of DMP1LLC, including all copyrights, trademarks, trade secrets, patents, and other intellectual property ("Our IP").
                You agree that we own all rights, title, and interest in and to the Our IP and that you will not use Our IP for any unlawful or infringing purpose.
                You agree not to reproduce or distribute Our IP in any way, including electronically or via registration of any new trademarks, trade names, service marks, or Uniform Resource Locators (URLs), without express written permission from us.
            </Text>
            <Text style={styles.subheader}>ACCEPTABLE USE</Text>
            <Text style={styles.normal}>
                You agree not to use the App or Services for any unlawful purpose, or any purpose prohibited under this clause.
                You agree not to use the App or Services in any way that could damage the App, Services, or general business of Should I.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • You further agree not to use the App or Services:
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • To harass, abuse, or threaten others or otherwise violate any person's legal rights.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • To violate any of our intellectual property rights or any third party.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • To upload or otherwise disseminate any computer viruses or other software that may damage the property of another.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • To perpetrate any fraud.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • To publish or distribute any obscene or defamatory material.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • To publish or distribute any material that incites violence, hate, or discrimination towards any group.
            </Text>
            <Text style={styles.subheader}>ASSUMPTION OF RISK</Text>
            <Text style={styles.normal}>
                The App and Services are provided for entertainment purposes only.
                You acknowledge and agree that any information provided on Our App is not intended to be legal advice, medical advice, financial advice, relationship advice, or any kind of advice at all, as this app is purely for entertainment purposes only, and no fiduciary relationship has been created between you and us.
                You further agree that your purchase of any of the products on the App is at your own risk.
                We do not assume responsibility or liability for any advice or other information given on the App at all, in any shape or form.
            </Text>
            <Text style={styles.subheader}>REVERSE ENGINEERING & SECURITY</Text>
            <Text style={styles.normal}>
                You agree not to undertake any of the following actions:
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                a) Reverse engineer or attempt to reverse engineer or disassemble any code or software from or on the App or Services.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                b) Violate the security of the App or Services through any unauthorized access, circumvention of encryption or other security tools, data mining, or interference to any host, user, or network.
            </Text>
            <Text style={styles.subheader}>INDEMNIFICATION</Text>
            <Text style={styles.normal}>
                You agree to defend and indemnify us and any of our affiliates (if applicable) and hold us harmless against any legal claims and demands, including reasonable attorney's fees, which may arise from or relate to your use or misuse of the App or Services, your breach of this Agreement, or your conduct or actions.
                You agree that we shall be able to select its legal counsel and may participate in its defense if we wish.
            </Text>
            <Text style={styles.subheader}>EXCLUSION OF LIABILITY</Text>
            <Text style={styles.normal}>
                You understand and agree that we (A) do not guarantee the accuracy, completeness, validity, or timeliness of information listed by us or any third parties, and (B) shall not be responsible for any materials posted by us or any third party.
                You shall use your judgment, caution, and common sense in evaluating any prospective methods or offers and any information provided by us or any third party.
            </Text>
            <Text style={styles.normal}>
                Further, we shall not be liable for direct, indirect consequential, or any other form of loss or damage that may be suffered by a user using the Should I App, including loss of data or information or any kind of financial or physical loss or damage.
            </Text>
            <Text style={styles.normal}>
                In no event shall DMP1LLC, nor its Owner, directors, employees, partners, agents, suppliers, or affiliates, be accountable for any indirect, incidental, special, eventful, or exemplary costs, including without limitation, loss of proceeds, figures, usage, goodwill, or other intangible losses, consequential from (i) your use or access of or failure to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content attained from the Service; and (iv) unlawful access, use or alteration of your transmissions or content, whether or not based on guarantee, agreement, domestic wrong (including carelessness) or any other lawful concept, whether or not we've been aware of the possibility of such damage, and even if a cure set forth herein is originated to have futile of its important purpose.
            </Text>
            <Text style={styles.subheader}>THIRD-PARTY LINKS & CONTENT</Text>
            <Text style={styles.normal}>
                We may occasionally post links to third-party apps or other services.
                You agree that we are not responsible for any loss or damage caused because of your use of any third-party services linked to or from Our App.
            </Text>
            <Text style={styles.subheader}>MODIFICATION & VARIATION</Text>
            <Text style={styles.normal}>
                We may, from time to time and at any time without notice to you, modify this Agreement.
                You agree that we have the right to modify this Agreement or revise anything contained herein.
                You further agree that all modifications to this Agreement are in full force and effect immediately upon posting on the App and that modifications or variations will replace any prior version of this Agreement unless prior versions are specifically referred to or incorporated into the latest modification or variation of this Agreement.
            </Text>
            <Text style={styles.subheader}>ENTIRE AGREEMENT</Text>
            <Text style={styles.normal}>
                This Agreement constitutes the entire understanding between the Parties concerning any use of this App.
                This Agreement supersedes and replaces all prior or contemporaneous agreements or understandings, written or oral, regarding the use of this App.
            </Text>
            <Text style={styles.subheader}>SERVICE INTERRUPTIONS</Text>
            <Text style={styles.normal}>
                We may need to interrupt your access to the App to perform maintenance or emergency services on a scheduled or unscheduled basis.
                You agree that your access to the App may be affected by unanticipated or unscheduled downtime for any reason but that we shall have no liability for any damage or loss caused because of such downtime.
            </Text>
            <Text style={styles.subheader}>TERM, TERMINATION & SUSPENSION</Text>
            <Text style={styles.normal}>
                We may terminate this Agreement with you at any time for any reason, with or without cause.
                We specifically reserve the right to terminate this Agreement if you violate any of the terms outlined herein, including, but not limited to, violating the intellectual property rights of us or a third party, failing to comply with applicable laws or other legal obligations, and/or publishing or distributing illegal material.
                If you have registered for an account with Us, you may also terminate this Agreement at any time by contacting us and requesting termination. At the termination of this Agreement, any provisions that would be expected to survive termination by their nature shall remain in full force and effect.
            </Text>
            <Text style={styles.subheader}>“AS IS” and “AS AVAILABLE” Disclaimer</Text>
            <Text style={styles.normal}>
                The Service is provided to You “AS IS” and “AS AVAILABLE” and with all faults and defects without warranty of any kind.
                To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory, or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of a course of dealing, course of performance, usage or trade practice.
                Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems, or services, operate without interruption, meet any performance or reliability standards or be error-free or that any errors or defects can or will be corrected.
            </Text>
            <Text style={styles.normal}>
                Without limiting the foregoing, neither the Company nor any of the Company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
            </Text>
            <Text style={styles.normal}>
                Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all the above exclusions and limitations may not apply to You. But in such a case, the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
            </Text>
            <Text style={styles.subheader}>NO WARRANTIES</Text>
            <Text style={styles.normal}>
                You agree that your use of the App and Services is at your sole and exclusive risk and that any Services provided by us are on an "As Is" basis.
                We hereby expressly disclaim any express or implied warranties of any kind, including but not limited to the implied warranty of fitness for a particular purpose and the implied warranty of merchantability.
                We make no warranties that the App or Services will meet your needs or that the App or Services will be uninterrupted, error-free, or secure.
                We also make no warranties as to the reliability or accuracy of any information on the App or obtained through the Services.
                You agree that any damage that may occur to you through your computer system or because of the loss of your data from your use of the App or Services is your sole responsibility and that we are not liable for any such damage or loss.
            </Text>
            <Text style={styles.subheader}>LIMITATION ON LIABILITY</Text>
            <Text style={styles.normal}>
                We are not liable for any damages that may occur to you because of your use of the App or Services, to the fullest extent permitted by law.
                This section applies to any claims by you, including, but not limited to, lost profits or revenues, consequential or punitive damages, negligence, strict liability, fraud, or torts of any kind.
            </Text>
            <Text style={styles.subheader}>GENERAL PROVISIONS:</Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                <Text style={styles.subheader}>1. JURISDICTION, VENUE & CHOICE OF LAW</Text>:
                The terms herein will be governed by and construed by the laws of United States without giving effect to any principles of conflicts of law.
                The Courts of United States shall have exclusive jurisdiction over any dispute arising from the use of the App.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                <Text style={styles.subheader}>2. ASSIGNMENT</Text>:
                This Agreement, or the rights granted hereunder, may not be assigned, sold, leased, or otherwise transferred in whole or part by you.
                Should this Agreement, or the rights granted hereunder, be assigned, sold, leased, or otherwise transferred by us, the rights and liabilities of <Text style={styles.bold}>Should I</Text> will bind and inure to any assignees, administrators, successors, and executors.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                <Text style={styles.subheader}>3. SEVERABILITY</Text>:
                If any part or sub-part of this Agreement is held invalid or unenforceable by a court of law or competent arbitrator, the remaining parts and sub-parts will be enforced to the maximum extent possible.
                In such a condition, the remainder of this Agreement shall continue in full force.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                <Text style={styles.subheader}>4. NO WAIVER</Text>:
                If we fail to enforce any provision of this Agreement, this shall not constitute a waiver of any future enforcement of that provision or any other provision.
                Waiver of any part or sub-part of this Agreement will not constitute a waiver of any other part or sub-part.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                <Text style={styles.subheader}>5. HEADINGS FOR CONVENIENCE ONLY</Text>:
                Headings of parts and sub-parts under this Agreement are for convenience and organization only.
                Headings shall not affect the meaning of any provisions of this Agreement.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                <Text style={styles.subheader}>6. NO AGENCY, PARTNERSHIP, OR JOINT VENTURE</Text>:
                No agency, partnership, or joint venture has been created between the Parties because of this Agreement.
                No Party has any authority to bind the other to third parties.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                <Text style={styles.subheader}>7. FORCE MAJEURE</Text>:
                We are not liable for any failure to perform due to causes beyond its reasonable control, including, but not limited to, acts of God, acts of civil authorities, acts of military authorities, riots, embargoes, acts of nature, and natural disasters, and other acts which may be due to unforeseen circumstances, i.e., COVID-19!
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                <Text style={styles.subheader}>8. ELECTRONIC COMMUNICATIONS PERMITTED</Text>:
                Electronic communications are permitted to both Parties under this Agreement, including e-mail.
                For any questions or concerns, you may contact us via the "Contact Us" on the settings page or you can email us directly at <Text style={{ textDecorationLine: "underline" }} onPress={() => {
                    Linking.openURL("mailto:shouldi.app.help@gmail.com")
                }}>shouldi.app.help@gmail.com</Text>.
            </Text>
            <Text style={styles.normal}>This document was last updated on June 7, 2022.</Text>
        </Pressable>
    )
}

const PrivacyPolicy = () => {
    return (
        <Pressable>
            <Text style={styles.header}>Privacy Policy</Text>
            <Text style={styles.normal}>
                This Privacy Policy reflects the data we store, how we store it, and your rights to access that data through this app.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • We may review, update, and amend these policies from time to time to remain consistent with out business needs and technology.
                Your continued use of the service makes up your acceptance of any changes to this Privacy Policy.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • This Privacy Policy <Text style={styles.bold}>(“Privacy Policy”)</Text> describes how <Text style={styles.bold}>DMP1LLC</Text>.
                Will gather, use, and maintain your Personal Information on the app <Text style={styles.bold}>"Should I"</Text>.
                It will also explain your legal rights with respect to that information.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • By using the App or services, you confirm that you have read and understood this Privacy Policy and our Terms (together referred to herein as the “<Text style={styles.bold}>Agreement</Text>”).
                The Agreement governs the use of Should I.
                We will collect, use, and maintain information consistent with the Agreement.
            </Text>
            <Text style={styles.subheader}>What data do we collect from the people who visit our App?</Text>
            <Text style={styles.normal}>
                We collect only the data directly provided by your use of the app.
                Specifically, this data is our record of your agreement to the last terms and conditions you agreed to, the questions, input, and results you choose to save to the in-app history as wel as the user preferences you can optionally provide.
                No sensitive information (name, contact information, device name, IP, address, browser, location, language) is collected by using this app.
            </Text>
            <Text style={styles.subheader}>Information that is shared by the user</Text>
            <Text style={styles.normal}>
                Please keep in mind that whenever you voluntarily share information through tha app, that information can be viewed and possibly used by others.
                We therefore advise visitors not to disclose contact information, including phone number, email address, sstreet address or instant messenger address that they do not wish to share.
                We are not responsible for Personally Identifiable Information (PII)  you choose to share.
            </Text>
            <Text style={styles.subheader}>California Consumer Rights</Text>
            <Text style={styles.normal}>
                The California Consumer Privacy Act provides specific rights to those who live in California.
                If you are a California-based consumer, as that term is defined under California law, this section shall apply in addition to all other applicable rights and information contained in this Statement.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • You have the right to request that we provide you with information about what personal information we collect, use, and disclose.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • You have the right to request that we delete the personal information we, or our service providers, store about you. 
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • We will not discriminate or retaliate against you if you elect to exercise any rights under this section of our Privacy Statement.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • You may request that we not sell your personal information. As noted above, we do not sell your personal information, and we only share your personal information with third parties, as described in this Statement.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • You have the right to designate an authorized agent to make a request on your behalf.
                Please see the Identity Verification Requirement below for information on our process for verifying that we have received a legally valid request.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • If you are a California consumer and have additional questions based on this section of our Privacy Statement or wish to submit a request to request that we not share your information with third parties, please contact us by email or through the contact us page.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • See more at <Text style={{ textDecorationLine: "underline" }} onPress={() => {
                    Linking.openURL("https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/")
                }}>https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/</Text>
            </Text>
            <Text style={styles.subheader}>According to caloppa, we agree to the following:</Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • Users can visit our App anonymously.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • You'll be notified of any ONLINE PRIVACY POLICY changes when there is an update.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • Users will be notified of any changes when updates to the app are released
            </Text>
            <Text style={styles.subheader}>Coppa (children online privacy protection action)</Text>
            <Text style={styles.normal}>
                With regards to the assortment of private information from children under age 13 years, the Children's Online Privacy Protection Act (COPPA) puts parents in charge.
                The Federal Trade Commission, United States' consumer safety firm, enforces the COPPA Guideline, which spells out what providers of websites and online services should do to safeguard children's privatizes and security online.
                For more details, visit <Text style={{ textDecorationLine: "underline" }} onPress={() => {
                    Linking.openURL("https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule")
                }}>https://www.ftc.gov/enforcement/rules/rulemaking-regulatory-reform-proceedings/childrens-online-privacy-protection-rule</Text>
            </Text>
            <Text style={styles.subheader}>GDPR-Customer data processing appendix:</Text>
            <Text style={styles.normal}>
                <Text style={styles.bold}>"Customer Data"</Text> means any personal data that DMP1LLC processes on Customer's behalf via the Services, as more particularly described in this DPA.
            </Text>
            <Text style={styles.normal}>
                <Text style={styles.bold}>"Data Protection Laws"</Text> means all data protection laws and regulations applicable to a party's processing of Customer Data under the Agreement, including, where applicable, EU Data Protection Law and Non-EU Data Protection Laws.
            </Text>
            <Text style={styles.subheader}>GDPR-EU data protection law</Text>
            <Text style={styles.normal}>
                <Text style={styles.bold}>“EU Data Protection Law”</Text> means all data protection laws and regulations applicable to Europe, including (i) Regulation 2016/679 of the European Parliament and the Council on the protection of natural persons concerning the processing of personal data and on the free movement of such data (<Text style={styles.bold}>General Data Protection Regulation</Text>) (“<Text style={styles.bold}>GDPR</Text>“);
                (ii) Directive <Text style={styles.bold}>2002/58/EC</Text> concerning the processing of personal data and the protection of privacy in the electronic communications sector; (iii) applicable national implementations of (i) and (ii); and (iv) in respect of the <Text style={styles.bold}>United Kingdom</Text> (“<Text style={styles.bold}>UK</Text>“) any applicable national legislation that replaces or converts in domestic law the GDPR or any other law relating to data and privacy as a consequence of the UK leaving the European Union.
            </Text>
            <Text style={styles.normal}>
                “<Text style={styles.bold}>Europe</Text>” means, for this DPA, the European Union, the European Economic Area and/or their member states, Switzerland, and the United Kingdom.
            </Text>
            <Text style={styles.normal}>
                “<Text style={styles.bold}>Non-EU Data Protection Laws</Text>” means the California Consumer Privacy Act (“<Text style={styles.bold}>CCPA</Text>”);
                the Canadian Personal Information Protection and Electronic Documents Act (“PIPEDA”);
                and the Brazilian General Data Protection Law (“<Text style={styles.bold}>LGPD</Text>“), Federal Law no. 13,709/2018.
            </Text>
            <Text style={styles.normal}>
                “<Text style={styles.bold}>SCCs</Text>” means the standard contractual clauses for processors as approved by the European Commission or Swiss Federal Data Protection Authority (as applicable), which shall apply only to transfers of Customer Data from the European Union.
            </Text>
            <Text style={styles.normal}>
                “<Text style={styles.bold}>Services Data</Text>” means any data relating to the Customer's use, support, and/or operation of the Services, including information relating to volumes, activity logs, frequencies, bounce rates, or other information regarding the communications Customer generates and sends using the Services.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • <Text style={styles.bold}>Parties' roles</Text>:
                If EU Data Protection Law or the LGPD applies to either party's processing of Customer Data, the parties acknowledge and agree that concerning the processing of Customer Data, Customer is the controller and is a processor acting on behalf of Customer, as further described in Annex A (Details of Data Processing) of this DPA.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • <Text style={styles.bold}>Purpose limitation</Text>:
                DMP1LLC shall process Customer Data only following Customer's documented lawful instructions as outlined in this DPA, as necessary to comply with applicable law, or as otherwise agreed in writing ("Permitted Purposes").
                The parties agree that the agreement sets out the Customer's complete and final instructions to DMP1LLC concerning the processing of Customer Data.
                Processing outside the scope of these instructions (if any) shall require a prior written agreement between the parties.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • <Text style={styles.bold}>Prohibited data</Text>:
                Customer will not provide (or cause to be provided) any Sensitive Data to DMP1LLC for processing under the Agreement, and DMP1LLC will have no liability whatsoever for Sensitive Data, whether in connection with a Security Incident or otherwise.
                To avoid doubt, this DPA will not apply to Sensitive Data.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • <Text style={styles.bold}>Customer compliance</Text>:
                Customer represents and warrants that (i) it has complied, and will continue to comply, with all applicable laws, including Data Protection Laws, in respect of its processing of Customer Data and any processing instructions it issues to DMP1LLC;
                and (ii) it has provided, and will continue to provide, all notice and has obtained, and will continue to obtain, all consents and rights necessary under Data Protection Laws for DMP1LLC to process Customer Data for the purposes described in the agreement.
                Customer shall have sole responsibility for the accuracy, quality, and legality of Customer Data and how Customer acquired Customer data.
                Without prejudice to the generality of the preceding, Customer agrees that it shall be responsible for complying with all laws (including Data Protection Laws) applicable to any emails or other content created, sent, or managed through the service, including those relating to obtaining consents (where required) to send emails, the content of the emails and its email deployment practices.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • <Text style={styles.bold}>The lawfulness of Customer's instructions</Text>:
                Customer will ensure that United Kingdom processing of the Customer Data by Customer's instructions will not cause DMP1LLC to violate any applicable law, regulation, or rule, including, without limitation, Data Protection Laws.
                DMP1LLC shall promptly notify Customer in writing unless prohibited from doing so under EU Data Protection Laws if it becomes aware or believes that any data processing instruction from Customer violates the GDPR or any UK implementation of the GDPR.
            </Text>
            <Text style={styles.subheader}>Your Legal Rights</Text>
            <Text style={styles.normal}>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data.
            </Text>
            <Text style={[styles.normal, styles.bold]}>
                You may have the following rights: -
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                a) <Text style={styles.bold}>Request access</Text> to your personal data (commonly known as a "data subject access request").
                This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                b) <Text style={styles.bold}>Request correction</Text> of the personal data that we hold about you.
                This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                c) <Text style={styles.bold}>Request deletion</Text> of your personal data.
                This enables you to ask us to delete or remove personal data where there is no good reason for us to continue to process it.
                You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law.
                Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons, which will be notified to you, if applicable, at the time of your request.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                d) <Text style={styles.bold}>Object to processing</Text> of your personal data where we are relying on a legitimate interest (or those of a third party), and there is something about your situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms.
                You also have the right to object to where we are processing your personal data for direct marketing purposes.
                In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                e) <Text style={styles.bold}>Request restriction</Text> of processing of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios:
            </Text>
            <Text style={[styles.normal, { marginLeft: 20 * screen.width }]}>
                a) If you want us to establish the data's accuracy.
            </Text>
            <Text style={[styles.normal, { marginLeft: 20 * screen.width }]}>
                b) Where our use of the data is unlawful, but you do not want us to erase it.
            </Text>
            <Text style={[styles.normal, { marginLeft: 20 * screen.width }]}>
                c) Where you need us to hold the data even if we no longer require it as you need it to establish, exercise, or defend legal claims.
            </Text>
            <Text style={[styles.normal, { marginLeft: 20 * screen.width }]}>
                d) You have objected to our use of your data, but we need to verify whether we have overriding legitimate grounds to use it.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                f) <Text style={styles.bold}>Request the transfer</Text> of your personal data to you or to a third party.
                We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format.
                Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                g) <Text style={styles.bold}>Withdraw consent</Text>
                at any time where we are relying on consent to process your personal data.
                However, this will not affect the lawfulness of any processing carried out before you withdraw your consent.
                If you withdraw your consent, we may not be able to provide certain services to you.
            </Text>
            <Text style={styles.subheader}>International Data Transfer</Text>
            <Text style={styles.normal}>
                This app allows no transfer of data internationally.
            </Text>
            <Text style={styles.subheader}>Limitation of liability</Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so some of the above limitations may not apply to you.
            </Text>
            <Text style={[styles.normal, { marginLeft: 10 * screen.width }]}>
                • We make no legal representation that the App or products are appropriate or available for use in locations outside United States.
                You may access the App from outside United States at your own risk and initiative and must bear all responsibility for compliance with any applicable foreign laws.
            </Text>
            <Text style={styles.subheader}>Governing Law and Jurisdiction</Text>
            <Text style={styles.normal}>
                This App originates from the United States.
                The laws of the United States, without regard to its conflict of law, governs these terms to the contrary.
                You hereby agree that all disputes arising out of or in connection with these terms shall be submitted to the exclusive jurisdiction of the United States.
                By using this App, you consent to the jurisdiction and venue of such courts in connection with any action, suit, proceeding, or claim arising under or by reason of these terms.
                You hereby waive any right to trial by jury arising out of these terms.
            </Text>
            <Text style={styles.subheader}>Changes to this privacy notice</Text>
            <Text style={styles.normal}>
                We reserve the right to alter this privacy notice at any time.
                Such alterations will be posted on our App.
                You can also obtain an up-to-date copy of our privacy notice by contacting us.
            </Text>
            <Text style={styles.subheader}>Contacting us</Text>
            <Text style={styles.normal}>
                If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may do so via the "Contact Us" on the settings page or you can email us directly at <Text style={{ textDecorationLine: "underline" }} onPress={() => {
                    Linking.openURL("mailto:shouldi.app.help@gmail.com")
                }}>shouldi.app.help@gmail.com</Text>.
            </Text>
            <Text style={styles.normal}>
                This document was last updated on June 7, 2022.
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    header: {
        fontFamily: "Roboto",
        fontWeight: "900",
        fontSize: 7 * screen.width,
        color: colors.extraLightPurple,
        marginVertical: 6 * screen.width,
        textAlign: "center"
    },
    subheader: {
        fontFamily: "Roboto",
        fontWeight: "900",
        fontSize: 4 * screen.width,
        color: colors.extraLightPurple,
    },
    bold: {
        fontFamily: "Roboto",
        fontWeight: "700",
        fontSize: 3.75 * screen.width,
        color: colors.extraLightPurple,
    },
    normal: {
        fontFamily: "Roboto",
        fontWeight: "300",
        fontSize: 3.75 * screen.width,
        color: colors.extraLightPurple,
        marginBottom: 4 * screen.width
    }
})

export { TermsAndConditions, PrivacyPolicy }