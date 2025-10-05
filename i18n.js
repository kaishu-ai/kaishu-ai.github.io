// 国际化配置文件
const translations = {
    'zh-CN': {
        // 导航栏
        nav: {
            logo: '🖼️ MobileNet',
            classifier: '图像分类',
            about: 'MobileNet原理',
            team: '开发团队'
        },
        // 主页 - 图像分类
        home: {
            title: '🖼️ MobileNet 图像分类器',
            subtitle: '使用深度学习识别图像中的物体',
            uploadIcon: '📷',
            uploadText: '点击上传图片或拖放图片到这里',
            uploadHint: '也可以使用 Ctrl+V (Cmd+V) 粘贴图片',
            uploadBtn: '选择文件',
            cameraBtn: '📸 拍照',
            classifyBtn: '开始分类',
            clearBtn: '清除',
            loading: '正在加载模型...',
            classifying: '正在分类图像...',
            modelLoaded: '模型加载成功！可以开始使用了',
            modelError: '模型加载失败',
            classifyError: '分类失败',
            noModel: '模型尚未加载完成',
            noImage: '请先上传或粘贴图片',
            dropImage: '请拖放图片文件',
            resultsTitle: '分类结果 (Top 5)'
        },
        // 关于页面
        about: {
            title: '🧠 MobileNet 原理详解',
            subtitle: '轻量级深度神经网络的革新之作',
            whatIs: '📖 什么是 MobileNet？',
            whatIsDesc1: 'MobileNet 是由 Google 在 2017 年提出的一系列轻量级深度学习模型，专门设计用于移动设备和嵌入式设备上的计算机视觉任务。它通过创新的网络架构设计，在保持较高准确率的同时大幅减少了计算量和参数数量。',
            whatIsDesc2: 'MobileNet 的核心创新在于使用深度可分离卷积（Depthwise Separable Convolution）替代传统的卷积操作，这使得模型能够在资源受限的设备上高效运行。',
            features: '✨ 核心特性',
            featureLight: '轻量高效',
            featureLightDesc: '模型体积小，推理速度快，适合移动端和边缘计算',
            featureAccurate: '准确度高',
            featureAccurateDesc: '在 ImageNet 数据集上达到 70%+ 的准确率',
            featureFlexible: '灵活可调',
            featureFlexibleDesc: '支持宽度因子和分辨率调整，平衡精度与速度',
            featureWide: '广泛应用',
            featureWideDesc: '目标检测、人脸识别、图像分割等多种任务',
            convolution: '🔍 深度可分离卷积',
            convolutionDesc: '深度可分离卷积是 MobileNet 的核心技术，它将标准卷积分解为两个更简单的操作：',
            depthwise: '1. 深度卷积（Depthwise Convolution）',
            depthwiseDesc: '对输入的每个通道单独应用一个卷积核，不进行通道间的信息融合。这大大减少了计算量。',
            pointwise: '2. 逐点卷积（Pointwise Convolution）',
            pointwiseDesc: '使用 1×1 的卷积核对深度卷积的输出进行线性组合，实现通道间的信息交互。',
            computeComparison: '📊 计算量对比：',
            computeReduction: '计算量减少比例：',
            reductionValue: '约为',
            reductionNote: '（对于 3×3 卷积，计算量减少 8-9 倍）',
            architecture: '🏗️ 网络架构',
            architectureDesc: 'MobileNet 采用流线型的架构设计，由多个深度可分离卷积块堆叠而成：',
            architectureTitle: 'MobileNet 基本结构',
            inputImage: '输入图像 (224×224×3)',
            standardConvLayer: '标准卷积层 (3×3, stride 2)',
            depthwiseBlocks: '深度可分离卷积块 × 13',
            depthwiseDetails: '(深度卷积 + BN + ReLU + 逐点卷积 + BN + ReLU)',
            globalAvgPool: '全局平均池化',
            fullyConnected: '全连接层 (1000 类)',
            softmaxOutput: 'Softmax 输出',
            versions: '📊 MobileNet 版本演进',
            versionCol: '版本',
            yearCol: '发布年份',
            improvementCol: '核心改进',
            accuracyCol: 'ImageNet Top-1 准确率',
            v1Improvement: '引入深度可分离卷积',
            v2Improvement: '引入倒残差结构和线性瓶颈',
            v3Improvement: '使用 NAS 搜索 + SE 注意力机制',
            v2Innovation: '🚀 MobileNet V2 的创新',
            v2Desc: '本项目使用的 MobileNet V2 相比 V1 有以下重要改进：',
            invertedResiduals: '1. 倒残差结构（Inverted Residuals）',
            invertedResidualsDesc: '与传统残差块相反，MobileNet V2 先扩展通道数，再进行深度卷积，最后压缩回原始维度。这种"先胖后瘦"的设计更适合移动端。',
            linearBottlenecks: '2. 线性瓶颈（Linear Bottlenecks）',
            linearBottlenecksDesc: '在瓶颈层（通道数较少的层）去除非线性激活函数（ReLU），使用线性激活，避免信息丢失。',
            featureReuse: '3. 更高效的特征复用',
            featureReuseDesc: '通过残差连接，允许梯度和信息更好地在网络中流动，提升训练效果。',
            advantagesSummary: '💡 优势总结：',
            adv1: '相同精度下，速度比 V1 快 30%',
            adv2: '相同速度下，精度比 V1 高 1-2%',
            adv3: '更少的参数量（约 3.4M）',
            adv4: '更强的表达能力和泛化性能',
            applications: '🎯 应用场景',
            appMobile: '移动应用',
            appMobileDesc: '照片美化、智能相册分类、实时滤镜',
            appRobot: '智能机器人',
            appRobotDesc: '物体识别、导航避障、人机交互',
            appMedical: '医疗诊断',
            appMedicalDesc: 'X光片分析、皮肤病检测、病理切片识别',
            appAuto: '自动驾驶',
            appAutoDesc: '交通标志识别、行人检测、车道线识别',
            appIndustry: '工业检测',
            appIndustryDesc: '产品质量检测、缺陷识别、自动分拣',
            appAgriculture: '智慧农业',
            appAgricultureDesc: '作物病害识别、成熟度判断、杂草检测',
            implementation: '⚙️ 本项目实现',
            implDesc: '本项目使用 TensorFlow.js 实现 MobileNet 图像分类，具有以下特点：',
            implModel: '模型版本：',
            implWidth: '宽度因子：',
            implResolution: '输入分辨率：',
            implClasses: '分类类别：',
            implWeights: '权重来源：',
            implEnv: '推理环境：',
            implTime: '平均推理时间：',
            references: '📚 参考资料'
        },
        // 团队页面
        team: {
            title: '👥 开发团队',
            subtitle: '致力于打造最优秀的 AI 图像识别应用',
            stats: {
                members: '核心成员',
                classifications: '图像分类次数',
                accuracy: '识别准确率',
                uptime: '在线服务'
            },
            roles: {
                leader: '项目负责人 & 全栈工程师',
                ml: '机器学习工程师',
                designer: 'UI/UX 设计师',
                pm: '产品经理'
            },
            bios: {
                zhang: '5年全栈开发经验，专注于 AI 与 Web 技术融合，擅长 TensorFlow.js 和现代前端框架。',
                li: '计算机视觉博士，深度学习专家，负责模型优化和算法改进，发表过多篇 AI 领域论文。',
                wang: '资深界面设计师，注重用户体验，曾为多个知名互联网公司设计产品界面。',
                liu: '8年产品经验，擅长需求分析和产品规划，确保产品满足用户需求并持续优化。'
            },
            contact: '📮 联系我们',
            teamEmail: '团队邮箱',
            address: '公司地址',
            addressValue: '中国·北京市海淀区中关村科技园',
            workHours: '工作时间',
            workHoursValue: '周一至周五 9:00 - 18:00',
            feedback: '欢迎任何关于产品的建议和反馈！我们致力于为用户提供最好的 AI 图像识别体验。'
        }
    },
    'en': {
        // Navigation
        nav: {
            logo: '🖼️ MobileNet',
            classifier: 'Image Classifier',
            about: 'About MobileNet',
            team: 'Our Team'
        },
        // Home - Image Classification
        home: {
            title: '🖼️ MobileNet Image Classifier',
            subtitle: 'Recognize objects in images using deep learning',
            uploadIcon: '📷',
            uploadText: 'Click to upload or drag and drop an image here',
            uploadHint: 'You can also paste images with Ctrl+V (Cmd+V)',
            uploadBtn: 'Choose File',
            cameraBtn: '📸 Take Photo',
            classifyBtn: 'Classify',
            clearBtn: 'Clear',
            loading: 'Loading model...',
            classifying: 'Classifying image...',
            modelLoaded: 'Model loaded successfully! Ready to use',
            modelError: 'Failed to load model',
            classifyError: 'Classification failed',
            noModel: 'Model not loaded yet',
            noImage: 'Please upload or paste an image first',
            dropImage: 'Please drop an image file',
            resultsTitle: 'Classification Results (Top 5)'
        },
        // About page
        about: {
            title: '🧠 About MobileNet',
            subtitle: 'Revolutionary lightweight deep neural network',
            whatIs: '📖 What is MobileNet?',
            whatIsDesc1: 'MobileNet is a family of lightweight deep learning models introduced by Google in 2017, specifically designed for computer vision tasks on mobile and embedded devices. Through innovative network architecture design, it significantly reduces computational cost and parameters while maintaining high accuracy.',
            whatIsDesc2: 'The core innovation of MobileNet is the use of Depthwise Separable Convolution to replace traditional convolution operations, enabling efficient operation on resource-constrained devices.',
            features: '✨ Key Features',
            featureLight: 'Lightweight & Fast',
            featureLightDesc: 'Small model size, fast inference, ideal for mobile and edge computing',
            featureAccurate: 'High Accuracy',
            featureAccurateDesc: 'Achieves 70%+ accuracy on ImageNet dataset',
            featureFlexible: 'Flexible',
            featureFlexibleDesc: 'Supports width multiplier and resolution tuning to balance accuracy and speed',
            featureWide: 'Wide Applications',
            featureWideDesc: 'Object detection, face recognition, image segmentation, and more',
            convolution: '🔍 Depthwise Separable Convolution',
            convolutionDesc: 'Depthwise Separable Convolution is the core technology of MobileNet, decomposing standard convolution into two simpler operations:',
            depthwise: '1. Depthwise Convolution',
            depthwiseDesc: 'Applies a single convolution filter per input channel independently, without cross-channel information fusion. This greatly reduces computation.',
            pointwise: '2. Pointwise Convolution',
            pointwiseDesc: 'Uses 1×1 convolution kernels to linearly combine depthwise convolution outputs, enabling cross-channel information interaction.',
            computeComparison: '📊 Computation Comparison:',
            computeReduction: 'Computation Reduction Ratio:',
            reductionValue: 'approximately',
            reductionNote: '(For 3×3 convolutions, computation is reduced by 8-9 times)',
            architecture: '🏗️ Network Architecture',
            architectureDesc: 'MobileNet adopts a streamlined architecture design, stacked with multiple depthwise separable convolution blocks:',
            architectureTitle: 'MobileNet Basic Structure',
            inputImage: 'Input Image (224×224×3)',
            standardConvLayer: 'Standard Conv Layer (3×3, stride 2)',
            depthwiseBlocks: 'Depthwise Separable Conv Blocks × 13',
            depthwiseDetails: '(Depthwise Conv + BN + ReLU + Pointwise Conv + BN + ReLU)',
            globalAvgPool: 'Global Average Pooling',
            fullyConnected: 'Fully Connected Layer (1000 classes)',
            softmaxOutput: 'Softmax Output',
            versions: '📊 MobileNet Evolution',
            versionCol: 'Version',
            yearCol: 'Release Year',
            improvementCol: 'Key Improvements',
            accuracyCol: 'ImageNet Top-1 Accuracy',
            v1Improvement: 'Introduced Depthwise Separable Convolution',
            v2Improvement: 'Introduced Inverted Residuals and Linear Bottlenecks',
            v3Improvement: 'NAS Search + SE Attention Mechanism',
            v2Innovation: '🚀 MobileNet V2 Innovations',
            v2Desc: 'MobileNet V2 used in this project has the following key improvements over V1:',
            invertedResiduals: '1. Inverted Residuals',
            invertedResidualsDesc: 'Unlike traditional residual blocks, MobileNet V2 first expands channels, then performs depthwise convolution, and finally compresses back to original dimensions. This "expand-then-compress" design is better suited for mobile devices.',
            linearBottlenecks: '2. Linear Bottlenecks',
            linearBottlenecksDesc: 'Removes non-linear activation functions (ReLU) at bottleneck layers (layers with fewer channels), using linear activation to avoid information loss.',
            featureReuse: '3. More Efficient Feature Reuse',
            featureReuseDesc: 'Through residual connections, allows gradients and information to flow better through the network, improving training effectiveness.',
            advantagesSummary: '💡 Advantages Summary:',
            adv1: 'At the same accuracy, 30% faster than V1',
            adv2: 'At the same speed, 1-2% higher accuracy than V1',
            adv3: 'Fewer parameters (approximately 3.4M)',
            adv4: 'Stronger representation capability and generalization performance',
            applications: '🎯 Applications',
            appMobile: 'Mobile Apps',
            appMobileDesc: 'Photo enhancement, smart album classification, real-time filters',
            appRobot: 'Smart Robots',
            appRobotDesc: 'Object recognition, navigation and obstacle avoidance, human-robot interaction',
            appMedical: 'Medical Diagnosis',
            appMedicalDesc: 'X-ray analysis, skin disease detection, pathology slide recognition',
            appAuto: 'Autonomous Driving',
            appAutoDesc: 'Traffic sign recognition, pedestrian detection, lane line recognition',
            appIndustry: 'Industrial Inspection',
            appIndustryDesc: 'Product quality inspection, defect recognition, automatic sorting',
            appAgriculture: 'Smart Agriculture',
            appAgricultureDesc: 'Crop disease recognition, maturity assessment, weed detection',
            implementation: '⚙️ Project Implementation',
            implDesc: 'This project uses TensorFlow.js to implement MobileNet image classification with the following features:',
            implModel: 'Model Version:',
            implWidth: 'Width Multiplier:',
            implResolution: 'Input Resolution:',
            implClasses: 'Classification Categories:',
            implWeights: 'Weight Source:',
            implEnv: 'Inference Environment:',
            implTime: 'Average Inference Time:',
            references: '📚 References'
        },
        // Team page
        team: {
            title: '👥 Our Team',
            subtitle: 'Dedicated to building the best AI image recognition app',
            stats: {
                members: 'Core Members',
                classifications: 'Classifications',
                accuracy: 'Accuracy',
                uptime: 'Uptime'
            },
            roles: {
                leader: 'Project Lead & Full-stack Engineer',
                ml: 'Machine Learning Engineer',
                designer: 'UI/UX Designer',
                pm: 'Product Manager'
            },
            bios: {
                zhang: '5 years of full-stack development experience, focusing on AI and web technology integration, skilled in TensorFlow.js and modern frontend frameworks.',
                li: 'PhD in Computer Vision, deep learning expert, responsible for model optimization and algorithm improvement, published multiple papers in AI.',
                wang: 'Senior interface designer, focused on user experience, designed products for several well-known internet companies.',
                liu: '8 years of product experience, skilled in requirement analysis and product planning, ensuring products meet user needs and continuous optimization.'
            },
            contact: '📮 Contact Us',
            teamEmail: 'Team Email',
            address: 'Address',
            addressValue: 'Zhongguancun Science Park, Haidian District, Beijing, China',
            workHours: 'Work Hours',
            workHoursValue: 'Monday - Friday 9:00 - 18:00',
            feedback: 'We welcome any suggestions and feedback about our product! We are committed to providing users with the best AI image recognition experience.'
        }
    },
    'ja': {
        // ナビゲーション
        nav: {
            logo: '🖼️ MobileNet',
            classifier: '画像分類',
            about: 'MobileNet原理',
            team: '開発チーム'
        },
        // ホーム - 画像分類
        home: {
            title: '🖼️ MobileNet 画像分類器',
            subtitle: 'ディープラーニングで画像内の物体を認識',
            uploadIcon: '📷',
            uploadText: 'クリックして画像をアップロードまたはドラッグ＆ドロップ',
            uploadHint: 'Ctrl+V (Cmd+V) で画像を貼り付けることもできます',
            uploadBtn: 'ファイルを選択',
            cameraBtn: '📸 写真を撮る',
            classifyBtn: '分類開始',
            clearBtn: 'クリア',
            loading: 'モデルを読み込み中...',
            classifying: '画像を分類中...',
            modelLoaded: 'モデルの読み込みに成功しました！',
            modelError: 'モデルの読み込みに失敗しました',
            classifyError: '分類に失敗しました',
            noModel: 'モデルがまだ読み込まれていません',
            noImage: '先に画像をアップロードまたは貼り付けてください',
            dropImage: '画像ファイルをドロップしてください',
            resultsTitle: '分類結果 (トップ5)'
        },
        // About ページ
        about: {
            title: '🧠 MobileNet 原理詳細',
            subtitle: '軽量ディープニューラルネットワークの革新作',
            whatIs: '📖 MobileNetとは？',
            whatIsDesc1: 'MobileNetは、Googleが2017年に発表した軽量ディープラーニングモデルシリーズで、モバイルデバイスと組み込みデバイス上のコンピュータビジョンタスク専用に設計されています。革新的なネットワークアーキテクチャ設計により、高い精度を維持しながら計算量とパラメータ数を大幅に削減します。',
            whatIsDesc2: 'MobileNetの中核的な革新は、従来の畳み込み演算に代えて深度分離可能畳み込み（Depthwise Separable Convolution）を使用することで、リソースが限られたデバイスでも効率的に動作できるようにしています。',
            features: '✨ 主要機能',
            featureLight: '軽量・高速',
            featureLightDesc: 'モデルサイズが小さく、推論速度が速い、モバイルとエッジコンピューティングに最適',
            featureAccurate: '高精度',
            featureAccurateDesc: 'ImageNetデータセットで70%以上の精度を達成',
            featureFlexible: '柔軟性',
            featureFlexibleDesc: '幅係数と解像度調整をサポート、精度と速度のバランス',
            featureWide: '幅広い応用',
            featureWideDesc: '物体検出、顔認識、画像セグメンテーションなど多様なタスク',
            convolution: '🔍 深度分離可能畳み込み',
            convolutionDesc: '深度分離可能畳み込みはMobileNetの中核技術で、標準畳み込みを2つのより単純な操作に分解します：',
            depthwise: '1. 深度畳み込み（Depthwise Convolution）',
            depthwiseDesc: '入力の各チャネルに対して独立して単一の畳み込みフィルタを適用し、チャネル間の情報融合を行いません。これにより計算量が大幅に削減されます。',
            pointwise: '2. ポイントワイズ畳み込み（Pointwise Convolution）',
            pointwiseDesc: '1×1の畳み込みカーネルを使用して深度畳み込みの出力を線形結合し、チャネル間の情報相互作用を実現します。',
            computeComparison: '📊 計算量比較：',
            computeReduction: '計算量削減比率：',
            reductionValue: '約',
            reductionNote: '（3×3畳み込みの場合、計算量は8〜9倍削減）',
            architecture: '🏗️ ネットワークアーキテクチャ',
            architectureDesc: 'MobileNetは流線型のアーキテクチャ設計を採用し、複数の深度分離可能畳み込みブロックで積層されています：',
            architectureTitle: 'MobileNet基本構造',
            inputImage: '入力画像 (224×224×3)',
            standardConvLayer: '標準畳み込み層 (3×3, stride 2)',
            depthwiseBlocks: '深度分離可能畳み込みブロック × 13',
            depthwiseDetails: '(深度畳み込み + BN + ReLU + ポイントワイズ畳み込み + BN + ReLU)',
            globalAvgPool: 'グローバル平均プーリング',
            fullyConnected: '全結合層 (1000クラス)',
            softmaxOutput: 'Softmax出力',
            versions: '📊 MobileNetバージョン進化',
            versionCol: 'バージョン',
            yearCol: '発表年',
            improvementCol: '主要改善',
            accuracyCol: 'ImageNet Top-1精度',
            v1Improvement: '深度分離可能畳み込みの導入',
            v2Improvement: '逆残差構造と線形ボトルネックの導入',
            v3Improvement: 'NAS検索 + SE注意機構',
            v2Innovation: '🚀 MobileNet V2の革新',
            v2Desc: 'このプロジェクトで使用されているMobileNet V2は、V1と比較して以下の重要な改善があります：',
            invertedResiduals: '1. 逆残差構造（Inverted Residuals）',
            invertedResidualsDesc: '従来の残差ブロックとは逆に、MobileNet V2はまずチャネルを拡張し、次に深度畳み込みを実行し、最後に元の次元に圧縮します。この「拡張→圧縮」設計はモバイルデバイスに適しています。',
            linearBottlenecks: '2. 線形ボトルネック（Linear Bottlenecks）',
            linearBottlenecksDesc: 'ボトルネック層（チャネル数が少ない層）で非線形活性化関数（ReLU）を削除し、線形活性化を使用して情報損失を回避します。',
            featureReuse: '3. より効率的な特徴再利用',
            featureReuseDesc: '残差接続により、勾配と情報がネットワーク内でより良く流れ、トレーニング効果が向上します。',
            advantagesSummary: '💡 利点の概要：',
            adv1: '同じ精度で、V1より30％高速',
            adv2: '同じ速度で、V1より1-2％高精度',
            adv3: 'パラメータ数が少ない（約3.4M）',
            adv4: 'より強力な表現能力と汎化性能',
            applications: '🎯 応用シーン',
            appMobile: 'モバイルアプリ',
            appMobileDesc: '写真加工、スマートアルバム分類、リアルタイムフィルタ',
            appRobot: 'スマートロボット',
            appRobotDesc: '物体認識、ナビゲーションと障害物回避、人間とロボットの相互作用',
            appMedical: '医療診断',
            appMedicalDesc: 'X線分析、皮膚病検出、病理スライド認識',
            appAuto: '自動運転',
            appAutoDesc: '交通標識認識、歩行者検出、車線ライン認識',
            appIndustry: '工業検査',
            appIndustryDesc: '製品品質検査、欠陥認識、自動仕分け',
            appAgriculture: 'スマート農業',
            appAgricultureDesc: '作物病害認識、成熟度判定、雑草検出',
            implementation: '⚙️ プロジェクト実装',
            implDesc: 'このプロジェクトはTensorFlow.jsを使用してMobileNet画像分類を実装し、以下の特徴があります：',
            implModel: 'モデルバージョン：',
            implWidth: '幅係数：',
            implResolution: '入力解像度：',
            implClasses: '分類カテゴリ：',
            implWeights: '重みソース：',
            implEnv: '推論環境：',
            implTime: '平均推論時間：',
            references: '📚 参考資料'
        },
        // チームページ
        team: {
            title: '👥 開発チーム',
            subtitle: '最高のAI画像認識アプリケーションの構築に専念',
            stats: {
                members: 'コアメンバー',
                classifications: '画像分類回数',
                accuracy: '認識精度',
                uptime: 'オンラインサービス'
            },
            roles: {
                leader: 'プロジェクトリーダー & フルスタックエンジニア',
                ml: '機械学習エンジニア',
                designer: 'UI/UX デザイナー',
                pm: 'プロダクトマネージャー'
            },
            bios: {
                zhang: '5年のフルスタック開発経験、AIとWeb技術の融合に注力、TensorFlow.jsと現代的なフロントエンドフレームワークに精通。',
                li: 'コンピュータビジョン博士、ディープラーニング専門家、モデル最適化とアルゴリズム改善を担当、AI分野の論文を複数発表。',
                wang: 'シニアインターフェースデザイナー、ユーザーエクスペリエンスに注力、複数の有名インターネット企業の製品インターフェースを設計。',
                liu: '8年の製品経験、要件分析と製品計画に精通、製品がユーザーニーズを満たし継続的に最適化されることを保証。'
            },
            contact: '📮 お問い合わせ',
            teamEmail: 'チームメール',
            address: '住所',
            addressValue: '中国・北京市海淀区中関村科技園',
            workHours: '営業時間',
            workHoursValue: '月曜日 - 金曜日 9:00 - 18:00',
            feedback: '製品に関するご提案やフィードバックをお待ちしております！最高のAI画像認識体験を提供することに専念しています。'
        }
    },
    'es': {
        // Navegación
        nav: {
            logo: '🖼️ MobileNet',
            classifier: 'Clasificador de Imágenes',
            about: 'Acerca de MobileNet',
            team: 'Nuestro Equipo'
        },
        // Inicio - Clasificación de Imágenes
        home: {
            title: '🖼️ Clasificador de Imágenes MobileNet',
            subtitle: 'Reconoce objetos en imágenes usando aprendizaje profundo',
            uploadIcon: '📷',
            uploadText: 'Haz clic para subir o arrastra y suelta una imagen aquí',
            uploadHint: 'También puedes pegar imágenes con Ctrl+V (Cmd+V)',
            uploadBtn: 'Elegir Archivo',
            cameraBtn: '📸 Tomar Foto',
            classifyBtn: 'Clasificar',
            clearBtn: 'Limpiar',
            loading: 'Cargando modelo...',
            classifying: 'Clasificando imagen...',
            modelLoaded: '¡Modelo cargado con éxito! Listo para usar',
            modelError: 'Error al cargar el modelo',
            classifyError: 'Error en la clasificación',
            noModel: 'Modelo aún no cargado',
            noImage: 'Por favor, sube o pega una imagen primero',
            dropImage: 'Por favor, suelta un archivo de imagen',
            resultsTitle: 'Resultados de Clasificación (Top 5)'
        },
        // Página Acerca de
        about: {
            title: '🧠 Acerca de MobileNet',
            subtitle: 'Red neuronal profunda ligera revolucionaria',
            whatIs: '📖 ¿Qué es MobileNet?',
            whatIsDesc1: 'MobileNet es una familia de modelos de aprendizaje profundo ligeros introducidos por Google en 2017, diseñados específicamente para tareas de visión por computadora en dispositivos móviles y embebidos. A través de un diseño innovador de arquitectura de red, reduce significativamente el costo computacional y los parámetros mientras mantiene alta precisión.',
            whatIsDesc2: 'La innovación central de MobileNet es el uso de Convolución Separable en Profundidad para reemplazar las operaciones de convolución tradicionales, permitiendo una operación eficiente en dispositivos con recursos limitados.',
            features: '✨ Características Clave',
            featureLight: 'Ligero y Rápido',
            featureLightDesc: 'Tamaño de modelo pequeño, inferencia rápida, ideal para móvil y edge computing',
            featureAccurate: 'Alta Precisión',
            featureAccurateDesc: 'Alcanza más del 70% de precisión en el conjunto de datos ImageNet',
            featureFlexible: 'Flexible',
            featureFlexibleDesc: 'Soporta multiplicador de ancho y ajuste de resolución para equilibrar precisión y velocidad',
            featureWide: 'Amplias Aplicaciones',
            featureWideDesc: 'Detección de objetos, reconocimiento facial, segmentación de imágenes y más',
            convolution: '🔍 Convolución Separable en Profundidad',
            convolutionDesc: 'La Convolución Separable en Profundidad es la tecnología central de MobileNet, descomponiendo la convolución estándar en dos operaciones más simples:',
            depthwise: '1. Convolución en Profundidad',
            depthwiseDesc: 'Aplica un único filtro de convolución por canal de entrada de forma independiente, sin fusión de información entre canales. Esto reduce enormemente la computación.',
            pointwise: '2. Convolución Puntual',
            pointwiseDesc: 'Usa kernels de convolución 1×1 para combinar linealmente las salidas de la convolución en profundidad, permitiendo la interacción de información entre canales.',
            computeComparison: '📊 Comparación de Computación:',
            computeReduction: 'Relación de Reducción de Computación:',
            reductionValue: 'aproximadamente',
            reductionNote: '(Para convoluciones 3×3, la computación se reduce 8-9 veces)',
            architecture: '🏗️ Arquitectura de Red',
            architectureDesc: 'MobileNet adopta un diseño de arquitectura simplificado, apilado con múltiples bloques de convolución separable en profundidad:',
            architectureTitle: 'Estructura Básica de MobileNet',
            inputImage: 'Imagen de Entrada (224×224×3)',
            standardConvLayer: 'Capa Conv Estándar (3×3, stride 2)',
            depthwiseBlocks: 'Bloques Conv Separable en Profundidad × 13',
            depthwiseDetails: '(Conv Profundidad + BN + ReLU + Conv Puntual + BN + ReLU)',
            globalAvgPool: 'Pooling de Promedio Global',
            fullyConnected: 'Capa Totalmente Conectada (1000 clases)',
            softmaxOutput: 'Salida Softmax',
            versions: '📊 Evolución de MobileNet',
            versionCol: 'Versión',
            yearCol: 'Año de Lanzamiento',
            improvementCol: 'Mejoras Clave',
            accuracyCol: 'Precisión Top-1 ImageNet',
            v1Improvement: 'Introdujo Convolución Separable en Profundidad',
            v2Improvement: 'Introdujo Residuales Invertidos y Cuellos de Botella Lineales',
            v3Improvement: 'Búsqueda NAS + Mecanismo de Atención SE',
            v2Innovation: '🚀 Innovaciones de MobileNet V2',
            v2Desc: 'MobileNet V2 utilizado en este proyecto tiene las siguientes mejoras clave sobre V1:',
            invertedResiduals: '1. Residuales Invertidos',
            invertedResidualsDesc: 'A diferencia de los bloques residuales tradicionales, MobileNet V2 primero expande los canales, luego realiza convolución en profundidad y finalmente comprime de vuelta a las dimensiones originales. Este diseño "expandir-comprimir" es más adecuado para dispositivos móviles.',
            linearBottlenecks: '2. Cuellos de Botella Lineales',
            linearBottlenecksDesc: 'Elimina las funciones de activación no lineal (ReLU) en las capas de cuello de botella (capas con menos canales), usando activación lineal para evitar la pérdida de información.',
            featureReuse: '3. Reutilización de Características Más Eficiente',
            featureReuseDesc: 'A través de conexiones residuales, permite que los gradientes y la información fluyan mejor a través de la red, mejorando la efectividad del entrenamiento.',
            advantagesSummary: '💡 Resumen de Ventajas:',
            adv1: 'Con la misma precisión, 30% más rápido que V1',
            adv2: 'A la misma velocidad, 1-2% mayor precisión que V1',
            adv3: 'Menos parámetros (aproximadamente 3.4M)',
            adv4: 'Mayor capacidad de representación y rendimiento de generalización',
            applications: '🎯 Aplicaciones',
            appMobile: 'Aplicaciones Móviles',
            appMobileDesc: 'Mejora de fotos, clasificación inteligente de álbumes, filtros en tiempo real',
            appRobot: 'Robots Inteligentes',
            appRobotDesc: 'Reconocimiento de objetos, navegación y evitación de obstáculos, interacción humano-robot',
            appMedical: 'Diagnóstico Médico',
            appMedicalDesc: 'Análisis de rayos X, detección de enfermedades de la piel, reconocimiento de portaobjetos de patología',
            appAuto: 'Conducción Autónoma',
            appAutoDesc: 'Reconocimiento de señales de tráfico, detección de peatones, reconocimiento de líneas de carril',
            appIndustry: 'Inspección Industrial',
            appIndustryDesc: 'Inspección de calidad de productos, reconocimiento de defectos, clasificación automática',
            appAgriculture: 'Agricultura Inteligente',
            appAgricultureDesc: 'Reconocimiento de enfermedades de cultivos, evaluación de madurez, detección de malezas',
            implementation: '⚙️ Implementación del Proyecto',
            implDesc: 'Este proyecto utiliza TensorFlow.js para implementar la clasificación de imágenes de MobileNet con las siguientes características:',
            implModel: 'Versión del Modelo:',
            implWidth: 'Multiplicador de Ancho:',
            implResolution: 'Resolución de Entrada:',
            implClasses: 'Categorías de Clasificación:',
            implWeights: 'Fuente de Pesos:',
            implEnv: 'Entorno de Inferencia:',
            implTime: 'Tiempo de Inferencia Promedio:',
            references: '📚 Referencias'
        },
        // Página del Equipo
        team: {
            title: '👥 Nuestro Equipo',
            subtitle: 'Dedicados a construir la mejor aplicación de reconocimiento de imágenes con IA',
            stats: {
                members: 'Miembros Principales',
                classifications: 'Clasificaciones',
                accuracy: 'Precisión',
                uptime: 'Tiempo Activo'
            },
            roles: {
                leader: 'Líder de Proyecto e Ingeniero Full-stack',
                ml: 'Ingeniero de Aprendizaje Automático',
                designer: 'Diseñador UI/UX',
                pm: 'Gerente de Producto'
            },
            bios: {
                zhang: '5 años de experiencia en desarrollo full-stack, enfocado en la integración de IA y tecnología web, hábil en TensorFlow.js y frameworks frontend modernos.',
                li: 'Doctorado en Visión por Computadora, experto en aprendizaje profundo, responsable de optimización de modelos y mejora de algoritmos, ha publicado múltiples artículos en IA.',
                wang: 'Diseñador de interfaces senior, enfocado en experiencia de usuario, ha diseñado productos para varias empresas de internet conocidas.',
                liu: '8 años de experiencia en productos, hábil en análisis de requisitos y planificación de productos, asegurando que los productos satisfagan las necesidades del usuario y optimización continua.'
            },
            contact: '📮 Contáctanos',
            teamEmail: 'Email del Equipo',
            address: 'Dirección',
            addressValue: 'Parque Tecnológico Zhongguancun, Distrito Haidian, Beijing, China',
            workHours: 'Horario de Trabajo',
            workHoursValue: 'Lunes - Viernes 9:00 - 18:00',
            feedback: '¡Damos la bienvenida a cualquier sugerencia y comentario sobre nuestro producto! Estamos comprometidos a proporcionar a los usuarios la mejor experiencia de reconocimiento de imágenes con IA.'
        }
    }
};

// 语言选择器
class LanguageManager {
    constructor() {
        this.currentLang = this.getStoredLanguage() || this.detectBrowserLanguage();
        this.translations = translations;
    }

    // 检测浏览器语言
    detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('zh')) return 'zh-CN';
        if (browserLang.startsWith('ja')) return 'ja';
        if (browserLang.startsWith('es')) return 'es';
        return 'en';
    }

    // 获取存储的语言
    getStoredLanguage() {
        return localStorage.getItem('preferredLanguage');
    }

    // 设置语言
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('preferredLanguage', lang);
    }

    // 获取翻译文本
    t(key) {
        const keys = key.split('.');
        let result = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (result && result[k]) {
                result = result[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }
        
        return result;
    }

    // 获取当前语言
    getCurrentLanguage() {
        return this.currentLang;
    }

    // 获取所有支持的语言
    getSupportedLanguages() {
        return [
            { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
            { code: 'en', name: 'English', flag: '🇺🇸' },
            { code: 'ja', name: '日本語', flag: '🇯🇵' },
            { code: 'es', name: 'Español', flag: '🇪🇸' }
        ];
    }
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { LanguageManager, translations };
}