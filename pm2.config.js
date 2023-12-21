module.exports = {
    apps: [
      {
        name: 'TechPro',
        script: 'npm',
        args: 'start',
        cwd: '/home/administrador/app/TechPro', // Ruta completa al directorio de tu aplicación React
        interpreter: 'none',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };
  