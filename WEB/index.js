

function begin() {

    let id = getUrlParam("id");

    if (id === null) {
        id = "Sample";
    }

    const htmlBody = document.body.innerHTML;
    const updatedHtmlBody = htmlBody
        .replace(/{cost}/g, "$40")
        .replace(/{payout}/g, "$20")
        .replace(/{id}/g, id)
        ;
    document.body.innerHTML = updatedHtmlBody;

    const image = document.getElementById("QRCodeImage");
    image.src = `images/${id}.png`;


}

// Function to get a specific URL parameter
function getUrlParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}
