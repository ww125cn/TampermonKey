// ==UserScript==
// @name         奶茶工具箱
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*/*
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
        GM_addStyle('.mt-10.linux-ads.layui-main{display:none !important}')
    }
    if(weburl.indexOf('bbs.125.la')!=-1)
    {
        GM_addStyle('.wp.a_h{display:none !important}')
        GM_addStyle('.wp.a_t.ad-tips{display:none !important}')
        GM_addStyle('.a_pt{display:none !important}')
        GM_addStyle('.a_pb{display:none !important}')
        GM_addStyle('.forumlist_ad:none !important}')
    }
})();
