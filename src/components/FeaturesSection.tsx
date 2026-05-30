import { FileText, Download, Eye, Palette, Shield, Zap } from "lucide-react";

const features = [
  { icon: Palette, title: "3套精美模板", desc: "现代、经典、极简，总有一款适合你" },
  { icon: Eye, title: "实时预览", desc: "编辑即预览，所见即所得" },
  { icon: Download, title: "免费导出PDF", desc: "一键导出高质量PDF，直接投递" },
  { icon: Zap, title: "3分钟完成", desc: "预填示例数据，快速上手" },
  { icon: Shield, title: "隐私安全", desc: "数据只在你的浏览器中，不上传服务器" },
  { icon: FileText, title: "ATS友好", desc: "格式简洁，方便HR系统和人工阅读" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">为什么选择 ResumeCraft</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-5 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all">
              <f.icon className="w-8 h-8 text-blue-500 mb-3" />
              <h3 className="font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
