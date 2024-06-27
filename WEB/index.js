

function begin() {

    let id = getUrlParam("id");

    if (id === null || id === "ScanMe_0001") {
        id = "DWK_ScanMe";
    } 

    const image = document.getElementById("QRCodeImage");
    const sampleName = id.split("_")[1];
    id = id.split("_")[0];
    image.src = `samples/${sampleName}.png`;

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
