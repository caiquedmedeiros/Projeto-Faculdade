function previewBanner() {
    const bannerText = document.getElementById("bannerText").value;
    const bannerColor = document.getElementById("bannerColor").value;
    const bannerFont = document.getElementById("bannerFont").value;
    const bannerImage = document.getElementById("bannerImage").files[0];

    let preview = document.getElementById("previewBanner");
    preview.innerHTML = '';

    if (bannerImage) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(bannerImage);
        preview.appendChild(img);
    } else {
        const div = document.createElement("div");
        div.innerText = bannerText;
        div.style.color = bannerColor;
        div.style.fontFamily = bannerFont;
        preview.appendChild(div);
    }
}