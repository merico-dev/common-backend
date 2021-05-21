grpcurl -connect-timeout 30 -max-time 30 -plaintext -d '{
  "git_url": "https://github.com/gliderlabs/ssh.git",
  "project_id": "5024fc90-c18e-43aa-9c78-17b34c08f453",
  "report_id": "1d7fa6f1-151a-4e36-8007-4406d0d80622",
  "path_blacklist": []
}' localhost:9461 merico.analysis.gateway.CodeAnalytics.SubmitRepo
