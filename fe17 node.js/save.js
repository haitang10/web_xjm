// 这个函数把数组保存到文件中
const saveJson = function(path, answer) {
    const fs = require('fs')
    const s = JSON.stringify(answers, null, 2)
    fs.writeFile(path, s, function(error) {
        if (error !== null) {
            console.log('写入错误', error)
        } else {
            console.log('保存成功')
        }
    })
}

exports.save = saveJson