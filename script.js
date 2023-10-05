function checkPWAForiOS() {
    const domain = document.getElementById('domainInput').value;

    // Check for iOS-specific PWA features
    if ('standalone' in window.navigator && window.navigator.standalone) {
        document.getElementById('result').textContent = `${domain} can be installed as a PWA on iOS.`;
    } else {
        document.getElementById('result').textContent = `${domain} cannot be installed as a PWA on iOS.`;
    }
}
