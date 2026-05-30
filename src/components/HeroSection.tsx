import { FileText, Download, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-10 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-600 mb-6">
          <FileText className="w-4 h-4" />
          免费在线简历制作 · 一键导出PDF
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          专业简历
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> 一键生成 </span>
        </h1>

        <p className="text-lg text-gray-500 mb-6">
          填写信息 → 选择模板 → 导出PDF。3分钟搞定一份专业简历。
        </p>

        <div className="flex justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-1.5"><Zap className="w-4 h-4" /> 3分钟完成</div>
          <div className="flex items-center gap-1.5"><FileText className="w-4 h-4" /> 3套模板</div>
          <div className="flex items-center gap-1.5"><Download className="w-4 h-4" /> 免费导出</div>
        </div>
      </div>
    </section>
  );
}
