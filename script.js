document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('speedForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const downloadSpeed = parseFloat(document.getElementById('downloadSpeed').value);
        const uploadSpeed = parseFloat(document.getElementById('uploadSpeed').value);
        
        const vpns = [
            { 
                name: "NordVPN", 
                speedLoss: 0.11,
                link: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=90197" // NordVPN affiliate link
            },
            { 
                name: "Surfshark", 
                speedLoss: 0.05,
                link: "https://get.surfshark.net/aff_c?offer_id=926&aff_id=34209" // Surfshark affiliate link
            },
            { 
                name: "Proton VPN", 
                speedLoss: 0.075,
                link: "https://protonvpn.com/" // Proton VPN product page link
            }
        ];
        
        let result = "<h2>Estimated VPN Speeds:</h2>";
        result += "<ul>";
        
        vpns.forEach(vpn => {
            const estimatedDownload = downloadSpeed * (1 - vpn.speedLoss);
            const estimatedUpload = uploadSpeed * (1 - vpn.speedLoss);
            result += `<li><strong><a href="${vpn.link}" target="_blank">${vpn.name}</a>:</strong> Download ${estimatedDownload.toFixed(2)} Mbps, Upload ${estimatedUpload.toFixed(2)} Mbps</li>`;
        });
        
        result += "</ul>";
        
        const fastestVPN = vpns.reduce((prev, current) => (prev.speedLoss < current.speedLoss) ? prev : current);
        
        result += `<p>Based on these estimates, <strong><a href="${fastestVPN.link}" target="_blank">${fastestVPN.name}</a></strong> might provide the fastest speeds for you.</p>`;
        result += "<p>Remember, actual VPN speeds can vary based on many factors including server location, network conditions, and time of day.</p>";
        
        resultDiv.innerHTML = result;
    });
});