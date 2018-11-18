

var Answer = function() {
    this.author = ''
    this.content = ''
}


"use strict"
const request = require('request')
const cheerio = require('cheerio')

const log = function() {
    console.log.apply(console, arguments)
}

const answerFromDiv = function(div) {
    const a = new Answer()
    // 使用 cheerio.load 函数来返回一个可以查询的特殊对象
    const options = {
        decodeEntities: false,
    }
    const e = cheerio.load(div, options)
    // 然后就可以使用 querySelector 语法来获取信息了
    // .text() 获取文本信息
    a.author = e('.UserLink-link > a').text()
    // 如果用 text() 则会获取不到回车
    // 这里要讲一讲爬虫的奥义
    a.content = e('.RichContent-inner').html()

    // log('***  ', a.content)
    return a
}

const answersFromBody = function(body) {

    const options = {
        decodeEntities: false,
    }
    const e = cheerio.load(body, options)
    log('e', e)
    // 查询对象的查询语法和 DOM API 中的 querySelector 一样
    const divs = e('.List-item')
    log('divs', divs)
    const answers = []
    for(let i = 0; i < divs.length; i++) {
        let element = divs[i]
        // 获取 div 的元素并且用 movieFromDiv 解析
        // 然后加入 movies 数组中
        const div = e(element).html()
        const m = answerFromDiv(div)
        answers.push(m)
    }
    return answers

}
const main = function() {
    const url = 'https://www.zhihu.com/question/278911187'
    const cookie = '931b604f0432b1e60014973b6cd4c7bc'
    const useragent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.98 Safari/537.36'
    const header = {
        'Cookie': cookie,
        'User-Agent': useragent,
    }
    const options = {
        url: url,
        headers: header,
    }

    request(options, function(error, response, body) {
        if(error === null && response.statusCode == 200 ) {
            const answers = answersFromBody(body)
            log('body', body)
            const s = require('./save')
            const path = 'zhihu.answer.txt'
            s.save(path, answers)
        } else {
            log('保存失败')
        }
    })

}

main()