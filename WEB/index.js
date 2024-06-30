

function begin() {

    let id = getUrlParam("id");

    if (id === null || id === "ScanMe_0001") {
        id = "DWK_Mobster";
    } 

    const image = document.getElementById("AvatarImage");
    image.src = `customers/${id}.png`;
    id = id.split("_")[0];

    const htmlBody = document.body.innerHTML;
    const updatedHtmlBody = htmlBody
        .replace(/{cost}/g, "<b>$40</b>")
        .replace(/{payout}/g, "<b>$20</b>")
        .replace(/{id}/g, id)
        ;
    document.body.innerHTML = updatedHtmlBody;


}

// Function to get a specific URL parameter
function getUrlParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}
