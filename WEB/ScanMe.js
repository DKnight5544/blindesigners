

function begin() {

    let id = getUrlParam("id");


    const image = document.getElementById("AvatarImage");
    image.src = `ScanMe/${id}.png`;

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

function setStyle(style) {
    document.getElementById("KH").style.display = "none";
    document.getElementById("JO").style.display = "none";
    document.getElementById("JH").style.display = "none";
    document.getElementById("DT").style.display = "none";
    document.getElementById("Gemstones").style.display = "none";
    document.getElementById(style).style.display = "block";
}
