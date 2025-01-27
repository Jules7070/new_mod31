module.exports = {
  // Especifica cómo transformar los archivos JS y JSX
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest", // Usa Babel para transformar archivos JavaScript y JSX
  },
  // Configura los patrones que Jest debe ignorar al transformar
  transformIgnorePatterns: [
    "/node_modules/(?!(axios)/)", // Asegúrate de incluir axios para que sea transformado
  ],
  // Define el entorno de prueba
  testEnvironment: "node", // Usa un entorno Node.js para las pruebas
  // Activa la generación de informes de cobertura
  collectCoverage: true,
  // Especifica qué archivos incluir en la cobertura
  collectCoverageFrom: [
    "src/**/*.{js,jsx}", // Incluir todos los archivos JS y JSX dentro de src
    "!src/index.js", // Excluir archivos principales si es necesario
  ],
  // Configura la salida de los reportes de cobertura
  coverageDirectory: "coverage", // Carpeta donde se guardarán los reportes de cobertura
  // Mapea los módulos no JS si es necesario (opcional, para importar CSS, imágenes, etc.)
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // Mock para estilos
  },
  // Habilita mensajes claros si hay errores
  verbose: true,
};

