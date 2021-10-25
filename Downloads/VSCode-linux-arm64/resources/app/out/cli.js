"use strict";delete process.env.VSCODE_CWD;const bootstrap=require("./bootstrap"),bootstrapNode=require("./bootstrap-node"),product=require("../product.json");bootstrap.avoidMonkeyPatchFromAppInsights(),bootstrapNode.configurePortable(product),bootstrap.enableASARSupport(),process.env.VSCODE_CLI="1",require("./bootstrap-amd").load("vs/code/node/cli");

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/c13f1abb110fc756f9b3a6f16670df9cd9d4cf63/core/cli.js.map
