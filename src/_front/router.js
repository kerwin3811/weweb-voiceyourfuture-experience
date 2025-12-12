import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"a3d1ba18-f91e-41fa-8843-04ea707071c8","homePageId":"963774b3-3cb1-454f-a286-4702f512b6a9","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":false,"isDefaultPath":false},{"lang":"nl","default":true,"isDefaultPath":true}],"background":{},"workflows":[],"pages":[{"id":"dbc67f32-8788-402e-8637-8eb55d2bf73e","linkId":"dbc67f32-8788-402e-8637-8eb55d2bf73e","name":"Confirm email","folder":"Auth/","paths":{"nl":"confirm-email","default":"confirm-email"},"langs":["en","nl"],"cmsDataSetPath":null,"sections":[{"uid":"288390a5-56e1-4793-bf8d-d97386177e32","sectionTitle":"Email verification","linkId":"64a9cecf-5ff5-4d1d-8e2b-62efeef2f146"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"02ea496c-ad23-488d-9745-eab948a8e076","linkId":"02ea496c-ad23-488d-9745-eab948a8e076","name":"Forgot password","folder":"Auth/","paths":{"nl":"forgot-password","default":"forgot-password"},"langs":["en","nl"],"cmsDataSetPath":null,"sections":[{"uid":"0bbda460-efe0-4300-b90b-38613526f94e","sectionTitle":"Reset password","linkId":"a1e8e992-7655-4682-987d-0d19d2b42f7d"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d9efd3b3-7fdd-40e8-85ff-efa64b415fb9","linkId":"d9efd3b3-7fdd-40e8-85ff-efa64b415fb9","name":"Chat Panel","folder":null,"paths":{"nl":"chat-panel","default":"chat-panel"},"langs":["en","nl"],"cmsDataSetPath":null,"sections":[{"uid":"1e535f62-cb84-4ef6-aee0-764e2aa8bcfd","sectionTitle":"Sidemenu","linkId":"1368edef-62c5-4943-8d46-31dca8724e58"},{"uid":"00ea6aa7-ebfa-449b-895c-93f5226fcc63","sectionTitle":"Container","linkId":"04c5796a-3cfc-4e79-a830-34f72b81f3e9"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"5ce4a19c-91de-4012-b990-90c75e4f3bb6","linkId":"5ce4a19c-91de-4012-b990-90c75e4f3bb6","name":"Privacybeleid","folder":"Default Pages/","paths":{"en":"privacybeleid","default":"privacybeleid"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f7cabba8-4949-4824-8c74-5f523ab65112","sectionTitle":"Sidemenu","linkId":"8d7b12a1-fd35-4551-8546-760ddc0c80a4"},{"uid":"6d2f98fc-5e1d-4b04-bd82-049b0ecb6fb2","sectionTitle":"Container","linkId":"98d69f19-1275-41ad-9b1e-4f997aaf10ad"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"194316d9-35f5-48f1-abbb-d5ac5932457e","linkId":"194316d9-35f5-48f1-abbb-d5ac5932457e","name":"Algemene voorwaarden","folder":"Default Pages/","paths":{"en":"algemene-voorwaarden","default":"algemene-voorwaarden"},"langs":["en"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"5a0c0c11-6fb9-4cba-ad18-7a7f0e28886b","linkId":"5a0c0c11-6fb9-4cba-ad18-7a7f0e28886b","name":"Cookies","folder":"Default Pages/","paths":{"en":"cookies","default":"cookies"},"langs":["en"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"37e1c6f2-c6e5-4833-a468-568df3029b21","linkId":"37e1c6f2-c6e5-4833-a468-568df3029b21","name":"Persoonlijkheid_backup","folder":"Backup Pages/","paths":{"en":"persoonlijkheid_backup","nl":"persoonlijkheid_backup","default":"persoonlijkheid_backup"},"langs":["en","nl"],"cmsDataSetPath":null,"sections":[{"uid":"39523939-5e7f-4ca7-8c40-1fcf96295223","sectionTitle":"Persoonlijkheid Main","linkId":"0e1e9170-5af6-4b87-a3df-100f9935942c"},{"uid":"e0d9d52f-9fb1-448e-9986-c103dc853c71","sectionTitle":"Persoonlijkheid Sidebar","linkId":"b028382a-f5b0-44cb-bde2-63a5651b8c5b"},{"uid":"020035ee-b0ed-4327-a6ff-97504d48dba6","sectionTitle":"Zelfbeeld Sidebar","linkId":"522c484f-366e-4b05-b2e5-88447b05d036"},{"uid":"21c869fa-a924-45a8-91d3-d248d35a5450","sectionTitle":"Zelfbeeld Main","linkId":"5725c775-6c62-468b-9800-e6d79f9e2fe7"},{"uid":"bf9fbdde-c48c-4684-b1b3-b7d1549c3884","sectionTitle":"Leerstijl Sidebar","linkId":"f1368677-6f31-44cd-b60e-d617e01af2d4"},{"uid":"701caa10-718b-43b8-93fa-0b642c53aeb2","sectionTitle":"Leerstijl Main","linkId":"64a5093b-5e65-4091-8656-596168f1651b"},{"uid":"a97b309e-2b54-48a2-985e-5561a01942ed","sectionTitle":"Competenties Sidebar","linkId":"45d74cce-ec64-4c41-b274-84b54af31359"},{"uid":"d6146229-b5b4-4b58-8184-f162a3ab539a","sectionTitle":"Competenties Main","linkId":"c0a5bdfa-85d3-4197-a927-12df0681128a"},{"uid":"1c238b2f-d5ea-4dc3-940a-47bce7c9a4ea","sectionTitle":"Sidebar Section","linkId":"6403b4a8-b854-43b5-bc97-e9ff1a783ee5"},{"uid":"b8cdd96b-13a9-40a7-8b0b-b0af227e767f","sectionTitle":"Main Content Section","linkId":"235ecdb0-c0d6-4820-91be-1df9d32f47f7"}],"pageUserGroups":[],"title":{"en":"Persoonlijkheid_backup"},"meta":{"desc":{"en":"Page recreating persoonlijkheid.pdf with same colors and structure."},"keywords":{"en":"persoonlijkheid, personality"},"socialDesc":{"en":"Persoonlijkheid page matching the pdf style."},"socialTitle":{"en":"Persoonlijkheid"}},"metaImage":""},{"id":"e8b07f21-1807-40a4-8614-1af1df820082","linkId":"e8b07f21-1807-40a4-8614-1af1df820082","name":"Compass","folder":"Default Pages Authenticated/","paths":{"nl":"compass","default":"compass"},"langs":["en","nl"],"cmsDataSetPath":null,"sections":[{"uid":"5ea25c63-24e5-4794-a9fa-7f4fbfb7fa83","sectionTitle":"Sidemenu","linkId":"1f244665-bfe6-49d7-aa31-e893c1dd5790"},{"uid":"f66e7b6e-e532-41d7-b08f-5ae3f953a17b","sectionTitle":"Titel Container","linkId":"af580b36-c0e4-4ac2-9854-ec76c60309f1"},{"uid":"67aa28bf-84da-4a02-abe8-8e6e0f10b221","sectionTitle":"Page Container","linkId":"1e627a05-ab69-4a8a-9d40-93705b08ee32"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d70445df-bf6c-41e5-97ae-53fe54428dab","linkId":"d70445df-bf6c-41e5-97ae-53fe54428dab","name":"Persoonlijkheid","folder":"Default Pages Authenticated/","paths":{"nl":"persoonlijkheid","default":"persoonlijkheid"},"langs":["en","nl"],"cmsDataSetPath":null,"sections":[],"pageUserGroups":[{}],"title":{"en":"Personality","nl":"Persoonlijkheid"},"meta":{"desc":{},"keywords":{},"__typename":"PageMeta","socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"4b8c02e2-bbda-4a86-8d4e-6e1ecfb75bae","linkId":"4b8c02e2-bbda-4a86-8d4e-6e1ecfb75bae","name":"Competenties","folder":"Default Pages Authenticated/","paths":{"nl":"competenties","default":"competenties"},"langs":["en","nl"],"cmsDataSetPath":null,"sections":[{"uid":"be821db8-489f-4972-9f28-579d3947889b","sectionTitle":"Sidemenu","linkId":"4a5ff574-a495-4148-8393-74aa2e2c1b39"},{"uid":"c9fd3897-65b5-4d02-9c2f-19c4a91c83a2","sectionTitle":"Main Container","linkId":"a4c98a00-9951-4f6a-b2b1-59fe1d64f2eb"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"963774b3-3cb1-454f-a286-4702f512b6a9","linkId":"963774b3-3cb1-454f-a286-4702f512b6a9","name":"Landingpage","folder":null,"paths":{"en":"landingpage","default":"landingpage"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"0afde1fa-65b5-42c0-bcca-89f7dfb03540","sectionTitle":"Top Nav","linkId":"e7982a7e-664c-40df-b8ee-e86f3bad0393"},{"uid":"609a55bb-1989-4ad4-8220-c9bd840ac0bf","sectionTitle":"Section","linkId":"313e8b59-641d-4964-a588-1851da312ade"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"__typename":"PageMeta","socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"e18d88da-7976-4118-9af1-3dfb6a3b7b1a","linkId":"e18d88da-7976-4118-9af1-3dfb6a3b7b1a","name":"Promptboek","folder":"Default Pages Authenticated/","paths":{"en":"promptboek","default":"promptboek"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"43762796-2a4f-4b56-bd41-5e9d10bc25bb","sectionTitle":"Sidemenu","linkId":"19809168-cf27-45b0-b2ee-ce42d35932c0"},{"uid":"c69e5a4d-38e1-4132-b993-367686d32f1d","sectionTitle":"Container","linkId":"dc8aaaa5-4f34-448a-bef0-23994a1d0669"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"c3073919-8e64-4681-a2ab-fd7feb2f2926","linkId":"c3073919-8e64-4681-a2ab-fd7feb2f2926","name":"ChatGPTUI","folder":"Backup Pages/","paths":{"en":"chatgpt-ui","default":"chatgpt-ui"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"5643efd6-0b9c-4836-9553-c7b169b16447","sectionTitle":"Sidebar Section","linkId":"8aabbe7a-ff5f-4d1d-87c8-078538bd8d2c"},{"uid":"d3a5c808-390d-41b9-a486-6e4de2e2c8b3","sectionTitle":"Main Section","linkId":"f5e7628a-3be6-4169-b943-c4fb1b373c44"}],"pageUserGroups":[],"title":{"en":"ChatGPT Assistant"},"meta":{"desc":{"en":"Chat interface connecting to n8n OpenAI Assistant workflow with chat history and Supabase integration."},"keywords":{"en":"chat, OpenAI, n8n, Supabase, assistant, AI"},"socialDesc":{"en":"Chat interface connecting to n8n OpenAI Assistant workflow with chat history and Supabase integration."},"socialTitle":{"en":"ChatGPT Assistant"}},"metaImage":""},{"id":"d3f01131-0eb3-43fd-b647-43e3977aa84b","linkId":"d3f01131-0eb3-43fd-b647-43e3977aa84b","name":"Consult","folder":"Default Pages Authenticated/","paths":{"en":"consult","default":"consult"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"42348ca2-d4d7-4bf7-aff5-aa0bf04d3df8","sectionTitle":"Sidemenu","linkId":"7f57f189-6fff-4f07-811f-f9ca85ac7480"},{"uid":"1e78a164-d49d-44e8-9a32-522132fa7d03","sectionTitle":"Container","linkId":"004920e8-9d1e-408a-b775-69c930ac3878"},{"uid":"f12a9cfd-b270-467e-8cea-56a3dfc33038","sectionTitle":"Bottom Nav","linkId":"ad86f1f2-339b-4fc0-87a6-7bcfd59e44d9"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"ed82001f-997c-4f6c-86dc-ffa74d814c5b","linkId":"ed82001f-997c-4f6c-86dc-ffa74d814c5b","name":"Login","folder":"Auth/","paths":{"nl":"login","default":"login"},"langs":["en","nl"],"cmsDataSetPath":null,"sections":[{"uid":"8a37acb9-8a46-4d19-bc98-367bde556364","sectionTitle":"Login","linkId":"07342709-b76a-4778-acdc-71ddde528be4"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"503c0961-b495-4a2a-85dd-03eb4eb43013","linkId":"503c0961-b495-4a2a-85dd-03eb4eb43013","name":"Profiel (backup)","folder":"Backup Pages/","paths":{"nl":"profiel-backup","default":"profiel-backup"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"42b85e34-eb4a-48f6-88cc-7909c86af65a","sectionTitle":"Sidemenu","linkId":"0846b467-7951-42aa-81db-0dbec38f0689"},{"uid":"6dc920d6-b8b7-434b-bb95-3b212c0f399e","sectionTitle":"MAIN Container","linkId":"971d1b59-f765-4d96-9824-e34a39526232"},{"uid":"888ed82c-3fb0-4979-b7a7-86593f338207","sectionTitle":"Bottom Nav","linkId":"8dc04009-4ab9-48a2-9e8b-c23e8435097c"}],"pageUserGroups":[{}],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"},{"id":"60610cfd-fa28-4fc1-9e72-088b5c667e81","name":"Calendly","namespace":"calendly"},{"id":"cabb43dd-6161-4140-8ebf-03b6fb045a0b","name":"Google","namespace":"google"},{"id":"9c40819b-4a8f-468f-9ba5-4b9699f3361f","name":"Charts","namespace":"chartjs"},{"id":"832d6f7a-42c3-43f1-a3ce-9a678272f811","name":"Date","namespace":"dayjs"},{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"},{"id":"d66a250d-8468-469e-ad33-ee028f632398","name":"OpenAI","namespace":"openai"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 5;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
