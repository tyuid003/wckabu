<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    // Mock data - Replace with real data from Google Sheets
    const manualWithdrawals = [
        { date: '2025-01-01', user: 'user1', amount: 1000, note: 'ถอนมือ SCB' },
        { date: '2025-01-02', user: 'user2', amount: 500, note: 'ถอนมือ K' },
    ];
    const smsDeposits = [
        { date: '2025-01-01', time: '10:00', bank: 'SCB', amount: 2000 },
        { date: '2025-01-02', time: '11:00', bank: 'K', amount: 3000 },
    ];
    const smsWithdrawals = [
        { date: '2025-01-01', time: '14:00', bank: 'SCB', amount: 1500 },
        { date: '2025-01-02', time: '15:00', bank: 'K', amount: 2500 },
    ];

    renderTable('manual-withdrawals-content', manualWithdrawals, ['date', 'user', 'amount', 'note']);
    renderTable('sms-deposits-content', smsDeposits, ['date', 'time', 'bank', 'amount']);
    renderTable('sms-withdrawals-content', smsWithdrawals, ['date', 'time', 'bank', 'amount']);
});

function renderTable(containerId, data, columns) {
    const container = document.getElementById(containerId);
    const table = document.createElement('table');
    table.classList.add('table');

    const thead = document.createElement('thead');
    thead.innerHTML = `<tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>`;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    data.forEach(row => {
        const tr = document.createElement('tr');
        columns.forEach(col => {
            const td = document.createElement('td');
            td.textContent = row[col];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    container.innerHTML = '';
    container.appendChild(table);
}

function showTab(tabId) {
    // ซ่อนทุกแท็บ
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // แสดงแท็บที่เลือก
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    } else {
        console.error(`ไม่พบแท็บ ID: ${tabId}`);
    }

    // อัปเดตปุ่มแท็บให้แสดงสถานะ active
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // เพิ่มสถานะ active ให้กับปุ่มที่เกี่ยวข้อง
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}




function compareTotals() {
    const systemTotal = parseFloat(document.getElementById('systemTotal').value) || 0;
    const calculatedTotal = calculateManualTotal();

    document.getElementById('calculatedTotal').value = calculatedTotal.toFixed(2);

    const difference = systemTotal - calculatedTotal;
    const resultDiv = document.getElementById('comparisonResult');

    if (difference === 0) {
        resultDiv.innerHTML = '<div class="alert alert-success">ยอดตรงกัน!</div>';
    } else {
        resultDiv.innerHTML = `<div class="alert alert-danger">ส่วนต่าง: ${difference.toFixed(2)}</div>`;
    }
}

function calculateManualTotal() {
    const manualData = [
        { date: '2025-01-01', amount: 1000 },
        { date: '2025-01-02', amount: 500 },
    ]; // Replace with actual manual withdrawals data
    return manualData.reduce((sum, record) => sum + record.amount, 0);
}
=======
document.addEventListener('DOMContentLoaded', () => {
    // Mock data - Replace with real data from Google Sheets
    const manualWithdrawals = [
        { date: '2025-01-01', user: 'user1', amount: 1000, note: 'ถอนมือ SCB' },
        { date: '2025-01-02', user: 'user2', amount: 500, note: 'ถอนมือ K' },
    ];
    const smsDeposits = [
        { date: '2025-01-01', time: '10:00', bank: 'SCB', amount: 2000 },
        { date: '2025-01-02', time: '11:00', bank: 'K', amount: 3000 },
    ];
    const smsWithdrawals = [
        { date: '2025-01-01', time: '14:00', bank: 'SCB', amount: 1500 },
        { date: '2025-01-02', time: '15:00', bank: 'K', amount: 2500 },
    ];

    renderTable('manual-withdrawals-content', manualWithdrawals, ['date', 'user', 'amount', 'note']);
    renderTable('sms-deposits-content', smsDeposits, ['date', 'time', 'bank', 'amount']);
    renderTable('sms-withdrawals-content', smsWithdrawals, ['date', 'time', 'bank', 'amount']);
});

function renderTable(containerId, data, columns) {
    const container = document.getElementById(containerId);
    const table = document.createElement('table');
    table.classList.add('table');

    const thead = document.createElement('thead');
    thead.innerHTML = `<tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>`;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    data.forEach(row => {
        const tr = document.createElement('tr');
        columns.forEach(col => {
            const td = document.createElement('td');
            td.textContent = row[col];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    container.innerHTML = '';
    container.appendChild(table);
}

function showTab(tabId) {
    // ซ่อนทุกแท็บ
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // แสดงแท็บที่เลือก
    const selectedTab = document.getElementById(tabId);
    if (selectedTab) {
        selectedTab.classList.add('active');
    } else {
        console.error(`ไม่พบแท็บ ID: ${tabId}`);
    }

    // อัปเดตปุ่มแท็บให้แสดงสถานะ active
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // เพิ่มสถานะ active ให้กับปุ่มที่เกี่ยวข้อง
    document.querySelector(`[onclick="showTab('${tabId}')"]`).classList.add('active');
}




function compareTotals() {
    const systemTotal = parseFloat(document.getElementById('systemTotal').value) || 0;
    const calculatedTotal = calculateManualTotal();

    document.getElementById('calculatedTotal').value = calculatedTotal.toFixed(2);

    const difference = systemTotal - calculatedTotal;
    const resultDiv = document.getElementById('comparisonResult');

    if (difference === 0) {
        resultDiv.innerHTML = '<div class="alert alert-success">ยอดตรงกัน!</div>';
    } else {
        resultDiv.innerHTML = `<div class="alert alert-danger">ส่วนต่าง: ${difference.toFixed(2)}</div>`;
    }
}

function calculateManualTotal() {
    const manualData = [
        { date: '2025-01-01', amount: 1000 },
        { date: '2025-01-02', amount: 500 },
    ]; // Replace with actual manual withdrawals data
    return manualData.reduce((sum, record) => sum + record.amount, 0);
}
>>>>>>> 8fd67c4fc666dee14ad9fc0e62b7d334401e73d8
