import { motion } from "framer-motion";
import { FiMail, FiArrowUpRight } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative bg-bg-secondary overflow-hidden"
    >
      {/* ── Contact CTA ── */}
      <div className="relative py-32 lg:py-40 text-center">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-[0.025] pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(200,200,200,0.5) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 relative z-10">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="section-label"
          >
            Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="section-heading mb-10"
          >
            保持联系
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm text-[#8b8b90] max-w-md mx-auto mb-16 leading-relaxed font-light"
          >
            兴趣比较广，也挺愿意认识新朋友。喜欢跟不同背景的人聊聊各自在做的事，欢迎来交流~
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          >
            <a href="mailto:2359628970@qq.com" className="btn-primary">
              <FiMail size={15} />
              2359628970@qq.com
            </a>
            <a href="#" className="btn-ghost">
              欢迎交流 <FiArrowUpRight size={15} />
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-8 text-sm text-[#5c5c63]"
          >
            <span className="text-[#5c5c63] text-xs tracking-wider">全平台同名：</span>
            <span className="text-[#ededee] font-medium">Duan</span>
            <span className="text-[rgba(255,255,255,0.06)]">/</span>
            <a href="#" className="hover-underline">GitHub</a>
            <span className="text-[rgba(255,255,255,0.06)]">/</span>
            <a href="#" className="hover-underline">Bilibili</a>
          </motion.div>

        </div>

        {/* Footer */}
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 mt-24">
          <div className="border-t border-[rgba(255,255,255,0.04)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[12px] text-[#5c5c63] tracking-[0.08em] font-light">
              &copy; {new Date().getFullYear()} Duan — Built with curiosity &amp; care
            </span>
            <span className="text-[12px] text-[#5c5c63] tracking-[0.08em] font-light">
              摄影作品集整理中，敬请期待
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
