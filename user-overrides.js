user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", false); // dont clear cookies & storage on shutdown

user_pref("identity.fxaccounts.enabled", false); // disable "Sync & Sign-in with Firefox"

user_pref("browser.toolbars.bookmarks.visibility", "always"); // always show favorites

user_pref("media.videocontrols.picture-in-picture.video-toggle-enabled", false); // disable pip shortcut

// https://www.reddit.com/r/firefox/comments/1lp9fsy/how_do_i_disable_ai_functionality_in_the_browser/
user_pref("browser.ml.enable", false); // general switch for machine learning features in Firefox (https://www.reddit.com/r/firefox/comments/1obbrvz/how_to_completely_get_rid_of_the_ai_stuff/nki10g9/), though it might not completely disable all features (https://bugzilla.mozilla.org/show_bug.cgi?id=1971973#c11)
user_pref("browser.ml.chat.enabled", false); // AI Chatbot (https://docs.openwebui.com/tutorials/integrations/firefox-sidebar/#additional-about-settings)
user_pref("browser.ml.chat.sidebar", false);
user_pref("browser.ml.chat.menu", false); // remove "Ask a chatbot" from tab context menu
user_pref("browser.ml.chat.page", false); // remove option from page context menu
user_pref("extensions.ml.enabled", false); // might only be relevant for app developers
user_pref("browser.ml.linkPreview.enabled", false);
user_pref("browser.tabs.groups.smart.enabled", false); // "Use AI to suggest tabs and a name for tab groups" in settings
user_pref("browser.tabs.groups.smart.userEnabled", false);
user_pref("pdfjs.enableAltTextModelDownload", false); // "This prevents downloading the AI model unless the user opts in (by enabling the toggle to "Create alt text automatically" from "Image alt text settings" when viewing a PDF)"
user_pref("pdfjs.enableGuessAltText", false); // (disabling this might be redundant when AltTextModelDownload is disabled)

// disable remembering passwords, forms & stuff
user_pref("signon.rememberSignons", false);
user_pref("browser.formfill.enable", false);

// disable automatic translation popups
user_pref("browser.translations.automaticallyPopup", false);
