// 表單提交處理
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 獲取表單數據
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // 簡單的驗證
    if (!name || !email || !message) {
        alert('請填寫所有欄位');
        return;
    }
    
    // 顯示成功訊息
    alert(`感謝 ${name}！\n您的訊息已收到，我們將盡快回覆您。`);
    
    // 重置表單
    this.reset();
});

// 平滑滾動功能（已在 HTML 中使用）
// 您可以在這裡添加更多交互功能

// 頁面加載時的動畫
window.addEventListener('load', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.animation = 'fadeIn 0.5s ease forwards';
        }, index * 100);
    });
});

// 淡入動畫
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
