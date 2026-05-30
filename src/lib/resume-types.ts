export interface ResumeData {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  summary: string;
  experience: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }[];
  education: {
    school: string;
    degree: string;
    major: string;
    startDate: string;
    endDate: string;
  }[];
  skills: string[];
}

export const defaultResume: ResumeData = {
  name: "张三",
  title: "高级产品经理",
  phone: "138-0000-0000",
  email: "zhangsan@email.com",
  location: "北京",
  summary: "5年互联网产品经验，擅长用户增长和数据分析，曾主导多个千万级用户产品从0到1的全过程。",
  experience: [
    {
      company: "某科技有限公司",
      position: "高级产品经理",
      startDate: "2022-03",
      endDate: "至今",
      description: "主导核心产品线规划，DAU从50万增长至200万；搭建数据分析体系，提升用户留存率30%；管理5人产品团队。",
    },
    {
      company: "某互联网公司",
      position: "产品经理",
      startDate: "2019-07",
      endDate: "2022-02",
      description: "负责电商APP的搜索推荐模块，GMV提升40%；设计会员体系，付费转化率提升25%。",
    },
  ],
  education: [
    {
      school: "北京大学",
      degree: "硕士",
      major: "计算机科学与技术",
      startDate: "2016-09",
      endDate: "2019-06",
    },
  ],
  skills: ["产品规划", "数据分析", "用户研究", "SQL", "Axure", "Figma"],
};

export type TemplateType = "modern" | "classic" | "minimal";
