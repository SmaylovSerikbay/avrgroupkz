module.exports = {
  apps: [
    {
      name: 'avrgroup',
      script: '/var/www/avrgroup/node_modules/next/dist/bin/next',
      args: 'start',
      interpreter: 'node',
      cwd: '/var/www/avrgroup',
      env: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
    },
  ],
}; 