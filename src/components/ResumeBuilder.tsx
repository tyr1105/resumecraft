"use client";

import { useState, useRef } from "react";
import { Download, Eye, Plus, Trash2, RotateCcw } from "lucide-react";
import { defaultResume, type ResumeData, type TemplateType } from "@/lib/resume-types";
import { ModernTemplate, ClassicTemplate, MinimalTemplate } from "@/lib/templates";

const templates: { key: TemplateType; name: string; desc: string }[] = [
  { key: "modern", name: "现代", desc: "侧边栏风格" },
  { key: "classic", name: "经典", desc: "传统风格" },
  { key: "minimal", name: "极简", desc: "简约风格" },
];

function EditSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <label className="block text-xs font-medium text-gray-500 uppercase tracking-wider mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inputCls = "w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-100 outline-none text-sm";

export default function ResumeBuilder() {
  const [data, setData] = useState<ResumeData>(defaultResume);
  const [template, setTemplate] = useState<TemplateType>("modern");
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  const printRef = useRef<HTMLDivElement>(null);

  const update = (field: string, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const updateExp = (index: number, field: string, value: string) => {
    setData((prev) => {
      const exp = [...prev.experience];
      exp[index] = { ...exp[index], [field]: value };
      return { ...prev, experience: exp };
    });
  };

  const addExp = () => {
    setData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { company: "", position: "", startDate: "", endDate: "", description: "" },
      ],
    }));
  };

  const removeExp = (index: number) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const updateEdu = (index: number, field: string, value: string) => {
    setData((prev) => {
      const edu = [...prev.education];
      edu[index] = { ...edu[index], [field]: value };
      return { ...prev, education: edu };
    });
  };

  const addEdu = () => {
    setData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { school: "", degree: "", major: "", startDate: "", endDate: "" },
      ],
    }));
  };

  const updateSkills = (value: string) => {
    setData((prev) => ({
      ...prev,
      skills: value.split(/[,，、]/).map((s) => s.trim()).filter(Boolean),
    }));
  };

  const handlePrint = () => {
    const printContent = printRef.current;
    if (!printContent) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <html><head><title>${data.name} - 简历</title>
      <style>
        body { margin: 0; padding: 20px; background: white; }
        @media print { body { padding: 0; } }
      </style>
      </head><body>
      ${printContent.innerHTML}
      <script>window.onload=function(){window.print();window.close();}<\/script>
      </body></html>
    `);
    printWindow.document.close();
  };

  const handleReset = () => {
    setData(defaultResume);
  };

  const TemplateComponent =
    template === "modern" ? ModernTemplate :
    template === "classic" ? ClassicTemplate :
    MinimalTemplate;

  return (
    <div className="min-h-screen">
      {/* 工具栏 */}
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur border-b border-gray-200 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">模板：</span>
            {templates.map((t) => (
              <button
                key={t.key}
                onClick={() => setTemplate(t.key)}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors cursor-pointer ${
                  template === t.key
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMode(mode === "edit" ? "preview" : "edit")}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              {mode === "edit" ? "预览" : "编辑"}
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              导出PDF
            </button>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
              title="重置"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* 编辑面板 */}
          {mode === "edit" && (
            <div className="w-[400px] flex-shrink-0 space-y-6">
              {/* 基本信息 */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-800 mb-3">基本信息</h3>
                <div className="grid grid-cols-2 gap-3">
                  <EditSection label="姓名">
                    <input className={inputCls} value={data.name} onChange={(e) => update("name", e.target.value)} />
                  </EditSection>
                  <EditSection label="职位">
                    <input className={inputCls} value={data.title} onChange={(e) => update("title", e.target.value)} />
                  </EditSection>
                  <EditSection label="电话">
                    <input className={inputCls} value={data.phone} onChange={(e) => update("phone", e.target.value)} />
                  </EditSection>
                  <EditSection label="邮箱">
                    <input className={inputCls} value={data.email} onChange={(e) => update("email", e.target.value)} />
                  </EditSection>
                </div>
                <EditSection label="城市">
                  <input className={inputCls} value={data.location} onChange={(e) => update("location", e.target.value)} />
                </EditSection>
                <EditSection label="个人简介">
                  <textarea className={`${inputCls} resize-none`} rows={3} value={data.summary} onChange={(e) => update("summary", e.target.value)} />
                </EditSection>
              </div>

              {/* 工作经历 */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-800">工作经历</h3>
                  <button onClick={addExp} className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer">
                    <Plus className="w-3 h-3" /> 添加
                  </button>
                </div>
                {data.experience.map((exp, i) => (
                  <div key={i} className="mb-4 p-3 bg-gray-50 rounded-lg relative">
                    <button
                      onClick={() => removeExp(i)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <input className={inputCls} placeholder="公司" value={exp.company} onChange={(e) => updateExp(i, "company", e.target.value)} />
                      <input className={inputCls} placeholder="职位" value={exp.position} onChange={(e) => updateExp(i, "position", e.target.value)} />
                      <input className={inputCls} placeholder="开始时间" value={exp.startDate} onChange={(e) => updateExp(i, "startDate", e.target.value)} />
                      <input className={inputCls} placeholder="结束时间" value={exp.endDate} onChange={(e) => updateExp(i, "endDate", e.target.value)} />
                    </div>
                    <textarea className={`${inputCls} resize-none`} rows={2} placeholder="工作描述" value={exp.description} onChange={(e) => updateExp(i, "description", e.target.value)} />
                  </div>
                ))}
              </div>

              {/* 教育背景 */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-800">教育背景</h3>
                  <button onClick={addEdu} className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1 cursor-pointer">
                    <Plus className="w-3 h-3" /> 添加
                  </button>
                </div>
                {data.education.map((edu, i) => (
                  <div key={i} className="mb-3 grid grid-cols-2 gap-2">
                    <input className={inputCls} placeholder="学校" value={edu.school} onChange={(e) => updateEdu(i, "school", e.target.value)} />
                    <input className={inputCls} placeholder="学位" value={edu.degree} onChange={(e) => updateEdu(i, "degree", e.target.value)} />
                    <input className={inputCls} placeholder="专业" value={edu.major} onChange={(e) => updateEdu(i, "major", e.target.value)} />
                    <div className="flex gap-1">
                      <input className={inputCls} placeholder="开始" value={edu.startDate} onChange={(e) => updateEdu(i, "startDate", e.target.value)} />
                      <input className={inputCls} placeholder="结束" value={edu.endDate} onChange={(e) => updateEdu(i, "endDate", e.target.value)} />
                    </div>
                  </div>
                ))}
              </div>

              {/* 技能 */}
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-gray-800 mb-3">专业技能</h3>
                <input className={inputCls} placeholder="用逗号分隔技能" value={data.skills.join("、")} onChange={(e) => updateSkills(e.target.value)} />
              </div>
            </div>
          )}

          {/* 预览区域 */}
          <div className={`flex-1 ${mode === "edit" ? "" : "mx-auto max-w-[210mm]"}`}>
            <div className="sticky top-28">
              <div className="bg-gray-100 rounded-xl p-4 overflow-auto max-h-[calc(100vh-180px)]">
                <div ref={printRef} className="transform origin-top-left scale-[0.6] md:scale-[0.75] lg:scale-[0.85]">
                  <TemplateComponent data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
