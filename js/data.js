// Sample ISO/IEC 42001:2023 AI management system gap-assessment dataset (fictional demo data)
const SAMPLE_ASSESSMENT = [
  {
    "ref": "4.1",
    "category": "Mandatory Clauses",
    "section": "4 - Context of the organization",
    "requirement": "Has the organisation addressed the AIMS requirement for understanding the organisation and its context, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "4.2",
    "category": "Mandatory Clauses",
    "section": "4 - Context of the organization",
    "requirement": "Has the organisation addressed the AIMS requirement for understanding the needs and expectations of interested parties, with documented evidence available for review?",
    "compliance": "Partially Compliant",
    "owner": "A. Rahman",
    "priority": "High",
    "notes": "Understanding the needs and expectations of interested parties is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "4.3",
    "category": "Mandatory Clauses",
    "section": "4 - Context of the organization",
    "requirement": "Has the organisation addressed the AIMS requirement for determining the scope of the AI management system, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "S. Chowdhury",
    "priority": "Medium",
    "notes": "Gap identified during review \u2014 determining the scope of the AI management system not yet formally established. Remediation plan required."
  },
  {
    "ref": "4.4",
    "category": "Mandatory Clauses",
    "section": "4 - Context of the organization",
    "requirement": "Has the organisation addressed the AIMS requirement for AI management system, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "A. Rahman",
    "priority": "Low",
    "notes": "Gap identified during review \u2014 AI management system not yet formally established. Remediation plan required."
  },
  {
    "ref": "5.1",
    "category": "Mandatory Clauses",
    "section": "5 - Leadership",
    "requirement": "Has the organisation addressed the AIMS requirement for leadership and commitment, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "5.2",
    "category": "Mandatory Clauses",
    "section": "5 - Leadership",
    "requirement": "Has the organisation addressed the AIMS requirement for AI policy, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "5.3",
    "category": "Mandatory Clauses",
    "section": "5 - Leadership",
    "requirement": "Has the organisation addressed the AIMS requirement for roles, responsibilities and authorities, with documented evidence available for review?",
    "compliance": "Partially Compliant",
    "owner": "S. Chowdhury",
    "priority": "High",
    "notes": "Roles, responsibilities and authorities is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "6.1.1",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "requirement": "Has the organisation addressed the AIMS requirement for actions to address risks and opportunities, general, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "6.1.2",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "requirement": "Has the organisation addressed the AIMS requirement for AI risk assessment process, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "6.1.3",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "requirement": "Has the organisation addressed the AIMS requirement for AI risk treatment process, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "6.1.4",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "requirement": "Has the organisation addressed the AIMS requirement for AI system impact assessment process, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "N. Islam",
    "priority": "High",
    "notes": "Gap identified during review \u2014 AI system impact assessment process not yet formally established. Remediation plan required."
  },
  {
    "ref": "6.2",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "requirement": "Has the organisation addressed the AIMS requirement for AI objectives and planning to achieve them, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "6.3",
    "category": "Mandatory Clauses",
    "section": "6 - Planning",
    "requirement": "Has the organisation addressed the AIMS requirement for planning of changes to the AIMS, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "M. Karim",
    "priority": "Medium",
    "notes": "Gap identified during review \u2014 planning of changes to the AIMS not yet formally established. Remediation plan required."
  },
  {
    "ref": "7.1",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "requirement": "Has the organisation addressed the AIMS requirement for resources, with documented evidence available for review?",
    "compliance": "Partially Compliant",
    "owner": "M. Karim",
    "priority": "Low",
    "notes": "Resources is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "7.2",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "requirement": "Has the organisation addressed the AIMS requirement for competence, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "AI Governance Team",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "7.3",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "requirement": "Has the organisation addressed the AIMS requirement for awareness, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "M. Karim",
    "priority": "High",
    "notes": "Gap identified during review \u2014 awareness not yet formally established. Remediation plan required."
  },
  {
    "ref": "7.4",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "requirement": "Has the organisation addressed the AIMS requirement for communication, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "T. Ahmed",
    "priority": "Medium",
    "notes": "Gap identified during review \u2014 communication not yet formally established. Remediation plan required."
  },
  {
    "ref": "7.5.1",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "requirement": "Has the organisation addressed the AIMS requirement for documented information, general, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "7.5.2",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "requirement": "Has the organisation addressed the AIMS requirement for creating and updating documented information, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "A. Rahman",
    "priority": "Low",
    "notes": "Gap identified during review \u2014 creating and updating documented information not yet formally established. Remediation plan required."
  },
  {
    "ref": "7.5.3",
    "category": "Mandatory Clauses",
    "section": "7 - Support",
    "requirement": "Has the organisation addressed the AIMS requirement for control of documented information, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "8.1",
    "category": "Mandatory Clauses",
    "section": "8 - Operation",
    "requirement": "Has the organisation addressed the AIMS requirement for operational planning and control, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "N. Islam",
    "priority": "Medium",
    "notes": "Gap identified during review \u2014 operational planning and control not yet formally established. Remediation plan required."
  },
  {
    "ref": "8.2",
    "category": "Mandatory Clauses",
    "section": "8 - Operation",
    "requirement": "Has the organisation addressed the AIMS requirement for AI risk assessment (operational), with documented evidence available for review?",
    "compliance": "Partially Compliant",
    "owner": "R. Hasan",
    "priority": "Medium",
    "notes": "AI risk assessment (operational) is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "8.3",
    "category": "Mandatory Clauses",
    "section": "8 - Operation",
    "requirement": "Has the organisation addressed the AIMS requirement for AI risk treatment (operational), with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "8.4",
    "category": "Mandatory Clauses",
    "section": "8 - Operation",
    "requirement": "Has the organisation addressed the AIMS requirement for AI system impact assessment (performed), with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "9.1",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "requirement": "Has the organisation addressed the AIMS requirement for monitoring, measurement, analysis and evaluation, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "AI Governance Team",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "9.2.1",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "requirement": "Has the organisation addressed the AIMS requirement for internal audit, general, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "R. Hasan",
    "priority": "Medium",
    "notes": "Gap identified during review \u2014 internal audit, general not yet formally established. Remediation plan required."
  },
  {
    "ref": "9.2.2",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "requirement": "Has the organisation addressed the AIMS requirement for internal audit programme, with documented evidence available for review?",
    "compliance": "Partially Compliant",
    "owner": "AI Governance Team",
    "priority": "Low",
    "notes": "Internal audit programme is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "9.3.1",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "requirement": "Has the organisation addressed the AIMS requirement for management review, general, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "9.3.2",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "requirement": "Has the organisation addressed the AIMS requirement for management review inputs, with documented evidence available for review?",
    "compliance": "Not Compliant",
    "owner": "N. Islam",
    "priority": "High",
    "notes": "Gap identified during review \u2014 management review inputs not yet formally established. Remediation plan required."
  },
  {
    "ref": "9.3.3",
    "category": "Mandatory Clauses",
    "section": "9 - Performance evaluation",
    "requirement": "Has the organisation addressed the AIMS requirement for management review results, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "10.1",
    "category": "Mandatory Clauses",
    "section": "10 - Improvement",
    "requirement": "Has the organisation addressed the AIMS requirement for continual improvement, with documented evidence available for review?",
    "compliance": "Partially Compliant",
    "owner": "N. Islam",
    "priority": "High",
    "notes": "Continual improvement is partly in place but lacks consistent evidence or full documentation."
  },
  {
    "ref": "10.2",
    "category": "Mandatory Clauses",
    "section": "10 - Improvement",
    "requirement": "Has the organisation addressed the AIMS requirement for nonconformity and corrective action, with documented evidence available for review?",
    "compliance": "Fully Compliant",
    "owner": "GRC Office",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.2.2",
    "category": "Annex A Controls",
    "section": "A.2 - Policies related to AI",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to AI policy?",
    "compliance": "Fully Compliant",
    "owner": "GRC Office",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.2.3",
    "category": "Annex A Controls",
    "section": "A.2 - Policies related to AI",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to alignment with other organisational policies?",
    "compliance": "Not Applicable",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.2.4",
    "category": "Annex A Controls",
    "section": "A.2 - Policies related to AI",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to review of the AI policy?",
    "compliance": "Not Compliant",
    "owner": "R. Hasan",
    "priority": "High",
    "notes": "Control gap \u2014 review of the AI policy has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.3.2",
    "category": "Annex A Controls",
    "section": "A.3 - Internal organization",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to AI roles and responsibilities?",
    "compliance": "Fully Compliant",
    "owner": "AI Governance Team",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.3.3",
    "category": "Annex A Controls",
    "section": "A.3 - Internal organization",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to reporting of concerns?",
    "compliance": "Partially Compliant",
    "owner": "S. Chowdhury",
    "priority": "High",
    "notes": "Reporting of concerns is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.4.2",
    "category": "Annex A Controls",
    "section": "A.4 - Resources for AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to resource documentation?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.4.3",
    "category": "Annex A Controls",
    "section": "A.4 - Resources for AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to data resources?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.4.4",
    "category": "Annex A Controls",
    "section": "A.4 - Resources for AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to tooling resources?",
    "compliance": "Partially Compliant",
    "owner": "A. Rahman",
    "priority": "Medium",
    "notes": "Tooling resources is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.4.5",
    "category": "Annex A Controls",
    "section": "A.4 - Resources for AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to system and computing resources?",
    "compliance": "Partially Compliant",
    "owner": "M. Karim",
    "priority": "Low",
    "notes": "System and computing resources is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.4.6",
    "category": "Annex A Controls",
    "section": "A.4 - Resources for AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to human resources?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.2",
    "category": "Annex A Controls",
    "section": "A.5 - Assessing impacts of AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to AI system impact assessment process?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.3",
    "category": "Annex A Controls",
    "section": "A.5 - Assessing impacts of AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to documentation of AI system impact assessments?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.4",
    "category": "Annex A Controls",
    "section": "A.5 - Assessing impacts of AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to assessing AI system impact on individuals or groups?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.5.5",
    "category": "Annex A Controls",
    "section": "A.5 - Assessing impacts of AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to assessing societal impacts of AI systems?",
    "compliance": "Partially Compliant",
    "owner": "R. Hasan",
    "priority": "High",
    "notes": "Assessing societal impacts of AI systems is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.6.1.2",
    "category": "Annex A Controls",
    "section": "A.6 - AI system life cycle",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to objectives for responsible development of AI systems?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.6.1.3",
    "category": "Annex A Controls",
    "section": "A.6 - AI system life cycle",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to processes for responsible design and development?",
    "compliance": "Partially Compliant",
    "owner": "AI Governance Team",
    "priority": "High",
    "notes": "Processes for responsible design and development is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.6.2.2",
    "category": "Annex A Controls",
    "section": "A.6 - AI system life cycle",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to AI system requirements and specification?",
    "compliance": "Partially Compliant",
    "owner": "AI Governance Team",
    "priority": "Low",
    "notes": "AI system requirements and specification is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.6.2.3",
    "category": "Annex A Controls",
    "section": "A.6 - AI system life cycle",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to documentation of AI system design and development?",
    "compliance": "Partially Compliant",
    "owner": "GRC Office",
    "priority": "Low",
    "notes": "Documentation of AI system design and development is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.6.2.4",
    "category": "Annex A Controls",
    "section": "A.6 - AI system life cycle",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to AI system verification and validation?",
    "compliance": "Partially Compliant",
    "owner": "T. Ahmed",
    "priority": "High",
    "notes": "AI system verification and validation is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.6.2.5",
    "category": "Annex A Controls",
    "section": "A.6 - AI system life cycle",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to AI system deployment?",
    "compliance": "Fully Compliant",
    "owner": "M. Karim",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.6.2.6",
    "category": "Annex A Controls",
    "section": "A.6 - AI system life cycle",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to AI system operation and monitoring?",
    "compliance": "Fully Compliant",
    "owner": "T. Ahmed",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.6.2.7",
    "category": "Annex A Controls",
    "section": "A.6 - AI system life cycle",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to AI system technical documentation?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.6.2.8",
    "category": "Annex A Controls",
    "section": "A.6 - AI system life cycle",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to AI system recording of event logs?",
    "compliance": "Partially Compliant",
    "owner": "M. Karim",
    "priority": "Medium",
    "notes": "AI system recording of event logs is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.7.2",
    "category": "Annex A Controls",
    "section": "A.7 - Data for AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to data for development and enhancement of AI systems?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.3",
    "category": "Annex A Controls",
    "section": "A.7 - Data for AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to acquisition of data?",
    "compliance": "Fully Compliant",
    "owner": "N. Islam",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.7.4",
    "category": "Annex A Controls",
    "section": "A.7 - Data for AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to quality of data for AI systems?",
    "compliance": "Not Compliant",
    "owner": "GRC Office",
    "priority": "Low",
    "notes": "Control gap \u2014 quality of data for AI systems has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.7.5",
    "category": "Annex A Controls",
    "section": "A.7 - Data for AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to data provenance?",
    "compliance": "Not Compliant",
    "owner": "GRC Office",
    "priority": "High",
    "notes": "Control gap \u2014 data provenance has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.7.6",
    "category": "Annex A Controls",
    "section": "A.7 - Data for AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to data preparation?",
    "compliance": "Not Compliant",
    "owner": "A. Rahman",
    "priority": "Medium",
    "notes": "Control gap \u2014 data preparation has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.8.2",
    "category": "Annex A Controls",
    "section": "A.8 - Information for interested parties",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to system documentation and information for users?",
    "compliance": "Not Compliant",
    "owner": "N. Islam",
    "priority": "Medium",
    "notes": "Control gap \u2014 system documentation and information for users has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.8.3",
    "category": "Annex A Controls",
    "section": "A.8 - Information for interested parties",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to external reporting?",
    "compliance": "Partially Compliant",
    "owner": "N. Islam",
    "priority": "High",
    "notes": "External reporting is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.8.4",
    "category": "Annex A Controls",
    "section": "A.8 - Information for interested parties",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to communication of incidents?",
    "compliance": "Partially Compliant",
    "owner": "N. Islam",
    "priority": "High",
    "notes": "Communication of incidents is partially implemented; coverage or evidence is incomplete."
  },
  {
    "ref": "A.8.5",
    "category": "Annex A Controls",
    "section": "A.8 - Information for interested parties",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to information for interested parties?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.9.2",
    "category": "Annex A Controls",
    "section": "A.9 - Use of AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to processes for responsible use of AI systems?",
    "compliance": "Fully Compliant",
    "owner": "R. Hasan",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.9.3",
    "category": "Annex A Controls",
    "section": "A.9 - Use of AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to objectives for responsible use of AI systems?",
    "compliance": "Fully Compliant",
    "owner": "S. Chowdhury",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.9.4",
    "category": "Annex A Controls",
    "section": "A.9 - Use of AI systems",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to intended use of the AI system?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.10.2",
    "category": "Annex A Controls",
    "section": "A.10 - Third-party and customer relationships",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to allocation of responsibilities?",
    "compliance": "Fully Compliant",
    "owner": "A. Rahman",
    "priority": "",
    "notes": ""
  },
  {
    "ref": "A.10.3",
    "category": "Annex A Controls",
    "section": "A.10 - Third-party and customer relationships",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to suppliers?",
    "compliance": "Not Compliant",
    "owner": "M. Karim",
    "priority": "Low",
    "notes": "Control gap \u2014 suppliers has not been implemented; risk accepted temporarily pending remediation."
  },
  {
    "ref": "A.10.4",
    "category": "Annex A Controls",
    "section": "A.10 - Third-party and customer relationships",
    "requirement": "Has the organisation implemented, documented and evidenced its approach to customers?",
    "compliance": "Fully Compliant",
    "owner": "GRC Office",
    "priority": "",
    "notes": ""
  }
];
