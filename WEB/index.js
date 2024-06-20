

function begin() {

    let id = getUrlParam("id");

    if (id === null) {
        id = "BACON";
    }

    const htmlBody = document.body.innerHTML;
    const updatedHtmlBody = htmlBody
        .replace(/{cost}/g, "$40")
        .replace(/{payout}/g, "$20")
        .replace(/{id}/g, id)
        ;
    document.body.innerHTML = updatedHtmlBody;

}

// Function to get a specific URL parameter
function getUrlParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}
