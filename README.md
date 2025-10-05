# MobileNet 图像分类器

一个使用 TensorFlow.js 和 MobileNet 模型进行图像分类的 Web 应用。

## 功能特点

- 🖼️ **多种输入方式**：支持文件上传、拖放图片、复制粘贴图片
- 🤖 **AI 图像识别**：使用 MobileNet v2 模型进行图像分类
- 📊 **Top 5 结果**：显示置信度最高的 5 个分类结果及其概率
- 🎨 **现代化 UI**：美观的渐变设计和流畅的动画效果
- 📱 **响应式设计**：支持桌面和移动设备
- 🌐 **多语言支持**：支持中文、英文、日文、西班牙文四种语言
- 📖 **完整文档**：包含 MobileNet 原理详解和开发团队介绍

## 技术栈

- **TensorFlow.js** (v4.11.0) - 机器学习框架
- **MobileNet** (v2.1.0) - 预训练的图像分类模型
- **原生 JavaScript** - 无需额外框架
- **HTML5 & CSS3** - 现代化界面

## 使用方法

### 1. 直接打开

直接在浏览器中打开 `index.html` 文件即可使用。

### 2. 使用本地服务器（推荐）

为了获得最佳体验，建议使用本地服务器：

```bash
# 使用 Python 3
python -m http.server 8000

# 或使用 Python 2
python -m SimpleHTTPServer 8000

# 或使用 Node.js (需要安装 http-server)
npx http-server -p 8000
```

然后在浏览器中访问 `http://localhost:8000`

## 如何使用

1. **上传图片**：
   - 点击上传区域选择图片文件
   - 或直接拖放图片到上传区域
   - 或复制图片后使用 Ctrl+V (Mac: Cmd+V) 粘贴

2. **开始分类**：
   - 图片加载后，点击"开始分类"按钮
   - 等待几秒钟让模型进行推理

3. **查看结果**：
   - 查看 Top 5 分类结果
   - 每个结果包含类别名称和置信度百分比
   - 置信度通过进度条直观显示

4. **继续使用**：
   - 点击"清除"按钮可以重新开始
   - 上传新图片进行新的分类

## MobileNet 模型

该应用使用本地存储的 MobileNet 模型，配置如下：

- **版本**: MobileNet V3 Large
- **模型格式**: TensorFlow.js GraphModel
- **图像分类数**: 1001 类（ImageNet 数据集 + background）
- **输入尺寸**: 224×224×3
- **模型来源**: 本地 `modelzoo/mobilenet/` 目录
- **类别标签**: 本地 `imagenet_classes.txt` 文件

### 模型文件结构

```
modelzoo/
└── mobilenet/
    ├── model.json (183KB) - 模型架构定义（GraphModel 格式）
    ├── group1-shard1of3.bin (4.0MB) - 权重文件 1
    ├── group1-shard2of3.bin (4.0MB) - 权重文件 2
    └── group1-shard3of3.bin (1.7MB) - 权重文件 3
```

模型会在页面加载时从本地目录加载，无需联网下载。总大小约 **9.9MB**。

### 技术细节

- 使用 `tf.loadGraphModel()` 加载 TensorFlow.js Graph Model
- 图像预处理：归一化到 [0, 1] 范围
- 支持 WebGL 加速推理
- 平均推理时间：50-150ms（取决于设备性能）

## 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

需要支持 ES6+ 的现代浏览器。

## 文件结构

```
.
├── index.html              # 主页面 - 图像分类功能
├── about-mobilenet.html    # MobileNet 原理详解页面
├── team.html               # 开发团队介绍页面
├── app.js                  # JavaScript 逻辑
├── i18n.js                 # 国际化翻译配置
├── lang-switcher.js        # 语言切换功能
├── imagenet_classes.txt    # ImageNet 类别标签
├── modelzoo/               # 模型文件目录
│   └── mobilenet/          # MobileNet 模型
│       ├── model.json      # 模型架构
│       └── *.bin           # 权重文件（3个分片）
└── README.md               # 说明文档
```

## 页面导航

网站包含三个主要页面，通过顶部导航栏可以轻松切换：

1. **图像分类** (`index.html`)
   - 上传或粘贴图片进行 AI 识别
   - 实时显示 Top 5 分类结果
   - 交互式的用户界面

2. **MobileNet原理** (`about-mobilenet.html`)
   - 详细介绍 MobileNet 的技术原理
   - 深度可分离卷积的工作机制
   - 网络架构可视化图示
   - 版本演进和应用场景

3. **开发团队** (`team.html`)
   - 团队成员介绍和联系方式
   - Email 和电话联系信息
   - 团队统计数据展示

## 多语言支持

网站支持四种语言，可通过导航栏右上角的语言选择器切换：

- 🇨🇳 **中文** (简体中文)
- 🇺🇸 **English** (英语)
- 🇯🇵 **日本語** (日语)
- 🇪🇸 **Español** (西班牙语)

### 语言特性

- **自动检测**：首次访问时自动检测浏览器语言
- **持久化存储**：语言选择保存在本地，下次访问自动应用
- **全站支持**：所有三个页面均支持语言切换
- **即时切换**：切换语言后立即生效，无需刷新页面

## 注意事项

- 模型文件已本地化，无需联网即可使用（需使用本地服务器运行）
- 图片越大，处理时间越长，建议使用适中大小的图片
- 模型基于 ImageNet 数据集训练，对常见物体的识别效果较好
- 由于使用本地模型，必须通过 HTTP 服务器访问（不能直接双击打开 HTML）

## 示例图片建议

可以尝试分类以下类型的图片：
- 动物（猫、狗、鸟等）
- 交通工具（汽车、飞机、自行车等）
- 物品（椅子、桌子、电脑等）
- 食物（水果、蔬菜、餐具等）

## 许可证

MIT License
