import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const entries = [
  {
    slug: 'prioritise-urgent-items-wealth-management-teams', source: 'https://mp.weixin.qq.com/s/kojlD8UADkUQoWukPYZTww',
    zhTitle: '团队每天最该先处理什么？Wealth Pilot Urgent Items 功能介绍', enTitle: 'How Wealth Management Teams Can Prioritise Urgent Items',
    zhLede: '把分散在邮件、WhatsApp、文件上传和个人提醒里的待处理事项，集中到一个带有业务上下文的工作入口。', enLede: 'Bring pending discussions, uploads and operational exceptions into one workflow so the team can see what needs attention first.',
    zhAnswer: '紧急事项不应该由谁追问得最频繁来决定。团队需要按客户、账户、事项类型、责任人和状态查看同一份工作清单。', enAnswer: 'Priority should not depend on who follows up most loudly. A shared queue should show the client, account, issue type, owner, status and supporting context.',
    zhCards: [['集中工作入口','把 pending discussion、pending upload 与其他未关闭事项放到同一个视图。'],['保留业务上下文','事项与客户、账户、交易、文件或产品连接，减少来回解释。'],['形成管理闭环','从识别、分派和讨论，到解决、复核与关闭，全程保留状态。']],
    enCards: [['One operating queue','Bring pending discussions, uploads and unresolved exceptions into one view.'],['Context stays attached','Connect each item to the relevant client, account, transaction, document or product.'],['Close the loop','Track identification, ownership, discussion, resolution, review and closure.']],
    zhSteps: ['汇集不同渠道的未完成事项','按客户、账户和事项类型分类','明确责任人与下一步','在事项中记录讨论和文件','处理后进行复核','关闭事项并保留记录'],
    enSteps: ['Collect open items from every channel','Classify by client, account and issue type','Assign an owner and next action','Keep discussion and files with the item','Review the resolution','Close the item with an audit trail'],
    related: '/family-office-controls-approvals/'
  },
  {
    slug: 'private-bank-eam-family-office-system-requirements', source: 'https://mp.weixin.qq.com/s/gc4z0nNpk4039uXhKAqgfA',
    zhTitle: '私人银行、EAM 和家族办公室的系统需求有什么不同？', enTitle: 'How System Requirements Differ Across Private Banks, EAMs and Family Offices',
    zhLede: '三类机构都服务高净值客户，但组织规模、客户覆盖、数据来源、报告要求与协作模式决定了不同的系统设计。', enLede: 'Private banks, external asset managers and family offices serve similar clients, but their operating models create very different system requirements.',
    zhAnswer: '选择系统时，不应只看客户资产规模或功能清单，而应看机构每天如何工作、谁负责复核，以及最终结果交付给谁。', enAnswer: 'System design should follow the institution’s daily operating model—not only client wealth, a generic feature list or the number of users.',
    zhCards: [['私人银行','更强调大规模客户覆盖、分层权限、标准流程、监管证据和与核心系统的连接。'],['EAM / IAM','团队较精简，却要跨多家托管银行协调客户、账户、产品、报告和跟进事项。'],['家族办公室','更关注跨实体资产视图、另类投资、家族成员口径、定制报告和长期决策支持。']],
    enCards: [['Private banks','Need scale, segmented permissions, standardised controls, regulatory evidence and integration with core systems.'],['EAMs and IAMs','Smaller teams coordinate clients, accounts, products and reporting across several custodian banks.'],['Family offices','Prioritise cross-entity views, alternatives, principal-specific reporting and long-horizon decision support.']],
    zhSteps: ['画出真实客户与账户覆盖','列出所有权威数据来源','识别关键交付物和频率','明确制作、复核与批准角色','评估例外处理与权限边界','从一个高摩擦流程开始实施'],
    enSteps: ['Map client and account coverage','List authoritative data sources','Define outputs and frequency','Assign preparation, review and approval roles','Assess exceptions and permission boundaries','Implement one high-friction workflow first'],
    related: '/family-office-software-comparison/'
  },
  {
    slug: 'what-is-eam-iam-workflow-system', source: 'https://mp.weixin.qq.com/s/3JmWQqgdAWoAwIbpyupntg',
    zhTitle: '什么是 EAM / IAM？他们为什么需要更轻量的工作流系统？', enTitle: 'What Are EAMs and IAMs—and What Workflow Systems Do They Need?',
    zhLede: 'EAM / IAM 团队可能更精简，但需要协调多客户、多银行、多账户、多产品和多份报告，工作流并不轻。', enLede: 'EAM and IAM teams may be lean, yet they coordinate complex work across clients, banks, accounts, products and reporting obligations.',
    zhAnswer: 'EAM / IAM 需要的是轻量、清晰、可复核的运营层：连接现有托管银行和文件，而不是复制一套笨重的私人银行核心系统。', enAnswer: 'EAMs and IAMs need a lightweight, reviewable operating layer that connects existing banks and files without recreating a heavyweight private-bank core.',
    zhCards: [['跨银行客户视图','在保留托管关系的同时，统一查看客户、账户、持仓和待办。'],['精简团队协作','让客户经理、投资和运营在共同上下文中交接与复核。'],['可解释的交付','报告、产品跟进和客户沟通能够追溯到数据与责任人。']],
    enCards: [['Cross-bank client view','See clients, accounts, holdings and open work while preserving existing custody relationships.'],['Lean-team coordination','Give relationship, investment and operations teams a shared hand-off and review context.'],['Explainable delivery','Connect reports, product follow-ups and client communication to source data and owners.']],
    zhSteps: ['统一客户与账户主数据','连接银行文件和产品资料','建立日常例外队列','按角色分配访问与操作权限','在交付前执行复核','逐步扩展到更多客户和工作流'],
    enSteps: ['Unify client and account master data','Connect bank files and product documents','Create a daily exception queue','Assign role-based access and actions','Review before external delivery','Expand by client and workflow'],
    related: '/family-office-software-hong-kong/'
  },
  {
    slug: 'auditable-financial-ai-workflows', source: 'https://mp.weixin.qq.com/s/3scjni-pucrHsGnRIqpP5g',
    zhTitle: '为什么“可复核”比“自动生成”更重要？', enTitle: 'Why Reviewability Matters More Than Automatic Generation in Financial AI',
    zhLede: '金融 AI 的价值不只在生成速度，更在于数据来源、判断过程、复核责任与最终交付是否清晰可检查。', enLede: 'In financial AI, fast generation matters less than knowing where the information came from, how it was judged and who approved the result.',
    zhAnswer: '自动生成只是起点。只有当输出可追溯、可检查、可修改并经过人工批准，它才适合进入客户报告、产品尽调或投资流程。', enAnswer: 'Generation is only the starting point. Outputs become operationally useful when they are traceable, inspectable, editable and subject to human approval.',
    zhCards: [['来源可追溯','显示使用了哪些客户范围、数据、文件和版本。'],['判断可检查','把关键数字、引用、假设与风险判断呈现给复核人。'],['责任可确认','明确谁生成、谁修改、谁批准，以及什么版本最终交付。']],
    enCards: [['Traceable inputs','Show the client scope, data, documents and versions used.'],['Inspectable judgement','Expose key numbers, citations, assumptions and risk decisions to reviewers.'],['Confirmed accountability','Record who generated, edited and approved the delivered version.']],
    zhSteps: ['确定输出用途与责任边界','限制到正确客户和数据范围','保留引用与计算依据','标记需要人工判断的内容','完成复核和批准','记录并交付最终版本'],
    enSteps: ['Define the purpose and accountability boundary','Limit work to the correct client and data scope','Preserve citations and calculations','Flag points requiring human judgement','Complete review and approval','Record and deliver the final version'],
    related: '/family-office-document-ai/'
  },
  {
    slug: 'product-due-diligence-document-generation', source: 'https://mp.weixin.qq.com/s/SFw5pAOG8CHdXcQpnhDUbg',
    zhTitle: '把产品条款转化为可复核的尽调文档：PDD Generation', enTitle: 'Turning Product Terms into Reviewable Due-Diligence Documents',
    zhLede: 'PDD 的价值不只是生成文档，而是把产品条款、风险因素、适当性判断和复核流程连接起来。', enLede: 'A product due-diligence document is not ordinary generated text. It must connect product terms, risks, suitability considerations and review.',
    zhAnswer: '一份可靠的 PDD 必须让团队检查条款来自哪里、风险如何识别、适当性是否确认，以及最终内容由谁批准。', enAnswer: 'A reliable PDD lets the team verify the source terms, inspect identified risks, confirm suitability considerations and record final approval.',
    zhCards: [['提取产品条款','从 term sheet 和相关资料识别发行人、期限、标的、收益与触发条件。'],['组织风险与适当性','把关键风险、客户限制和需要判断的事项放入统一结构。'],['生成后复核','让产品、合规和客户团队检查、补充并批准最终文档。']],
    enCards: [['Extract product terms','Identify issuer, tenor, underlying assets, return mechanics and trigger conditions from source documents.'],['Structure risk and suitability','Place material risks, client restrictions and judgement points into a consistent framework.'],['Review after generation','Allow product, compliance and client teams to inspect, amend and approve the final document.']],
    zhSteps: ['上传并确认权威产品文件','提取及标准化条款','检查缺失或冲突信息','生成风险与适当性章节','由相关角色复核修改','批准并保存交付版本'],
    enSteps: ['Confirm authoritative product documents','Extract and normalise terms','Check missing or conflicting information','Draft risk and suitability sections','Review and amend with responsible roles','Approve and preserve the delivered version'],
    related: '/family-office-document-ai/'
  },
  {
    slug: 'role-based-access-control-wealth-management', source: 'https://mp.weixin.qq.com/s/jNI1V9tU6QZG09JzaLsnlQ',
    zhTitle: '让不同角色在清晰权限边界内协作：Access Control', enTitle: 'Role-Based Access Control for Wealth Management Workflows',
    zhLede: '权限不是后台设置，而是金融机构协作、合规、复核和责任边界的一部分。', enLede: 'Access control is not merely an administrative setting. It defines collaboration, review, accountability and compliance boundaries.',
    zhAnswer: '客户经理、交易员、运营、Responsible Officer、管理层和试用用户不应看到相同信息或拥有相同操作权限。', enAnswer: 'Relationship managers, traders, operations, responsible officers, management and trial users should not see or change the same information.',
    zhCards: [['按角色定义权限','分别控制查看、编辑、审批、导出和管理能力。'],['按客户定义范围','用户只访问其职责覆盖的客户、账户和业务数据。'],['操作留痕','记录关键查看、修改、审批与导出动作，支持复核。']],
    enCards: [['Role-based permissions','Control viewing, editing, approval, export and administration separately.'],['Client-level scope','Limit access to the clients, accounts and business data covered by each user.'],['Action history','Record material views, changes, approvals and exports for later review.']],
    zhSteps: ['列出系统角色与职责','定义客户和账户覆盖范围','拆分查看、修改、批准与导出权限','为敏感动作增加复核','测试跨角色边界','定期审查权限和离职变更'],
    enSteps: ['List system roles and responsibilities','Define client and account coverage','Separate view, edit, approve and export permissions','Add review for sensitive actions','Test boundaries across roles','Review permissions and leaver changes regularly'],
    related: '/family-office-controls-approvals/'
  },
  {
    slug: 'structured-product-management-beyond-excel', source: 'https://mp.weixin.qq.com/s/joKaf_10b6PTQa4vebzIqw',
    zhTitle: '为什么结构性产品管理，不能只靠 Excel？', enTitle: 'Why Structured Product Management Needs More Than Excel',
    zhLede: 'Excel 适合记录产品信息，但持续变化的观察日、票息、障碍价、自动赎回和客户沟通需要生命周期工作流。', enLede: 'Excel can record product data, but observation dates, coupons, barriers, autocalls and client follow-ups require an active lifecycle workflow.',
    zhAnswer: '问题不是 Excel 没有价值，而是结构性产品并非静态持仓。团队需要提前识别事件、明确责任并保留跟进记录。', enAnswer: 'The problem is not that Excel has no value. Structured products are not static holdings: teams need event awareness, ownership and follow-up history.',
    zhCards: [['产品持续发生事件','观察日、票息判断、敲入敲出、赎回和到期都会改变下一步行动。'],['风险需要提前识别','团队应在事件发生前看到接近 barrier、到期或需要联系客户的产品。'],['跟进需要上下文','决定、文件、客户沟通和责任人应与产品记录连接。']],
    enCards: [['Products keep generating events','Observation, coupon, barrier, redemption and maturity events change the next action.'],['Risk needs early visibility','Teams should see products approaching barriers, maturity or client-contact points.'],['Follow-up needs context','Decisions, files, client communication and ownership should remain attached to the product.']],
    zhSteps: ['导入并验证产品主数据','建立事件日历与触发条件','每日识别临近关键事件的产品','分配跟进责任','记录判断和客户沟通','完成结算后保留生命周期历史'],
    enSteps: ['Import and validate product master data','Create event calendars and trigger conditions','Identify upcoming material events daily','Assign follow-up ownership','Record decisions and client communication','Preserve lifecycle history after settlement'],
    related: '/family-office-excel-replacement-hong-kong/'
  },
  {
    slug: 'financial-ai-after-the-demo', source: 'https://mp.weixin.qq.com/s/JR_qiRVX7eizaS5eqqinog',
    zhTitle: '金融 AI 的难点，往往在 demo 之后', enTitle: 'The Hard Part of Financial AI Begins After the Demo',
    zhLede: '模型和原型可以很快展示能力；真正落地时，团队必须解决数据连接、复核、协作、交付和异常处理。', enLede: 'Models and prototypes can demonstrate value quickly. Production begins when data, review, collaboration, delivery and exceptions must work every day.',
    zhAnswer: 'demo 证明模型能做什么，工程交付则决定它能否进入真实业务。金融 AI 需要贴近现场的实施能力。', enAnswer: 'A demo shows what a model can do. Engineering delivery determines whether it can operate inside real financial work.',
    zhCards: [['理解真实业务流','从客户现场识别输入、角色、判断点、交付物和例外。'],['连接数据与系统','把模型接入正确的数据、文件、权限和现有工具。'],['推动日常采用','与团队共同测试、调整并形成可持续的操作方式。']],
    enCards: [['Understand the real workflow','Identify inputs, roles, judgement points, outputs and exceptions with the operating team.'],['Connect data and systems','Ground the model in the right data, documents, permissions and existing tools.'],['Drive daily adoption','Test and refine with users until the workflow can operate sustainably.']],
    zhSteps: ['选择一个高价值工作流','观察现有流程和例外','连接最小可信数据范围','建立人工复核和权限','在真实任务中试运行','根据采用与结果迭代'],
    enSteps: ['Choose one valuable workflow','Observe the current process and exceptions','Connect the smallest credible data scope','Add human review and permissions','Pilot with real work','Iterate from adoption and outcomes'],
    related: '/family-office-document-ai/'
  },
  {
    slug: 'structured-product-lifecycle-management', source: 'https://mp.weixin.qq.com/s/2C3FOndlK66ZTtFqj7cqPw',
    zhTitle: '从观察日到自动赎回：Structured Product Lifecycle 功能介绍', enTitle: 'Structured Product Lifecycle Management from Observation to Autocall',
    zhLede: '按客户、托管行和账户集中查看结构性产品，提前识别关键价位、生命周期事件与需要跟进的事项。', enLede: 'View structured products by client, custodian and account while identifying key price levels, lifecycle events and follow-up work.',
    zhAnswer: '生命周期管理把分散的产品表格升级为主动工作流：团队不仅知道持有什么，也知道接下来会发生什么、由谁处理。', enAnswer: 'Lifecycle management turns a product inventory into an active workflow: what may happen next, what requires attention and who owns the response.',
    zhCards: [['客户与账户总览','按客户、托管行和账户查看产品、名义本金、状态和关键日期。'],['提前识别事件','关注观察日、票息、障碍价、自动赎回、敲入敲出和到期。'],['从查找走向跟进','把 upcoming operations、priority watchlist 和交易记录连接起来。']],
    enCards: [['Client and account overview','View products, notionals, status and key dates by client, custodian and account.'],['Early event awareness','Monitor observations, coupons, barriers, autocalls, knock-ins, knock-outs and maturities.'],['Move from lookup to action','Connect upcoming operations, priority watchlists and transaction history.']],
    zhSteps: ['汇集产品与交易记录','验证关键条款和日期','计算或导入相关市场数据','生成即将发生事件清单','分派并记录跟进','更新状态直至到期或赎回'],
    enSteps: ['Consolidate product and transaction records','Validate material terms and dates','Calculate or import relevant market data','Generate an upcoming-events queue','Assign and record follow-up','Update status through maturity or redemption'],
    related: '/family-office-software/'
  },
  {
    slug: 'financial-ai-productivity-infrastructure', source: 'https://mp.weixin.qq.com/s/IKkA9zEsWDKyxlhDSroyugI',
    zhTitle: '让 AI 成为金融机构的生产力基础设施', enTitle: 'Building Financial AI as Productivity Infrastructure',
    zhLede: '金融机构需要的不是另一个聪明工具，而是一套能够连接数据、支持流程、长期运行并保留人工控制的能力。', enLede: 'Financial institutions need more than another clever tool. They need AI connected to data, workflows, human control and durable operations.',
    zhAnswer: 'AI 只有进入真实流程、使用可信数据、支持多人协作并持续接受复核，才会从实验变成生产力基础设施。', enAnswer: 'AI becomes infrastructure when it operates in real workflows, uses trusted data, supports team collaboration and remains reviewable over time.',
    zhCards: [['连接真实数据','客户、账户、持仓、产品条款、市场价格与历史记录形成可信上下文。'],['嵌入工作流程','AI 支持报告、文件、投资组合分析和团队协作，而不是停留在聊天窗口。'],['保留人类控制','关键判断、权限、批准和责任留痕始终由机构掌握。']],
    enCards: [['Connect real data','Clients, accounts, holdings, terms, market prices and history create trusted context.'],['Embed workflows','Support reporting, documents, portfolio analysis and teamwork beyond a chat window.'],['Retain human control','Keep judgement, permissions, approvals and accountability with the institution.']],
    zhSteps: ['识别一个值得实施的流程','定义可信输入和数据责任','连接现有系统与文件','建立权限、复核和审计记录','与使用团队共同上线','监测采用并持续改进'],
    enSteps: ['Identify one workflow worth implementing','Define trusted inputs and data ownership','Connect existing systems and documents','Add permissions, review and audit history','Launch alongside the operating team','Monitor adoption and improve continuously'],
    related: '/family-office-software/'
  },
  {
    slug: 'why-financial-ai-needs-domain-engineers', source: 'https://mp.weixin.qq.com/s/OWAtZGZCILPNDrwplE2ZGw',
    zhTitle: '为什么金融 AI 项目，需要懂业务的工程团队？', enTitle: 'Why Financial AI Projects Need Domain-Aware Engineers',
    zhLede: '金融 AI 不只取决于模型，也取决于工程团队是否理解业务流程、数据来源、复核要求与最终交付场景。', enLede: 'Financial AI depends not only on model capability, but on engineers who understand workflows, source data, review requirements and final delivery.',
    zhAnswer: '懂业务的工程团队能够把“模型能回答”转化为“机构可以安全使用”：连接真实输入，处理例外，并与责任人共同实施。', enAnswer: 'Domain-aware engineers turn “the model can answer” into “the institution can use it safely” by connecting real inputs, handling exceptions and implementing with owners.',
    zhCards: [['理解现场语境','客户报告、交易邮件和尽调文档背后都有不同角色、口径和责任。'],['把需求变成系统','把数据连接、权限、业务规则、复核节点和交付方式落实为工作流。'],['与团队共同实施','前置部署工程师贴近用户测试真实任务，而不是交付 demo 后离开。']],
    enCards: [['Understand operating context','Client reports, trade emails and due diligence each involve different roles, conventions and accountability.'],['Turn needs into systems','Implement data connections, permissions, business rules, review points and delivery methods.'],['Build alongside the team','A forward-deployed engineer tests real work with users instead of leaving after the demo.']],
    zhSteps: ['进入现场观察现有流程','确认用户、输入与输出','识别规则、例外和责任边界','搭建最小可信工作流','与业务团队测试复核','上线后继续优化采用'],
    enSteps: ['Observe the current workflow in context','Confirm users, inputs and outputs','Identify rules, exceptions and accountability','Build the smallest credible workflow','Test review with the operating team','Improve adoption after launch'],
    related: '/family-office-document-ai/'
  }
];

const esc = (s) => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const org = `{"@type":"Organization","@id":"https://www.turoid.ai/#organization","name":"Turoid","legalName":"Turoid Financial Technologies Limited","url":"https://www.turoid.ai/","logo":"https://www.turoid.ai/assets/turoid-logo.png","sameAs":["https://hk.linkedin.com/company/turoid"]}`;

function page(e, lang) {
  const zh = lang === 'zh';
  const title = zh ? e.zhTitle : e.enTitle;
  const lede = zh ? e.zhLede : e.enLede;
  const answer = zh ? e.zhAnswer : e.enAnswer;
  const cards = zh ? e.zhCards : e.enCards;
  const steps = zh ? e.zhSteps : e.enSteps;
  const base = zh ? `/zh-hans/insights/${e.slug}/` : `/insights/${e.slug}/`;
  const alt = zh ? `/insights/${e.slug}/` : `/zh-hans/insights/${e.slug}/`;
  const canonical = `https://www.turoid.ai${base}`;
  const alternate = `https://www.turoid.ai${alt}`;
  const description = lede.slice(0, 155);
  const schema = `{"@context":"https://schema.org","@graph":[${org},{"@type":"BlogPosting","headline":"${esc(title)}","description":"${esc(description)}","datePublished":"2026-08-31","dateModified":"2026-08-31","inLanguage":"${zh?'zh-Hans':'en-HK'}","mainEntityOfPage":{"@type":"WebPage","@id":"${canonical}"},"author":{"@id":"https://www.turoid.ai/#organization"},"publisher":{"@id":"https://www.turoid.ai/#organization"},"url":"${canonical}"},{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Turoid","item":"https://www.turoid.ai/"},{"@type":"ListItem","position":2,"name":"${zh?'洞察':'Insights'}","item":"https://www.turoid.ai/${zh?'zh-hans/':''}insights/"},{"@type":"ListItem","position":3,"name":"${esc(title)}","item":"${canonical}"}]}]}`;
  return `<!DOCTYPE html>
<html lang="${zh?'zh-Hans':'en-HK'}"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>${esc(title)} | Turoid</title><meta name="description" content="${esc(description)}"/><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/><meta name="theme-color" content="#0b1015"/>
<link rel="canonical" href="${canonical}"/><link rel="alternate" hreflang="${zh?'zh-Hans':'en-HK'}" href="${canonical}"/><link rel="alternate" hreflang="${zh?'en-HK':'zh-Hans'}" href="${alternate}"/><link rel="alternate" hreflang="x-default" href="https://www.turoid.ai/insights/${e.slug}/"/>
<meta property="og:title" content="${esc(title)} | Turoid"/><meta property="og:description" content="${esc(description)}"/><meta property="og:type" content="article"/><meta property="og:url" content="${canonical}"/><meta property="og:site_name" content="Turoid"/><meta property="og:locale" content="${zh?'zh_CN':'en_HK'}"/><meta name="twitter:card" content="summary"/>
<link rel="icon" href="/assets/turoid-logo.png"/><link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Noto+Sans+SC:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet"/><link rel="stylesheet" href="/styles.css"/>${zh?'<link rel="stylesheet" href="/styles-zh.css"/><link rel="stylesheet" href="/styles-language.css"/>':''}<script type="application/ld+json">${schema}</script></head>
<body><div class="site-shell seo-page"><header class="site-header"><div class="container nav-row"><a class="brand" href="/${zh?'zh-hans/':''}" aria-label="Turoid"><img src="/assets/turoid-logo.png" alt="Turoid logo"/></a><nav class="site-nav" aria-label="${zh?'主要导航':'Primary'}"><a href="/${zh?'zh-hans/':''}insights/">${zh?'洞察':'Insights'}</a><a href="/${zh?'zh-hans/hk-family-office-software/':'family-office-software/'}">${zh?'家族办公室软件':'Software'}</a><a href="/${zh?'zh-hans/#team':'#team'}">${zh?'团队':'Team'}</a><a href="/${zh?'zh-hans/#contact':'#contact'}">${zh?'联系':'Contact'}</a></nav><div class="header-actions"><a class="button button-small" href="${alt}">${zh?'English':'简体中文'}</a></div></div></header>
<main><section class="hero seo-hero"><div class="hero-noise"></div><div class="container seo-hero-grid"><div class="hero-copy reveal"><p class="eyebrow">${zh?'Turoid 洞察 · 工作流实践':'Turoid Insight · Operating Workflow'}</p><h1>${esc(title)}</h1><p class="hero-lede">${esc(lede)}</p><div class="hero-actions"><a class="button" href="#framework">${zh?'查看实施框架':'See the implementation framework'}</a><a class="button button-ghost" href="${e.source}" rel="external">${zh?'微信公众号原文':'Original WeChat article'}</a></div><div class="hero-proof"><span>${zh?'2026 年 8 月 31 日':'31 Aug 2026'}</span><span>${zh?'网站改编版':'Website edition'}</span><span>Turoid</span></div></div><div class="seo-answer-card reveal"><p class="eyebrow">${zh?'核心结论':'Short answer'}</p><h2>${esc(answer)}</h2></div></div></section>
<section class="section" id="framework"><div class="container"><div class="section-heading reveal"><p class="eyebrow">${zh?'工作流设计':'Workflow design'}</p><h2>${zh?'从功能问题回到真实运营流程':'Start with the operating process, not a feature list'}</h2><p>${zh?'有效的系统应把数据、角色、判断、复核和最终交付连接起来。以下三项能力是实施时最值得优先确认的部分。':'A useful system connects data, roles, judgement, review and delivery. These are the three capabilities to establish first.'}</p></div><div class="seo-link-grid">${cards.map((c,i)=>`<article class="resource-card reveal"><span>0${i+1}</span><h3>${esc(c[0])}</h3><p>${esc(c[1])}</p></article>`).join('')}</div></div></section>
<section class="section section-dark"><div class="container seo-split"><div class="section-heading reveal"><p class="eyebrow">${zh?'实施路径':'Implementation path'}</p><h2>${zh?'从一个高摩擦流程开始':'Begin with one high-friction workflow'}</h2><p>${zh?'先建立最小可信工作流，再根据真实使用、例外情况和团队反馈逐步扩大范围。':'Establish the smallest credible workflow, then expand from real use, exceptions and team feedback.'}</p></div><div class="seo-checklist reveal"><h3>${zh?'建议步骤':'Recommended sequence'}</h3><ol>${steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></div></div></section>
<section class="section section-muted"><div class="container"><div class="section-heading reveal"><p class="eyebrow">${zh?'延伸阅读':'Continue reading'}</p><h2>${zh?'把洞察连接到实施':'Connect the insight to implementation'}</h2></div><div class="seo-link-grid"><a class="resource-card reveal" href="${e.related}"><span>${zh?'相关方案':'Related capability'}</span><h3>${zh?'查看 Turoid 相关工作流':'Explore the related Turoid workflow'}</h3><p>${zh?'了解如何把这个运营问题转化为可实施、可复核的工作流。':'See how this operating problem can become an implemented, reviewable workflow.'}</p></a><a class="resource-card reveal" href="/${zh?'zh-hans/':''}insights/"><span>${zh?'洞察资料库':'Insights library'}</span><h3>${zh?'浏览更多 Turoid 洞察':'Browse more Turoid insights'}</h3><p>${zh?'继续阅读家族办公室、财富管理和金融 AI 工作流文章。':'Read more on family offices, wealth operations and financial AI workflows.'}</p></a><a class="resource-card reveal" href="${alt}"><span>${zh?'English':'简体中文'}</span><h3>${esc(zh?e.enTitle:e.zhTitle)}</h3><p>${zh?'阅读经过本地化改写的英文版本。':'Read the Simplified Chinese counterpart.'}</p></a></div></div></section>
<section class="section contact-section"><div class="container contact-grid"><div class="contact-copy reveal"><p class="eyebrow">${zh?'从一个流程开始':'Start with one workflow'}</p><h2>${zh?'找出一个值得共同实施的工作流':'Identify one workflow worth implementing together'}</h2><p>${zh?'Turoid 的前置部署工程师与团队一起连接真实输入、建立人工复核，并把工作流落实到现有运营环境。':'A Turoid forward-deployed engineer works with your team to connect real inputs, add human review and implement inside the existing operating environment.'}</p></div><div class="contact-card reveal"><a class="contact-link" href="mailto:hello@turoid.ai">hello@turoid.ai</a><a class="contact-link" href="https://wa.me/85262315831">+852 6231 5831</a><div class="contact-actions"><a class="button" href="mailto:hello@turoid.ai?subject=${encodeURIComponent(title)}">${zh?'讨论一个工作流':'Discuss a workflow'}</a><a class="button button-ghost" href="/${zh?'zh-hans/':'hk-family-office-software-audit/'}">${zh?'了解 Turoid':'Free software audit'}</a></div></div></div></section></main>
<footer class="site-footer"><div class="container footer-row"><p><span id="year"></span> Turoid Financial Technologies Limited.</p><p><a href="/press/">${zh?'新闻与媒体':'Press and media'}</a></p></div></footer></div><script src="/script.js"></script></body></html>`;
}

for (const e of entries) {
  for (const lang of ['en','zh']) {
    const dir = path.join(root, ...(lang === 'zh' ? ['zh-hans','insights',e.slug] : ['insights',e.slug]));
    fs.mkdirSync(dir, {recursive:true});
    fs.writeFileSync(path.join(dir,'index.html'), page(e,lang));
  }
}

const first = {slug:'why-family-office-reports-do-not-match', zhTitle:'为什么同一组数据，在不同报告里经常不一致？', enTitle:'Why Family Office Reports Show Different Numbers', zhLede:'从数据源、组合范围、展示币种与审核流程建立一致、可追溯的家族办公室报表。', enLede:'How source lineage, scope, currency and review controls create consistent family office reporting.'};
const all = [first, ...entries];
function indexPage(lang) {
  const zh = lang === 'zh';
  const canonical = `https://www.turoid.ai/${zh?'zh-hans/':''}insights/`;
  return `<!DOCTYPE html><html lang="${zh?'zh-Hans':'en-HK'}"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1.0"/><title>${zh?'家族办公室与金融 AI 洞察':'Family Office and Financial AI Insights'} | Turoid</title><meta name="description" content="${zh?'Turoid 关于家族办公室软件、财富管理运营、金融 AI、报表、结构性产品和可复核工作流的实务洞察。':'Practical Turoid insights on family office software, wealth operations, financial AI, reporting, structured products and reviewable workflows.'}"/><meta name="robots" content="index, follow"/><link rel="canonical" href="${canonical}"/><link rel="alternate" hreflang="${zh?'zh-Hans':'en-HK'}" href="${canonical}"/><link rel="alternate" hreflang="${zh?'en-HK':'zh-Hans'}" href="https://www.turoid.ai/${zh?'':'zh-hans/'}insights/"/><link rel="alternate" hreflang="x-default" href="https://www.turoid.ai/insights/"/><link rel="icon" href="/assets/turoid-logo.png"/><link rel="stylesheet" href="/styles.css"/>${zh?'<link rel="stylesheet" href="/styles-zh.css"/><link rel="stylesheet" href="/styles-language.css"/>':''}</head><body><div class="site-shell seo-page"><header class="site-header"><div class="container nav-row"><a class="brand" href="/${zh?'zh-hans/':''}"><img src="/assets/turoid-logo.png" alt="Turoid logo"/></a><nav class="site-nav"><a href="/${zh?'zh-hans/hk-family-office-software/':'family-office-software/'}">${zh?'家族办公室软件':'Software'}</a><a href="/${zh?'zh-hans/#team':'#team'}">${zh?'团队':'Team'}</a><a href="/${zh?'zh-hans/#contact':'#contact'}">${zh?'联系':'Contact'}</a></nav><div class="header-actions"><a class="button button-small" href="/${zh?'':'zh-hans/'}insights/">${zh?'English':'简体中文'}</a></div></div></header><main><section class="hero seo-hero"><div class="hero-noise"></div><div class="container"><div class="hero-copy reveal"><p class="eyebrow">Turoid Insights</p><h1>${zh?'家族办公室、财富管理与金融 AI 实务洞察':'Practical Insights for Family Offices, Wealth Teams and Financial AI'}</h1><p class="hero-lede">${zh?'把图来科技微信公众号的实务文章转化为可搜索、可引用、连接实施的知识资料库。':'Searchable, citable website editions adapted from Turoid’s WeChat research and product notes.'}</p></div></div></section><section class="section"><div class="container"><div class="seo-link-grid">${all.map(e=>`<a class="resource-card reveal" href="/${zh?'zh-hans/':''}insights/${e.slug}/"><span>${zh?'中文洞察':'Turoid Insight'}</span><h3>${esc(zh?e.zhTitle:e.enTitle)}</h3><p>${esc(zh?e.zhLede:e.enLede)}</p></a>`).join('')}</div></div></section></main><footer class="site-footer"><div class="container footer-row"><p><span id="year"></span> Turoid Financial Technologies Limited.</p><p><a href="/press/">${zh?'新闻与媒体':'Press and media'}</a></p></div></footer></div><script src="/script.js"></script></body></html>`;
}
fs.writeFileSync(path.join(root,'insights','index.html'), indexPage('en'));
fs.writeFileSync(path.join(root,'zh-hans','insights','index.html'), indexPage('zh'));

const sitemapPath = path.join(root, 'sitemap.xml');
let sitemap = fs.readFileSync(sitemapPath, 'utf8').replace(/\n  <!-- WECHAT INSIGHTS START -->[\s\S]*?<!-- WECHAT INSIGHTS END -->/g, '');
const insightUrls = [
  'https://www.turoid.ai/insights/',
  'https://www.turoid.ai/zh-hans/insights/',
  ...all.flatMap(e => [`https://www.turoid.ai/insights/${e.slug}/`, `https://www.turoid.ai/zh-hans/insights/${e.slug}/`])
];
const sitemapBlock = `\n  <!-- WECHAT INSIGHTS START -->\n${insightUrls.map(url => `  <url>\n    <loc>${url}</loc>\n    <lastmod>2026-08-31</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${url.endsWith('/insights/') ? '0.82' : '0.76'}</priority>\n  </url>`).join('\n')}\n  <!-- WECHAT INSIGHTS END -->`;
sitemap = sitemap.replace('\n</urlset>', `${sitemapBlock}\n</urlset>`);
fs.writeFileSync(sitemapPath, sitemap);

const llmsPath = path.join(root, 'llms.txt');
let llms = fs.readFileSync(llmsPath, 'utf8').replace(/\n<!-- WECHAT INSIGHTS START -->[\s\S]*?<!-- WECHAT INSIGHTS END -->/g, '');
const llmsBlock = `\n<!-- WECHAT INSIGHTS START -->\n## Bilingual Insights Library\n\n- English insights archive: https://www.turoid.ai/insights/\n- Simplified Chinese insights archive: https://www.turoid.ai/zh-hans/insights/\n${all.map(e => `- ${e.enTitle}: https://www.turoid.ai/insights/${e.slug}/\n- ${e.zhTitle}: https://www.turoid.ai/zh-hans/insights/${e.slug}/`).join('\n')}\n<!-- WECHAT INSIGHTS END -->\n`;
llms += llmsBlock;
fs.writeFileSync(llmsPath, llms);
console.log(`Generated ${entries.length * 2} article pages and 2 archive pages.`);
