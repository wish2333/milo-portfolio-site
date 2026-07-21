# Milo 作品集 · 设计重塑方案

> 版本：v0.2 · 2026-07-21
> 范围：设计/视觉层面；允许为动态展示补充必要的表现层数据绑定，不改变产品功能与项目内容
> 目标：把"干净的 AI 模板感"洗成"有签名感的编辑刊物作品集"

---

## 审议结论

**方向通过，原案不直接照做，按本版约束实施。**

“编辑刊物感”是有效的差异化方向，但作品集最终仍要服务于三件事：让人快速认出 Milo、快速理解项目、快速找到验证证据。因此所有装饰都必须服从首屏可读性、项目切换稳定性和证据可信度。

本版重点收敛四件事：

1. Hero 的字号和留白不超过首屏预算。
2. Fraunces 只承担 Latin display 角色，中文衬线单独控制，不强行混用字重。
3. Case tint 只做低强度识别，不把页面做成五色 SaaS。
4. 不新增未经现有数据支持的“数据栏”或过强的成果表述。

## 1. 现状诊断

| 维度 | 现状 | 问题 |
|---|---|---|
| **字体** | SF Pro Display + PingFang SC + Songti SC（仅原型内部使用） | 全站没有一个 characterful display 字体做视觉签名；hero 标题与 macOS 系统字同源，无辨识度 |
| **色彩** | forest `#204f3d` + paper `#f4f3ef` + warm beige `#b98a4d`；已有轻微 radial gradient，桌面端已有网格背景 | 氛围层次存在但过弱；`--warm` 已声明却没有被统一消费；5 个 case 的外层视觉同质 |
| **Hero** | 名字 + 一句副标 + 2 列布局 | 有留白但缺少视觉签名；名字与身份仍处在同一层级，无引言/署名锚点 |
| **节奏** | masthead → intro → workbench → thinking → footer，每个 section 权重接近 | 缺少 full-bleed moment、pull quote、大留白呼吸；thinking 4 等分栅格过于工整 |
| **质感** | 纯色/浅渐变背景 + 阴影 + 桌面网格 | 缺少纸张或印刷感；背景层次不足，但不需要同时叠加多种纹理 |
| **原型** | 5 个 case 共用 simple-ui 外框，但内部结构已不同 | 外框架和强调色不足以区分项目；局部说明文字偏小，核心信息密度偏高 |
| **数字 01-05** | 30×30 方框 + Avenir 10px | 过于 functional，没有编辑刊物的页码仪式感 |

**一句话总结**：现在是一份"工整、得体、安全"的极简作品集；缺少的是**视觉签名**与**层次节奏**。

---

## 2. 设计语言锚点（改造前的方向定位）

在动手前先定锚——四个不能动摇的原则：

1. **编辑刊物感优先于科技感**。参考 *It's Nice That*、*Are.na*、*AIGA Eye on Design*、*The Browser*——它们的共性是：衬线 display + 严肃栅格 + 克制色彩 + 强对比层次。
2. **保留 forest 主色**。`#204f3d` 已经是签名色，不换；但要让它从"点缀"升级到"主导氛围"。
3. **不要堆砌**。每一项改动都要能回答"这解决了什么诊断问题"——否则就是装饰主义。
4. **可信度与可读性优先**。视觉冲击不能遮挡项目证据，也不能依赖低对比度文字或极小字号成立。

**不要参考**：Linear、Vercel、Stripe 这类 SaaS 落地页。它们的产品是开发者工具，气质完全不同。

---

## 3. 改造方向（六项详细方案）

### A. 字体签名系统（P0 · 最高优先级）

**问题**：hero "Milo AI 产品经理" 用 SF Pro 720，与 macOS 系统字同源，毫无记忆点。

**方案**：

引入 **Fraunces** 作为 Latin display 字体；中文标题和引言使用 **Noto Serif SC / Songti SC**。不要要求 Fraunces 承担中文，也不要把所有内容都改成衬线。

| 位置 | 字体 | 字号 / 字重 | 备注 |
|---|---|---|---|
| Hero h1 "Milo" | Fraunces Italic | `clamp(64px, 11vw, 140px)` / 400-500 | 单词独占一行；桌面端不超过 140px，避免挤压首屏 |
| Hero 副标 "AI 产品经理" | Noto Serif SC / Songti SC | 24-28px / 300-400 | 中文配套衬线，移动端同步缩小 |
| Section h2 | Fraunces Roman + 中文衬线 fallback | `clamp(36px, 4vw, 52px)` / 500 | 只替换标题，不替换正文 |
| Case 标题 h2 | Fraunces Roman + 中文衬线 fallback | 28-32px / 500 | 项目名用衬线，类型/角色保持 sans |
| Thinking 引言 | 中文衬线，Latin 使用 Fraunces Italic | `clamp(32px, 4.2vw, 56px)` / 400 | 关键句强调，限制最大宽度 |
| Eyebrow / 数据 / 正文 | 保持现有 Avenir / SF Pro / PingFang SC | 正文 14-16px；caption 不低于 11px | 功能性文字保持 sans，避免全站“字体表演” |

**中文配套**：思源宋体 Noto Serif SC（开源、weight 完整），与 Fraunces 视觉重量匹配。

**字重对比强化**：
- 现在：720 / 650 / 500 / 400 — 跨度小，层次扁平
- 改造后：500 display / 400 正文 / 300 中文衬线 — 用字号、字面和留白拉开层次
- 不使用未加载的 900 / 200；加载链接和实际 CSS 的字重必须保持一致

**预期效果**：hero 第一眼有"这不是模板"的辨识度，section 标题有刊物感。

---

### B. 色彩氛围升级（P0）

**问题**：主色存在感弱、底色过 flat、warm accent 浪费、case 同质。

**方案 B1 · 主色深化与背景氛围**

```
--forest-deep: #163328;     /* 新增：仅用于局部深色分隔块，不铺满 Hero */
--forest: #204f3d;          /* 保留：主色 */
--forest-soft: #e5ece7;     /* 保留：浅色背景 */
--warm: #b98a4d;            /* 升级：从背景装饰提升到 secondary accent */
--warm-bright: #d4a574;     /* 新增：warm 高亮态，用于 hover/active */
--paper: #f4f3ef;           /* 保留 */
--ink: #161a17;             /* 保留 */
```

**Hero 背景层**：在现有 radial gradient 基础上做轻量增强，不引入整块深色渐变：
```css
background:
  radial-gradient(ellipse at 20% 0%, rgba(32,79,61,.08), transparent 50%),
  radial-gradient(ellipse at 80% 100%, rgba(185,138,77,.06), transparent 50%),
  url('data:image/svg+xml;...'); /* 可选 SVG noise，opacity <= 0.025 */
```

**Body 纸张纹理**：仅在视觉测试确认需要时使用 SVG turbulence noise，放在 `body::before` 独立层，`pointer-events: none`，opacity 不超过 0.025；同时保留 print、forced-colors 和低性能设备下的降级方案。不要同时叠加 mesh、网格和高强度 noise。

**方案 B2 · 5 个 Case 各配 Signature Tint**

每个 case 在主视觉色调不变的前提下，给 case card 背景、原型内部强调色和 index 配一个微妙的染色。tint 只用于边框、浅色背景、进度条和局部标识，不直接作为正文色，也不默认配白字按钮：

| 项目 | Signature tint | 用法 |
|---|---|---|
| Milo-Cut | forest（保持） | 原型内按钮、边框 |
| Milo-isLearning | `#a47b1e`（深暖黄） | 原型按钮、aside 强调；浅色版本用于背景 |
| SocialSimuLLM | `#4c3f77`（深紫） | map-grid 高亮、event-card |
| SherpaNote | `#2e6878`（青蓝） | wave 进度、aside 标签 |
| FF Intelligent Neo | `#8d512d`（深赭石） | job-progress、state-ok；浅色版本用于背景 |

每个 case 切换时，case card 的背景或左侧装饰条切到对应 tint——视觉立刻有差异化。

**方案 B3 · Warm Accent 提权**

把 `--warm` 从"按钮边框偶尔出现"升级到，但同一屏最多使用两种 warm 视觉手势：
- Hero 名字下方一道 4px 横线
- Active 项目的 index 数字旁边或下方的短线（数字底色仍优先使用 forest，保证白字对比度）
- 引言 pull quote 的左竖线
- 关键 metric 下划线（仅在存在对应证据时使用）

---

### C. Hero 重塑（P0）

**问题**：现在的 hero 是 2 列 grid + 名字 + tagline + 极简留白——工整但没有记忆点。

**方案**：保留 2 列结构，但重塑内容层次；Hero 总高度控制在桌面首屏可见范围内，移动端不强行保留右侧装饰栏。

```
┌────────────────────────────────────────────────────────────┐
│  PORTFOLIO · 2026                                           │
│                                                            │
│  Milo.                          [右侧原创几何锚点，可选]      │
│  AI 产品经理                                                │
│  ──── (warm 横线)                                          │
│                                                            │
│  把 AI 能力做成可信、可用、                                  │
│  可验证的产品工作流。                                        │
│                                                            │
│  ─ 5 个 AI 工作流案例 · 从问题到验证                         │
│  ─ 杭州 · 开放实习 / 合作（仅在信息真实且有承接入口时使用）   │
└────────────────────────────────────────────────────────────┘
```

**关键改动**：
1. "Milo" 单词独占一行，**Fraunces italic 64-140px**——形成签名感但不消耗全部首屏
2. "AI 产品经理" 中文 Songti SC light 28px，紧贴 Milo 下方
3. "Milo" 下方一道 **4px warm 横线**（width 80px）做视觉锚点
4. 副标改用 **pull quote 排版**：左侧 3px forest 竖线 + 24px 斜体衬线
5. 加两行 **caption-style 自述**（11-12px uppercase tracking）——建立人物存在感；不要用未经验证的泛化成果数字
6. 右侧预留空间放一个 **抽象 SVG 视觉锚点**（可选，只使用原创几何图形，不做关键词云堆砌）

**取舍**：如果做 SVG 锚点，必须是原创几何图形，**不要用任何 emoji、icon font、stock illustration**。

---

### D. 节奏与不对称（P1）

**问题**：section 之间权重过于平均；thinking 4 等分栅格工整到呆板；case header 对称 flex 缺乏编辑感。

**方案 D1 · 插入 Full-bleed Moment**

在 workbench 和 thinking 之间，加一段 full-bleed 引言区（左右大留白）：

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│        "不让 AI 直接执行删除，                                │
│         把模型判断变成附着在字幕上的可解释建议。"              │
│                                                            │
│         —— Milo-Cut · 产品判断                              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

- `clamp(32px, 4.2vw, 56px)`；中文由中文衬线承担，Latin 才使用 Fraunces italic
- forest 色
- 取自当前 active case 的 `decision` 字段（动态切换）
- 限制最大宽度 880px，桌面上下 80-96px，移动端上下 44-64px
- 为不同长度的 decision 预留稳定高度，避免切换项目时发生 layout shift

**方案 D2 · Thinking 不对称栅格**

把现有 4 等分栅格改成 **不完全等宽但保持线性阅读顺序的 12 列布局**：

```
┌──────────────┬───────────────────────┐
│              │                       │
│   01 问题    │   03 方案             │
│   (大)       │   (大)                │
│              │                       │
├──────────────┼───────────┬───────────┤
│  02 判断     │           │           │
├──────────────┤  04 验证  │  留白/索引 │
│              │  (中)     │           │
│              │           │           │
└──────────────┴───────────┴───────────┘
```

推荐先采用更保守的实现：保持 DOM 顺序 01 → 02 → 03 → 04，让“问题”和“方案”占 1.5 倍宽度，“判断”和“验证”占 0.5-1 倍；不新增“数据栏”。移动端恢复为单列。

**方案 D3 · Case Header 编辑式不对称**

现在：
```
[标题 + tagline]                    [meta + actions]
```

改成：
```
[01 — AI 视频工作流（caption）]
[ Milo-Cut (Fraunces 大字)       ]   [meta]
[ tagline (斜体衬线)              ]   [actions]
                                   ↑ 细栏
```

标题区占 8/12，右侧 meta 缩成 3/12 细栏（含角色、原则、actions）；移动端恢复单列，meta 不应直接隐藏关键证据。

---

### E. Index 数字重塑（P1）

**问题**：现在 30×30 方框 + Avenir 10px——纯 functional，没有编辑刊物的页码仪式感。

**方案 E1 · 大号 Serif Italic**

把 rail 左侧的 01-05 改成：

```
01    ← Fraunces italic 42-48px, forest 色
———   ← 1px 横线
AI 视频工作流  ← 10px uppercase tracking
```

数字本身成为视觉锚点，不需要方框。

**方案 E2 · 页码式 Annotation（备选）**

如果 E1 在窄桌面太占空间：

```
No. 01  ─────────  AI 视频工作流
```

细 serif 数字 + 横线 + 类别，编辑刊物页码感。

**Case 内部 index** 也同步：现在 case-title 没有 index，可以加 "01 / 05" 的 fraction 标注在右上角。

---

### F. 原型视觉差异化（P1）

**问题**：5 个 case 的外层 mock 风格相似；局部说明文字 9-10px，牺牲了可读性。

**方案 F1 · 项目专属强调色**

每个原型内部的 primary 按钮、active 元素、标题色用对应 signature tint（见 B2）。当下用户切换 case，原型内部主色跟着变——视觉差异立刻拉开。核心文字仍使用 ink/forest 等高对比色，tint 不承担正文阅读功能。

**方案 F2 · 字号整体放大**

把 simple-ui 中的核心说明文字提到 11-12px，caption/状态标签保留 9-10px；桌面原型高度可从 560px → 600px，但平板和移动端必须采用独立高度或内部滚动，不能靠固定高度裁切内容。牺牲少量信息密度换可读性。

**方案 F3 · Project Stamp / Watermark**

在每个原型的右下角或工具栏右上角，加一个**项目标记**：

```
[ MC · 01 / 05 ]   ← 小字 monospace，warm 色
```

5 个原型有“刊物专栏”感，但标记必须是辅助识别，不得盖住原型内容，也不能伪装成真实产品品牌资产。

---

## 4. 实施分期

| Phase | 包含项 | 预估工作量 | 视觉收益 |
|---|---|---|---|
| **P0** | A（字体）+ B（色彩 token）+ C（Hero）+ 首屏/对比度检查 | 1-2 天 | ★★★★★ |
| **P1** | D1（引言区）+ D3（Case header）+ E（数字）+ F1/F2（原型差异化与可读性） | 1-1.5 天 | ★★★★ |
| **P2（可选）** | D2（不等宽栅格）+ 原创几何 SVG | 0.5-1 天 | ★★ |
| **暂缓** | Dark mode / 自定义光标 / 额外数据栏 | - | 非当前核心收益 |

**建议**：P0 一次性做完（字体、色彩、Hero 是相互成就的），先验证 1440px、1024px、390px 三个宽度下的首屏和项目切换；P1 再视视觉反馈和阅读数据决定。P2 不应阻塞上线。

---

## 5. 关键参数速查

### 字体加载

优先使用 `next/font/local` 或自托管字体，并只保留实际使用的字重/字符集。若暂时使用外部字体，必须保留 `display=swap`、可靠的本地 fallback，并验证无网络时 Hero 仍然可读。不要使用一条只加载 400/500/700 的链接，却在 CSS 中声明 900/300/200。

建议拆成两个字体角色：

- `Fraunces`：只负责 Milo、Latin 项目名、数字和英文引言。
- `Noto Serif SC / Songti SC`：只负责中文标题、中文引言和少量重点内容。
- `SF Pro Display / PingFang SC`：负责导航、正文、meta、状态和操作文字。

### CSS 变量更新

```css
:root {
  /* 色彩 */
  --forest-deep: #163328;
  --forest: #204f3d;
  --forest-soft: #e5ece7;
  --warm: #b98a4d;
  --warm-bright: #d4a574;
  --paper: #f4f3ef;
  --surface: #fbfaf7;
  --ink: #161a17;
  --muted: #747971;
  --line: #d9dbd4;

  /* 字体 */
  --font-display: "Fraunces", "Noto Serif SC", "Songti SC", serif;
  --font-sans: "SF Pro Display", "PingFang SC", system-ui, sans-serif;
  --font-mono: "Avenir Next", "JetBrains Mono", monospace;

  /* Case signature tints */
  --tint-cut: var(--forest);
  --tint-learning: #a47b1e;
  --tint-social: #4c3f77;
  --tint-sherpa: #2e6878;
  --tint-ff: #8d512d;

  /* 每个 tint 还需配套浅色 surface；原始 tint 不直接承担正文色 */
  --tint-learning-soft: #f4ead0;
  --tint-social-soft: #ebe8f2;
  --tint-sherpa-soft: #e5eef0;
  --tint-ff-soft: #f1e5dc;
}
```

### 字号阶梯（建议）

| Token | Size | Weight | Family | 用途 |
|---|---|---|---|---|
| `display-xl` | clamp(64px, 11vw, 140px) | 400-500 italic | Fraunces | Hero 单词 |
| `display-l` | clamp(32px, 4.2vw, 56px) | 400 | 中文衬线 + Fraunces Latin | Full-bleed 引言 |
| `display-m` | clamp(36px, 4vw, 52px) | 500 | Fraunces + 中文衬线 fallback | Section h2 |
| `display-s` | 28-32px | 500 | Fraunces + 中文衬线 fallback | Case 标题 |
| `body-l` | 20-24px | 400 | Noto Serif SC / Songti SC | Pull quote 副标 |
| `body-m` | 16px | 400 | var(--font-sans) | 正文 |
| `body-s` | 14px | 400 | var(--font-sans) | 次要正文 |
| `caption` | 11px | 650 | var(--font-mono) | Eyebrow / annotation |
| `micro` | 10px | 700 uppercase tracking .14em | var(--font-mono) | 标签 / 状态 |

---

### 上线前验收

- 1440px、1024px、390px 三个宽度下，Hero 不遮挡项目入口，Case 切换不造成明显跳动。
- 正文和项目说明不低于 14px；11-12px 只用于 caption，9-10px 只保留在原型内部的辅助状态。
- 所有 tint 与纸张、surface、白字按钮分别检查对比度；暖黄不能直接配白字。
- `prefers-reduced-motion`、无网络字体 fallback、print 和 forced-colors 至少各检查一次。
- 项目切换、外部链接、GitHub 入口和原有移动端横向项目 rail 不因装饰层失效。

---

## 6. 不要做的事

- **不要 emoji**（任何位置）
- **不要 icon font**（Lucide / Heroicons 等）
- **不要 stock illustration**（Unsplash / Storyset）
- **不要渐变文字**（`background-clip: text`）——太 SaaS
- **不要 glass morphism**——太 2021
- **不要自动轮播 / 视差滚动**——编辑刊物不会这样
- **不要参考 Linear / Vercel / Stripe 的视觉**——气质不对

---

## 7. 参考样本（氛围锚点，不复制）

| 站点 | 借鉴点 |
|---|---|
| **Are.na** | 编辑栅格 + 衬线 + 严肃留白 |
| **It's Nice That** | hero 大字 + 色块切割 + 内容优先 |
| **The Browser Company** | 文字优先 + 克制色彩 + 编辑感 |
| **Robin Rendle** | italic 强调 + 段落节奏 |
| **Mubi Notebook** | 衬线 + 影像 +刊物气质 |
| **AIGA Eye on Design** | 不对称栅格 + 大数字索引 |

访问时关注：字体处理、留白比例、色彩克制、层次对比——不是抄布局。

---

## 8. 验收标准

P0 完成后，用户第一眼应该感受到：

1. ✅ "这不像 AI 生成的模板"——hero 字体有辨识度
2. ✅ "这是一个有人格的产品经理"——caption 自述建立存在感
3. ✅ "色彩有层次"——背景不再是纯色 flat
4. ✅ "5 个项目视觉上有区分"——signature tint 让 case 不再雷同

如果上述任一条没达到，对应方向需要返工。

---

## 9. 下一步

待用户确认方向后：
- P0 三项（A+B+C）合并为一份实施 PR，一次性完成
- 实施前先本地 `npm run dev` 截图当前状态作为 before 对照
- 实施后同样视角截图作为 after，附在 PR 描述里
