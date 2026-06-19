import { motion } from "framer-motion";
import { FiMail, FiMapPin } from "react-icons/fi";

const stats = [
  { value: "10W+", label: "全平台播放" },
  { value: "2", label: "科研项目" },
  { value: "大二", label: "金融数学在读" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 lg:py-40">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <p className="section-label">About</p>
          <h2 className="section-heading">关于我</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-32 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Avatar */}
            <div className="relative mb-12">
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full border border-[rgba(255,255,255,0.06)] flex items-center justify-center bg-[rgba(255,255,255,0.015)]">
                <span className="text-[#ededee] text-7xl font-light tracking-tighter">
                  D
                </span>
              </div>
            </div>

            <h2 className="text-[36px] font-semibold text-[#ededee] mb-4 tracking-[-0.02em]">
              Duan
            </h2>
            <p className="text-[#5c5c63] text-sm tracking-[0.14em] uppercase mb-12 font-medium">
              金融数学 / AI / 摄影 / 内容创作
            </p>

            <div className="flex flex-col gap-4 text-sm text-[#8b8b90] font-light">
              <span className="flex items-center gap-3 justify-center lg:justify-start">
                <FiMapPin size={13} className="text-[#5c5c63]" />
                北京化工大学
              </span>
              <span className="flex items-center gap-3 justify-center lg:justify-start">
                <FiMail size={13} className="text-[#5c5c63]" />
                2359628970@qq.com
              </span>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-base leading-relaxed text-[#8b8b90] mb-8 font-light">
              我目前在北京化工大学读金融数学，大二。
            </p>
            <p className="text-sm leading-relaxed text-[#5c5c63] mb-4 font-light">
              平时喜欢折腾的东西比较杂——数学、AI、摄影、做视频，都在玩。不是什么都会，但对自己感兴趣的事情愿意花时间钻下去。
            </p>
            <p className="text-sm leading-relaxed text-[#5c5c63] mb-4 font-light">
              目前在同时跟两个科研项目，一个交通一个金融，都与人工智能结合比较紧密，边做边学，慢慢积累。
            </p>
            <p className="text-sm leading-relaxed text-[#5c5c63] mb-16 font-light">
              业余做内容创作，发过一些视频，目前全平台累计播放量刚过 10 万，还在摸索中。摄影拍了一段时间，积累了一些自己还算满意的作品。
            </p>

            <div className="grid grid-cols-3 gap-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="stat-number mb-2">{stat.value}</div>
                  <div className="text-[11px] tracking-[0.16em] text-[#5c5c63] uppercase font-medium">
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
