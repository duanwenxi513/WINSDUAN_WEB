import { motion } from "framer-motion";

const timeline = [
  {
    type: "work",
    title: "高级 UI/UX 设计师",
    org: "某知名科技公司",
    period: "2024 — 至今",
    description:
      "负责核心产品的海外版重构，主导设计系统（Design System）从 1.0 到 2.0 的迭代，提升团队协作效率 30%。",
  },
  {
    type: "work",
    title: "体验设计师",
    org: "创新产品工作室",
    period: "2021 — 2024",
    description:
      "从零到一参与了 3 款移动端 App 的全流程设计，其中一款在 App Store 获得官方推荐。",
  },
  {
    type: "work",
    title: "视觉设计师",
    org: "品牌设计机构",
    period: "2019 — 2021",
    description:
      "主导多个消费品牌的视觉升级项目，覆盖品牌标识、包装设计和线上视觉传达。",
  },
  {
    type: "education",
    title: "视觉传达设计 学士",
    org: "某美术学院",
    period: "2017 — 2021",
    description:
      "主修 UI 设计、动效与品牌传播，连续三年获得一等奖学金。",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative py-32 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="section-title">Experience ↓</p>
          <h2 className="section-heading">工作与教育经历</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-2 bottom-2 w-px bg-[rgba(255,255,255,0.08)] hidden lg:block" />

          <div className="flex flex-col gap-14">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative lg:pl-16"
              >
                {/* Dot */}
                <div className="hidden lg:flex absolute left-[18px] top-2 w-[9px] h-[9px] rounded-full bg-[#E5A93C]" />

                {/* Mobile badge */}
                <div className="lg:hidden mb-3">
                  <span className="text-xs tracking-[0.18em] text-[#E5A93C] uppercase">
                    {item.period}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-baseline lg:gap-8">
                  <div className="hidden lg:block w-[140px] flex-shrink-0">
                    <span className="text-xs tracking-[0.18em] text-[#666666]">
                      {item.period}
                    </span>
                  </div>
                  <div className="flex-1 card p-8 lg:p-10 card-lift">
                    <h3 className="text-xl font-bold text-[#f5f5f5] mb-1 tracking-tight">
                      {item.title}
                      <span className="text-[#888888] font-normal"> @ {item.org}</span>
                    </h3>
                    <p className="text-sm leading-relaxed text-[#888888] mt-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
