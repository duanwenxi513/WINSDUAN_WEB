import { motion } from "framer-motion";

const timeline = [
  {
    type: "education",
    title: "金融数学 本科在读",
    org: "北京化工大学",
    period: "2024 — 至今（大二）",
    description:
      "专业学习打下了扎实的逻辑和数据分析基础。自认为学新东西的速度还可以，遇到不熟悉的领域不会太害怕。",
  },
  {
    type: "research",
    title: "科研项目（双课题并行）",
    org: "交通 + 金融方向",
    period: "进行中",
    description:
      "同时参与两个科研项目，分别聚焦交通与金融领域，均与人工智能紧密结合。边做边学，在实践中理解学术研究的方法论。",
  },
  {
    type: "content",
    title: "自媒体内容创作",
    org: "全平台同名：Duan",
    period: "业余时间",
    description:
      "创作并发布视频内容，目前全平台累计播放量突破 10 万。喜欢跟不同背景的人交流各自在做的事，还在不断探索中。",
  },
  {
    type: "photo",
    title: "摄影实践",
    org: "摄影作品集整理中",
    period: "持续积累",
    description:
      "拍了有一段时间了，积累了一些自己还算满意的作品。不太追求器材，更在意画面本身是不是有意思。",
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative py-32 lg:py-40">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <p className="section-label">Experience</p>
          <h2 className="section-heading">经历与探索</h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[20px] top-1 bottom-1 w-px bg-[rgba(255,255,255,0.04)] hidden lg:block" />

          <div className="flex flex-col gap-16">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="relative lg:pl-16"
              >
                <div className="hidden lg:flex absolute left-[16px] top-1.5 w-[9px] h-[9px] rounded-full border border-[rgba(255,255,255,0.12)] bg-[#08080a]" />

                <div className="lg:hidden mb-3">
                  <span className="text-[11px] tracking-[0.16em] text-[#5c5c63] uppercase font-medium">
                    {item.period}
                  </span>
                </div>

                <div className="flex flex-col lg:flex-row lg:items-baseline lg:gap-10">
                  <div className="hidden lg:block w-[140px] flex-shrink-0 text-right">
                    <span className="text-[11px] tracking-[0.16em] text-[#5c5c63] uppercase font-medium">
                      {item.period}
                    </span>
                  </div>
                  <div className="flex-1 card p-8 lg:p-10 card-lift">
                    <h3 className="text-lg font-semibold text-[#ededee] mb-1 tracking-[-0.01em]">
                      {item.title}
                      <span className="text-[#8b8b90] font-normal"> · {item.org}</span>
                    </h3>
                    <p className="text-sm leading-relaxed text-[#8b8b90] mt-3 font-light">
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
