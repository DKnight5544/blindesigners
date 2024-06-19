

function begin() {

    let id = getUrlParam("id");

    if (id === null) {
        id = "BACON";
    }

    let idContainer = document.getElementById("IdContainer");
    idContainer.innerHTML = idContainer.innerHTML.replace("{0}", id);

    let nextVoice = document.getElementById("nextVoice");
    nextVoice.href = nextVoice.href.replace("{0}", id)

    const htmlBody = document.body.innerHTML;
    const updatedHtmlBody = htmlBody.replace(/{cost}/g, "$40").replace(/{payout}/g, "$20");
    document.body.innerHTML = updatedHtmlBody;

}

// Function to get a specific URL parameter
function getUrlParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}
