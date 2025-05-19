(function(){
    const $hexChunks = [
        "51", "31", "4e", "50", "52", "33", "74", "35",
        "4d", "48", "56", "79", "4d", "31", "39", "68",
        "64", "7a", "4e", "7a", "4d", "47", "31", "6c",
        "58", "33", "52", "6f", "49", "58", "4d", "67",
        "61", "54", "56", "66", "64", "47", "67", "7a",
        "58", "32", "59", "68", "62", "6b", "42", "4d",
        "58", "30", "5a", "73", "4e", "47", "63", "68",
        "66", "51", "3d", "3d"
    ];

    const $utils = {
        delay: (t) => new Promise(res => setTimeout(res, t)),
        status: ["Recon Init", "Loading Scripts", "Parsing..."]
    };

    async function $bootSequence() {
        console.log(">>> Booting OSINT Modules...");
        for (let i = 0; i < $utils.status.length; i++) {
            console.log(">>>", $utils.status[i]);
            await $utils.delay(100 + Math.random() * 100);
        }
        console.log(">>> OSINT Engine Ready.");
    }

    function $decodeFlag() {
        const base64 = $hexChunks.map(hex => String.fromCharCode(parseInt(hex, 16))).join('');
        const flag = atob(base64);
        console.log(">>> Data Stream Reconstructed.");
        return flag;
    }

    async function $main() {
        await $bootSequence();
        const flag = $decodeFlag();
        console.log(">>> FLAG:", flag);
    }

    $main();
})();
