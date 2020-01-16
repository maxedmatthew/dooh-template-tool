const downloadFile = () => {

    setTimeout(() => {
        const a = document.createElement("a");
        a.style.display = "none";
        document.body.appendChild(a);

        // Set the HREF to download-link
        a.href = "/downloadFile";

        // Trigger the download by simulating click
        a.click();

        // Cleanup
        window.URL.revokeObjectURL(a.href);
        document.body.removeChild(a);

    }, 4000);
}

export default downloadFile;