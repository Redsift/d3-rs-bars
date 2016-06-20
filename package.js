export var name = "@redsift/d3-rs-bars";
export var version = "0.0.1";
export var description = "Generates bar charts using D3v4.";
export var keywords = ["bar","redsift","d3","chart"];
export var homepage = "https://github.com/redsift/d3-rs-bars";
export var license = "MIT";
export var author = {"name":"Rahul Powar","url":"https://medium.com/@rahulpowar"};
export var main = "distribution/d3-rs-bars.umd-es2015.js";
export var browser = "distribution/d3-rs-bars.umd-es2015.min.js";
export var repository = {"type":"git","url":"https://github.com/redsift/d3-rs-bars.git"};
export var scripts = {"serve":"gulp -o d3-rs-bars -g d3-selection -g d3-array -g d3-scale -g d3-axis -g d3-time-format -g d3-format serve","build":"gulp -o d3-rs-bars -g d3-selection -g d3-array -g d3-scale -g d3-axis -g d3-time-format -g d3-format build","pretest":"npm outdated && npm run version && npm run build","test":"tape 'test/**/*-test.js' && eslint index.js src","version":"json2module package.json > package.js","prepublish":"npm run version && npm run build"};
export var dependencies = {"d3-selection":"^0.9.0","d3-array":"^1.0.0","d3-scale":"^0.9.2","d3-axis":"^0.4.1","d3-format":"^0.6.0","d3-time-format":"^1.0.0","@redsift/d3-rs-svg":"~0.2.3","@redsift/d3-rs-theme":"~0.0.1","@redsift/d3-rs-tip":"~0.2.1"};
export var devDependencies = {"@redsift/tape-reel":"~0.0.2","browser-sync":"^2.13.0","del":"^2.2.0","eslint":"^2.10.2","gulp":"^3.9.1","gulp-rename":"^1.2.2","gulp-sourcemaps":"^2.0.0-alpha","gulp-uglify":"^1.5.3","gulp-util":"^3.0.7","json2module":"~0.0.3","rollup":"^0.32.0","rollup-plugin-node-resolve":"^1.5.0","rollup-plugin-commonjs":"^3.0.0","rollup-plugin-buble":"^0.11.0","rollup-stream":"^1.7.1","vinyl-buffer":"^1.0.0","vinyl-source-stream":"^1.1.0","yargs":"^4.7.1"};
