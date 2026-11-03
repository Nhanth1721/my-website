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

// 4. LocalStorage: Lưu trạng thái Dark Mode
const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") body.classList.add("dark-mode");

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
});

// 5. Fetch API với Async/Await & Try/Catch
const fetchProjects = async () => {
    const grid = document.getElementById("projects-grid");
    try {
        const res = await fetch("js/data.json");
        if (!res.ok) throw new Error("Lỗi HTTP: " + res.status);
        
        const projects = await res.json();
        projects.forEach(p => {
            const card = document.createElement("article");
            card.className = "project-card";
            card.innerHTML = `<h3>${p.ten}</h3><p>Năm: ${p.nam}</p><p><strong>Stack:</strong> ${p.congNghe}</p>`;
            grid.appendChild(card);
        });
    } catch (error) {
        console.error("Lỗi Fetch:", error);
        Swal.fire({ icon: 'error', title: 'Lỗi Fetch API', text: 'Vui lòng chạy qua Live Server!' });
    }
};
document.addEventListener("DOMContentLoaded", fetchProjects);