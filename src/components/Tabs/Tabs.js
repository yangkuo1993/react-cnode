import React,{Component} from 'react'
import { Tabs, WhiteSpace, Badge,List,Icon } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;
const tabs = [
  { title: <Badge>First Tab</Badge> },
  { title: <Badge>Second Tab</Badge> },
  { title: <Badge>Third Tab</Badge> },
  { title: <Badge>Four</Badge> },
];
class TabBar extends Component{
  render(){
    return(
      <div>
        <Tabs tabs={tabs}
              initialPage={0}
              onChange={(tab, index) => { console.log('onChange', index, tab); }}
              onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <List className="my-list">
            <Item extra="10:30" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
              Title <Brief>subtitle</Brief>
            </Item>
          </List>
          <Icon type={'loading'} size={'1000'}/>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of third tab
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            Content of four tab
          </div>
        </Tabs>
        <WhiteSpace />
      </div>
    )
  }
}
export default TabBar