// ==========================================
// PENGATURAN NOTIFIKASI, SUARA, & GETAR (DI LUAR HTML)
// ==========================================

const NOTIFICATION_CONFIG = {
    // Anda bisa mengganti URL suara ini dengan file audio lokal (misal: 'assets/notification.mp3') atau link audio online
    soundSrc: "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3",
    
    // Pola Getar (dalam milidetik): [getar, jeda, getar, ...]
    vibration: {
        onlineOffline: [400, 200, 400],           // Getar panjang saat tombol Online/Offline ditekan
        radarOrder: [600, 200, 600, 200, 600],   // Getar panjang beruntun untuk orderan masuk di radar
        routeConfirmed: [500, 300, 500]          // Getar panjang untuk pop-up perubahan terkonfirmasi
    }
};

// Fungsi Global untuk Memutar Suara Notifikasi
function playNotificationSound() {
    try {
        const audio = new Audio(NOTIFICATION_CONFIG.soundSrc);
        audio.play().catch(e => console.log("Audio autoplay diblokir browser:", e));
    } catch (err) {
        console.log("Gagal memutar suara:", err);
    }
}

// Fungsi Global untuk Getar Perangkat
function triggerCustomVibration(type) {
    if ("vibrate" in navigator) {
        const pattern = NOTIFICATION_CONFIG.vibration[type] || [300];
        navigator.vibrate(pattern);
    }
}
