const siteUrls = ["http://nba.com", "http://mlb.com", "http://nhl.com", "http://tesla.com"];

function openTabs(){
    siteUrls.forEach(item => {
        console.log(item);
        window.open(item);
    });
}
openTabs();