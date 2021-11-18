function checkNetwork(obj) {
    window.addEventListener("offline", (e) =>
    Swal.fire({
    position: 'center',
    icon: 'error',
    title: 'No Internet!',
    footer: "Click outside the box to close this notification.",
    showConfirmButton: false,
    })
    );

    window.addEventListener("online", (e) =>
    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'You are online again!',
    footer: "Click outside the box to close this notification.",
    showConfirmButton: false,
    })
    );
};

checkNetwork();
