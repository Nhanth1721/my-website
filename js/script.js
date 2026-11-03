// Khởi tạo icon Lucide
lucide.createIcons();

// 1. Mảng dữ liệu tĩnh
const skills = [
    { id: 1, name: "HTML5/CSS3/SCSS", type: "Frontend", level: "Khá" },
    { id: 2, name: "Java (BCE Architecture)", type: "Backend", level: "Khá" },
    { id: 3, name: "C++ (Data Structures)", type: "Core", level: "Trung bình" }
];

// 2. Arrow function & Thao tác DOM hiển thị bảng
const renderSkillsTable = (data) => {
    const container = document.getElementById("skills-container");
    container.innerHTML = `
        <table>
            <thead><tr><th>ID</th><th>Kỹ năng</th><th>Lĩnh vực</th><th>Mức độ</th></tr></thead>
            <tbody>
                ${data.map(skill => `<tr><td>${skill.id}</td><td>${skill.name}</td><td>${skill.type}</td><td>${skill.level}</td></tr>`).join('')}
            </tbody>
        </table>
    `;
};
renderSkillsTable(skills);

// 3. Xử lý sự kiện Submit Form & Validate bằng JS
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault(); 
    const name = document.getElementById("fullname").value.trim();
    if (!name) return; // Dựa vào require HTML5, nếu qua được bước này mới alert
    
    Swal.fire({ icon: 'success', title: 'Thành công!', text: `Cảm ơn ${name} đã liên hệ.`});
    e.target.reset();
});