import React from 'react'
import {SettingOutlined} from '@ant-design/icons'
import { Dropdown, Space } from 'antd';
import { Threedot } from '@/icon/icon';
const DropdownmenuOption = () => {
    const items = [
        {
          key: '1',
          label: 'My Account',
          disabled: true,
        },
        {
          type: 'divider',
        },
        {
          key: '2',
          label: 'Profile',
          extra: '⌘P',
        },
        {
          key: '3',
          label: 'Billing',
          extra: '⌘B',
        },
        {
          key: '4',
          label: 'Settings',
          icon: <SettingOutlined />,
          extra: '⌘S',
        },
      ];
      const Dropdownmenu = () => (
        <Dropdown
          menu={{
            items,
          }}
          placement="bottomRight"
          arrow
        >
          {/* <a onClick={(e) => e.preventDefault()}> */}
            <Space>
              <Threedot />
            </Space>
          {/* </a> */}
        </Dropdown>
      );
    
    //dropdown end
  return (
 <div>
    <Dropdownmenu />
 </div>
) 
}

export default DropdownmenuOption