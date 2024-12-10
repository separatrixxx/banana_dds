export function copyToClipboard(deviceHash: string) {
    navigator.clipboard.writeText(`happ://add/https://api-vpn.banana.codes/sub/${deviceHash}#BananaCodes`).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
