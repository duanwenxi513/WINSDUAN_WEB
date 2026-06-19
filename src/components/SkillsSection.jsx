import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "学术与技术",
    tags: ["金融数学", "Python", "数据分析", "AI 工作流", "提示工程", "科研方法论"],
  },
  {
    category: "视觉与内容",
    tags: ["摄影", "视频创作", "自媒体运营", "内容策划", "剪辑后期"],
  },
  {
    category: "AI 工具链",
    tags: ["Stable Diffusion", "ComfyUI", "图像生成", "AI 辅助思考", "效率工具"],
  },
  {
    category: "软实力",
    tags: ["快速学习", "跨领域探索", "逻辑思维", "信息搜集", "团队协作"],
  },
];

export default function SkillsSection() {
  return (
    <section className="relative py-32 lg:py-40">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(200,200,200,0.5) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <p className="section-label">Skills</p>
          <h2 className="section-heading">擅长领域</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="card card-lift p-10 lg:p-12"
            >
              <h3 className="text-base font-semibold text-[#ededee] mb-6 tracking-[-0.01em]">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
