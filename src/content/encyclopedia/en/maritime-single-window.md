---
title: 'The maritime single window (MSW): from a FAL Convention requirement to implementation in port'
category: maritime-digitalisation
summary: A page of links to several systems is not enough; an MSW needs data governance and real exchange between agencies.
course: E01
atlas: '05'
order: 14
readingMinutes: 4
updated: '2026-10-25'
sources:
- title: IMO — Maritime Single Window
  url: https://www.imo.org/en/ourwork/facilitation/pages/maritimesinglewindow-default.aspx
- title: IMO — FAL Convention and 2022 amendments
  url: https://www.imo.org/en/about/conventions/pages/convention-on-facilitation-of-international-maritime-traffic-%28fal%29.aspx
- title: UNCTAD — Review of Maritime Transport 2025
  url: https://unctad.org/publication/review-maritime-transport-2025
checks:
- Separate the MSW, the PCS and the customs single window in practice
- Define data ownership and quality between agencies
- Decide how information is entered once and reused
- Measure the time taken and the number of repeat data entries
faq:
- q: Is it enough to launch a portal that links to the other systems?
  a: No. The main aim is structured exchange and fewer repeated requests for the same information between agencies.
---

## Where does the requirement come from?
Amendments to the **FAL** Convention have made the use of a **Maritime Single Window** mandatory from **1 January 2024** for the electronic exchange of the information required on the arrival, stay and departure of ships. The requirement concerns the formalities of the ship and the voyage and must be implemented by the relevant public authorities. Its main aims are to reduce repeated entry of information, increase coordination and create a traceable process.

## How the MSW differs from the PCS and the customs single window
The **MSW** focuses on information about the ship, crew, passengers and port formalities; the **trade or customs single window (TSW/CSW)** focuses on procedures for trade in goods; and the **port community system (PCS)** helps coordinate the commercial and logistics operations of port actors. These systems can be connected, but they are not conceptual substitutes for one another. A portal that sends the user to several other systems to enter the same information has not solved the main problem.

## Institutional architecture before software architecture
The first question is not which software to buy, but: which agency owns each data item? Which authority may view and correct it? Who resolves data conflicts? The IMO Compendium data model plays an important role in harmonising definitions and interoperability. Service level agreements and the division of responsibility between the port, customs, border control, health and other authorities must be prepared alongside the technical development.

## A suggested roadmap
First, map the current arrival and departure processes and the points where data is entered more than once. Next, define the minimum data set, the owner of each field, access levels and the exchange gateway. Then run a pilot with one user group, test security, measure clearance time and expand services step by step. The measure of success is not the number of electronic pages but **fewer repeated steps and a more predictable process**.

## Minimum responsibilities between agencies
| Layer | Organisational decision | Acceptance test |
| --- | --- | --- |
| Data intake | Which gateway receives voyage information? | The same data element is not entered twice |
| Data authority | Which agency confirms the accuracy or correction of each field? | Source and change history are recorded |
| Exchange | Which shared standard is used for data meaning and format? | Exchange tested with the relevant systems |
| Access and security | Which user sees which information, and why? | Access, authorisation and incident recovery are logged |
| Service monitoring | Who reports handling time and errors? | A monthly quality and performance dashboard |

Alongside the technical design, an **inter-agency steering committee** with the authority to decide on definitions and data conflicts is needed. Approval by one organisation's IT manager is not enough to resolve disputes over data ownership. Migration from legacy systems must also follow a service continuity plan, so that a facilitation requirement does not itself become a cause of disruption to port operations.
