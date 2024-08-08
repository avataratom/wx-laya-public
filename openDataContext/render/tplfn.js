/**
 * xml经过doT.js编译出的模板函数
 * 因为小游戏不支持new Function，模板函数只能外部编译
 * 可直接拷贝本函数到小游戏中使用
 */
module.exports = function anonymous(it) {
    var out = '<view class="container" id="main"><view class="rankList"> <scrollview class="list" scrollY="true"> ';
    var arr1 = it.demoData;
    if (arr1) {
      var item, index = -1,
        l1 = arr1.length - 1;
      while (index < l1) {
        item = arr1[index += 1];
        out += ' ';
        if (index % 2 === 1) {
          out += ' <view class="listItemOld"> ';
        }
        out += ' ';
        if (index % 2 === 0) {
          out += ' <view class="listItem"> ';
        }
        out += ' <text font="fnt_number-export" class="listItemNum" value="' + (index + 1) + '"></text> <image class="listHeadImg" src="' + (item.avatarUrl) + '"></image> <text class="listItemName" value="' + (item.nickname) + '"></text> <text class="listItemScore" value="' + (item.KVDataList[0].value) + '"></text> <text class="listScoreUnit" value="关"></text> </view> ';
      }
    }
    out += ' </scrollview></view></view>';
    return out;
  }