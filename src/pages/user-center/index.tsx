import { useLoad } from '@tarojs/taro'
import './index.scss'

export default function UserCenter() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <view className='user-center'>
      <view className='user-center-header'>
        <view className="user-avatar">
        </view>
        <text className="user-name">sloth</text>
      </view>
      <view className="content-wrapper">
        <view className="order-group">
          <view
            className="order-group__header"
          >
            <text className="my-order-label">
              我的订单
            </text>
            <view className="all-order">
              <text>全部订单</text>
            </view>
          </view>
          <view className="order-group-content">
          </view>
        </view>
        <view>
        </view>
      </view>
    </view>
  )
}
