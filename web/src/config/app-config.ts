import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const APP_CONFIG = {
  name: "ARTEX",
  version: packageJson.version,
  copyright: `© ${currentYear}, ARTEX.`,
  meta: {
    title: "ARTEX 在线演示 · bookSiYi1412",
    description: "bookSiYi1412 维护的 ARTEX 独立备份与模拟数据演示，源码来自 mhtsec/ARTEX。",
  },
};
