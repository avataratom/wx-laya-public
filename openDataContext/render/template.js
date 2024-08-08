const template = `
<view class="container" id="main">
<view class="header">
  <text font="fnt_number-export" class="title" value="排行榜"></text>
</view>
<view class="tabs">
  <text class="tab1" font="fnt_number-export" value="战力排行榜"></text>
  <text class="tab2" font="fnt_number-export" value="得分排行榜"></text>
  <text class="tab3" font="fnt_number-export" value="综合排行榜"></text>
</view>
<view class="rankList">
      <scrollview class="list" scrollY="true">
          {{~it.demoData :item:index}}
              {{? index % 2 === 1 }}
              <view class="listItem listItemOld">
              {{?}}
              {{? index % 2 === 0 }}
              <view class="listItem">
              {{?}}
                  <text font="fnt_number-export" class="listItemNum" value="{{= index + 1}}"></text>
                  <image class="listHeadImg" src="{{= item.avatarUrl }}"></image>
                <text class="listItemName" value="{{= item.nickname}}"></text>
                <text class="listItemScore" value="{{= item.rankScore}}"></text>
                <text class="listScoreUnit" value="关"></text>
              </view>
          {{~}}
      </scrollview>
      <text class="listTips" value="仅展示前 '+ (it.demoData.length) +' 位好友排名"></text>

      <view class="listItem selfListItem">
          <text font="fnt_number-export" class="listItemNum" value="{{= it.selfIndex}}"></text>
          <image class="listHeadImg" src="{{= it.self.avatarUrl }}"></image>
          <text class="listItemName" value="{{= it.self.nickname}}"></text>
          <text class="listItemScore" value="{{= it.self.rankScore}}"></text>
          <text class="listScoreUnit" value="分"></text>
      </view>
  </view>
</view>
`;