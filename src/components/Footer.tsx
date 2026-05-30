import { FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 px-4 border-t border-gray-100 bg-gray-50">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-sm text-gray-400">
        <div className="w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded flex items-center justify-center">
          <FileText className="w-3 h-3 text-white" />
        </div>
        ResumeCraft · 免费在线简历制作工具 · © {new Date().getFullYear()}
      </div>
    </footer>
  );
}
