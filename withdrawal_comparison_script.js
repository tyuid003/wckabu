<<<<<<< HEAD
<script>
        let records = [];
        let smsDeposits = [];
        let smsWithdrawals = [];
        let responsibleList = [];

        function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) {
        console.error("Sidebar ไม่ถูกพบ: ตรวจสอบ ID 'sidebar'");
        return;
    }
    sidebar.classList.toggle('active');
    console.log("Toggle Sidebar:", sidebar.classList.contains('active') ? "เปิด" : "ปิด");

}
        function saveSheetLinksAndNames() {
            const depositSheet = document.getElementById('depositSheet').value;
            const withdrawSheet = document.getElementById('withdrawSheet').value;
            const names = document.getElementById('responsibleNames').value;

            if (depositSheet && withdrawSheet) {
                localStorage.setItem('depositSheet', depositSheet);
                localStorage.setItem('withdrawSheet', withdrawSheet);
                alert('บันทึกข้อมูลลิงก์ SHEET เรียบร้อยแล้ว!');
            } else {
                alert('กรุณากรอกลิงก์ SHEET ให้ครบถ้วน');
            }

            if (names) {
                responsibleList = names.split(',').map(name => name.trim());
                updateResponsibleDropdown();
                alert('บันทึกชื่อผู้รับผิดชอบเรียบร้อยแล้ว!');
            }
        }

        function updateResponsibleDropdown() {
            const dropdown = document.getElementById('responsible');
            dropdown.innerHTML = '<option value="">เลือกผู้รับผิดชอบ</option>';
            responsibleList.forEach(name => {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                dropdown.appendChild(option);
            });
        }

        function addRecord() {
            const user = document.getElementById('user').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const bank = document.getElementById('bank').value;
            const amount = parseFloat(document.getElementById('amount').value);
            const transactionType = document.getElementById('transactionType').value;
            const responsible = document.getElementById('responsible').value;

            if (user && date && time && bank && amount && transactionType && responsible) {
                records.push({ user, date, time, bank, amount, transactionType, responsible });
                updateTable();
                updateSummary();
                clearForm();
            } else {
                alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            }
        }

        function updateTable() {
            const tableBody = document.getElementById('recordsTable');
            tableBody.innerHTML = '';
            records.forEach(record => {
                const row = `<tr>
                    <td>${record.user}</td>
                    <td>${record.date}</td>
                    <td>${record.time}</td>
                    <td>${record.bank}</td>
                    <td>${record.amount.toFixed(2)}</td>
                    <td>${record.transactionType}</td>
                    <td>${record.responsible}</td>
                    <td>${record.note || ''}</td>

                </tr>`;
                tableBody.innerHTML += row;
            });
        }

        function updateSummary() {
            const totalSMS = smsWithdrawals.reduce((sum, sms) => sum + sms.amount, 0);
            const totalManualSCB = records.filter(r => r.bank === 'SCB' && r.transactionType === 'ถอนมือ').reduce((sum, r) => sum + r.amount, 0);
            const totalManualK = records.filter(r => r.bank === 'K' && r.transactionType === 'ถอนมือ').reduce((sum, r) => sum + r.amount, 0);
            const totalTrue = records.filter(r => r.bank === 'TRUE').reduce((sum, r) => sum + r.amount, 0);
            const totalTransfer = records.filter(r => r.transactionType === 'โยกเงิน').reduce((sum, r) => sum + r.amount, 0);

            document.getElementById('summarySMS').innerText = `ยอดถอนจาก SMS ธนาคาร: ${totalSMS.toFixed(2)}`;
            document.getElementById('summaryManualSCB').innerText = `ยอดถอนมือ SCB: ${totalManualSCB.toFixed(2)}`;
            document.getElementById('summaryManualK').innerText = `ยอดถอนมือ K: ${totalManualK.toFixed(2)}`;
            document.getElementById('summaryTrue').innerText = `ยอดถอน True Wallet: ${totalTrue.toFixed(2)}`;
            document.getElementById('summaryTransfer').innerText = `ยอดโยกเงิน: ${totalTransfer.toFixed(2)}`;
        }

        function clearForm() {
            document.getElementById('note').value = '';
            document.getElementById('inputForm').reset();
        }

        function compareTotals() {
            const systemTotal = parseFloat(document.getElementById('systemTotal').value) || 0;
            const calculatedTotal = records
                .filter(record => ['ถอนมือ', 'ถอนแบงค์ฝาก', 'แก้ไขให้ตรง', 'โยกเงิน'].includes(record.transactionType))
                .reduce((sum, record) => sum + record.amount, 0);

            document.getElementById('calculatedTotal').value = calculatedTotal.toFixed(2);

            const difference = systemTotal - calculatedTotal;
            const resultDiv = document.getElementById('comparisonResult');

            if (difference === 0) {
                resultDiv.innerHTML = '<div class="alert alert-success">ยอดตรงกัน!</div>';
            } else {
                resultDiv.innerHTML = `<div class="alert alert-danger">ส่วนต่าง: ${difference.toFixed(2)}</div>`;
            }
        }
                function confirmClearData() {
            if (confirm('คุณต้องการล้างข้อมูลทั้งหมดหรือไม่?')) {
                clearData();
            }
        }

        function clearData() {
            records = [];
            smsDeposits = [];
            smsWithdrawals = [];
            updateTable();
            updateSummary();
            alert('ล้างข้อมูลทั้งหมดเรียบร้อยแล้ว!');
        }
const teamNames = document.getElementById('teamNames').value;

if (teamNames) {
    teamList = teamNames.split(',').map(name => name.trim());
    alert('บันทึกชื่อทีมงานเรียบร้อยแล้ว!');
}
=======
<script>
        let records = [];
        let smsDeposits = [];
        let smsWithdrawals = [];
        let responsibleList = [];

        function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) {
        console.error("Sidebar ไม่ถูกพบ: ตรวจสอบ ID 'sidebar'");
        return;
    }
    sidebar.classList.toggle('active');
    console.log("Toggle Sidebar:", sidebar.classList.contains('active') ? "เปิด" : "ปิด");

}
        function saveSheetLinksAndNames() {
            const depositSheet = document.getElementById('depositSheet').value;
            const withdrawSheet = document.getElementById('withdrawSheet').value;
            const names = document.getElementById('responsibleNames').value;

            if (depositSheet && withdrawSheet) {
                localStorage.setItem('depositSheet', depositSheet);
                localStorage.setItem('withdrawSheet', withdrawSheet);
                alert('บันทึกข้อมูลลิงก์ SHEET เรียบร้อยแล้ว!');
            } else {
                alert('กรุณากรอกลิงก์ SHEET ให้ครบถ้วน');
            }

            if (names) {
                responsibleList = names.split(',').map(name => name.trim());
                updateResponsibleDropdown();
                alert('บันทึกชื่อผู้รับผิดชอบเรียบร้อยแล้ว!');
            }
        }

        function updateResponsibleDropdown() {
            const dropdown = document.getElementById('responsible');
            dropdown.innerHTML = '<option value="">เลือกผู้รับผิดชอบ</option>';
            responsibleList.forEach(name => {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                dropdown.appendChild(option);
            });
        }

        function addRecord() {
            const user = document.getElementById('user').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const bank = document.getElementById('bank').value;
            const amount = parseFloat(document.getElementById('amount').value);
            const transactionType = document.getElementById('transactionType').value;
            const responsible = document.getElementById('responsible').value;

            if (user && date && time && bank && amount && transactionType && responsible) {
                records.push({ user, date, time, bank, amount, transactionType, responsible });
                updateTable();
                updateSummary();
                clearForm();
            } else {
                alert('กรุณากรอกข้อมูลให้ครบถ้วน');
            }
        }

        function updateTable() {
            const tableBody = document.getElementById('recordsTable');
            tableBody.innerHTML = '';
            records.forEach(record => {
                const row = `<tr>
                    <td>${record.user}</td>
                    <td>${record.date}</td>
                    <td>${record.time}</td>
                    <td>${record.bank}</td>
                    <td>${record.amount.toFixed(2)}</td>
                    <td>${record.transactionType}</td>
                    <td>${record.responsible}</td>
                    <td>${record.note || ''}</td>

                </tr>`;
                tableBody.innerHTML += row;
            });
        }

        function updateSummary() {
            const totalSMS = smsWithdrawals.reduce((sum, sms) => sum + sms.amount, 0);
            const totalManualSCB = records.filter(r => r.bank === 'SCB' && r.transactionType === 'ถอนมือ').reduce((sum, r) => sum + r.amount, 0);
            const totalManualK = records.filter(r => r.bank === 'K' && r.transactionType === 'ถอนมือ').reduce((sum, r) => sum + r.amount, 0);
            const totalTrue = records.filter(r => r.bank === 'TRUE').reduce((sum, r) => sum + r.amount, 0);
            const totalTransfer = records.filter(r => r.transactionType === 'โยกเงิน').reduce((sum, r) => sum + r.amount, 0);

            document.getElementById('summarySMS').innerText = `ยอดถอนจาก SMS ธนาคาร: ${totalSMS.toFixed(2)}`;
            document.getElementById('summaryManualSCB').innerText = `ยอดถอนมือ SCB: ${totalManualSCB.toFixed(2)}`;
            document.getElementById('summaryManualK').innerText = `ยอดถอนมือ K: ${totalManualK.toFixed(2)}`;
            document.getElementById('summaryTrue').innerText = `ยอดถอน True Wallet: ${totalTrue.toFixed(2)}`;
            document.getElementById('summaryTransfer').innerText = `ยอดโยกเงิน: ${totalTransfer.toFixed(2)}`;
        }

        function clearForm() {
            document.getElementById('note').value = '';
            document.getElementById('inputForm').reset();
        }

        function compareTotals() {
            const systemTotal = parseFloat(document.getElementById('systemTotal').value) || 0;
            const calculatedTotal = records
                .filter(record => ['ถอนมือ', 'ถอนแบงค์ฝาก', 'แก้ไขให้ตรง', 'โยกเงิน'].includes(record.transactionType))
                .reduce((sum, record) => sum + record.amount, 0);

            document.getElementById('calculatedTotal').value = calculatedTotal.toFixed(2);

            const difference = systemTotal - calculatedTotal;
            const resultDiv = document.getElementById('comparisonResult');

            if (difference === 0) {
                resultDiv.innerHTML = '<div class="alert alert-success">ยอดตรงกัน!</div>';
            } else {
                resultDiv.innerHTML = `<div class="alert alert-danger">ส่วนต่าง: ${difference.toFixed(2)}</div>`;
            }
        }
                function confirmClearData() {
            if (confirm('คุณต้องการล้างข้อมูลทั้งหมดหรือไม่?')) {
                clearData();
            }
        }

        function clearData() {
            records = [];
            smsDeposits = [];
            smsWithdrawals = [];
            updateTable();
            updateSummary();
            alert('ล้างข้อมูลทั้งหมดเรียบร้อยแล้ว!');
        }
const teamNames = document.getElementById('teamNames').value;

if (teamNames) {
    teamList = teamNames.split(',').map(name => name.trim());
    alert('บันทึกชื่อทีมงานเรียบร้อยแล้ว!');
}
>>>>>>> 8fd67c4fc666dee14ad9fc0e62b7d334401e73d8
