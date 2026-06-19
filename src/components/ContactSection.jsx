import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Wins 是我们合作过的最有设计嗅觉的品牌设计师，从策略到执行一气呵成。他对细节的把控令人印象深刻。",
    author: "张明",
    role: "CEO, Aurora Tech",
  },
  {
    quote:
      "在 Nexus Design System 项目中，他的系统化思维极大地提升了我们团队的产出质量和一致性。",
    author: "李思远",
    role: "产品总监, Nexus SaaS",
  },
  {
    quote:
      "Wins 不仅仅是一个设计师，更是一位能理解业务目标的创意伙伴，他总能给出超出预期的方案。",
    author: "Catherine Liu",
    role: "创始人, Lumière Studio",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative">

      {/* ── Testimonials ── */}
      <div className="py-32 lg:py-36">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <p className="section-title">Testimonials ↓</p>
            <h2 className="section-heading">合作评价</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="card p-9 lg:p-10 card-lift relative"
              >
                <span className="absolute top-5 right-7 text-5xl text-[rgba(255,255,255,0.03)] font-serif leading-none select-none">
                  &ldquo;
                </span>
                <p className="text-sm leading-relaxed text-[#888888] mb-7 relative z-10">
                  {item.quote}
                </p>
                <div>
                  <div className="text-sm font-semibold text-[#f5f5f5]">
                    {item.author}
                  </div>
                  <div className="text-xs text-[#666666] mt-1">
                    {item.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Contact CTA ── */}
      <div className="relative py-32 lg:py-36 text-center">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Contact ↓
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="section-heading mb-8"
          >
            Let&rsquo;s Build
            <br />
            Something Great
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-sm text-[#888888] max-w-md mx-auto mb-14 leading-relaxed"
          >
            如果你有项目想要合作，或者只是想打个招呼，欢迎随时联系我。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          >
            <a
              href="mailto:hello@winsduan.com"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#E5A93C] text-[#000000] text-sm font-semibold rounded-full hover:bg-amber-400 transition-all duration-300"
            >
              hello@winsduan.com
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-[rgba(229,169,60,0.35)] text-[#E5A93C] text-sm font-semibold rounded-full hover:bg-[#E5A93C]/10 hover:shadow-[0_0_24px_rgba(229,169,60,0.15)] transition-all duration-300"
            >
              开始合作
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="flex items-center justify-center gap-8 text-sm text-[#666666]"
          >
            <a href="#" className="hover-underline">Behance</a>
            <span className="text-[rgba(255,255,255,0.08)]">/</span>
            <a href="#" className="hover-underline">Dribbble</a>
            <span className="text-[rgba(255,255,255,0.08)]">/</span>
            <a href="#" className="hover-underline">LinkedIn</a>
            <span className="text-[rgba(255,255,255,0.08)]">/</span>
            <a href="#" className="hover-underline">GitHub</a>
          </motion.div>

        </div>

        {/* Footer */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20 mt-24">
          <div className="border-t border-[rgba(255,255,255,0.06)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-[#666666] tracking-wider">
              &copy; {new Date().getFullYear()} Wins Duan &mdash; All rights reserved.
            </span>
            <span className="text-xs text-[#666666] tracking-wider">
              Designed &amp; Built by Wins Duan
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
