function displayFormData(event) {
    event.preventDefault();
    
    const form = document.getElementById('orderForm');
    const formData = new FormData(form);
    let data = '';

    formData.forEach((value, key) => {
        data += `${key}: ${value}\n`;
    });

    // Tambahkan pesan "Pesanan berhasil dibuat" di atas data
    const successMessage = "Pesanan berhasil dibuat\n\n" + data;
    alert(successMessage);
}
