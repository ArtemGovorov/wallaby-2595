module.exports = function (wallaby) { 
    return { 
      files: [ 
        { pattern: "src/**/*.{ts,html}", load: false }, 
        { pattern: "test/**/*.ts", load: false }, 
        "!test/**/*.spec.ts" 
      ], 
   
      tests: [{ pattern: "test/utilities.spec.ts", load: false }], 
   
      postprocessor: wallaby.postprocessors.webpack( 
        require("./webpack.config")({ production: false, tests: true }), 
        { 
          setupFiles: ["test/wallaby-setup.ts"] 
        } 
      ), 
   
      setup: function () { 
        // required to trigger test loading 
        window.__moduleBundler.loadTests(); 
      }, 
   
      env: { 
        kind: "chrome" 
      }, 
   
      testFramework: "jasmine" 
    }; 
  };