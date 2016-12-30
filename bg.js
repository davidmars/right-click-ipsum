chrome.contextMenus.create(
    {
        "title": "Few words",
        "contexts":["editable"],
        "onclick": function(info, tab){
            chrome.tabs.sendMessage(tab.id, "fewWords", function(clickedEl) {
                //just send command
            });
        }
    }
);
chrome.contextMenus.create(
    {
        "title": "Many words",
        "contexts":["editable"],
        "onclick": function(info, tab){
            chrome.tabs.sendMessage(tab.id, "manyWords", function(clickedEl) {
                //just send command
            });

        }
    }
);

chrome.contextMenus.create(
    {
        "title": "Many many words",
        "contexts":["editable"],
        "onclick": function(info, tab){
            chrome.tabs.sendMessage(tab.id, "manyManyWords", function(clickedEl) {
                //just send command
            });

        }
    }
);


