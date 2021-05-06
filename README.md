# NewTab

​<!DOCTYPE html>
<html>
<header>
    <style>
        body {
            text-align: center;
            background-color: #222222;
        }
        .input{
            font-size: 20px;
        }
        .submit{
            font-size: 18px;
        }
        .input{
            width: 400px;
            height: 36px;
        }
        .submit{
            width: 160px;
            height: 32px;
        }
    </style>
    <title>简单首页</title>
</header>

<body>
    <div>
        <img src="NewTab_img/baidu.png" height="100px">
        <form name="input" target="_blank" action="https://www.baidu.com/s?" method="get">
            <input class="input" type="text" value="" name="wd" >
            <input class="submit" type="submit" value="百度一下" >
        </form>
    </div>

    <div class="g">
        <img src="NewTab_img/google.png" height="80px">
        <form name="input" target="_blank" action="https://www.google.com/search?" method="get">
            <input class="input" type="text" value="" name="q" >
            <input class="submit" type="submit" value="Google" >
        </form>
    </div>

    <div>
        <img src="NewTab_img/duckduckgo.png" height="100px">
        <form name="input" target="_blank" action="https://duckduckgo.com/?" method="get">
            <input class="input" type="text" value="" name="q" >
            <input class="submit" type="submit" value="DuckDuckGo" >
        </form>
    </div>
</body>
</html>
