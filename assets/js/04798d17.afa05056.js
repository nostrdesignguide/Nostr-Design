"use strict";(self.webpackChunknostr_design=self.webpackChunknostr_design||[]).push([[8023],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(o),u=r,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},8425:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=o(7462),r=(o(7294),o(3905));const a={},i="Impostor Prevention",s={unversionedId:"how-to/impostor-prevention",id:"how-to/impostor-prevention",title:"Impostor Prevention",description:"Since nostr doesn't have central servers and there is no way to authenticate any users, we run into the challenge of preventing impostors on the protocol. Some solutions have been devised, though none are perfect yet. Here we'll explore various concepts such as NIP5 (not a good prevention mechanism) along with other ways of preventing impostors.",source:"@site/docs/how-to/impostor-prevention.md",sourceDirName:"how-to",slug:"/how-to/impostor-prevention",permalink:"/docs/how-to/impostor-prevention",draft:!1,editUrl:"https://github.com/nostrdesignguide/nostrdesignguide.github.io/tree/main/docs/how-to/impostor-prevention.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/docs/how-to/error-handling"},next:{title:"Logged Out View",permalink:"/docs/how-to/logged-out-view"}},l={},d=[{value:"NIP5 - Nostr Address",id:"nip5---nostr-address",level:2},{value:"What a nostr address should be used for:",id:"what-a-nostr-address-should-be-used-for",level:4},{value:"What a nostr address should NOT be used for:",id:"what-a-nostr-address-should-not-be-used-for",level:4},{value:"Special consideration",id:"special-consideration",level:3},{value:"Best practice for displaying nostr addresses",id:"best-practice-for-displaying-nostr-addresses",level:2},{value:"User Profile",id:"user-profile",level:3},{value:"Direct Messages (Optional)",id:"direct-messages-optional",level:3},{value:"Following Icon",id:"following-icon",level:2},{value:"&quot;Possible impostor&quot; label",id:"possible-impostor-label",level:2}],c={toc:d},p="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"impostor-prevention"},"Impostor Prevention"),(0,r.kt)("p",null,"Since nostr doesn't have central servers and there is no way to authenticate any users, we run into the challenge of preventing impostors on the protocol. Some solutions have been devised, though none are perfect yet. Here we'll explore various concepts such as NIP5 (not a good prevention mechanism) along with other ways of preventing impostors. "),(0,r.kt)("h2",{id:"nip5---nostr-address"},"NIP5 - Nostr Address"),(0,r.kt)("p",null,'NIP5 or "Nostr Address" is a topic of ongoing discussion, please check back often for best practices. The Nostr Address is an optional shorthand way of referencing your account. It\'s a convenient way of sharing your profile verbally when copy and pasting npubs is not an option. ',(0,r.kt)("strong",{parentName:"p"},"However, it should not be used as any form of identification or verification.")," Though it ",(0,r.kt)("strong",{parentName:"p"},"can")," help deter scammers, there's no guarantee that it won't be abused. For most people, their nostr address is a vanity feature to show that they are affiliated in some shape or form with an entity. "),(0,r.kt)("h4",{id:"what-a-nostr-address-should-be-used-for"},"What a nostr address should be used for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sharing your profile with people verbally. For example, when chatting on a podcast and letting people know where they can find you."),(0,r.kt)("li",{parentName:"ul"},"That's pretty much the only use case that cannot be abused!")),(0,r.kt)("h4",{id:"what-a-nostr-address-should-not-be-used-for"},"What a nostr address should NOT be used for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As any form of identification (scammers can use typo domains for high profile individuals and any random domain for an average user as people won't know which domain was used for your nostr address)"),(0,r.kt)("li",{parentName:"ul"},"To authenticate a note by displaying the nostr address along the display name. People will either not pay attention to it, or won't know if that's the legitimate domain. "),(0,r.kt)("li",{parentName:"ul"},"To authenticate any profile. The address can help, but it's not a bulletproof solution. ")),(0,r.kt)("h3",{id:"special-consideration"},"Special consideration"),(0,r.kt)("p",null,'A nostr address CAN be used to successfully "verify" a high profile individual, company or brand IF the person interacting with them actually clicks through the profile and verifies that there are no typos in the address. This, in combination with other forms of common sense verification (do they seem to have a correct number of followers? Do I already follow them?) can lend some trust to their profile. However, if the user is not familiar with their domain, a similar legitimate or even a scam domain could be used to fool enough people to inflict damage to everyone involved. '),(0,r.kt)("h2",{id:"best-practice-for-displaying-nostr-addresses"},"Best practice for displaying nostr addresses"),(0,r.kt)("h3",{id:"user-profile"},"User Profile"),(0,r.kt)("p",null,"Show the full address in the user's profile: "),(0,r.kt)("img",{src:o(639).Z}),(0,r.kt)("h3",{id:"direct-messages-optional"},"Direct Messages (Optional)"),(0,r.kt)("p",null,"You could also show the NIP5 in direct messages:"),(0,r.kt)("img",{src:o(6307).Z}),(0,r.kt)("h2",{id:"following-icon"},"Following Icon"),(0,r.kt)("p",null,"One way to help deter scammers is to show which users are being followed. This may indicate that this is a legitimate person you've already interacted with, though it will not help deter new profiles from scamming. "),(0,r.kt)("p",null,"Some clients are already doing this via a checkmark next to the display name. However, a check mark can be misinerpreted or easily overlooked. Ideally, we would show a full text label to indicate that we're following this person, but this could get heavy on the visual look and feel. Developers could give users options to toggle off full text labels in favor of a simple checkmark, but the key is to have this be an opt-out action so the user understand what that checkmark means having seen the full label first."),(0,r.kt)("img",{src:o(1378).Z}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default label")," - the label users would see when they follow people who comment on their notes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mobile / toggled off text")," - depending if the rest of design accomodates it, we could leave the full label on mobile or remove the text label. We can also give users an option to toggle off the text to show just the icon. This would help expose them to the text first, giving more clarity to what the icon means."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Icon variation")," - depending on your icon sets, an icon with user and checkmark may be a bit more clear as to the meaning.")),(0,r.kt)("p",null,"It is important to consider user feedback with each option. If users complain tha the icons alone (such as on mobile) are confusing, it may help to test the full label."),(0,r.kt)("h2",{id:"possible-impostor-label"},'"Possible impostor" label'),(0,r.kt)("p",null,'Client admins can utilize a strategy that compares the pixels in the display name and the profile image from people being followed to those who are not followed. If the names and image match a certain percentage, but the user is not followed, we can trigger a "possible impostor" label:'),(0,r.kt)("img",{src:o(9394).Z}),(0,r.kt)("p",null,"If you are building with Swift, here is an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nostur-com/nostur-ios-public/blob/main/Nostur/Profiles/ImposterChecker.swift"},"example of a fully functional Impostor Checker code")," by Fabian Lachman. Fabian has implemented this on Nostur and was kind enough to share it! Thank you! For text comparison, Fabian used ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/autozimu/StringMetric.swift"},"SwiftMetric")," and a ",(0,r.kt)("a",{parentName:"p",href:"https://chat.openai.com/share/d61496d6-0a38-48f6-863e-e8348143ba4f"},"chatgpt conversation")," for the image part."))}h.isMDXComponent=!0},639:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/address-in-profile-e4c712e8bc2a35d06a0ff561740bca5d.png"},1378:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/following-icon-acef6d3f55c0d423bacc4579419e447a.png"},9394:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/impostor-warning-9f13bef4098a73c7f2a97f7c967752bf.png"},6307:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/nip5-in-dm-723217364f7b6a4ac0580be37c935f52.png"}}]);