document.addEventListener('DOMContentLoaded', function () {
    const bankingButton = document.querySelector('.banking-button');
    bankingButton.addEventListener('click', redirectToInternetBanking);

    const uploadButton = document.querySelector('.upload-button');
    uploadButton.addEventListener('click', uploadReceipt);
});

function redirectToInternetBanking() {
    // Replace with actual internet banking URL
    window.location.href = 'https://example.com/internet-banking';
}

function uploadReceipt() {
    // Placeholder function for uploading a receipt
    alert('آپلود رسید (این یک تابع نمونه است)');
}
