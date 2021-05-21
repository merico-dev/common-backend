# import-report

主要负责将 CA 通知来的 protobuf 打包的报告导入到 vdev 的数据库中。

`gen_protos.sh` 脚本用于生成 `protos` 文件夹下面的 protobuf bindings。当 CA 更新了 proto 后，先 `git` 更新一下 `/proto/analysis-proto` 这个 submodule，然后执行这个脚本。

`submit_test_repo.sh` 脚本用于开发阶段提交测试用的分析任务给 CA。

## Notes

* `reportOfAll.fields` 记录了 `reportOfAll` 下哪些字段是有数据的。避免使用 `reportOfAll.meta.analysis_type` 在 vdev 这边硬编码判断。

## TODO

- [ ] 进度通知
