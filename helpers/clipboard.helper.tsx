export function copyToClipboard(deviceHash: string, isFullHash: string | null, setIsFullHash: (e: string | null) => void) {
    navigator.clipboard.writeText(`happ://add/https://api-vpn.banana.codes/sub/${deviceHash}#BananaCodes`).catch(err => {
        if (isFullHash && isFullHash === deviceHash) {
            setIsFullHash(null);
        } else {
            setIsFullHash(deviceHash);
        }
        
        console.error('Failed to copy text: ', err);
    });
}
