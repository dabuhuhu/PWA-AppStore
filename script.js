function checkPWA() {
    const domain = document.getElementById('domainInput').value;

    // Check for service worker support
    if ('serviceWorker' in navigator) {
        // Check for manifest file
        fetch(`https://${domain}/manifest.json`)
            .then(response => {
                if (response.status === 200) {
                    document.getElementById('result').textContent = `${domain} can be installed as a PWA.`;
                } else {
                    document.getElementById('result').textContent = `${domain} does not have a valid manifest file.`;
                }
            })
            .catch(error => {
                document.getElementById('result').textContent = `${domain} could not be reached or does not have a valid manifest file.`;
            });
    } else {
        document.getElementById('result').textContent = `${domain} cannot be installed as a PWA because the browser does not support service workers.`;
    }
}
