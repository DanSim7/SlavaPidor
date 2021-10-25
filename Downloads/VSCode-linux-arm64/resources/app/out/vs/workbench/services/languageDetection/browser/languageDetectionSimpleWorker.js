/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/(function(){var h=["vs/workbench/services/languageDetection/browser/languageDetectionSimpleWorker","require","exports","vs/base/common/stopwatch","vs/editor/common/services/editorSimpleWorker"],p=function(u){for(var i=[],r=0,l=u.length;r<l;r++)i[r]=h[u[r]];return i};define(h[0],p([1,2,3,4]),function(u,i,r,l){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.LanguageDetectionSimpleWorker=i.create=void 0;function g(v){return new e(v,null)}i.create=g;class e extends l.EditorSimpleWorker{constructor(){super(...arguments);this._loadFailed=!1}async detectLanguage(s){const o=[],c=[],t=new r.StopWatch(!0);for await(const a of this.detectLanguagesImpl(s))o.push(a.languageId),c.push(a.confidence);if(t.stop(),o.length)return this._host.fhr("sendTelemetryEvent",[o,c,t.elapsed()]),o[0]}async getModelOperations(){if(this._modelOperations)return this._modelOperations;const s=await this._host.fhr("getIndexJsUri",[]),{ModelOperations:o}=await new Promise((c,t)=>{u([s],c,t)});return this._modelOperations=new o({modelJsonLoaderFunc:async()=>{const c=await fetch(await this._host.fhr("getModelJsonUri",[]));try{return await c.json()}catch(t){const a="Failed to parse model JSON.";throw new Error(a)}},weightsLoaderFunc:async()=>await(await fetch(await this._host.fhr("getWeightsUri",[]))).arrayBuffer()}),this._modelOperations}adjustLanguageConfidence(s){switch(s.languageId){case"javascript":case"html":case"json":case"typescript":case"css":case"python":case"xml":case"php":s.confidence+=e.positiveConfidenceCorrectionBucket1;break;case"cpp":case"shellscript":case"java":case"csharp":case"c":s.confidence+=e.positiveConfidenceCorrectionBucket2;break;case"bat":case"ini":case"makefile":case"sql":case"csv":case"toml":s.confidence-=e.negativeConfidenceCorrection;break;default:break}return s}async*detectLanguagesImpl(s){if(this._loadFailed)return;let o;try{o=await this.getModelOperations()}catch(n){console.log(n),this._loadFailed=!0;return}const c=this._getModel(s);if(!c)return;let t;const a=c.positionAt(1e4),m=c.getValueInRange({startColumn:1,startLineNumber:1,endColumn:a.column,endLineNumber:a.lineNumber});try{t=await o.runModel(m)}catch(n){console.warn(n)}if(!t||t.length===0||t[0].confidence<e.expectedRelativeConfidence)return;const f=this.adjustLanguageConfidence(t[0]);if(f.confidence<e.expectedRelativeConfidence)return;const d=[f];for(let n of t){if(n===f)continue;if(n=this.adjustLanguageConfidence(n),d[d.length-1].confidence-n.confidence>=e.expectedRelativeConfidence){for(;d.length;)yield d.shift();if(n.confidence>e.expectedRelativeConfidence){d.push(n);continue}return}else{if(n.confidence>e.expectedRelativeConfidence){d.push(n);continue}return}}}}i.LanguageDetectionSimpleWorker=e,e.expectedRelativeConfidence=.2,e.positiveConfidenceCorrectionBucket1=.05,e.positiveConfidenceCorrectionBucket2=.025,e.negativeConfidenceCorrection=.5})}).call(this);

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/c13f1abb110fc756f9b3a6f16670df9cd9d4cf63/core/vs/workbench/services/languageDetection/browser/languageDetectionSimpleWorker.js.map
