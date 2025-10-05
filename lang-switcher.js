// 共享的语言切换功能
// 初始化语言管理器
const langManager = new LanguageManager();

// 更新页面文本
function updatePageLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = langManager.t(key);
    });
    
    // 更新 HTML lang 属性
    document.documentElement.lang = langManager.getCurrentLanguage();
    
    // 更新当前语言显示
    updateLanguageButton();
}

// 更新语言按钮显示
function updateLanguageButton() {
    const currentLang = langManager.getCurrentLanguage();
    const languages = langManager.getSupportedLanguages();
    const lang = languages.find(l => l.code === currentLang);
    
    if (lang) {
        const flagEl = document.getElementById('currentFlag');
        const langEl = document.getElementById('currentLang');
        if (flagEl) flagEl.textContent = lang.flag;
        if (langEl) langEl.textContent = lang.name;
    }
    
    // 更新选中状态
    document.querySelectorAll('.language-option').forEach(option => {
        if (option.dataset.lang === currentLang) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

// 初始化语言选择器事件
function initLanguageSelector() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    
    if (languageBtn) {
        // 语言选择器事件
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });
    }
    
    // 点击外部关闭下拉菜单
    document.addEventListener('click', () => {
        if (languageDropdown) {
            languageDropdown.classList.remove('active');
        }
    });
    
    // 语言选项点击事件
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.dataset.lang;
            langManager.setLanguage(lang);
            updatePageLanguage();
            if (languageDropdown) {
                languageDropdown.classList.remove('active');
            }
        });
    });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    updatePageLanguage();
    initLanguageSelector();
});
