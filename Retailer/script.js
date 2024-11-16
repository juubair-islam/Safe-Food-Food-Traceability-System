// Sidebar toggle functionality
const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

const shipments = [];

function showTransactionHistory() {
    document.getElementById('transactionHistory').style.display = 'block';
    document.getElementById('newShipmentForm').style.display = 'none';
    document.getElementById('productQueryForm').style.display = 'none';
}

function showNewShipment() {
    document.getElementById('transactionHistory').style.display = 'none';
    document.getElementById('newShipmentForm').style.display = 'block';
    document.getElementById('productQueryForm').style.display = 'none';
}

function showProductQuery() {
    document.getElementById('transactionHistory').style.display = 'none';
    document.getElementById('newShipmentForm').style.display = 'none';
    document.getElementById('productQueryForm').style.display = 'block';
}

function calculateBestBeforeDate(transactionDate) {
    const date = new Date(transactionDate);
    date.setDate(date.getDate() + 15);
    return date.toISOString().split('T')[0];
}

document.getElementById('shipmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const transactionId = document.getElementById('transactionId').value;
    const transactionDate = document.getElementById('transactionDate').value;
    const batchId = document.getElementById('batchId').value;

    shipments.push({ transactionId, transactionDate, batchId });
    const tableBody = document.getElementById('transactionHistoryBody');
    const row = `<tr>
        <td>${transactionId}</td>
        <td>${transactionDate}</td>
        <td>${batchId}</td>
    </tr>`;
    tableBody.innerHTML += row;

    document.getElementById('shipmentForm').reset();
});

document.getElementById('queryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const transactionId = document.getElementById('queryTransactionId').value;
    const transactionDate = document.getElementById('queryTransactionDate').value;

    const result = shipments.find(shipment =>
        shipment.transactionId === transactionId &&
        shipment.transactionDate === transactionDate
    );

    const tableBody = document.getElementById('resultTableBody');
    if (result) {
        tableBody.innerHTML = `<tr>
            <td>${result.transactionId}</td>
            <td>${result.transactionDate}</td>
            <td>${result.batchId}</td>
        </tr>`;
    } else {
        alert('No matching transaction found.');
    }
    document.getElementById('resultTable').style.display = 'block';
});
