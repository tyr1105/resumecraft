import { ResumeData } from "./resume-types";

// 现代模板 - 侧边栏风格
export function ModernTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl mx-auto flex" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      {/* 左侧栏 */}
      <div className="w-[35%] bg-slate-800 text-white p-8">
        <div className="mb-8">
          <div className="w-24 h-24 bg-slate-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold">
            {data.name.charAt(0)}
          </div>
          <h1 className="text-2xl font-bold text-center">{data.name}</h1>
          <p className="text-slate-300 text-center mt-1">{data.title}</p>
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <h3 className="text-slate-400 uppercase tracking-wider text-xs mb-2 font-semibold">联系方式</h3>
            <p className="mb-1">📱 {data.phone}</p>
            <p className="mb-1">✉️ {data.email}</p>
            <p>📍 {data.location}</p>
          </div>

          <div>
            <h3 className="text-slate-400 uppercase tracking-wider text-xs mb-2 font-semibold">技能</h3>
            <div className="flex flex-wrap gap-1.5">
              {data.skills.map((skill, i) => (
                <span key={i} className="px-2 py-1 bg-slate-700 rounded text-xs">{skill}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-slate-400 uppercase tracking-wider text-xs mb-2 font-semibold">教育背景</h3>
            {data.education.map((edu, i) => (
              <div key={i} className="mb-3">
                <p className="font-semibold">{edu.school}</p>
                <p className="text-slate-300 text-xs">{edu.degree} · {edu.major}</p>
                <p className="text-slate-400 text-xs">{edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 右侧主内容 */}
      <div className="w-[65%] p-8">
        <div className="mb-6">
          <h2 className="text-lg font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-3">个人简介</h2>
          <p className="text-slate-600 text-sm leading-relaxed">{data.summary}</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-slate-800 border-b-2 border-slate-200 pb-2 mb-4">工作经历</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-5">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-slate-800">{exp.position}</h3>
                <span className="text-xs text-slate-500">{exp.startDate} - {exp.endDate}</span>
              </div>
              <p className="text-sm text-blue-600 mb-2">{exp.company}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 经典模板 - 传统风格
export function ClassicTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl mx-auto p-10" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
        <p className="text-gray-600 mt-1">{data.title}</p>
        <p className="text-sm text-gray-500 mt-2">{data.phone} · {data.email} · {data.location}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">个人简介</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{data.summary}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">工作经历</h2>
        {data.experience.map((exp, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between">
              <strong className="text-gray-800">{exp.position} — {exp.company}</strong>
              <span className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">教育背景</h2>
        {data.education.map((edu, i) => (
          <div key={i} className="flex justify-between mb-2">
            <span><strong>{edu.school}</strong> — {edu.degree} · {edu.major}</span>
            <span className="text-sm text-gray-500">{edu.startDate} - {edu.endDate}</span>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">专业技能</h2>
        <p className="text-sm text-gray-700">{data.skills.join(" · ")}</p>
      </div>
    </div>
  );
}

// 极简模板
export function MinimalTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl mx-auto p-10" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>
      <div className="mb-8">
        <h1 className="text-4xl font-light text-gray-900 tracking-tight">{data.name}</h1>
        <p className="text-lg text-gray-500 mt-1 font-light">{data.title}</p>
        <p className="text-sm text-gray-400 mt-2">{data.phone} · {data.email} · {data.location}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">关于我</h2>
        <p className="text-sm text-gray-700 leading-relaxed">{data.summary}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4 font-medium">经历</h2>
        {data.experience.map((exp, i) => (
          <div key={i} className="mb-5 pl-4 border-l-2 border-gray-100">
            <div className="flex justify-between items-baseline">
              <h3 className="font-medium text-gray-800">{exp.position}</h3>
              <span className="text-xs text-gray-400">{exp.startDate} - {exp.endDate}</span>
            </div>
            <p className="text-sm text-gray-500">{exp.company}</p>
            <p className="text-sm text-gray-600 mt-1 leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">教育</h2>
        {data.education.map((edu, i) => (
          <div key={i} className="flex justify-between mb-2">
            <span className="text-sm text-gray-700">{edu.school} · {edu.degree} · {edu.major}</span>
            <span className="text-xs text-gray-400">{edu.startDate} - {edu.endDate}</span>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">技能</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, i) => (
            <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
