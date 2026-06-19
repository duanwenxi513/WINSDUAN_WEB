import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiDownload } from "react-icons/fi";

const stats = [
  { value: "50+", label: "作品项目" },
  { value: "30+", label: "合作客户" },
  { value: "8+", label: "年经验" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 lg:py-36">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-20"
        >
          <p className="section-title">About ↓</p>
          <h2 className="section-heading">关于我</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-20 lg:gap-28 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="relative mb-10">
              <div className="w-44 h-44 lg:w-52 lg:h-52 rounded-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] flex items-center justify-center">
                <span className="text-[#E5A93C] text-6xl font-extralight tracking-tighter">
                  W
                </span>
              </div>
            </div>

            <h2 className="text-[36px] font-extrabold text-[#f5f5f5] mb-3 tracking-tight">
              Wins Duan
            </h2>
            <p className="text-[#E5A93C] text-sm tracking-[0.22em] uppercase mb-10 leading-relaxed">
              Visual Designer / AI Designer
              <br />
              Brand Strategist
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#E5A93C] text-[#000000] text-sm font-semibold rounded-full hover:bg-amber-400 transition-all duration-300 mb-10"
            >
              <FiDownload size={15} />
              下载简历 PDF
            </a>

            <div className="flex flex-col gap-4 text-sm text-[#888888]">
              <span className="flex items-center gap-3 justify-center lg:justify-start">
                <FiMapPin size={14} />
                Shanghai, China
              </span>
              <span className="flex items-center gap-3 justify-center lg:justify-start">
                <FiMail size={14} />
                hello@winsduan.com
              </span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-base leading-relaxed text-[#888888] mb-6 font-light max-w-lg">
              我是一名跨领域设计师，深耕视觉品牌设计、AI 驱动创意工具与用户体验设计。
              擅长在美学与技术的交汇处创造具有持久印象的品牌体验。
            </p>
            <p className="text-sm leading-relaxed text-[#666666] font-light mb-14 max-w-lg">
              过去八年，我先后与多家创业公司、设计机构和全球品牌合作，覆盖数字产品设计、
              品牌策略与创意指导。我注重用设计解决问题，用视觉传递价值，用技术拓展创意的边界。
            </p>

            <div className="grid grid-cols-3 gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="stat-number mb-2">{stat.value}</div>
                  <div className="text-xs tracking-[0.18em] text-[#666666] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
