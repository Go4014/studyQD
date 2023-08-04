const path = require('path')

// 1. ���� html-webpack-plugin ���������õ�����Ĺ��캯��
const HtmlPlugin = require('html-webpack-plugin')
// 2. new ���캯�������������ʵ������
const htmlPlugin = new HtmlPlugin({
    // ָ��Ҫ�����ĸ�ҳ��
    template: './src/index.html',
    // ָ�����Ƴ������ļ����ʹ��·��
    filename: './index.html'
})

// ע�⣺���� { } �ǽ⹹��ֵ
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// ʹ�� Node.js �еĵ����﷨�����⵼��һ�� webpack �����ö���
module.exports = {
    // �ڿ������Խ׶Σ������Ҷ��� devtool ��ֵ����Ϊ eval-source-map
    // devtool: 'eval-source-map',
    // ��ʵ�ʷ�����ʱ�򣬽����Ұ� devtool ��ֵ����Ϊ nosources-source-map ��ֱ�ӹر� SourceMap
    devtool: 'nosources-source-map',
    // mode ���� webpack ���е�ģʽ����ѡֵ������ development �� production
    // ���ۣ�����ʱ��һ��Ҫ�� development����Ϊ׷����Ǵ�����ٶȣ������������
    // ���������������ߵ�ʱ��һ����Ҫ�� production����Ϊ����׷��������С�������Ǵ���ٶȿ죡
    mode: 'development',
    // mode: 'production'
    // entry: 'ָ��Ҫ�����ĸ��ļ�'
    entry: path.join(__dirname, './src/index.js'),
    // ָ�����ɵ��ļ�Ҫ��ŵ�����
    output: {
        // ��ŵ�Ŀ¼
        path: path.join(__dirname, 'dist'),
        // ���ɵ��ļ���
        filename: 'js/bundle.js'
    },
    // 3. ��������飬���� webpack ������ʱ������ز�������Щ���
    plugins: [htmlPlugin, new CleanWebpackPlugin()],
    devServer: {
        // �״δ���ɹ����Զ��������
        open: true,
        // �� http Э���У�����˿ں��� 80������Ա�ʡ��
        port: 80,
        // ָ�����е�������ַ
        host: '127.0.0.1'
    },
    module: {
        rules: [
            // �����˲�ͬģ���Ӧ�� loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // ���� .less �ļ��� loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // ����ͼƬ�ļ��� loader
            // �����Ҫ���õ� loader ֻ��һ������ֻ����һ���ַ���Ҳ�У�����ж��loader�������ָ������
            // ������ url-loader ��ʱ�򣬶������֮�䣬ʹ�� & ���Ž��зָ�
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=images' },
            // ʹ�� babel-loader ����߼��� JS �﷨
            // ������ babel-loader ��ʱ�򣬳���Աֻ��Ҫ���Լ��Ĵ������ת�����ɣ�һ��Ҫ�ų� node_modules Ŀ¼�е� JS �ļ�
            // ��Ϊ���������е� JS �����ԣ�����Ҫ����Ա����
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        alias: {
            // ���� webpack������Աд�Ĵ����У�@ ���ű�ʾ src ��һ��Ŀ¼
            '@': path.join(__dirname, './src/')
        }
    }
}
