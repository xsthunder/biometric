# biometric

使用旷视API结合material angulars, angularjs，搭建简单人脸识别系统

## live demon

[http://l.lovecust.com/biometric](http://l.lovecust.com/biometric)

## installation guide

* make sure you have nodejs >= 8.9
* download this project

in cmd and switch to the project directory

`npm i//安装库依赖`

`npm test//运行实例`

* open [http://localhost:8080](/http://localhost:8080/)

## NOTES

* 建议打开浏览器的开发人员工具，切到network，观察给旷视API的请求是否成功，因为使用API有很多限制（并发限制或者高峰拒绝服务）。 
* 如果密钥失效，修改/public/urlCnst.js下的`api_key`,`api_secret`,在第29和30行。
