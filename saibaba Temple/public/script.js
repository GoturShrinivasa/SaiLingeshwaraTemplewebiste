window.addEventListener('load', () => {
    registerSW();
})

async function registerSW() {
    if ("serviceWorker" in navigator) {
      // register service worker
        try {
         await navigator.serviceWorker.register("./sw.js");
        } catch (e) {
            console.log(`SW registration failed`);
        }   
    }
}
