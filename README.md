<!--
 * @Date: 2022-03-31 08:26:49
 * @LastEditors: geekwen
 * @LastEditTime: 2022-04-02 02:09:55
 * @FilePath: /cfweb-fe/README.md
 * @Description: Description
-->
# cfweb-fe

介绍

## 工程创建

vue create cfweb-fe
yarn add @vue/server-renderer
yarn add  webpack-manifest-plugin webpack-node-externals webpack --dev
yarn add koa koa-static

## commitlint

```shell
yarn add husky --dev
# Activate hooks
yarn husky install
# Add hook
yarn husky add .husky/commit-msg 'yarn commitlint --edit $1'
```

## 特性
