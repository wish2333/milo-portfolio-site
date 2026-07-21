import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Milo — 个人主页",
  description: "Milo 的个人主页：AI 产品、工作经验与可复用的工作方法。",
};

const experience = [
  {
    period: "2023.10 — 2026.06",
    role: "AI 方案解决",
    company: "北京京师勤思教育科技有限公司",
    summary: "从客服、答疑和内容生产的高频任务出发，搭建 Agent 工作流与视频提效工具，并把真实业务需求延展为 Milo-Cut。",
    outcome: "约 30—60 条/日 → 约 300—500 条/日",
  },
  {
    period: "2025.10 — 2026.01",
    role: "咨询培训实习生",
    company: "深圳市远界管理咨询有限公司",
    summary: "建立培训资源开发清单与人机协作规范，选型本地 AI 方案，统筹多媒体教学资源的打样、制作和交付。",
    outcome: "75 项资源 · 1 个月完成上线",
  },
  {
    period: "2024.10 — 2025.01",
    role: "企业咨询部实习生",
    company: "北京人民在线网络有限公司",
    summary: "为国央企客户提供舆情监测与分析支持，处理通信、食品和医药行业数据，撰写热点分析内容。",
    outcome: "数据清洗 · 趋势判断 · 报告撰写",
  },
];

const repositories = [
  {
    number: "01",
    name: "PyWebVue",
    label: "有趣的技术底座",
    description: "把 Python + Vue 桌面应用的启动成本压缩到约 200 行，已被三个项目复用。",
    meta: "3 个项目采用 · 克隆即开发",
    href: "https://github.com/wish2333/PyWebVue",
  },
  {
    number: "02",
    name: "SocialSimuLLM",
    label: "有趣的研究工具",
    description: "将多智能体社会仿真做成可配置、可记录、可回放、可分析的实验基础设施。",
    meta: "上千轮实验 · 论文优秀",
    href: "https://github.com/wish2333/SocialSimuLLM",
  },
  {
    number: "03",
    name: "Milo-isLearning",
    label: "有趣的产品实验",
    description: "把 Markdown 材料编译成概念学习、渐进式测验和费曼讲解路径，保留 AI 失败时的可演示降级。",
    meta: "结构校验 · 失败重试 · 开源 Demo",
    href: "https://github.com/wish2333/Milo-isLearning",
  },
];

const workflow = [
  ["01", "先听见", "从用户的原话、手上的文件和实际卡点开始，而不是先挑一个模型。"],
  ["02", "再抽象", "把重复动作、判断节点和风险边界拆开，找到真正值得被产品化的部分。"],
  ["03", "做成可用", "用最小闭环快速交付；让状态、进度、失败和人工接管都可见。"],
  ["04", "拿证据回来", "用试用、日志和结果复盘下一轮，而不是用漂亮的演示替代验证。"],
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="masthead shell">
        <Link className="brand" href="/">Milo <small>人工智能产品经理</small></Link>
        <nav aria-label="主要导航"><Link className="active" href="/about">个人主页</Link><Link href="/#work">项目</Link><Link href="/#thinking">产品思考</Link></nav>
        <div className="masthead-actions">
          <Link className="about-link active" href="/about">个人主页</Link>
          <a className="github" href="https://github.com/wish2333" target="_blank" rel="noreferrer"><i /> 代码主页 ↗</a>
        </div>
      </header>

      <section className="about-hero shell" aria-labelledby="about-title">
        <div className="about-hero-copy">
          <p className="eyebrow"><span>个人主页</span> / 2026</p>
          <h1 id="about-title"><span className="about-name">Milo</span><span className="about-role">AI 产品经理 · 建造者</span></h1>
          <p className="about-lede">我把真实工作里的摩擦，做成<strong>可用、可控、能留下证据</strong>的智能工具。</p>
          <div className="about-tags" aria-label="工作方向"><span>AI workflow</span><span>用户任务</span><span>本地优先</span></div>
        </div>

        <div className="about-hero-aside">
          <svg className="about-signal" viewBox="0 0 360 300" role="img" aria-label="由四个阶段节点组成的工作流轨道图">
            <path d="M35 224C72 84 126 48 181 87s76 133 145 26" />
            <path d="M42 88c43 18 70 71 126 71 58 0 83-42 142-67" />
            <circle cx="35" cy="224" r="8" /><circle cx="181" cy="87" r="8" /><circle cx="181" cy="159" r="6" /><circle cx="326" cy="113" r="8" />
            <text x="27" y="255">LISTEN</text><text x="163" y="67">SHAPE</text><text x="312" y="101">SHIP</text>
            <text x="166" y="189">LEARN</text>
          </svg>
          <div className="about-availability"><span className="status-dot" /> 香港中文大学社会学硕士 · 2025—2026</div>
        </div>
      </section>

      <section className="about-facts shell" aria-label="个人概览">
        <div className="fact-intro"><p className="section-label">01 / 快速了解</p><h2>不只想法，<br />也把它做出来。</h2></div>
        <div className="fact-copy"><p>社会学训练让我习惯先理解人和环境，产品与开发实践则让我继续追问：这个判断能不能落进真实流程？所以我常在研究、产品和工程之间来回走，把复杂的 AI 能力收敛成用户能看懂、能校正、能交付的工作步骤。</p><Link href="/#work">查看项目案例 ↗</Link></div>
        <div className="fact-stats">
          <div><strong>3</strong><span>个项目采用<br />PyWebVue 底座</span></div>
          <div><strong>7</strong><span>轮版本迭代<br />由真实反馈推动</span></div>
          <div><strong>442</strong><span>次提交 / 2026.04—07<br />GitHub contribution</span></div>
          <div><strong>10</strong><span>个公开仓库<br />同期持续更新</span></div>
          <p className="fact-source">GitHub contribution calendar · snapshot 2026.07.21</p>
        </div>
      </section>

      <section className="about-work shell" id="experience" aria-labelledby="experience-title">
        <header className="about-section-head"><p className="section-label">02 / 实习经历</p><div><h2 id="experience-title">在任务现场工作。</h2><p>从舆情数据到培训交付，再到 AI 工具落地，我更在意产品是否真的嵌进了人的工作流。</p></div></header>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article className="experience-item" key={item.company}>
              <div className="experience-index">0{index + 1}</div>
              <div className="experience-period">{item.period}</div>
              <div className="experience-main"><h3>{item.role}</h3><p className="experience-company">{item.company}</p><p>{item.summary}</p></div>
              <p className="experience-outcome"><span>产出</span>{item.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-build shell" id="build" aria-labelledby="build-title">
        <header className="about-section-head"><p className="section-label">03 / 工作之外也在建造</p><div><h2 id="build-title">GitHub 上的<br />小型实验室。</h2><p>有些仓库不是为了展示“我会什么”，而是为了把一个判断推到能运行的位置。</p></div></header>
        <div className="repo-grid">
          {repositories.map((repo) => <a className="repo-card" key={repo.name} href={repo.href} target="_blank" rel="noreferrer"><div className="repo-card-top"><span>{repo.number}</span><span>GitHub ↗</span></div><p className="repo-label">{repo.label}</p><h3>{repo.name}</h3><p className="repo-description">{repo.description}</p><p className="repo-meta">{repo.meta}</p></a>)}
        </div>
      </section>

      <section className="about-method shell" id="method" aria-labelledby="method-title">
        <header className="about-section-head"><p className="section-label">04 / 我的工作流</p><div><h2 id="method-title">把“智能”放在<br />合适的那一步。</h2><p>这是一套在项目里反复使用的判断顺序，也是一种工作态度：先把问题说清楚，再让工具承担恰当的部分。</p></div></header>
        <div className="workflow-grid">{workflow.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        <div className="method-note"><span>工作原则</span><p>“我不追求让 AI 看起来无所不能；我更关心它是否让人更快做出一个有依据的决定。”</p></div>
      </section>

      <footer className="site-footer shell"><div><b>Milo</b><span>人工智能产品经理 · 让智能能力在真实工作流中变得可信</span></div><div><Link href="/#work">作品集</Link><a href="https://github.com/wish2333" target="_blank" rel="noreferrer">代码主页</a><a href="#about-title">回到顶部 ↑</a></div></footer>
    </main>
  );
}
