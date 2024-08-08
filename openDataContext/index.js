const style = require("./render/style.js");
const tplFn = require("./render/tplfn.js");
const Layout = require("./engine.js").default;
const SCORERANK = 1;



let sharedCanvas = wx.getSharedCanvas();
let sharedContext = sharedCanvas.getContext("2d");

function draw(dataIndex) {
    let scoreRankData = getFriendData();

}

//显示好友排行榜
function showFriendData(demoData){
    // 使用模板方法解析数据生成节点树
    let template = tplFn({
      demoData
    });
    Layout.clear();
    Layout.init(template, style);
    Layout.layout(sharedContext);
}


//获取好友数据
function getFriendData() {
    let datas = [];
    wx.getFriendCloudStorage({
      keyList: ['level'], // 要获取的好友数据的字段列表，例如分数字段
      success: function (res) {
          // 提取好友数据
          datas = res.data;
          // 对好友数据进行排序
          datas.sort(function (a, b) {
              return b.KVDataList[0].value - a.KVDataList[0].value; // 根据分数从高到低排序
          });
          //显示排行榜
          showFriendData(datas);
      },
      fail: function (res) {
          console.log(res);
      }
    });
    return datas;
}


// 简单的进行排序处理
function sortRankScore(arr) {
    // 使用 Array.prototype.sort() 方法对数组进行排序  
    return arr.sort((a, b) => b.rankScore - a.rankScore);
}




function init() {
    wx.onMessage((data) => {
        console.log("onMessage", data);
        if (data.type === "updateViewPort") {
            Layout.updateViewPort(data.box);
            draw(SCORERANK);
        } else if (data.type === 'close') {
            Layout.clear();
        }
    });
}

init();