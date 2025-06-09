module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'src/support/testSetup.ts', 
      'src/support/*.ts',
      'src/steps/**/*.ts',
      'src/support/hooks.ts'
    ],
    paths: ['src/features/**/*.feature'],
    format: [
      'progress',              
      'json:reports/cucumber-report.json'  
    ],
    parallel: 0
  }
};
