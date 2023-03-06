// ==UserScript==
// @name         奶茶工具箱
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.xp.cn/*
// @match        http://www.yinghuacd.com/*
// @icon         https://raw.githubusercontent.com/ww125cn/Shadowrocket/main/favicon.ico
// @grant        unsafeWindow
// @grant        GM_addStyle

// ==/UserScript==

(function() {
    let weburl=unsafeWindow.location.href
    if(weburl.indexOf('www.yinghuacd.com')!=-1)
    {
        GM_addStyle('#HMRichBox{display:none !important}')
        GM_addStyle('#HMcoupletDivleft{display:none !important}')
        GM_addStyle('#HMcoupletDivright{display:none !important}')
        GM_addStyle('#bdshare{display:none !important}')
    }
    if(weburl.indexOf('www.xp.cn')!=-1)
    {
        //alert('HelloWorld')
        GM_addStyle('.wenda_top{display:none !important}')
        GM_addStyle('.mt-10 linux-ads layui-main{display:none !important}')
    }
})();
