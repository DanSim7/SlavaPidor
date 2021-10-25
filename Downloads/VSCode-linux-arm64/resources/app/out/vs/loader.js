"use strict";/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/var _amdLoaderGlobal=this,_commonjsGlobal=typeof global=="object"?global:{},AMDLoader;(function(f){f.global=_amdLoaderGlobal;var E=function(){function h(){this._detected=!1,this._isWindows=!1,this._isNode=!1,this._isElectronRenderer=!1,this._isWebWorker=!1}return Object.defineProperty(h.prototype,"isWindows",{get:function(){return this._detect(),this._isWindows},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isNode",{get:function(){return this._detect(),this._isNode},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isElectronRenderer",{get:function(){return this._detect(),this._isElectronRenderer},enumerable:!1,configurable:!0}),Object.defineProperty(h.prototype,"isWebWorker",{get:function(){return this._detect(),this._isWebWorker},enumerable:!1,configurable:!0}),h.prototype._detect=function(){this._detected||(this._detected=!0,this._isWindows=h._isWindows(),this._isNode=typeof module!="undefined"&&!!module.exports,this._isElectronRenderer=typeof process!="undefined"&&typeof process.versions!="undefined"&&typeof process.versions.electron!="undefined"&&process.type==="renderer",this._isWebWorker=typeof f.global.importScripts=="function")},h._isWindows=function(){return typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.indexOf("Windows")>=0?!0:typeof process!="undefined"?process.platform==="win32":!1},h}();f.Environment=E})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){var E=function(){function a(n,c,i){this.type=n,this.detail=c,this.timestamp=i}return a}();f.LoaderEvent=E;var h=function(){function a(n){this._events=[new E(1,"",n)]}return a.prototype.record=function(n,c){this._events.push(new E(n,c,f.Utilities.getHighPerformanceTimestamp()))},a.prototype.getEvents=function(){return this._events},a}();f.LoaderEventRecorder=h;var p=function(){function a(){}return a.prototype.record=function(n,c){},a.prototype.getEvents=function(){return[]},a.INSTANCE=new a,a}();f.NullLoaderEventRecorder=p})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){var E=function(){function h(){}return h.fileUriToFilePath=function(p,a){if(a=decodeURI(a).replace(/%23/g,"#"),p){if(/^file:\/\/\//.test(a))return a.substr(8);if(/^file:\/\//.test(a))return a.substr(5)}else if(/^file:\/\//.test(a))return a.substr(7);return a},h.startsWith=function(p,a){return p.length>=a.length&&p.substr(0,a.length)===a},h.endsWith=function(p,a){return p.length>=a.length&&p.substr(p.length-a.length)===a},h.containsQueryString=function(p){return/^[^\#]*\?/gi.test(p)},h.isAbsolutePath=function(p){return/^((http:\/\/)|(https:\/\/)|(file:\/\/)|(\/))/.test(p)},h.forEachProperty=function(p,a){if(p){var n=void 0;for(n in p)p.hasOwnProperty(n)&&a(n,p[n])}},h.isEmpty=function(p){var a=!0;return h.forEachProperty(p,function(){a=!1}),a},h.recursiveClone=function(p){if(!p||typeof p!="object"||p instanceof RegExp||!Array.isArray(p)&&Object.getPrototypeOf(p)!==Object.prototype)return p;var a=Array.isArray(p)?[]:{};return h.forEachProperty(p,function(n,c){c&&typeof c=="object"?a[n]=h.recursiveClone(c):a[n]=c}),a},h.generateAnonymousModule=function(){return"===anonymous"+h.NEXT_ANONYMOUS_ID+++"==="},h.isAnonymousModule=function(p){return h.startsWith(p,"===anonymous")},h.getHighPerformanceTimestamp=function(){return this.PERFORMANCE_NOW_PROBED||(this.PERFORMANCE_NOW_PROBED=!0,this.HAS_PERFORMANCE_NOW=f.global.performance&&typeof f.global.performance.now=="function"),this.HAS_PERFORMANCE_NOW?f.global.performance.now():Date.now()},h.NEXT_ANONYMOUS_ID=1,h.PERFORMANCE_NOW_PROBED=!1,h.HAS_PERFORMANCE_NOW=!1,h}();f.Utilities=E})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){function E(a){if(a instanceof Error)return a;var n=new Error(a.message||String(a)||"Unknown Error");return a.stack&&(n.stack=a.stack),n}f.ensureError=E;var h=function(){function a(){}return a.validateConfigurationOptions=function(n){function c(e){if(e.phase==="loading"){console.error('Loading "'+e.moduleId+'" failed'),console.error(e),console.error("Here are the modules that depend on it:"),console.error(e.neededBy);return}if(e.phase==="factory"){console.error('The factory method of "'+e.moduleId+'" has thrown an exception'),console.error(e);return}}if(n=n||{},typeof n.baseUrl!="string"&&(n.baseUrl=""),typeof n.isBuild!="boolean"&&(n.isBuild=!1),typeof n.paths!="object"&&(n.paths={}),typeof n.config!="object"&&(n.config={}),typeof n.catchError=="undefined"&&(n.catchError=!1),typeof n.recordStats=="undefined"&&(n.recordStats=!1),typeof n.urlArgs!="string"&&(n.urlArgs=""),typeof n.onError!="function"&&(n.onError=c),Array.isArray(n.ignoreDuplicateModules)||(n.ignoreDuplicateModules=[]),n.baseUrl.length>0&&(f.Utilities.endsWith(n.baseUrl,"/")||(n.baseUrl+="/")),typeof n.cspNonce!="string"&&(n.cspNonce=""),typeof n.preferScriptTags=="undefined"&&(n.preferScriptTags=!1),Array.isArray(n.nodeModules)||(n.nodeModules=[]),n.nodeCachedData&&typeof n.nodeCachedData=="object"&&(typeof n.nodeCachedData.seed!="string"&&(n.nodeCachedData.seed="seed"),(typeof n.nodeCachedData.writeDelay!="number"||n.nodeCachedData.writeDelay<0)&&(n.nodeCachedData.writeDelay=1e3*7),!n.nodeCachedData.path||typeof n.nodeCachedData.path!="string")){var i=E(new Error("INVALID cached data configuration, 'path' MUST be set"));i.phase="configuration",n.onError(i),n.nodeCachedData=void 0}return n},a.mergeConfigurationOptions=function(n,c){n===void 0&&(n=null),c===void 0&&(c=null);var i=f.Utilities.recursiveClone(c||{});return f.Utilities.forEachProperty(n,function(e,t){e==="ignoreDuplicateModules"&&typeof i.ignoreDuplicateModules!="undefined"?i.ignoreDuplicateModules=i.ignoreDuplicateModules.concat(t):e==="paths"&&typeof i.paths!="undefined"?f.Utilities.forEachProperty(t,function(r,o){return i.paths[r]=o}):e==="config"&&typeof i.config!="undefined"?f.Utilities.forEachProperty(t,function(r,o){return i.config[r]=o}):i[e]=f.Utilities.recursiveClone(t)}),a.validateConfigurationOptions(i)},a}();f.ConfigurationOptionsUtil=h;var p=function(){function a(n,c){if(this._env=n,this.options=h.mergeConfigurationOptions(c),this._createIgnoreDuplicateModulesMap(),this._createNodeModulesMap(),this._createSortedPathsRules(),this.options.baseUrl===""){if(this.options.nodeRequire&&this.options.nodeRequire.main&&this.options.nodeRequire.main.filename&&this._env.isNode){var i=this.options.nodeRequire.main.filename,e=Math.max(i.lastIndexOf("/"),i.lastIndexOf("\\"));this.options.baseUrl=i.substring(0,e+1)}if(this.options.nodeMain&&this._env.isNode){var i=this.options.nodeMain,e=Math.max(i.lastIndexOf("/"),i.lastIndexOf("\\"));this.options.baseUrl=i.substring(0,e+1)}}}return a.prototype._createIgnoreDuplicateModulesMap=function(){this.ignoreDuplicateModulesMap={};for(var n=0;n<this.options.ignoreDuplicateModules.length;n++)this.ignoreDuplicateModulesMap[this.options.ignoreDuplicateModules[n]]=!0},a.prototype._createNodeModulesMap=function(){this.nodeModulesMap=Object.create(null);for(var n=0,c=this.options.nodeModules;n<c.length;n++){var i=c[n];this.nodeModulesMap[i]=!0}},a.prototype._createSortedPathsRules=function(){var n=this;this.sortedPathsRules=[],f.Utilities.forEachProperty(this.options.paths,function(c,i){Array.isArray(i)?n.sortedPathsRules.push({from:c,to:i}):n.sortedPathsRules.push({from:c,to:[i]})}),this.sortedPathsRules.sort(function(c,i){return i.from.length-c.from.length})},a.prototype.cloneAndMerge=function(n){return new a(this._env,h.mergeConfigurationOptions(n,this.options))},a.prototype.getOptionsLiteral=function(){return this.options},a.prototype._applyPaths=function(n){for(var c,i=0,e=this.sortedPathsRules.length;i<e;i++)if(c=this.sortedPathsRules[i],f.Utilities.startsWith(n,c.from)){for(var t=[],r=0,o=c.to.length;r<o;r++)t.push(c.to[r]+n.substr(c.from.length));return t}return[n]},a.prototype._addUrlArgsToUrl=function(n){return f.Utilities.containsQueryString(n)?n+"&"+this.options.urlArgs:n+"?"+this.options.urlArgs},a.prototype._addUrlArgsIfNecessaryToUrl=function(n){return this.options.urlArgs?this._addUrlArgsToUrl(n):n},a.prototype._addUrlArgsIfNecessaryToUrls=function(n){if(this.options.urlArgs)for(var c=0,i=n.length;c<i;c++)n[c]=this._addUrlArgsToUrl(n[c]);return n},a.prototype.moduleIdToPaths=function(n){var c=this.nodeModulesMap[n]===!0||this.options.amdModulesPattern instanceof RegExp&&!this.options.amdModulesPattern.test(n);if(c)return this.isBuild()?["empty:"]:["node|"+n];var i=n,e;if(!f.Utilities.endsWith(i,".js")&&!f.Utilities.isAbsolutePath(i)){e=this._applyPaths(i);for(var t=0,r=e.length;t<r;t++)this.isBuild()&&e[t]==="empty:"||(f.Utilities.isAbsolutePath(e[t])||(e[t]=this.options.baseUrl+e[t]),!f.Utilities.endsWith(e[t],".js")&&!f.Utilities.containsQueryString(e[t])&&(e[t]=e[t]+".js"))}else!f.Utilities.endsWith(i,".js")&&!f.Utilities.containsQueryString(i)&&(i=i+".js"),e=[i];return this._addUrlArgsIfNecessaryToUrls(e)},a.prototype.requireToUrl=function(n){var c=n;return f.Utilities.isAbsolutePath(c)||(c=this._applyPaths(c)[0],f.Utilities.isAbsolutePath(c)||(c=this.options.baseUrl+c)),this._addUrlArgsIfNecessaryToUrl(c)},a.prototype.isBuild=function(){return this.options.isBuild},a.prototype.isDuplicateMessageIgnoredFor=function(n){return this.ignoreDuplicateModulesMap.hasOwnProperty(n)},a.prototype.getConfigForModule=function(n){if(this.options.config)return this.options.config[n]},a.prototype.shouldCatchError=function(){return this.options.catchError},a.prototype.shouldRecordStats=function(){return this.options.recordStats},a.prototype.onError=function(n){this.options.onError(n)},a}();f.Configuration=p})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){var E=function(){function e(t){this._env=t,this._scriptLoader=null,this._callbackMap={}}return e.prototype.load=function(t,r,o,u){var s=this;if(!this._scriptLoader)if(this._env.isWebWorker)this._scriptLoader=new a;else if(this._env.isElectronRenderer){var d=t.getConfig().getOptionsLiteral().preferScriptTags;d?this._scriptLoader=new h:this._scriptLoader=new n(this._env)}else this._env.isNode?this._scriptLoader=new n(this._env):this._scriptLoader=new h;var l={callback:o,errorback:u};if(this._callbackMap.hasOwnProperty(r)){this._callbackMap[r].push(l);return}this._callbackMap[r]=[l],this._scriptLoader.load(t,r,function(){return s.triggerCallback(r)},function(_){return s.triggerErrorback(r,_)})},e.prototype.triggerCallback=function(t){var r=this._callbackMap[t];delete this._callbackMap[t];for(var o=0;o<r.length;o++)r[o].callback()},e.prototype.triggerErrorback=function(t,r){var o=this._callbackMap[t];delete this._callbackMap[t];for(var u=0;u<o.length;u++)o[u].errorback(r)},e}(),h=function(){function e(){}return e.prototype.attachListeners=function(t,r,o){var u=function(){t.removeEventListener("load",s),t.removeEventListener("error",d)},s=function(l){u(),r()},d=function(l){u(),o(l)};t.addEventListener("load",s),t.addEventListener("error",d)},e.prototype.load=function(t,r,o,u){if(/^node\|/.test(r)){var s=t.getConfig().getOptionsLiteral(),d=c(t.getRecorder(),s.nodeRequire||f.global.nodeRequire),l=r.split("|"),_=null;try{_=d(l[1])}catch(m){u(m);return}t.enqueueDefineAnonymousModule([],function(){return _}),o()}else{var v=document.createElement("script");v.setAttribute("async","async"),v.setAttribute("type","text/javascript"),this.attachListeners(v,o,u);var y=t.getConfig().getOptionsLiteral().trustedTypesPolicy;y&&(r=y.createScriptURL(r)),v.setAttribute("src",r);var g=t.getConfig().getOptionsLiteral().cspNonce;g&&v.setAttribute("nonce",g),document.getElementsByTagName("head")[0].appendChild(v)}},e}();function p(e){var t=e.getConfig().getOptionsLiteral().trustedTypesPolicy;try{var r=t?self.eval(t.createScript("","true")):new Function("true");return r.call(self),!0}catch(o){return!1}}var a=function(){function e(){this._cachedCanUseEval=null}return e.prototype._canUseEval=function(t){return this._cachedCanUseEval===null&&(this._cachedCanUseEval=p(t)),this._cachedCanUseEval},e.prototype.load=function(t,r,o,u){var s=t.getConfig().getOptionsLiteral().trustedTypesPolicy,d=/^((http:)|(https:)|(file:))/.test(r)&&r.substring(0,self.origin.length)!==self.origin;if(!d&&this._canUseEval(t)){fetch(r).then(function(l){if(l.status!==200)throw new Error(l.statusText);return l.text()}).then(function(l){l=l+`
//# sourceURL=`+r;var _=s?self.eval(s.createScript("",l)):new Function(l);_.call(self),o()}).then(void 0,u);return}try{s&&(r=s.createScriptURL(r)),importScripts(r),o()}catch(l){u(l)}},e}(),n=function(){function e(t){this._env=t,this._didInitialize=!1,this._didPatchNodeRequire=!1}return e.prototype._init=function(t){this._didInitialize||(this._didInitialize=!0,this._fs=t("fs"),this._vm=t("vm"),this._path=t("path"),this._crypto=t("crypto"))},e.prototype._initNodeRequire=function(t,r){var o=r.getConfig().getOptionsLiteral().nodeCachedData;if(!o||this._didPatchNodeRequire)return;this._didPatchNodeRequire=!0;var u=this,s=t("module");function d(l){var _=l.constructor,v=function(g){try{return l.require(g)}finally{}};return v.resolve=function(g,m){return _._resolveFilename(g,l,!1,m)},v.resolve.paths=function(g){return _._resolveLookupPaths(g,l)},v.main=process.mainModule,v.extensions=_._extensions,v.cache=_._cache,v}s.prototype._compile=function(l,_){var v=s.wrap(l.replace(/^#!.*/,"")),y=r.getRecorder(),g=u._getCachedDataPath(o,_),m={filename:_},U;try{var I=u._fs.readFileSync(g);U=I.slice(0,16),m.cachedData=I.slice(16),y.record(60,g)}catch(S){y.record(61,g)}var R=new u._vm.Script(v,m),C=R.runInThisContext(m),P=u._path.dirname(_),w=d(this),O=[this.exports,w,this,_,P,process,_commonjsGlobal,Buffer],b=C.apply(this.exports,O);return u._handleCachedData(R,v,g,!m.cachedData,r),u._verifyCachedData(R,v,g,U,r),b}},e.prototype.load=function(t,r,o,u){var s=this,d=t.getConfig().getOptionsLiteral(),l=c(t.getRecorder(),d.nodeRequire||f.global.nodeRequire),_=d.nodeInstrumenter||function(C){return C};this._init(l),this._initNodeRequire(l,t);var v=t.getRecorder();if(/^node\|/.test(r)){var y=r.split("|"),g=null;try{g=l(y[1])}catch(C){u(C);return}t.enqueueDefineAnonymousModule([],function(){return g}),o()}else{r=f.Utilities.fileUriToFilePath(this._env.isWindows,r);var m=this._path.normalize(r),U=this._getElectronRendererScriptPathOrUri(m),I=Boolean(d.nodeCachedData),R=I?this._getCachedDataPath(d.nodeCachedData,r):void 0;this._readSourceAndCachedData(m,R,v,function(C,P,w,O){if(C){u(C);return}var b;P.charCodeAt(0)===e._BOM?b=e._PREFIX+P.substring(1)+e._SUFFIX:b=e._PREFIX+P+e._SUFFIX,b=_(b,m);var S={filename:U,cachedData:w},M=s._createAndEvalScript(t,b,S,o,u);s._handleCachedData(M,b,R,I&&!w,t),s._verifyCachedData(M,b,R,O,t)})}},e.prototype._createAndEvalScript=function(t,r,o,u,s){var d=t.getRecorder();d.record(31,o.filename);var l=new this._vm.Script(r,o),_=l.runInThisContext(o),v=t.getGlobalAMDDefineFunc(),y=!1,g=function(){return y=!0,v.apply(null,arguments)};return g.amd=v.amd,_.call(f.global,t.getGlobalAMDRequireFunc(),g,o.filename,this._path.dirname(o.filename)),d.record(32,o.filename),y?u():s(new Error("Didn't receive define call in "+o.filename+"!")),l},e.prototype._getElectronRendererScriptPathOrUri=function(t){if(!this._env.isElectronRenderer)return t;var r=t.match(/^([a-z])\:(.*)/i);return r?"file:///"+(r[1].toUpperCase()+":"+r[2]).replace(/\\/g,"/"):"file://"+t},e.prototype._getCachedDataPath=function(t,r){var o=this._crypto.createHash("md5").update(r,"utf8").update(t.seed,"utf8").update(process.arch,"").digest("hex"),u=this._path.basename(r).replace(/\.js$/,"");return this._path.join(t.path,u+"-"+o+".code")},e.prototype._handleCachedData=function(t,r,o,u,s){var d=this;t.cachedDataRejected?this._fs.unlink(o,function(l){s.getRecorder().record(62,o),d._createAndWriteCachedData(t,r,o,s),l&&s.getConfig().onError(l)}):u&&this._createAndWriteCachedData(t,r,o,s)},e.prototype._createAndWriteCachedData=function(t,r,o,u){var s=this,d=Math.ceil(u.getConfig().getOptionsLiteral().nodeCachedData.writeDelay*(1+Math.random())),l=-1,_=0,v=void 0,y=function(){setTimeout(function(){v||(v=s._crypto.createHash("md5").update(r,"utf8").digest());var g=t.createCachedData();if(!(g.length===0||g.length===l||_>=5)){if(g.length<l){y();return}l=g.length,s._fs.writeFile(o,Buffer.concat([v,g]),function(m){m&&u.getConfig().onError(m),u.getRecorder().record(63,o),y()})}},d*Math.pow(4,_++))};y()},e.prototype._readSourceAndCachedData=function(t,r,o,u){if(!r)this._fs.readFile(t,{encoding:"utf8"},u);else{var s=void 0,d=void 0,l=void 0,_=2,v=function(y){y?u(y):--_==0&&u(void 0,s,d,l)};this._fs.readFile(t,{encoding:"utf8"},function(y,g){s=g,v(y)}),this._fs.readFile(r,function(y,g){!y&&g&&g.length>0?(l=g.slice(0,16),d=g.slice(16),o.record(60,r)):o.record(61,r),v()})}},e.prototype._verifyCachedData=function(t,r,o,u,s){var d=this;!u||t.cachedDataRejected||setTimeout(function(){var l=d._crypto.createHash("md5").update(r,"utf8").digest();u.equals(l)||(s.getConfig().onError(new Error("FAILED TO VERIFY CACHED DATA, deleting stale '"+o+"' now, but a RESTART IS REQUIRED")),d._fs.unlink(o,function(_){_&&s.getConfig().onError(_)}))},Math.ceil(5e3*(1+Math.random())))},e._BOM=65279,e._PREFIX="(function (require, define, __filename, __dirname) { ",e._SUFFIX=`
});`,e}();function c(e,t){if(t.__$__isRecorded)return t;var r=function(u){e.record(33,u);try{return t(u)}finally{e.record(34,u)}};return r.__$__isRecorded=!0,r}f.ensureRecordedNodeRequire=c;function i(e){return new E(e)}f.createScriptLoader=i})(AMDLoader||(AMDLoader={}));var AMDLoader;(function(f){var E=function(){function i(e){var t=e.lastIndexOf("/");t!==-1?this.fromModulePath=e.substr(0,t+1):this.fromModulePath=""}return i._normalizeModuleId=function(e){var t=e,r;for(r=/\/\.\//;r.test(t);)t=t.replace(r,"/");for(t=t.replace(/^\.\//g,""),r=/\/(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//;r.test(t);)t=t.replace(r,"/");return t=t.replace(/^(([^\/])|([^\/][^\/\.])|([^\/\.][^\/])|([^\/][^\/][^\/]+))\/\.\.\//,""),t},i.prototype.resolveModule=function(e){var t=e;return f.Utilities.isAbsolutePath(t)||(f.Utilities.startsWith(t,"./")||f.Utilities.startsWith(t,"../"))&&(t=i._normalizeModuleId(this.fromModulePath+t)),t},i.ROOT=new i(""),i}();f.ModuleIdResolver=E;var h=function(){function i(e,t,r,o,u,s){this.id=e,this.strId=t,this.dependencies=r,this._callback=o,this._errorback=u,this.moduleIdResolver=s,this.exports={},this.error=null,this.exportsPassedIn=!1,this.unresolvedDependenciesCount=this.dependencies.length,this._isComplete=!1}return i._safeInvokeFunction=function(e,t){try{return{returnedValue:e.apply(f.global,t),producedError:null}}catch(r){return{returnedValue:null,producedError:r}}},i._invokeFactory=function(e,t,r,o){return e.isBuild()&&!f.Utilities.isAnonymousModule(t)?{returnedValue:null,producedError:null}:e.shouldCatchError()?this._safeInvokeFunction(r,o):{returnedValue:r.apply(f.global,o),producedError:null}},i.prototype.complete=function(e,t,r){this._isComplete=!0;var o=null;if(this._callback)if(typeof this._callback=="function"){e.record(21,this.strId);var u=i._invokeFactory(t,this.strId,this._callback,r);o=u.producedError,e.record(22,this.strId),!o&&typeof u.returnedValue!="undefined"&&(!this.exportsPassedIn||f.Utilities.isEmpty(this.exports))&&(this.exports=u.returnedValue)}else this.exports=this._callback;if(o){var s=f.ensureError(o);s.phase="factory",s.moduleId=this.strId,this.error=s,t.onError(s)}this.dependencies=null,this._callback=null,this._errorback=null,this.moduleIdResolver=null},i.prototype.onDependencyError=function(e){return this._isComplete=!0,this.error=e,this._errorback?(this._errorback(e),!0):!1},i.prototype.isComplete=function(){return this._isComplete},i}();f.Module=h;var p=function(){function i(){this._nextId=0,this._strModuleIdToIntModuleId=new Map,this._intModuleIdToStrModuleId=[],this.getModuleId("exports"),this.getModuleId("module"),this.getModuleId("require")}return i.prototype.getMaxModuleId=function(){return this._nextId},i.prototype.getModuleId=function(e){var t=this._strModuleIdToIntModuleId.get(e);return typeof t=="undefined"&&(t=this._nextId++,this._strModuleIdToIntModuleId.set(e,t),this._intModuleIdToStrModuleId[t]=e),t},i.prototype.getStrModuleId=function(e){return this._intModuleIdToStrModuleId[e]},i}(),a=function(){function i(e){this.id=e}return i.EXPORTS=new i(0),i.MODULE=new i(1),i.REQUIRE=new i(2),i}();f.RegularDependency=a;var n=function(){function i(e,t,r){this.id=e,this.pluginId=t,this.pluginParam=r}return i}();f.PluginDependency=n;var c=function(){function i(e,t,r,o,u){u===void 0&&(u=0),this._env=e,this._scriptLoader=t,this._loaderAvailableTimestamp=u,this._defineFunc=r,this._requireFunc=o,this._moduleIdProvider=new p,this._config=new f.Configuration(this._env),this._hasDependencyCycle=!1,this._modules2=[],this._knownModules2=[],this._inverseDependencies2=[],this._inversePluginDependencies2=new Map,this._currentAnonymousDefineCall=null,this._recorder=null,this._buildInfoPath=[],this._buildInfoDefineStack=[],this._buildInfoDependencies=[]}return i.prototype.reset=function(){return new i(this._env,this._scriptLoader,this._defineFunc,this._requireFunc,this._loaderAvailableTimestamp)},i.prototype.getGlobalAMDDefineFunc=function(){return this._defineFunc},i.prototype.getGlobalAMDRequireFunc=function(){return this._requireFunc},i._findRelevantLocationInStack=function(e,t){for(var r=function(m){return m.replace(/\\/g,"/")},o=r(e),u=t.split(/\n/),s=0;s<u.length;s++){var d=u[s].match(/(.*):(\d+):(\d+)\)?$/);if(d){var l=d[1],_=d[2],v=d[3],y=Math.max(l.lastIndexOf(" ")+1,l.lastIndexOf("(")+1);if(l=l.substr(y),l=r(l),l===o){var g={line:parseInt(_,10),col:parseInt(v,10)};return g.line===1&&(g.col-="(function (require, define, __filename, __dirname) { ".length),g}}}throw new Error("Could not correlate define call site for needle "+e)},i.prototype.getBuildInfo=function(){if(!this._config.isBuild())return null;for(var e=[],t=0,r=0,o=this._modules2.length;r<o;r++){var u=this._modules2[r];if(!!u){var s=this._buildInfoPath[u.id]||null,d=this._buildInfoDefineStack[u.id]||null,l=this._buildInfoDependencies[u.id];e[t++]={id:u.strId,path:s,defineLocation:s&&d?i._findRelevantLocationInStack(s,d):null,dependencies:l,shim:null,exports:u.exports}}}return e},i.prototype.getRecorder=function(){return this._recorder||(this._config.shouldRecordStats()?this._recorder=new f.LoaderEventRecorder(this._loaderAvailableTimestamp):this._recorder=f.NullLoaderEventRecorder.INSTANCE),this._recorder},i.prototype.getLoaderEvents=function(){return this.getRecorder().getEvents()},i.prototype.enqueueDefineAnonymousModule=function(e,t){if(this._currentAnonymousDefineCall!==null)throw new Error("Can only have one anonymous define call per script file");var r=null;this._config.isBuild()&&(r=new Error("StackLocation").stack||null),this._currentAnonymousDefineCall={stack:r,dependencies:e,callback:t}},i.prototype.defineModule=function(e,t,r,o,u,s){var d=this;s===void 0&&(s=new E(e));var l=this._moduleIdProvider.getModuleId(e);if(this._modules2[l]){this._config.isDuplicateMessageIgnoredFor(e)||console.warn("Duplicate definition of module '"+e+"'");return}var _=new h(l,e,this._normalizeDependencies(t,s),r,o,s);this._modules2[l]=_,this._config.isBuild()&&(this._buildInfoDefineStack[l]=u,this._buildInfoDependencies[l]=(_.dependencies||[]).map(function(v){return d._moduleIdProvider.getStrModuleId(v.id)})),this._resolve(_)},i.prototype._normalizeDependency=function(e,t){if(e==="exports")return a.EXPORTS;if(e==="module")return a.MODULE;if(e==="require")return a.REQUIRE;var r=e.indexOf("!");if(r>=0){var o=t.resolveModule(e.substr(0,r)),u=t.resolveModule(e.substr(r+1)),s=this._moduleIdProvider.getModuleId(o+"!"+u),d=this._moduleIdProvider.getModuleId(o);return new n(s,d,u)}return new a(this._moduleIdProvider.getModuleId(t.resolveModule(e)))},i.prototype._normalizeDependencies=function(e,t){for(var r=[],o=0,u=0,s=e.length;u<s;u++)r[o++]=this._normalizeDependency(e[u],t);return r},i.prototype._relativeRequire=function(e,t,r,o){if(typeof t=="string")return this.synchronousRequire(t,e);this.defineModule(f.Utilities.generateAnonymousModule(),t,r,o,null,e)},i.prototype.synchronousRequire=function(e,t){t===void 0&&(t=new E(e));var r=this._normalizeDependency(e,t),o=this._modules2[r.id];if(!o)throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This is the first mention of this module!");if(!o.isComplete())throw new Error("Check dependency list! Synchronous require cannot resolve module '"+e+"'. This module has not been resolved completely yet.");if(o.error)throw o.error;return o.exports},i.prototype.configure=function(e,t){var r=this._config.shouldRecordStats();t?this._config=new f.Configuration(this._env,e):this._config=this._config.cloneAndMerge(e),this._config.shouldRecordStats()&&!r&&(this._recorder=null)},i.prototype.getConfig=function(){return this._config},i.prototype._onLoad=function(e){if(this._currentAnonymousDefineCall!==null){var t=this._currentAnonymousDefineCall;this._currentAnonymousDefineCall=null,this.defineModule(this._moduleIdProvider.getStrModuleId(e),t.dependencies,t.callback,null,t.stack)}},i.prototype._createLoadError=function(e,t){var r=this,o=this._moduleIdProvider.getStrModuleId(e),u=(this._inverseDependencies2[e]||[]).map(function(d){return r._moduleIdProvider.getStrModuleId(d)}),s=f.ensureError(t);return s.phase="loading",s.moduleId=o,s.neededBy=u,s},i.prototype._onLoadError=function(e,t){var r=this._createLoadError(e,t);this._modules2[e]||(this._modules2[e]=new h(e,this._moduleIdProvider.getStrModuleId(e),[],function(){},function(){},null));for(var o=[],u=0,s=this._moduleIdProvider.getMaxModuleId();u<s;u++)o[u]=!1;var d=!1,l=[];for(l.push(e),o[e]=!0;l.length>0;){var _=l.shift(),v=this._modules2[_];v&&(d=v.onDependencyError(r)||d);var y=this._inverseDependencies2[_];if(y)for(var u=0,s=y.length;u<s;u++){var g=y[u];o[g]||(l.push(g),o[g]=!0)}}d||this._config.onError(r)},i.prototype._hasDependencyPath=function(e,t){var r=this._modules2[e];if(!r)return!1;for(var o=[],u=0,s=this._moduleIdProvider.getMaxModuleId();u<s;u++)o[u]=!1;var d=[];for(d.push(r),o[e]=!0;d.length>0;){var l=d.shift(),_=l.dependencies;if(_)for(var u=0,s=_.length;u<s;u++){var v=_[u];if(v.id===t)return!0;var y=this._modules2[v.id];y&&!o[v.id]&&(o[v.id]=!0,d.push(y))}}return!1},i.prototype._findCyclePath=function(e,t,r){if(e===t||r===50)return[e];var o=this._modules2[e];if(!o)return null;var u=o.dependencies;if(u)for(var s=0,d=u.length;s<d;s++){var l=this._findCyclePath(u[s].id,t,r+1);if(l!==null)return l.push(e),l}return null},i.prototype._createRequire=function(e){var t=this,r=function(o,u,s){return t._relativeRequire(e,o,u,s)};return r.toUrl=function(o){return t._config.requireToUrl(e.resolveModule(o))},r.getStats=function(){return t.getLoaderEvents()},r.hasDependencyCycle=function(){return t._hasDependencyCycle},r.config=function(o,u){u===void 0&&(u=!1),t.configure(o,u)},r.__$__nodeRequire=f.global.nodeRequire,r},i.prototype._loadModule=function(e){var t=this;if(!(this._modules2[e]||this._knownModules2[e])){this._knownModules2[e]=!0;var r=this._moduleIdProvider.getStrModuleId(e),o=this._config.moduleIdToPaths(r),u=/^@[^\/]+\/[^\/]+$/;this._env.isNode&&(r.indexOf("/")===-1||u.test(r))&&o.push("node|"+r);var s=-1,d=function(l){if(s++,s>=o.length)t._onLoadError(e,l);else{var _=o[s],v=t.getRecorder();if(t._config.isBuild()&&_==="empty:"){t._buildInfoPath[e]=_,t.defineModule(t._moduleIdProvider.getStrModuleId(e),[],null,null,null),t._onLoad(e);return}v.record(10,_),t._scriptLoader.load(t,_,function(){t._config.isBuild()&&(t._buildInfoPath[e]=_),v.record(11,_),t._onLoad(e)},function(y){v.record(12,_),d(y)})}};d(null)}},i.prototype._loadPluginDependency=function(e,t){var r=this;if(!(this._modules2[t.id]||this._knownModules2[t.id])){this._knownModules2[t.id]=!0;var o=function(u){r.defineModule(r._moduleIdProvider.getStrModuleId(t.id),[],u,null,null)};o.error=function(u){r._config.onError(r._createLoadError(t.id,u))},e.load(t.pluginParam,this._createRequire(E.ROOT),o,this._config.getOptionsLiteral())}},i.prototype._resolve=function(e){var t=this,r=e.dependencies;if(r)for(var o=0,u=r.length;o<u;o++){var s=r[o];if(s===a.EXPORTS){e.exportsPassedIn=!0,e.unresolvedDependenciesCount--;continue}if(s===a.MODULE){e.unresolvedDependenciesCount--;continue}if(s===a.REQUIRE){e.unresolvedDependenciesCount--;continue}var d=this._modules2[s.id];if(d&&d.isComplete()){if(d.error){e.onDependencyError(d.error);return}e.unresolvedDependenciesCount--;continue}if(this._hasDependencyPath(s.id,e.id)){this._hasDependencyCycle=!0,console.warn("There is a dependency cycle between '"+this._moduleIdProvider.getStrModuleId(s.id)+"' and '"+this._moduleIdProvider.getStrModuleId(e.id)+"'. The cyclic path follows:");var l=this._findCyclePath(s.id,e.id,0)||[];l.reverse(),l.push(s.id),console.warn(l.map(function(y){return t._moduleIdProvider.getStrModuleId(y)}).join(` => 
`)),e.unresolvedDependenciesCount--;continue}if(this._inverseDependencies2[s.id]=this._inverseDependencies2[s.id]||[],this._inverseDependencies2[s.id].push(e.id),s instanceof n){var _=this._modules2[s.pluginId];if(_&&_.isComplete()){this._loadPluginDependency(_.exports,s);continue}var v=this._inversePluginDependencies2.get(s.pluginId);v||(v=[],this._inversePluginDependencies2.set(s.pluginId,v)),v.push(s),this._loadModule(s.pluginId);continue}this._loadModule(s.id)}e.unresolvedDependenciesCount===0&&this._onModuleComplete(e)},i.prototype._onModuleComplete=function(e){var t=this,r=this.getRecorder();if(!e.isComplete()){var o=e.dependencies,u=[];if(o)for(var s=0,d=o.length;s<d;s++){var l=o[s];if(l===a.EXPORTS){u[s]=e.exports;continue}if(l===a.MODULE){u[s]={id:e.strId,config:function(){return t._config.getConfigForModule(e.strId)}};continue}if(l===a.REQUIRE){u[s]=this._createRequire(e.moduleIdResolver);continue}var _=this._modules2[l.id];if(_){u[s]=_.exports;continue}u[s]=null}e.complete(r,this._config,u);var v=this._inverseDependencies2[e.id];if(this._inverseDependencies2[e.id]=null,v)for(var s=0,d=v.length;s<d;s++){var y=v[s],g=this._modules2[y];g.unresolvedDependenciesCount--,g.unresolvedDependenciesCount===0&&this._onModuleComplete(g)}var m=this._inversePluginDependencies2.get(e.id);if(m){this._inversePluginDependencies2.delete(e.id);for(var s=0,d=m.length;s<d;s++)this._loadPluginDependency(e.exports,m[s])}}},i}();f.ModuleManager=c})(AMDLoader||(AMDLoader={}));var define,AMDLoader;(function(f){var E=new f.Environment,h=null,p=function(i,e,t){typeof i!="string"&&(t=e,e=i,i=null),(typeof e!="object"||!Array.isArray(e))&&(t=e,e=null),e||(e=["require","exports","module"]),i?h.defineModule(i,e,t,null,null):h.enqueueDefineAnonymousModule(e,t)};p.amd={jQuery:!0};var a=function(i,e){e===void 0&&(e=!1),h.configure(i,e)},n=function(){if(arguments.length===1){if(arguments[0]instanceof Object&&!Array.isArray(arguments[0])){a(arguments[0]);return}if(typeof arguments[0]=="string")return h.synchronousRequire(arguments[0])}if((arguments.length===2||arguments.length===3)&&Array.isArray(arguments[0])){h.defineModule(f.Utilities.generateAnonymousModule(),arguments[0],arguments[1],arguments[2],null);return}throw new Error("Unrecognized require call")};n.config=a,n.getConfig=function(){return h.getConfig().getOptionsLiteral()},n.reset=function(){h=h.reset()},n.getBuildInfo=function(){return h.getBuildInfo()},n.getStats=function(){return h.getLoaderEvents()},n.define=function(){return p.apply(null,arguments)};function c(){if(typeof f.global.require!="undefined"||typeof require!="undefined"){var i=f.global.require||require;if(typeof i=="function"&&typeof i.resolve=="function"){var e=f.ensureRecordedNodeRequire(h.getRecorder(),i);f.global.nodeRequire=e,n.nodeRequire=e,n.__$__nodeRequire=e}}E.isNode&&!E.isElectronRenderer?(module.exports=n,require=n):(E.isElectronRenderer||(f.global.define=p),f.global.require=n)}f.init=c,(typeof f.global.define!="function"||!f.global.define.amd)&&(h=new f.ModuleManager(E,f.createScriptLoader(E),p,n,f.Utilities.getHighPerformanceTimestamp()),typeof f.global.require!="undefined"&&typeof f.global.require!="function"&&n.config(f.global.require),define=function(){return p.apply(null,arguments)},define.amd=p.amd,typeof doNotInitLoader=="undefined"&&c())})(AMDLoader||(AMDLoader={}));var CSSLoaderPlugin;(function(f){var E=function(){function p(){this._pendingLoads=0}return p.prototype.attachListeners=function(a,n,c,i){var e=function(){n.removeEventListener("load",t),n.removeEventListener("error",r)},t=function(o){e(),c()},r=function(o){e(),i(o)};n.addEventListener("load",t),n.addEventListener("error",r)},p.prototype._onLoad=function(a,n){this._pendingLoads--,n()},p.prototype._onLoadError=function(a,n,c){this._pendingLoads--,n(c)},p.prototype._insertLinkNode=function(a){this._pendingLoads++;var n=document.head||document.getElementsByTagName("head")[0];n.appendChild(a)},p.prototype.createLinkTag=function(a,n,c,i){var e=this,t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("data-name",a);var r=function(){return e._onLoad(a,c)},o=function(u){return e._onLoadError(a,i,u)};return this.attachListeners(a,t,r,o),t.setAttribute("href",n),t},p.prototype._linkTagExists=function(a,n){var c,i,e,t,r=document.getElementsByTagName("link");for(c=0,i=r.length;c<i;c++)if(e=r[c].getAttribute("data-name"),t=r[c].getAttribute("href"),e===a||t===n)return!0;return!1},p.prototype.load=function(a,n,c,i){if(this._linkTagExists(a,n)){c();return}var e=this.createLinkTag(a,n,c,i);this._insertLinkNode(e)},p}(),h=function(){function p(){this._cssLoader=new E}return p.prototype.load=function(a,n,c,i){i=i||{};var e=i["vs/css"]||{};if(e.disabled){c({});return}var t=n.toUrl(a+".css");this._cssLoader.load(a,t,function(r){c({})},function(r){typeof c.error=="function"&&c.error("Could not find "+t+" or it was empty")})},p}();f.CSSPlugin=h,define("vs/css",new h)})(CSSLoaderPlugin||(CSSLoaderPlugin={}));var __spreadArrays=this&&this.__spreadArrays||function(){for(var f=0,E=0,h=arguments.length;E<h;E++)f+=arguments[E].length;for(var p=Array(f),a=0,E=0;E<h;E++)for(var n=arguments[E],c=0,i=n.length;c<i;c++,a++)p[a]=n[c];return p},NLSLoaderPlugin;(function(f){var E=function(){function i(){this._detected=!1,this._isPseudo=!1}return Object.defineProperty(i.prototype,"isPseudo",{get:function(){return this._detect(),this._isPseudo},enumerable:!1,configurable:!0}),i.prototype._detect=function(){this._detected||(this._detected=!0,this._isPseudo=typeof document!="undefined"&&document.location&&document.location.hash.indexOf("pseudo=true")>=0)},i}();function h(i,e,t){var r;return e.length===0?r=i:r=i.replace(/\{(\d+)\}/g,function(o,u){var s=u[0],d=e[s],l=o;return typeof d=="string"?l=d:(typeof d=="number"||typeof d=="boolean"||d===void 0||d===null)&&(l=String(d)),l}),t.isPseudo&&(r="\uFF3B"+r.replace(/[aouei]/g,"$&$&")+"\uFF3D"),r}function p(i,e){var t=i[e];return t||(t=i["*"],t)?t:null}function a(i,e,t){for(var r=[],o=3;o<arguments.length;o++)r[o-3]=arguments[o];return h(t,r,i)}function n(i,e){return function(t,r){var o=Array.prototype.slice.call(arguments,2);return h(i[t],o,e)}}var c=function(){function i(e){var t=this;this._env=e,this.localize=function(r,o){for(var u=[],s=2;s<arguments.length;s++)u[s-2]=arguments[s];return a.apply(void 0,__spreadArrays([t._env,r,o],u))}}return i.prototype.setPseudoTranslation=function(e){this._env._isPseudo=e},i.prototype.create=function(e,t){return{localize:n(t[e],this._env)}},i.prototype.load=function(e,t,r,o){var u=this;if(o=o||{},!e||e.length===0)r({localize:this.localize});else{var s=o["vs/nls"]||{},d=s.availableLanguages?p(s.availableLanguages,e):null,l=".nls";d!==null&&d!==i.DEFAULT_TAG&&(l=l+"."+d);var _=function(v){Array.isArray(v)?v.localize=n(v,u._env):v.localize=n(v[e],u._env),r(v)};typeof s.loadBundle=="function"?s.loadBundle(e,d,function(v,y){v?t([e+".nls"],_):_(y)}):t([e+l],_)}},i.DEFAULT_TAG="i-default",i}();f.NLSPlugin=c,define("vs/nls",new c(new E))})(NLSLoaderPlugin||(NLSLoaderPlugin={}));

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/c13f1abb110fc756f9b3a6f16670df9cd9d4cf63/core/vs/loader.js.map
