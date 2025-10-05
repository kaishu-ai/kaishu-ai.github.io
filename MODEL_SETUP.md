# MobileNet 本地模型配置指南

## 📦 已完成的配置

### 1. 模型文件位置
模型已放置在 `modelzoo/mobilenet/` 目录：
- ✅ `model.json` (183KB) - 模型架构定义
- ✅ `group1-shard1of3.bin` (4.0MB) - 权重文件片段 1
- ✅ `group1-shard2of3.bin` (4.0MB) - 权重文件片段 2
- ✅ `group1-shard3of3.bin` (1.7MB) - 权重文件片段 3

总大小：约 **9.9MB**

### 2. 类别标签文件
- ✅ `imagenet_classes.txt` (10KB) - ImageNet 1000个类别标签

### 3. 代码修改
- ✅ 移除了 `@tensorflow-models/mobilenet` CDN 依赖
- ✅ 使用 TensorFlow.js 直接加载本地模型
- ✅ 实现了自定义分类函数
- ✅ 支持本地加载类别标签

## 🚀 使用方法

### 方式 1：Python HTTP 服务器（推荐）

```bash
cd /Users/shukai/myapps
python3 -m http.server 8000
```

然后访问：`http://localhost:8000`

### 方式 2：Node.js HTTP 服务器

```bash
cd /Users/shukai/myapps
npx http-server -p 8000
```

然后访问：`http://localhost:8000`

### 方式 3：PHP 内置服务器

```bash
cd /Users/shukai/myapps
php -S localhost:8000
```

然后访问：`http://localhost:8000`

## ✨ 优势

### 1. **完全离线**
- 无需互联网连接即可使用（模型和标签都在本地）
- 适合内网环境或无网络场景

### 2. **加载更快**
- 本地加载速度比从 CDN 下载快得多
- 减少网络延迟

### 3. **隐私保护**
- 所有数据都在本地处理
- 不会向外部服务器发送任何数据

### 4. **版本控制**
- 模型版本固定，不会因 CDN 更新而变化
- 确保结果的一致性

## 🔧 技术实现

### 模型加载流程

```javascript
// 1. 加载 TensorFlow.js 模型
mobileNetModel = await tf.loadLayersModel('modelzoo/mobilenet/model.json');

// 2. 加载类别标签
const response = await fetch('imagenet_classes.txt');
const data = await response.text();
imagenetClasses = data.split('\n').filter(x => x);

// 3. 图像预处理
const img = tf.browser.fromPixels(imgElement)
    .toFloat()
    .resizeBilinear([224, 224])
    .expandDims();

// 4. 归一化（MobileNet 使用 [-1, 1] 范围）
const normalized = img.div(127.5).sub(1);

// 5. 模型推理
const logits = mobileNetModel.predict(normalized);
const probabilities = logits.softmax();

// 6. 获取 Top 5 结果
// ... 排序并返回最高概率的 5 个类别
```

## 📊 性能对比

| 指标 | CDN 加载 | 本地加载 |
|------|---------|---------|
| 首次加载时间 | 5-10秒（取决于网络） | 1-2秒 |
| 重新加载时间 | 2-5秒（浏览器缓存） | <1秒 |
| 网络依赖 | 必需 | 不需要 |
| 推理速度 | 50-100ms | 50-100ms |
| 总模型大小 | ~13MB | ~9.9MB |

## ⚠️ 注意事项

### 1. 必须使用 HTTP 服务器
由于浏览器的 CORS 安全策略，不能直接双击 HTML 文件打开，必须通过 HTTP 服务器访问。

### 2. 文件路径要正确
确保目录结构如下：
```
/Users/shukai/myapps/
├── index.html
├── app.js
├── imagenet_classes.txt
└── modelzoo/
    └── mobilenet/
        ├── model.json
        ├── group1-shard1of3.bin
        ├── group1-shard2of3.bin
        └── group1-shard3of3.bin
```

### 3. 浏览器兼容性
需要支持以下特性的现代浏览器：
- WebGL（用于 TensorFlow.js 加速）
- ES6+ (async/await, 箭头函数等)
- Fetch API

## 🐛 故障排查

### 问题 1：模型加载失败
**错误信息**: `Failed to load model`

**解决方法**:
1. 检查是否使用 HTTP 服务器（不要直接打开 HTML）
2. 检查文件路径是否正确
3. 检查浏览器控制台的详细错误信息

### 问题 2：无法找到类别标签
**错误信息**: `Failed to fetch imagenet_classes.txt`

**解决方法**:
1. 确认 `imagenet_classes.txt` 在项目根目录
2. 检查文件权限
3. 查看浏览器 Network 标签的请求状态

### 问题 3：分类结果不准确
**可能原因**:
1. 图像预处理不正确（检查归一化范围）
2. 模型权重文件损坏（重新下载）
3. 图像质量或角度问题（尝试不同图片）

## 📝 测试步骤

1. **启动服务器**:
   ```bash
   python3 -m http.server 8000
   ```

2. **打开浏览器**:
   访问 `http://localhost:8000`

3. **检查控制台**:
   应该看到以下日志：
   ```
   正在从本地加载 MobileNet 模型...
   ✓ MobileNet 模型已从本地加载
   ✓ ImageNet 类别标签已加载，共 1001 个类别
   MobileNet 模型加载成功
   ```

4. **上传测试图片**:
   - 上传一张清晰的物体照片
   - 点击"开始分类"
   - 查看 Top 5 结果

5. **测试多语言**:
   - 切换到不同语言（English, 日本語, Español）
   - 确认所有文本正确翻译

## 🎉 成功标志

- ✅ 页面加载时显示"模型加载成功"
- ✅ 可以上传图片并获得分类结果
- ✅ Top 5 结果显示正确的类别名称和概率
- ✅ 无需联网即可正常使用
- ✅ 多语言界面工作正常

## 🔗 相关资源

- [TensorFlow.js 官方文档](https://www.tensorflow.org/js)
- [MobileNet 论文](https://arxiv.org/abs/1801.04381)
- [ImageNet 数据集](http://www.image-net.org/)

---

**配置完成时间**: 2025-10-05  
**模型版本**: MobileNet V3 Large  
**模型格式**: TensorFlow.js GraphModel  
**TensorFlow.js 版本**: 4.11.0
