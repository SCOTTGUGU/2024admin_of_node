const express = require('express');
const cors = require('cors');
const bodyParse = require('body-parser');
const port = 3000;

const app = express();
app.use(cors());
// extended: false只处理数组或者字符串，当为true时，值可以任意类型
app.use(bodyParse.urlencoded({ extended: false }));

// 处理json文件， parse application/json
app.use(bodyParse.json())
// 剖出错误信息
app.use((req, res, next) => {
  // status=0为成功,=1为失败,默认设为1,方便处理失败的情况
  res.cc = (err, status = 1) => {
    res.send({
      status,
      // 判断这个error是错误对象还是字符串
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});