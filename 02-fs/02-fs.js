const { readdir } = require('fs');

/**
 * 遍历src目录下的文件,返回文件名组成字符串数组
 */
readdir('./src',{}, (err, fileList) => {})