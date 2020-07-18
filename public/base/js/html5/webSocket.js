let socket;
function openSocket() {
  if (typeof (WebSocket) == "undefined") {
    console.log("您的浏览器不支持WebSocket");
  } else {
    console.log("您的浏览器支持WebSocket");
    //实现化WebSocket对象，指定要连接的服务器地址与端口  建立连接
    const userId = document.getElementById('userId').value;
    // var socketUrl="ws://127.0.0.1:22599/webSocket/"+userId;
    const socketUrl = "ws://localhost:9000/service/webSocket/" + userId;
    console.log(socketUrl);
    if (socket != null) {
      socket.close();
      socket = null;
    }
    socket = new WebSocket(socketUrl);
    //打开事件
    socket.onopen = function () {
      console.log("websocket已打开");
      //socket.send("这是来自客户端的消息" + location.href + new Date());
    };
    //获得消息事件
    socket.onmessage = function (msg) {
      const serverMsg = "收到服务端信息：" + msg.data;
      console.log(serverMsg);
      //发现消息进入    开始处理前端触发逻辑
    };
    //关闭事件
    socket.onclose = function () {
      console.log("websocket已关闭");
    };
    //发生了错误事件
    socket.onerror = function () {
      console.log("websocket发生了错误");
    }
  }
}
function sendMessage() {
  if (typeof (WebSocket) == "undefined") {
    console.log("您的浏览器不支持WebSocket");
  } else {
    // console.log("您的浏览器支持WebSocket");
    const toUserId = document.getElementById('toUserId').value;
    const contentText = document.getElementById('contentText').value;
    const msg = '{"toUserId":"' + toUserId + '","contentText":"' + contentText + '"}';
    console.log(msg);
    socket.send(msg);
  }
}