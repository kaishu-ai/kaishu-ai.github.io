// 全局变量
let currentImage = null;
let mobileNetModel = null; // TensorFlow.js 原始模型
let imagenetClasses = null; // ImageNet 类别标签

// DOM 元素
const uploadArea = document.getElementById('uploadArea');
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const classifyBtn = document.getElementById('classifyBtn');
const clearBtn = document.getElementById('clearBtn');
const imagePreview = document.getElementById('imagePreview');
const previewSection = document.getElementById('previewSection');
const loading = document.getElementById('loading');
const results = document.getElementById('results');
const predictionsList = document.getElementById('predictionsList');
const statusMessage = document.getElementById('statusMessage');

// 初始化
async function init() {
    showStatus(langManager.t('home.loading'), 'info');
    loading.classList.add('active');
    
    try {
        // 从本地目录加载 MobileNet V3 模型（GraphModel 格式）
        console.log('正在从本地加载 MobileNet V3 模型...');
        
        // 使用 loadGraphModel 加载（不是 loadLayersModel）
        mobileNetModel = await tf.loadGraphModel('modelzoo/mobilenet/model.json');
        console.log('✓ MobileNet V3 模型已从本地加载');
        console.log('✓ 模型输入:', mobileNetModel.inputs.map(i => i.name));
        console.log('✓ 模型输出:', mobileNetModel.outputs.map(o => o.name));
        
        // 加载 ImageNet 类别标签（本地文件）
        const response = await fetch('imagenet_classes.txt');
        const data = await response.text();
        imagenetClasses = data.split('\n').filter(x => x);
        console.log('✓ ImageNet 类别标签已加载，共', imagenetClasses.length, '个类别');
        
        loading.classList.remove('active');
        showStatus(langManager.t('home.modelLoaded'), 'info');
        setTimeout(() => hideStatus(), 3000);
        
        console.log('MobileNet 模型加载成功');
    } catch (error) {
        loading.classList.remove('active');
        showStatus(langManager.t('home.modelError') + ': ' + error.message, 'error');
        console.error('模型加载失败:', error);
        console.error('错误详情:', error);
    }
}

// 显示状态消息
function showStatus(message, type = 'info') {
    statusMessage.textContent = message;
    statusMessage.className = `status-message active ${type}`;
}

// 隐藏状态消息
function hideStatus() {
    statusMessage.classList.remove('active');
}

// 上传区域点击事件
uploadArea.addEventListener('click', () => {
    fileInput.click();
});

// 上传按钮点击事件
uploadBtn.addEventListener('click', () => {
    fileInput.click();
});

// 文件输入变化事件
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        loadImage(file);
    }
});

// 拖放事件
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('dragover');
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
        loadImage(file);
    } else {
        showStatus(langManager.t('home.dropImage'), 'error');
    }
});

// 粘贴事件
document.addEventListener('paste', (e) => {
    const items = e.clipboardData.items;
    
    for (let item of items) {
        if (item.type.startsWith('image/')) {
            const file = item.getAsFile();
            loadImage(file);
            break;
        }
    }
});

// 加载图片
function loadImage(file) {
    const reader = new FileReader();
    
    reader.onload = (e) => {
        currentImage = new Image();
        currentImage.onload = () => {
            imagePreview.src = e.target.result;
            previewSection.classList.add('active');
            classifyBtn.disabled = false;
            results.classList.remove('active');
            hideStatus();
        };
        currentImage.src = e.target.result;
    };
    
    reader.readAsDataURL(file);
}

// 分类按钮点击事件
classifyBtn.addEventListener('click', async () => {
    if (!mobileNetModel) {
        showStatus(langManager.t('home.noModel'), 'error');
        return;
    }
    
    if (!currentImage) {
        showStatus(langManager.t('home.noImage'), 'error');
        return;
    }
    
    await classifyImage();
});

// 图像分类
async function classifyImage() {
    try {
        showStatus(langManager.t('home.classifying'), 'info');
        classifyBtn.disabled = true;
        results.classList.remove('active');
        
        // 使用本地 TensorFlow.js 模型进行预测
        if (!mobileNetModel) {
            throw new Error('模型未加载');
        }
        
        const predictions = await classifyWithTFModel(imagePreview);
        
        // 显示结果
        displayResults(predictions);
        
        hideStatus();
        classifyBtn.disabled = false;
    } catch (error) {
        showStatus(langManager.t('home.classifyError') + ': ' + error.message, 'error');
        console.error('分类失败:', error);
        classifyBtn.disabled = false;
    }
}

// 使用 TensorFlow.js 原始模型进行分类
async function classifyWithTFModel(imgElement) {
    // 将图像转换为张量并预处理
    const img = tf.browser.fromPixels(imgElement);
    
    // MobileNet V3 预处理：调整大小到 224x224
    const resized = tf.image.resizeBilinear(img, [224, 224]);
    
    // 归一化到 [0, 1]
    const normalized = resized.toFloat().div(255.0);
    
    // 添加 batch 维度
    const batched = normalized.expandDims(0);
    
    // 进行预测
    const predictions = await mobileNetModel.executeAsync(batched);
    
    // 获取概率值（取第一个batch）
    const values = await predictions.data();
    
    // 清理张量
    img.dispose();
    resized.dispose();
    normalized.dispose();
    batched.dispose();
    predictions.dispose();
    
    // 获取 top 5
    const valuesAndIndices = Array.from(values)
        .map((value, index) => ({ value, index }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 5);
    
    return valuesAndIndices.map(item => ({
        className: imagenetClasses[item.index] || `Unknown (${item.index})`,
        probability: item.value
    }));
}

// 显示分类结果
function displayResults(predictions) {
    predictionsList.innerHTML = '';
    
    predictions.forEach((prediction, index) => {
        const item = document.createElement('div');
        item.className = 'prediction-item';
        
        const confidence = (prediction.probability * 100).toFixed(2);
        
        item.innerHTML = `
            <div class="prediction-label">
                <strong>${index + 1}.</strong> ${prediction.className}
            </div>
            <div class="prediction-confidence">
                <div class="confidence-bar">
                    <div class="confidence-fill" style="width: ${confidence}%"></div>
                </div>
                <div class="confidence-text">${confidence}%</div>
            </div>
        `;
        
        predictionsList.appendChild(item);
    });
    
    results.classList.add('active');
}

// 清除按钮点击事件
clearBtn.addEventListener('click', () => {
    currentImage = null;
    imagePreview.src = '';
    fileInput.value = '';
    previewSection.classList.remove('active');
    results.classList.remove('active');
    classifyBtn.disabled = true;
    hideStatus();
});

// 页面加载时初始化
window.addEventListener('load', init);
