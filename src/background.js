// ---*---*--- browser-polyfill.min.js ---*---*---
//# sourceMappingURL=browser-polyfill.min.js.map

// webextension-polyfill v.0.8.0 (https://github.com/mozilla/webextension-polyfill)

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */
 
(function(a,b){if("function"==typeof define&&define.amd)define("webextension-polyfill",["module"],b);else if("undefined"!=typeof exports)b(module);else{var c={exports:{}};b(c),a.browser=c.exports}})("undefined"==typeof globalThis?"undefined"==typeof self?this:self:globalThis,function(a){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");a.exports=(a=>{const b={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(b).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class c extends WeakMap{constructor(a,b=void 0){super(b),this.createItem=a}get(a){return this.has(a)||this.set(a,this.createItem(a)),super.get(a)}}const d=a=>a&&"object"==typeof a&&"function"==typeof a.then,e=(b,c)=>(...d)=>{a.runtime.lastError?b.reject(new Error(a.runtime.lastError.message)):c.singleCallbackArg||1>=d.length&&!1!==c.singleCallbackArg?b.resolve(d[0]):b.resolve(d)},f=a=>1==a?"argument":"arguments",g=(a,b)=>function(c,...d){if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((f,g)=>{if(b.fallbackToNoCallback)try{c[a](...d,e({resolve:f,reject:g},b))}catch(e){console.warn(`${a} API method doesn't seem to support the callback parameter, `+"falling back to call it without a callback: ",e),c[a](...d),b.fallbackToNoCallback=!1,b.noCallback=!0,f()}else b.noCallback?(c[a](...d),f()):c[a](...d,e({resolve:f,reject:g},b))})},h=(a,b,c)=>new Proxy(b,{apply(b,d,e){return c.call(d,a,...e)}});let i=Function.call.bind(Object.prototype.hasOwnProperty);const j=(a,b={},c={})=>{let d=Object.create(null),e=Object.create(a);return new Proxy(e,{has(b,c){return c in a||c in d},get(e,f){if(f in d)return d[f];if(!(f in a))return;let k=a[f];if("function"==typeof k){if("function"==typeof b[f])k=h(a,a[f],b[f]);else if(i(c,f)){let b=g(f,c[f]);k=h(a,a[f],b)}else k=k.bind(a);}else if("object"==typeof k&&null!==k&&(i(b,f)||i(c,f)))k=j(k,b[f],c[f]);else if(i(c,"*"))k=j(k,b[f],c["*"]);else return Object.defineProperty(d,f,{configurable:!0,enumerable:!0,get(){return a[f]},set(b){a[f]=b}}),k;return d[f]=k,k},set(b,c,e){return c in d?d[c]=e:a[c]=e,!0},defineProperty(a,b,c){return Reflect.defineProperty(d,b,c)},deleteProperty(a,b){return Reflect.deleteProperty(d,b)}})},k=a=>({addListener(b,c,...d){b.addListener(a.get(c),...d)},hasListener(b,c){return b.hasListener(a.get(c))},removeListener(b,c){b.removeListener(a.get(c))}}),l=new c(a=>"function"==typeof a?function(b){const c=j(b,{},{getContent:{minArgs:0,maxArgs:0}});a(c)}:a);let m=!1;const n=new c(a=>"function"==typeof a?function(b,c,e){let f,g,h=!1,i=new Promise(a=>{f=function(b){m||(console.warn("Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",new Error().stack),m=!0),h=!0,a(b)}});try{g=a(b,c,f)}catch(a){g=Promise.reject(a)}const j=!0!==g&&d(g);if(!0!==g&&!j&&!h)return!1;const k=a=>{a.then(a=>{e(a)},a=>{let b;b=a&&(a instanceof Error||"string"==typeof a.message)?a.message:"An unexpected error occurred",e({__mozWebExtensionPolyfillReject__:!0,message:b})}).catch(a=>{console.error("Failed to send onMessage rejected reply",a)})};return j?k(g):k(i),!0}:a),o=({reject:b,resolve:c},d)=>{a.runtime.lastError?a.runtime.lastError.message==="The message port closed before a response was received."?c():b(new Error(a.runtime.lastError.message)):d&&d.__mozWebExtensionPolyfillReject__?b(new Error(d.message)):c(d)},p=(a,b,c,...d)=>{if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((a,b)=>{const e=o.bind(null,{resolve:a,reject:b});d.push(e),c.sendMessage(...d)})},q={devtools:{network:{onRequestFinished:k(l)}},runtime:{onMessage:k(n),onMessageExternal:k(n),sendMessage:p.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:p.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},r={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return b.privacy={network:{"*":r},services:{"*":r},websites:{"*":r}},j(a,q,b)})(chrome)}else a.exports=browser});

//---*---*--- background.js ---*---*---

let readableNameList = {}
const fileNameRegex = /([\w,\s-.]+\.[A-Za-z]{2,4}$)/
const fileNameBaseDir = 'IMP/twitter/'

function chromeDownloadRenamer(item, suggest) {
    if (!item.byExtensionId && item.byExtensionId !== chrome.runtime.id) {
        return
    }

    if (!Object.keys(readableNameList).length) {
        return
    }

    let result = fileNameRegex.exec(item.filename)
    const filename = result[1]
    const suggestFilename = readableNameList[filename] || item.filename
    const replacedFilePath = item.filename.replace(fileNameRegex, suggestFilename)
    delete readableNameList[filename]

    suggest({ filename: replacedFilePath, conflictAction: "uniquify" })

    if (!Object.keys(readableNameList).length) {
        chrome.downloads.onDeterminingFilename.removeListener(chromeDownloadRenamer)
    }
}

function processBlobVideo(id, readableName, token) {
    browser.storage.sync.get({
        isVideoSaveAsTS: true,
        isVideoSaveAsMP4: true,
    }).then((items) => {
        if (items.isVideoSaveAsTS) {
            processComplexTsVideo(id, readableName, token)
        }

        if (items.isVideoSaveAsMP4) {
            processComplexMp4Video(id, readableName, token)
        }
    })
}

function processGifVideo(url, readableName) {
    browser.storage.sync.get({
        isConvertGIF: true,
        isSaveMP4: true,
    }).then((items) => {
        if (items.isConvertGIF) {
            convertGif(url, readableName)
        }

        if (items.isSaveMP4) {
            downloadMp4Video(url, readableName)
        }
    })
}

async function processComplexTsVideo(id, readableName, token) {
    var jsonUrl = "https://api.twitter.com/1.1/videos/tweet/config/"
    jsonUrl += id + ".json"

    var playlistUrl = await getPlaylistUrl(jsonUrl, token)
    var filename = playlistUrl.substring(playlistUrl.lastIndexOf('/') + 1).split(".")[0]
    var palylist = await getMaximumBandwidthPlaylist(playlistUrl)
    var videoUrls = await getVideoFileUrls(palylist)
    var videoData = await accumTsFragment(videoUrls)

    downloadTsVideo(videoData, filename, readableName)
}

async function extractGraphQlMp4Video(id, token) {
    try {
        const jsonResponse = await archiveTweetDetailJson(id, token)
        const tweetResults = jsonResponse["data"]["threaded_conversation_with_injections_v2"]["instructions"][0]["entries"][0]["content"]["itemContent"]["tweet_results"]["result"]

        let videoSources = null
        if (tweetResults.hasOwnProperty('tweet')) {
            videoSources = tweetResults['tweet']["legacy"]["extended_entities"]["media"][0]["video_info"]["variants"]
        } else {
            videoSources = tweetResults["legacy"]["extended_entities"]["media"][0]["video_info"]["variants"]

        }
        videoSources.sort(sortByBitrate)

        return videoSources[0]['url']
    } catch (e) {
        if (e instanceof TypeError) {
            return null
        } else {
            throw e;
        }
    }
}

async function archiveTweetDetailJson(id, token) {
    /*let tweetDetailUrl = `https://twitter.com/i/api/graphql/-Ls3CrSQNo2fRKH6i6Na1A/TweetDetail?variables=%7B%22focalTweetId%22%3A%22${id}%22%2C%22with_rux_injections%22%3Afalse%2C%22includePromotedContent%22%3Atrue%2C%22withCommunity%22%3Atrue%2C%22withQuickPromoteEligibilityTweetFields%22%3Atrue%2C%22withBirdwatchNotes%22%3Atrue%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22rweb_lists_timeline_redesign_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Afalse%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_media_download_video_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D&fieldToggles=%7B%22withAuxiliaryUserLabels%22%3Afalse%2C%22withArticleRichContentState%22%3Afalse%7D`*/
    let tweetDetailUrl = `https://x.com/i/api/graphql/-Ls3CrSQNo2fRKH6i6Na1A/TweetDetail?variables=%7B%22focalTweetId%22%3A%22${id}%22%2C%22with_rux_injections%22%3Afalse%2C%22includePromotedContent%22%3Atrue%2C%22withCommunity%22%3Atrue%2C%22withQuickPromoteEligibilityTweetFields%22%3Atrue%2C%22withBirdwatchNotes%22%3Atrue%2C%22withVoice%22%3Atrue%2C%22withV2Timeline%22%3Atrue%7D&features=%7B%22rweb_lists_timeline_redesign_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Afalse%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_media_download_video_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D&fieldToggles=%7B%22withAuxiliaryUserLabels%22%3Afalse%2C%22withArticleRichContentState%22%3Afalse%7D`
    const response = await fetch(tweetDetailUrl, {
        "credentials": "include",
        "headers": {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/115.0",
            "Accept": "*/*",
            "Accept-Language": "ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3",
            "content-type": "application/json",
            "x-twitter-auth-type": "OAuth2Session",
            "x-csrf-token": token,
            "x-twitter-client-language": "ko",
            "x-twitter-active-user": "yes",
            "X-Client-Transaction-Id": "NzRMqdd3tuyaOaNVwIUt8B2lkDXpa9LFoDd8b4qm19wGAPlc5MmznuiuWvZwPq1lzUQZYgAE+nthOir1ViJ1D9Sjz59h",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA"
        },
        "referrer": "https://twitter.com/Sanghai83780Kim/status/1679624508293140480",
        "method": "GET",
        "mode": "cors"
    });

    return await response.json()
}

const sortByBitrate = (a, b) => {
    const bitrateA = a.bitrate || 0;
    const bitrateB = b.bitrate || 0;

    return bitrateB - bitrateA;
}

async function processComplexMp4Video(id, readableName, token) {
    var pageUrl = "https://api.twitter.com/1.1/statuses/show.json?include_profile_interstitial_type=1&include_blocking=1&include_blocked_by=1&include_followed_by=1&include_want_retweets=1&include_mute_edge=1&include_can_dm=1&skip_status=1&cards_platform=Web-12&include_cards=1&include_ext_alt_text=true&include_reply_count=1&tweet_mode=extended&trim_user=false&include_ext_media_color=true&id=" + id
    var mp4Url = await getMp4Url(pageUrl, token)

    downloadMp4Video(mp4Url, readableName)
}

function processImageDownload(src, readableName) {
    browser.runtime.sendMessage({
        type: 'image',
        readableName: readableName,
        url: src
    })
}

function getMp4Url(url, token) {
    return new Promise((resolve, reject) => {
        var init = {
            origin: 'https://mobile.twitter.com',
            headers: {
                "Accept": '*/*',
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.0",
                "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
                "x-csrf-token": token,
            },
            credentials: 'include',
            referrer: 'https://mobile.twitter.com'
        }

        fetch(url, init)
            .then((response) => {
                if (response.status == 200) {
                    response.json().then((json) => {
                        let mp4Variants = (json.extended_entities || json.quoted_status.extended_entities).media[0].video_info.variants.filter(variant => variant.content_type === 'video/mp4')
                        mp4Variants = mp4Variants.sort((a, b) => (b.bitrate - a.bitrate))

                        let url = ''
                        if (mp4Variants.length) {
                            url = mp4Variants[0].url
                        }
                        resolve(url)
                    })
                } else {
                    reject({
                        status: response.status,
                        statusText: response.statusText
                    })
                }
            })
            .catch((err) => {
                reject({
                    error: err
                })
            })
    })
}

function getPlaylistUrl(url, token) {
    return new Promise((resolve, reject) => {
        var init = {
            method: 'GET',
            mode: 'cors',
            origin: 'https://twitter.com',
            headers: {
                "Accept": '*/*',
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:62.0) Gecko/20100101 Firefox/62.0",
                "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAPYXBAAAAAAACLXUNDekMxqa8h%2F40K4moUkGsoc%3DTYfbDKbT3jJPCEVnMYqilB28NHfOPqkca3qaAxGfsyKCs0wRbw",
                "x-csrf-token": token,
            },
            credentials: 'include',
            referrer: 'https://twitter.com'
        }

        fetch(url, init)
            .then((response) => {
                if (response.status == 200) {
                    response.json().then((data) => {
                        var platlistUrl = data["track"]["playbackUrl"]
                        resolve(platlistUrl)
                    })
                } else {
                    reject({
                        status: response.status,
                        statusText: response.statusText
                    })
                }
            })
            .catch((err) => {
                reject({
                    error: err
                })
            })
    })
}

function getMaximumBandwidthPlaylist(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(
                (response) => {
                    if (response.status == 200) {
                        response.text().then((text) => {
                            resolve(findMaxBandwidthSource(text))
                        })
                    } else {
                        reject({
                            status: response.status,
                            statusText: response.statusText
                        })
                    }
                }
            )
            .catch((err) => {
                reject({
                    error: err
                })
            })
    })
}

function getVideoFileUrls(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(
                (response) => {
                    if (response.status == 200) {
                        response.text().then((text) => {
                            resolve(parseVideoUrls(text))
                        })
                    } else {
                        reject({
                            status: response.status,
                            statusText: response.statusText
                        })
                    }
                }
            )
            .catch((err) => {
                reject({
                    error: err
                })
            })
    })

}

async function accumTsFragment(videoUrls) {
    var videoBuffer = new Uint8Array(0)

    for (var i in videoUrls) {
        var fragment = await downloadTsFragment(videoUrls[i])
        videoBuffer = mergeFragment(videoBuffer, fragment)
    }

    return videoBuffer
}

function downloadTsFragment(urlTs) {
    return new Promise((resolve, reject) => {
        fetch(urlTs)
            .then((response) => response.arrayBuffer())
            .then((buffer) => {
                resolve(buffer)
            })
            .catch((err) => {
                reject({
                    error: err
                })
            })
    })
}

function mergeFragment(buffer, fragment) {
    var now = new Uint8Array(fragment)
    var prev = new Uint8Array(buffer)

    var merged = new Uint8Array(now.length + prev.length)
    merged.set(prev)
    merged.set(now, prev.length)

    return merged
}

function downloadTsVideo(data, tsFilename, readableName) {
    browser.storage.sync.get({
        spcificPathName: false,
        readableName: false
    }).then((items) => {
        var blob = new Blob([data], {
            type: 'video/mp2t'
        })
        var url = URL.createObjectURL(blob)

        let options = {
            url: url,
            saveAs: items.spcificPathName,
            filename: tsFilename + ".ts"
        }

        if (items.readableName) {
            options.filename = readableName + '.ts'
        }

        browser.downloads.download(options)
    })
}

function fileExtension(url) {
    const splited = url.split('.')
    return splited[splited.length - 1].split('?')[0]
}

function downloadMp4Video(url, readableName) {
    browser.storage.sync.get({
        spcificPathName: false,
        readableName: false
    }).then((items) => {
        let options = {
            url: url,
            saveAs: items.spcificPathName
        }

        if (items.readableName) {
            options.filename = readableName + '.' + fileExtension(url)
        }

        browser.downloads.download(options)
    })
}

function downloadImageRenamer (item, suggest) {

    const uploadedImageQuery = /https:\/\/pbs.twimg.com\/media\/(.*)?\?.*/g;
    const nameMatches = uploadedImageQuery.exec(item.url)
    if (nameMatches!=null && nameMatches.length) {
        const filename = item.filename.split('.')[0]
        const suggestFilename = readableNameList[filename] || item.filename
        delete readableNameList[filename]
        //return suggest({filename: suggestFilename, conflictAction: "uniquify"});
        return suggest({filename: fileNameBaseDir + suggestFilename, conflictAction: "uniquify"});
    } else {
        return;
    }
}

function downloadLogger (item) {
    if(typeof item.filename != 'undefined') {
        if (chrome.downloads.onDeterminingFilename.hasListener(downloadImageRenamer) && downloadFilePull.includes(item.id)) {
            downloadFilePull.splice(downloadFilePull.indexOf(item.id), 1);
            downloadFileCount = downloadFileCount - 1
            if (downloadFilePull.length == 0 && downloadFileCount < 1)  {
                chrome.downloads.onDeterminingFilename.removeListener(downloadImageRenamer)
            }
        }
    }
}

var downloadFilePull = [];
var downloadFileCount = 0;

function downloadImage(url, readableName) {
    browser.storage.sync.get({
        spcificPathName: false,
        readableName: false
    }).then(async (items) => {
        const uploadedImageQuery = /https:\/\/pbs.twimg.com\/media\/(.*)?\?.*/g
        const extensionAttributeQuery = /(?:\?|\&)format\=([^&]+)/g

        const nameMatches = uploadedImageQuery.exec(url)
        const formatMatches = extensionAttributeQuery.exec(url)

        let options = {
            url: url,
            saveAs: items.spcificPathName
        }

        let filename = 'no_title'
        const format = formatMatches[1]

        if (nameMatches.length) {
            filename = nameMatches[1]
        }

        /*if (!!items.readableName) {
            if (!!chrome.downloads.onDeterminingFilename) {
                readableNameList[`${filename}.${format}`] = `${readableName}.${format}`

                if (!!chrome.downloads.onDeterminingFilename && !isRenamerActivated()) {
                    chrome.downloads.onDeterminingFilename.addListener(chromeDownloadRenamer)
                }
            }
            filename = readableName
        }*/
        
        if (!!items.readableName) {
            readableNameList[filename] = `${readableName}.${format}` 
            filename = readableName
        }
        
        if (formatMatches.length) {
            options.filename = `${filename}.${format}`
        }
        
        if(!!chrome.downloads.onDeterminingFilename) {
            if (!chrome.downloads.onDeterminingFilename.hasListener(downloadImageRenamer))
                chrome.downloads.onDeterminingFilename.addListener(downloadImageRenamer)
            if (!chrome.downloads.onChanged.hasListener(downloadLogger))
                chrome.downloads.onChanged.addListener(downloadLogger)
        }
        
        downloadFileCount = downloadFileCount + 1;
        
        let file = await browser.downloads.download(options);
        
        downloadFilePull.push(file);
        /*
        browser.downloads.download(options)
            .then((_downloadItem) => {
                if (!Object.keys(readableNameList).length) {
                    chrome.downloads.onDeterminingFilename.removeListener(chromeDownloadRenamer)
                }
            })
        */
    })
}

function getCookie(cname) {
    var name = cname + "="
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

function findMaxBandwidthSource(string) {
    var stringsSplited = string.split("#")
    var arrBandwidth = []
    for (var i in stringsSplited) {
        var bandwidth = findBandwidth(stringsSplited[i])
        if (bandwidth > 0) {
            arrBandwidth.push(bandwidth)
        }
    }

    var bandwidthMax = Math.max.apply(null, arrBandwidth)
    for (var i in stringsSplited) {
        if (bandwidthMax == findBandwidth(stringsSplited[i])) {
            return findPlaylistSource(stringsSplited[i])
        }
    }
    return ""
}

function findBandwidth(sourcePlaylist) {
    var stringsSplited = sourcePlaylist.split(/:|,/)
    for (var i in stringsSplited) {
        if (stringsSplited[i].search("BANDWIDTH") == 0) {
            return Number(stringsSplited[i].split("=")[1])
        }
    }
    return -1
}

function findPlaylistSource(sourcePlaylist) {
    var stringsSplited = sourcePlaylist.split("\n")
    for (var i in stringsSplited) {
        if (((stringsSplited[i].search("ext_tw_video") > 0) || (stringsSplited[i].search("amplify_video") > 0)) && (stringsSplited[i].search("m3u8") > 0)) {
            return "https://video.twimg.com" + stringsSplited[i]
        }
    }
    return ""
}

function parseVideoUrls(string) {
    var stringsSplited = string.split("#")
    var arrPlaylist = []
    for (var i in stringsSplited) {
        if ((stringsSplited[i].search("ext_tw_video") > 0) || (stringsSplited[i].search("amplify_video") > 0)) {
            arrPlaylist.push("https://video.twimg.com" + stringsSplited[i].split("\n")[1])
        }
    }
    return arrPlaylist
}

function isRenamerActivated() {
    return chrome.downloads.onDeterminingFilename.hasListener(chromeDownloadRenamer)
}

let workerSpace = {}

const CAPTURE_INTERVAL = 33
const PLAY_SPEED_RATE = 2.0
const filenameRegex = /([\w,\s-.]+\.[A-Za-z]{2,4}$)/

browser.runtime.onMessage.addListener(processRequest)

function processRequest(request) {
    switch (request.type) {
        case 'video':
            processVideoSource(request)
            break

        case 'image':
            downloadImage(request.url, request.readableName)
            break
    }
}

function processVideoSource({
    videoSource,
    tweetId,
    readerableFilename,
    tweetSelector,
    token
}) {
    if (videoSource.includes('blob')) {
        if (!!tweetId) {
            processBlobVideo(tweetId, readerableFilename, token)
        }
    } else if (videoSource.includes('ext_tw_video')) {
        downloadMp4Video(videoSource, readerableFilename)
    } else {
        processGifVideo(videoSource, readerableFilename)
    }
}

function convertGif(url, readableFilename) {
    sendSpinnerStateMessage(false)

    var filename = url.substring(url.lastIndexOf('/') + 1).split(".")[0]
    var worker = createWorker(filename, readableFilename)
    var canvas = document.createElement('canvas')
    var context = canvas.getContext('2d')
    var video = document.createElement('video')

    video.src = url
    video.crossOrigin = "use-credentials"
    video.playbackRate = PLAY_SPEED_RATE
    video.preload = "auto"
    video.innerHTML = '<source src="' + video.src + '" type="video/mp4 preload="metadata" />'

    video.oncanplaythrough = processVideo(canvas, context, video, worker)
}

function createWorker(filename, readableFilename) {
    workerSpace[filename] = new Worker('gif_converter.js')
    workerSpace[filename].onmessage = processWorkerData(filename, readableFilename)
    return workerSpace[filename]
}

function processWorkerData(filename, readableFilename) {
    return (event) => {
        browser.storage.sync.get({
            spcificPathName: false,
            readableName: false
        }).then((items) => {
            var u8Array = new Uint8Array(atob(event.data).split("").map(function (c) {
                return c.charCodeAt(0)
            }))
            var blob = new Blob([u8Array], {
                type: 'image/gif'
            })
            var url = URL.createObjectURL(blob)

            let downloadFilename = filename
            if (items.readableName) {
                downloadFilename = readableFilename
            }

            browser.downloads.download({
                url: url,
                saveAs: items.spcificPathName,
                filename: downloadFilename + ".gif"
            })
            workerSpace[filename].terminate()
            delete workerSpace[filename]
            if (numberOfWorker() == 0) {
                sendSpinnerStateMessage(true)
            }
        })
    }
}

function processVideo(canvas, context, video, worker) {
    return () => {
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        captureVideo(context, video, worker)
    }
}

async function captureVideo(context, video, worker) {
    worker.postMessage({
        delay: CAPTURE_INTERVAL * PLAY_SPEED_RATE,
        w: video.videoWidth,
        h: video.videoHeight
    })

    video.play()
    while (!video.ended) {
        draw(context, video, worker)
        await sleep(CAPTURE_INTERVAL)
    }

    worker.postMessage({})
}

function draw(context, video, worker) {
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
    var imageData = context.getImageData(0, 0, video.videoWidth, video.videoHeight)
    worker.postMessage({
        frame: imageData
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function sendSpinnerStateMessage(hide) {
    browser.tabs.query({
        currentWindow: true,
        url: ["*://*.twitter.com/*", "*://twitter.com/*"]
    }).then((tabs) => {
        for (var i in tabs) {
            browser.tabs.sendMessage(tabs[i].id, {
                hideSpinner: hide
            })
        }
    })
}

function numberOfWorker() {
    return Object.keys(workerSpace).length
}
