# ARTEX 独立备份与来源说明

本仓库由 **[bookSiYi1412](https://github.com/bookSiYi1412)** 建立并维护，作为 ARTEX 的个人独立备份，用于保存源码、版本历史和来源记录。项目源码及其贡献归原作者和贡献者所有；本次备份不改变原有署名、版权或许可证，也不表示获得上游官方维护或背书。

## 来源与备份快照

| 项目 | 内容 |
| --- | --- |
| 直接来源 | [mhtsec/ARTEX](https://github.com/mhtsec/ARTEX) |
| 独立备份 | [bookSiYi1412/ARTEX](https://github.com/bookSiYi1412/ARTEX) |
| 快照记录时间（UTC） | `2026-10-12T05:39:57+00:00` |
| 上游默认分支 | `main` |
| 上游快照提交 | [`a9d11cb852eadad00669e4f6a05ee59cbbd14860`](https://github.com/mhtsec/ARTEX/commit/a9d11cb852eadad00669e4f6a05ee59cbbd14860) |
| 未修改的上游快照分支 | [`upstream-snapshot/2026-10-12`](https://github.com/bookSiYi1412/ARTEX/tree/upstream-snapshot/2026-10-12) |
| 许可证 | GNU Affero General Public License v3.0（[LICENSE](LICENSE)） |

直接来源仓库的 README 还引用了原始项目 [Autumn-27/ARTEX](https://github.com/Autumn-27/ARTEX)。该链接作为上游文档中记录的来源线索保留；本次实际备份的数据来自 **mhtsec/ARTEX**。

## 备份内容

- 完整保留备份时可读取的 Git 提交历史：所有公开 Git 引用可达的 **465 个提交**。
- 保留上游 **1 个分支**和 **19 个标签**，标签名称、对象与注释不变；默认分支快照包含 **810 个文件**。
- `main` 在上游快照上仅新增本备份声明、来源说明与备份清单；原有源码、资源文件、LICENSE 和上游文档正文均保留。
- 上游的 `refs/pull/4/head` 保存为 [`backup/pull/4`](https://github.com/bookSiYi1412/ARTEX/tree/backup/pull/4)，保留该 PR 的 Git 数据。原始引用及对应对象记录在 [`.backup/manifest.json`](.backup/manifest.json)。
- 仓库公开元数据、Issue/PR 记录、Issue 评论和 PR 行内评论，以 GitHub API 原始 JSON 快照保存在 [`.backup/github/`](.backup/github/)。这些记录作为文件归档，不会以备份账号重新发布成 Issue 或 PR。
- 检查时直接来源仓库没有 GitHub Release 或发布附件，且未启用 Wiki；源码中引用的外部 Docker 镜像、在线演示及其他仓库的发布包属于外部服务，不属于本 Git 仓库快照。

本备份是上述时间点的独立快照，不会自动同步上游的后续变化。GitHub 的 Star/Fork 关系、账号权限、私有配置和运行环境不随 Git 仓库复制。

## 许可证与归属

保留原始 [LICENSE](LICENSE)、作者署名及历史提交的作者/提交者信息，并继续遵循 **AGPL-3.0**。新增的备份说明同样采用仓库许可证。请同时阅读上游 README 中保留的许可、使用约定与免责声明。

## 完整性与追溯

原始提交可通过上游快照分支访问，原始 README 可查看 [快照中的 README.md](https://github.com/bookSiYi1412/ARTEX/blob/a9d11cb852eadad00669e4f6a05ee59cbbd14860/README.md)。机器可读清单记录所有来源引用、对象 SHA 和元数据文件的 SHA-256，便于核对和恢复。

```bash
git clone https://github.com/bookSiYi1412/ARTEX.git
cd ARTEX
git fetch --all --tags
git rev-parse origin/upstream-snapshot/2026-10-12
# 预期：a9d11cb852eadad00669e4f6a05ee59cbbd14860
```
