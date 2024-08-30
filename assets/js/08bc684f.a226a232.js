"use strict";(self.webpackChunknostr_design=self.webpackChunknostr_design||[]).push([[6449],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,g=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(g,s(s({ref:t},h),{},{components:n})):a.createElement(g,s({ref:t},h))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7526:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},s="Unique Design Challenges",r={unversionedId:"unique-design-challenges",id:"unique-design-challenges",title:"Unique Design Challenges",description:"Nostr, given its nature, presents some unique design challenges and personal rewards. Nostr introduces several new concepts that most people are not familiar with:",source:"@site/docs/unique-design-challenges.md",sourceDirName:".",slug:"/unique-design-challenges",permalink:"/docs/unique-design-challenges",draft:!1,editUrl:"https://github.com/nostrdesignguide/nostrdesignguide.github.io/tree/main/docs/unique-design-challenges.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Guiding Principles",permalink:"/docs/guiding-principles"}},l={},p=[{value:"Challenge #1: How do we explain key pairs?",id:"challenge-1-how-do-we-explain-key-pairs",level:2},{value:"Challenge #2: When and how do we introduce signing extensions?",id:"challenge-2-when-and-how-do-we-introduce-signing-extensions",level:2},{value:"Challenge #3: How do we explain relays?",id:"challenge-3-how-do-we-explain-relays",level:2},{value:"Challenge #4: How do we explain zaps?",id:"challenge-4-how-do-we-explain-zaps",level:2},{value:"Challenge #5: NIPs",id:"challenge-5-nips",level:2},{value:"Challenge #6: Deletion across tens to hundreds of relays",id:"challenge-6-deletion-across-tens-to-hundreds-of-relays",level:2},{value:"Design considerations",id:"design-considerations",level:3}],h={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"unique-design-challenges"},"Unique Design Challenges"),(0,i.kt)("img",{src:n(6751).Z}),(0,i.kt)("p",null,"Nostr, given its nature, presents some unique design challenges and personal rewards. Nostr introduces several new concepts that most people are not familiar with:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Cryptographic signing (public and private keys) - lack of centrally verified identity"),(0,i.kt)("li",{parentName:"ol"},"Signing extensions"),(0,i.kt)("li",{parentName:"ol"},"Relays"),(0,i.kt)("li",{parentName:"ol"},"Zaps (if implemented)"),(0,i.kt)("li",{parentName:"ol"},"NIPs (and why some things are supported by some clients and not others)"),(0,i.kt)("li",{parentName:"ol"},"Deletion across tens to hundreds of relays (whereas closed platforms have a sole database)")),(0,i.kt)("p",null,"In this guide, we will explore how nostr deviates from traditional apps and offer some possible ways to address the challenges around these new concepts."),(0,i.kt)("h2",{id:"challenge-1-how-do-we-explain-key-pairs"},"Challenge #1: How do we explain key pairs?"),(0,i.kt)("p",null,"In traditional applications, the user is accustomed to creating accounts with an email, username and password (in most cases the email is the username). In nostr, the user \u201ccreates an account\u201d by generating a public/private key pair. The experience is very different from what people are accustomed to which could result in a wide variety of questions and emotions about what just happened:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What is a public / private key?"),(0,i.kt)("li",{parentName:"ul"},"Why is there no email field?"),(0,i.kt)("li",{parentName:"ul"},"Where is the password field?"),(0,i.kt)("li",{parentName:"ul"},"What happens if I lose my keys?"),(0,i.kt)("li",{parentName:"ul"},"What do you mean I can see other people\u2019s social feeds by signing in as them?"),(0,i.kt)("li",{parentName:"ul"},"Does that mean people can also read my DMs?"),(0,i.kt)("li",{parentName:"ul"},"Why are usernames not unique?"),(0,i.kt)("li",{parentName:"ul"},"What if someone impersonates me?"),(0,i.kt)("li",{parentName:"ul"},"What is a NIP5 identifier?"),(0,i.kt)("li",{parentName:"ul"},"Huh?!"),(0,i.kt)("li",{parentName:"ul"},"Feeling: This sounds complicated \ud83d\ude41")),(0,i.kt)("p",null,"Designers are faced with figuring out how to best ease the user into the client without overwhelming their first experience. "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Do we add detailed explanations about each concept? Will the user read it? "),(0,i.kt)("li",{parentName:"ul"},"Do we break the flow into a few onboarding steps that gently explains the concept of keys and then later gives a more thorough overview? "),(0,i.kt)("li",{parentName:"ul"},"Do we show them a video?"),(0,i.kt)("li",{parentName:"ul"},"Do we even bother calling them keys? Can we call them username / password?"),(0,i.kt)("li",{parentName:"ul"},"Can we add small helpful tips to ease the user into the concepts?"),(0,i.kt)("li",{parentName:"ul"},"Do we even need a \u201cregistration\u201d step? Can we allow the user to simply generate a key instantly without having to even think about these concepts? Will this just confuse them further?"),(0,i.kt)("li",{parentName:"ul"},"How do we explain key recovery if there\u2019s no such thing as a recovery mechanism? ")),(0,i.kt)("p",null,"We don\u2019t really know what works best until we try it. Is there a correct way of handling keys? These are the questions we are faced with and must explore in practice to address."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://nostrdesign.org/docs/how-to/onboarding/"},"How to approach keys")),(0,i.kt)("h2",{id:"challenge-2-when-and-how-do-we-introduce-signing-extensions"},"Challenge #2: When and how do we introduce signing extensions?"),(0,i.kt)("p",null,"Losing or exposing your private keys results in complete loss of your profile and the misstep is irreversible. This is a huge deviation from traditional email / password authentication. Nostr designers and developers are faced with the question of how to provide failsafe mechanisms to reduce the potential of leaking keys or total loss - both of which render the \u201caccount\u201d unusable. "),(0,i.kt)("p",null,"To help address these issues, developers have introduced signing extensions which store your private key and sign on the user\u2019s behalf without having to enter a private key into an app or a website. If the app is compromised, this could result in the key being leaked. "),(0,i.kt)("p",null,"Signing extensions have their own install process and onboarding which is an extra UX hurdle. Luckily, we do not need the extensions to sign up for the first time - a key is easily generated. The challenge is then in signing in on other clients after the initial nostr exploration. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Questions for designers:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"How should the user be educated about signing extensions? "),(0,i.kt)("li",{parentName:"ol"},"Do clients link to them within their settings? If not Settings, where?"),(0,i.kt)("li",{parentName:"ol"},"To what extent do we need to explain these things? ")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://nostrdesign.org/docs/how-to/sign-in-sign-up/"},"Explore possible solutions")),(0,i.kt)("h2",{id:"challenge-3-how-do-we-explain-relays"},"Challenge #3: How do we explain relays?"),(0,i.kt)("p",null,"Traditional apps are hosted on centralized servers. The user authenticates their credentials and data is then fetched and sent from and to a server or a set of servers."),(0,i.kt)("p",null,"In nostr, there are no central servers. Relays are responsible for communicating with clients and providing a history of signed events. But, what happens if some relays know some data about you, and others don\u2019t? This may result in inconsistency of data (such as an inconsistent follower count, or missing notes and reactions). "),(0,i.kt)("p",null,"Inconsistent display of data and inconsistent experience across multiple clients (some may connect you to some relays and others to totally different ones. Differences in caching mechanisms could also impact how data is displayed. All of this may contribute to the impression that the app / client is broken and that it\u2019s not ready for serious consideration."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://nostrdesign.org/docs/how-to/relays/"},"Explore Relay Interactions")),(0,i.kt)("h2",{id:"challenge-4-how-do-we-explain-zaps"},"Challenge #4: How do we explain zaps?"),(0,i.kt)("p",null,"While not part of the core nostr protocol, zaps are popular enough that we should discuss them a bit here. Designers and developers have to consider where in the user journey zaps may be explained if at all. "),(0,i.kt)("p",null,"In this guide we will explore how current clients are explaining zaps (if they are) and where / how we can improve the overall user experience by doing a better job at arming the user with the necessary information."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://nostrdesign.org/docs/how-to/zaps/"},"Explore Zaps")),(0,i.kt)("h2",{id:"challenge-5-nips"},"Challenge #5: NIPs"),(0,i.kt)("p",null,"Unlike email clients (e.g. Yahoo, Microsoft Outlook, Gmail email client etc.) which (explaining in an oversimplified way) either support or don't support the email protocol, nostr apps have tens of NIPs, and potentially hundreds of NIP candidates as nostr continues to grow. "),(0,i.kt)("p",null,"A design consequence of a multitude of opt-in NIPs means that there will be sets of apps with little overlap in supported NIPs. This means that a user of app A may not be able to interact with a user on app Y, or vice versa. This also means that unless this is surfaced to either user, they may not be aware that they cannot interact with users of another app. "),(0,i.kt)("p",null,"For further context, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nostrability/nostrability/issues"},"Nostrability")," is a community effort that tracks both negative interoperability (i.e. broken things), and positive interoperability (i.e. championing a single spec) across multiple nostr apps."),(0,i.kt)("h2",{id:"challenge-6-deletion-across-tens-to-hundreds-of-relays"},"Challenge #6: Deletion across tens to hundreds of relays"),(0,i.kt)("p",null,"Event deletion in reference to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nostr-protocol/nips/blob/master/09.md%5D"},"NIP-09")," on nostr carries a unique challenge of asking various distinct relays (i.e. databases) to delete a particular event."),(0,i.kt)("h3",{id:"design-considerations"},"Design considerations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'There is no guarantee of deletion on nostr. Therefore it is unintentionally misleading for nostr apps to refer a request to delete as a "delete".')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Superior terminology of "deletion request" sets expectations accordingly (see terminology ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/nostr-protocol/nips/blob/master/09.md#event-deletion-request"},"here"),", and discussion ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nostr-protocol/nips/pull/1425"},"here"),")."),(0,i.kt)("h3",{parentName:"li",id:"open--unanswered-design-questions"},"Open & unanswered design questions")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Should the app team warn the user that there is no guarantee anything can be deleted, once posted to nostr?")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Should the app explain the difference between nostr relays with different admins, vs sole admin Twitter?")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If yes, when is the right moment for this? For instance, is it prior to the user's first nostr post?"))))}u.isMDXComponent=!0},6751:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/challenges-dfe1ff25b9c75d31f27c567f4b61695e.png"}}]);