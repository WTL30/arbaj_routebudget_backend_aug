module.exports = {
  apps: [
    {
      name: "gps-tcp",
      script: "tcp/tcpServer.js",
      cwd: __dirname,
      instances: 1,
      exec_mode: "fork",
      watch: false,
      autorestart: true,
      max_memory_restart: "512M",
      time: true,
      env: {
        NODE_ENV: "production",
        TCP_HOST: "0.0.0.0",
        TCP_PORT: "4000"
      },
      env_production: {
        NODE_ENV: "production"
      }
    },
    {
      name: "gps-ws",
      script: "websocket/index.js",
      cwd: __dirname,
      instances: 1,
      exec_mode: "fork",
      watch: false,
      autorestart: true,
      max_memory_restart: "512M",
      time: true,
      env: {
        NODE_ENV: "production",
        WS_HOST: "0.0.0.0",
        WS_PORT: "7000"
      },
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
