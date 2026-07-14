"use client";

import { useState } from "react";

type Project = {
  id: string;
  index: string;
  name: string;
  type: string;
  tagline: string;
  role: string;
  principles: string;
  repo: string;
  demo?: string;
  problem: string;
  decision: string;
  solution: string;
  validation: string;
};

const projects: Project[] = [
  {
    id: "milo-cut",
    index: "01",
    name: "Milo-Cut",
    type: "AI 视频工作流",
    tagline: "面向教培与企业内训团队的本地 AI 粗剪与培训内容预处理工具",
    role: "产品定义 · 交互原型 · AI 工作流",
    principles: "人在回路 / 风险可见 / 本地优先",
    repo: "https://github.com/wish2333/Milo-Cut",
    problem: "剪辑人员需要反复回听素材，自动删除又会带来难以挽回的误删风险。",
    decision: "不让 AI 直接执行删除，把模型判断变成附着在字幕上的可解释建议。",
    solution: "以字幕编辑替代复杂时间轴操作，串联建议审阅、人工修改与导出前风险检查。",
    validation: "约 20 名相关从业者的需求认知与真实试用观察；数据仅用于验证工作流假设。",
  },
  {
    id: "sherpanote",
    index: "02",
    name: "SherpaNote",
    type: "本地知识工作台",
    tagline: "将录音、转录、文档提取和 AI 整理整合进同一条学习资料处理路径",
    role: "用户访谈 · MVP 规划 · 体验迭代",
    principles: "本地优先 / 过程反馈 / 按需扩展",
    repo: "https://github.com/wish2333/sherpanote",
    problem: "学习资料散落在录音、OCR、转录和笔记工具之间，处理链路高度碎片化。",
    decision: "首版只验证“导入后立即转录与整理”的闭环，并优先保障本地隐私。",
    solution: "统一接入音视频、图片与文档；通过分段识别和逐段推送改善离线模型等待体验。",
    validation: "5 名同学访谈、7 轮迭代；实际学习任务中完整流程由约 4 小时缩短至约 1 小时。",
  },
  {
    id: "learning",
    index: "03",
    name: "Milo-isLearning",
    type: "AI 学习 Agent",
    tagline: "把 Markdown 学习材料编译成概念学习、渐进式测验与费曼讲解路径",
    role: "问题抽象 · 学习闭环 · AI 稳定性",
    principles: "渐进表达 / 结构校验 / 可演示降级",
    repo: "https://github.com/wish2333/Milo-isLearning",
    demo: "https://milo-is-learning.vercel.app/",
    problem: "学习者经常“看懂但讲不出”，阅读输入没有转化为自主表达。",
    decision: "以 Markdown 为唯一 MVP 输入，用递进任务降低直接开放作答的压力。",
    solution: "从选择、排序、填空逐步走向费曼讲解，并记录“蒙对”避免高估掌握度。",
    validation: "完成公开演示版本与关键路径验收；尚未正式用户测试，因此不夸大学习效果。",
  },
  {
    id: "ff-neo",
    index: "04",
    name: "FF Intelligent Neo",
    type: "批量视频处理",
    tagline: "把复杂 FFmpeg 配置转化为配置一次、批量执行、少量值守的图形化工作流",
    role: "需求调研 · 产品架构 · 独立开发",
    principles: "降低决策负担 / 状态清晰 / 预设复用",
    repo: "https://github.com/wish2333/ff-intelligent-neo",
    problem: "片头片尾替换、横竖屏转换等重复任务依赖逐条操作，复杂参数又容易出错。",
    decision: "不追求最多参数，围绕高频场景组织默认策略、配置校验和任务队列。",
    solution: "用预设、实时命令预览、批处理队列与暂停/恢复/重试形成稳定交付链路。",
    validation: "实习团队真实使用并向开源用户推广；产能数据为内部观察，不换算夸张效率倍数。",
  },
  {
    id: "social-sim",
    index: "05",
    name: "SocialSimuLLM",
    type: "多智能体实验平台",
    tagline: "让 LLM 社会仿真变得可配置、可记录、可回放、可分析",
    role: "需求规划 · 系统设计 · 核心开发",
    principles: "可复现 / 可追溯 / 可比较",
    repo: "https://github.com/wish2333/SocialSimuLLM",
    problem: "概念原型能跑，但配置分散、实验难复现，输出也难以支持研究分析。",
    decision: "把重点从“更像人的 Agent”转向完整、稳定、可比较的实验基础设施。",
    solution: "串联配置、批量实验、结构化日志、检查点、回放与热力图分析。",
    validation: "累计完成上千循环轮次和约 30 个模拟日的个人实验探索，论文获优秀。",
  },
];

function MiloCutPrototype() {
  return (
    <div className="product-ui cut-ui">
      <div className="ui-toolbar">
        <span className="traffic"><i /><i /><i /></span>
        <strong>新员工安全培训 <em>· v12</em></strong>
        <span className="ui-actions"><button>预览</button><button className="primary">导出视频</button></span>
      </div>
      <div className="ui-tabs"><b>字幕精修</b><span>画面编排</span><span>素材</span><span>音频</span><small>● 已保存到本地</small></div>
      <div className="cut-editor">
        <section className="video-pane">
          <div className="video-screen"><span>MODULE 02 · 风险识别</span><b>进入作业区域前，先完成环境风险确认</b><small>进入作业区域前，先确认安全标识。</small></div>
          <div className="player">▶ <b>00:42.18</b><span>/ 03:18.05</span></div>
          <p><strong>当前任务</strong>让 AI 提效，但不替用户做高风险决定。建议逐条确认后才写回时间线。</p>
        </section>
        <section className="transcript-pane">
          <header><b>字幕与文稿</b><span>24 条 · 2 条待确认</span></header>
          <div className="transcript-row"><time>00:35</time><p>本节将介绍进入作业区域前的准备工作。</p><small>99%</small></div>
          <div className="transcript-row active"><time>00:42</time><p>进入作业区域前，先<del>检查一下周围</del><ins>确认安全标识与环境风险。</ins></p><small>AI</small></div>
          <div className="transcript-row"><time>00:48</time><p>如发现设备异常，请立即停止操作并上报。</p><small>98%</small></div>
          <div className="transcript-row"><time>00:55</time><p>请勿在未授权的情况下拆卸防护装置。</p><small>96%</small></div>
          <div className="transcript-row"><time>01:03</time><p>确认防护用品佩戴完整后，再开始工作。</p><small>97%</small></div>
        </section>
        <aside className="ai-review">
          <header><b>AI 建议审阅</b><span>1 / 2</span></header>
          <div className="suggestion"><div><b>措辞优化</b><small>需人工确认</small></div><p>建议改为“确认安全标识与环境风险”，表达更明确，也与术语表一致。</p><blockquote>依据：企业术语表 v3<br />参考：风险识别规范</blockquote><footer><button>保留原文</button><button className="primary">接受建议</button></footer></div>
          <div className="suggestion compact"><div><b>断句调整</b><small>低风险</small></div><p>在 00:55.12 处拆分字幕。</p></div>
        </aside>
      </div>
      <div className="timeline"><span>时间线</span><div className="track"><i /><i /><i /></div><div className="needle" /></div>
      <div className="risk-bar"><b>✓</b><span><strong>导出风险检查</strong><small>1 项需确认，其余检查已通过</small></span><em>✓ 敏感信息未发现</em><a>查看详情 →</a></div>
    </div>
  );
}

function SherpaPrototype() {
  return <div className="product-ui simple-ui"><div className="simple-head"><span>资料库 / 课程研究</span><button className="primary">＋ 导入资料</button></div><div className="source-grid"><aside><b>本次任务</b><h3>生成《平台治理》课程笔记</h3><span>4 个来源 · 本地处理</span><ol><li className="done">录音转录</li><li className="done">文档解析</li><li className="active">AI 整理</li><li>保存笔记</li></ol></aside><main><header><b>逐段转录</b><span>38:21 / 52:08</span></header><div className="wave"><i /><i /><i /><i /><i /><i /><i /></div><article><small>正在整理 · 第 7 段</small><h4>技术采纳不仅由工具能力决定</h4><p>组织环境、学习成本与同伴网络共同影响使用意愿。已关联 3 处原文证据。</p></article></main><section><b>笔记结构</b><ul><li>01 核心概念</li><li className="active">02 影响因素</li><li>03 案例与证据</li><li>04 待验证问题</li></ul></section></div></div>;
}

function LearningPrototype() {
  return <div className="product-ui simple-ui learning-ui"><div className="simple-head"><span>Milo-isLearning / 知识编译器</span><button className="primary">开始学习</button></div><div className="learning-grid"><aside><small>当前材料</small><h3>检索增强生成<br />RAG 基础</h3><p>12 个概念 · 4 组挑战</p><div className="progress"><i /></div><b>掌握进度 42%</b></aside><main><small>渐进式挑战 · 03 / 05</small><h2>请把 RAG 的工作流程按正确顺序排列</h2><div className="sort-card">A · 生成答案</div><div className="sort-card active">B · 检索相关内容</div><div className="sort-card">C · 向量化并建立索引</div><div className="sort-card">D · 组合上下文</div></main><section><small>为什么这样设计</small><h4>先降低表达压力，再走向费曼讲解</h4><p>选择与排序用于建立结构，填空检验关键关系，最终要求学习者用自己的语言解释。</p><label>下一步</label><b>开放表达 · 费曼讲解</b></section></div></div>;
}

function QueuePrototype() {
  return <div className="product-ui simple-ui queue-ui"><div className="simple-head"><span>FF Intelligent Neo / 批处理队列</span><button className="primary">开始全部任务</button></div><div className="queue-grid"><aside><small>当前预设</small><h3>竖屏课程视频<br />标准化处理</h3><dl><dt>画面</dt><dd>1080 × 1920</dd><dt>编码</dt><dd>H.264 / 自动</dd><dt>片头</dt><dd>brand-intro.mp4</dd></dl><button>检查配置</button></aside><main><header><b>任务队列</b><span>12 个文件 · 3 个完成</span></header>{["lesson-01.mp4","lesson-02.mp4","lesson-03.mov","lesson-04.mp4"].map((file,i)=><div className="job" key={file}><span>{i+1}</span><p><b>{file}</b><small>{i<2?"处理中 · 正在转码":"等待中 · 配置已校验"}</small></p><div className="job-progress"><i style={{width:i===0?"86%":i===1?"42%":"0%"}} /></div><em>{i===0?"86%":i===1?"42%":"—"}</em></div>)}</main><section><small>运行状态</small><h4>统一进度、日志与错误恢复</h4><p>复杂参数被收敛到可复用预设，异常任务可单独重试，不阻塞整个队列。</p><b className="state-ok">● 少量值守</b></section></div></div>;
}

function SimulationPrototype() {
  return <div className="product-ui simple-ui sim-ui"><div className="simple-head"><span>SocialSimuLLM / 实验控制台</span><button className="primary">运行实验</button></div><div className="sim-grid"><aside><small>实验配置</small><h3>校园创新扩散<br />Batch 06</h3><dl><dt>智能体</dt><dd>24</dd><dt>随机种子</dt><dd>202603</dd><dt>模拟周期</dt><dd>6 days</dd></dl><span className="state-ok">● 检查点已启用</span></aside><main><header><b>事件回放 · Day 04</b><span>14:20</span></header><div className="map-grid">{Array.from({length:35},(_,i)=><i key={i} className={[4,9,12,18,23,30].includes(i)?"agent active":"agent"} />)}<div className="event-card"><small>邻近对话</small><b>Agent 07 → Agent 12</b><span>“我在实验室试用了新工具……”</span></div></div></main><section><small>结构化记录</small><h4>让长任务可追溯、可比较</h4><ul><li>计划与行动日志</li><li>记忆检索依据</li><li>模型输出与回退</li><li>检查点恢复</li></ul></section></div></div>;
}

function Prototype({ id }: { id: string }) {
  if (id === "sherpanote") return <SherpaPrototype />;
  if (id === "learning") return <LearningPrototype />;
  if (id === "ff-neo") return <QueuePrototype />;
  if (id === "social-sim") return <SimulationPrototype />;
  return <MiloCutPrototype />;
}

export default function Home() {
  const [activeId, setActiveId] = useState(projects[0].id);
  const active = projects.find((project) => project.id === activeId) ?? projects[0];

  return (
    <main>
      <header className="masthead shell">
        <a className="brand" href="#top">Milo <small>AI Product Manager</small></a>
        <nav aria-label="主要导航"><a href="#work">项目</a><a href="#thinking">产品思考</a><a href="https://github.com/wish2333" target="_blank" rel="noreferrer">GitHub</a></nav>
        <a className="github" href="https://github.com/wish2333" target="_blank" rel="noreferrer"><i /> github.com/wish2333 ↗</a>
      </header>

      <section className="intro shell" id="top">
        <div><p className="eyebrow">Portfolio · 2026</p><h1>Milo<span>AI 产品经理</span></h1></div>
        <p>把 AI 能力做成<strong>可信、可用、可验证</strong>的产品工作流。</p>
      </section>

      <section className="workbench shell" id="work" aria-label="项目原型画廊">
        <aside className="project-rail">
          <div className="rail-label">Selected work / 05</div>
          {projects.map((project) => (
            <button className={`project ${activeId === project.id ? "active" : ""}`} key={project.id} onClick={() => setActiveId(project.id)} aria-pressed={activeId === project.id}>
              <span className="project-index">{project.index}</span><span className="project-name">{project.name}<small>{project.type}</small></span>
            </button>
          ))}
          <p className="rail-foot">每个项目从真实问题出发，保留关键取舍、原型与验证证据。</p>
        </aside>

        <article className="case" key={active.id}>
          <header className="case-head">
            <div><div className="case-title"><h2>{active.name}</h2>{active.id === "milo-cut" && <span>Flagship case</span>}</div><p>{active.tagline}</p></div>
            <div className="case-meta"><p><b>角色</b> {active.role}</p><p><b>原则</b> {active.principles}</p></div>
          </header>
          <Prototype id={active.id} />
          <footer className="evidence"><span><b>验证说明</b> · {active.validation}</span><span className="case-links">{active.demo && <a href={active.demo} target="_blank" rel="noreferrer">在线体验 ↗</a>}<a href={active.repo} target="_blank" rel="noreferrer">查看仓库 ↗</a></span></footer>
        </article>
      </section>

      <section className="thinking shell" id="thinking">
        <header><p className="eyebrow">Product approach</p><h2>先理解决策，再设计 AI。</h2><p>我关注的不只是模型“能不能做”，而是它应该在流程中的哪个位置出现，用户如何校正它，以及产品如何留下可回看、可验证的决策证据。</p></header>
        <div className="thinking-grid">
          {[
            ["01", "问题", active.problem],
            ["02", "判断", active.decision],
            ["03", "方案", active.solution],
            ["04", "验证", active.validation],
          ].map(([index, title, copy]) => <article key={index}><span>{index}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
        <div className="thinking-foot"><span>当前案例：{active.name}</span><button onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>返回原型 ↑</button></div>
      </section>

      <footer className="site-footer shell"><div><b>Milo</b><span>AI 产品经理 · 让 AI 在真实工作流中变得可信</span></div><div><a href="https://github.com/wish2333" target="_blank" rel="noreferrer">GitHub</a><a href="#top">回到顶部 ↑</a></div></footer>
    </main>
  );
}
