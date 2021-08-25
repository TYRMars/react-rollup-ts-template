# react-rollup-ts-template

React TypeScipr基本开发环境，rollup进行打包。

## 使用工具

* prettier。 一个很流行的代码格式化工具，你很容易在编辑器找到实现它的各种插件，像vscode,atom,webstom都可以找到。这里用它在代码提交前做代码格式化。
* eslint。 代码检查工具。eslint也可以负责一部分代码格式检查的工作，但是prettier已经做的很好了，所以我便没用eslint的代码格式检查，只让其负责代码错误检查。
* lint-staged。在你提交的文件中，执行自定义的指令。don’t let 💩 slip into your codebase. — lint-staged
* commitlint。commitlint 搭配 husky 的 commit message 钩子后，每次提交 git 版本信息的时候，会根据配置的规则进行校验，若不符合规则会 commit 失败，并提示相应信息。

### commitlint

[@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum)

* build：主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交
* ci：主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle等)的提交
* docs：文档更新
* feat：新增功能
* merge：分支合并 Merge branch ? of ?
* fix：bug 修复
* perf：性能, 体验优化
* refactor：重构代码(既没有新增功能，也没有修复 bug)
* style：不影响程序逻辑的代码修改(修改空白字符，格式缩进，补全缺失的分号等，没有改变代码逻辑)
* test：新增测试用例或是更新现有测试
* revert：回滚某个更早之前的提交
* chore：不属于以上类型的其他类型
