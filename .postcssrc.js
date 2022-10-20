// PostCSS 配置文件

module.exports = {
    // 配置要使用的 PostCSS 插件
    plugins: {
        // 配置使用 postcss-pxtorem 插件
        // 作用： 把 px 转为 rem
        'postcss-pxtorem': {
            // lib-flexible 的 REM 适配方案： 一行分为十份
            // rootValue: 37.5,
            rootValue({ file }) {
                // console.log(file);
                return file.indexOf('vant') !== -1 ? 37.5 : 75
            },

            // 配置要使用的 CSS 属性
            // * 表示所有
            propList: ['*'],
        },
    },
};