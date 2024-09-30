(()=>{"use strict";var e={7549:(e,s,r)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.IPCClient=void 0;const t=r(8611);s.IPCClient=class{constructor(e){this.handlerName=e;const s=process.env.VSCODE_GIT_IPC_HANDLE;if(!s)throw new Error("Missing VSCODE_GIT_IPC_HANDLE");this.ipcHandlePath=s}call(e){const s={socketPath:this.ipcHandlePath,path:`/${this.handlerName}`,method:"POST"};return new Promise(((r,n)=>{const o=t.request(s,(e=>{if(200!==e.statusCode)return n(new Error(`Bad status code: ${e.statusCode}`));const s=[];e.on("data",(e=>s.push(e))),e.on("end",(()=>r(JSON.parse(Buffer.concat(s).toString("utf8")))))}));o.on("error",(e=>n(e))),o.write(JSON.stringify(e)),o.end()}))}}},9896:e=>{e.exports=require("fs")},8611:e=>{e.exports=require("http")}},s={};function r(t){var n=s[t];if(void 0!==n)return n.exports;var o=s[t]={exports:{}};return e[t](o,o.exports,r),o.exports}var t={};(()=>{var e=t;Object.defineProperty(e,"__esModule",{value:!0});const s=r(9896),n=r(7549);function o(e){console.error("Missing or invalid credentials."),console.error(e),process.exit(1)}!function(e){if(!process.env.VSCODE_GIT_ASKPASS_PIPE)return o("Missing pipe");if(!process.env.VSCODE_GIT_ASKPASS_TYPE)return o("Missing type");if("https"!==process.env.VSCODE_GIT_ASKPASS_TYPE&&"ssh"!==process.env.VSCODE_GIT_ASKPASS_TYPE)return o(`Invalid type: ${process.env.VSCODE_GIT_ASKPASS_TYPE}`);if("fetch"===process.env.VSCODE_GIT_COMMAND&&process.env.VSCODE_GIT_FETCH_SILENT)return o("Skip silent fetch commands");const r=process.env.VSCODE_GIT_ASKPASS_PIPE,t=process.env.VSCODE_GIT_ASKPASS_TYPE,i="https"===t?e[2]:e[3];let c,a,p;"https"===t&&(c=e[4].replace(/^["']+|["':]+$/g,"")),"ssh"===t&&(/passphrase/i.test(i)?a=e[6]?.replace(/^["']+|["':]+$/g,""):(c=e[6].replace(/^["']+|["':]+$/g,""),p=e[15])),new n.IPCClient("askpass").call({askpassType:t,request:i,host:c,file:a,fingerprint:p}).then((e=>{s.writeFileSync(r,e+"\n"),setTimeout((()=>process.exit(0)),0)})).catch((e=>o(e)))}(process.argv)})();var n=exports;for(var o in t)n[o]=t[o];t.__esModule&&Object.defineProperty(n,"__esModule",{value:!0})})();
//# sourceMappingURL=https://main.vscode-cdn.net/sourcemaps/38c31bc77e0dd6ae88a4e9cc93428cc27a56ba40/extensions/git/dist/askpass-main.js.map