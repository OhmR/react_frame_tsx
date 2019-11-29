import {TMenuItem} from '../types/menu'

const Menu: TMenuItem[]=[
    {
        title: '选项1',
        key: 'Option1',
        route: 'Option1',
        icon: 'pie-chart',
        childItem: []
    },
    {
        title: '选项2',
        key: 'Option2',
        route: 'Option2',
        icon: 'desktop',
        childItem: []
    },
    {
        title: '用户',
        key: 'user',
        route: 'user',
        icon: 'user',
        childItem: [
            {
                title: 'Tom',
                key: 'user1',
                route: 'user1',
                childItem: []
            },
            {
                title: 'Bill',
                key: 'user2',
                route: 'user2',
                childItem: []
            },
            {
                title: 'Alex',
                key: 'user3',
                route: 'user3',
                childItem: []
            },
        ]
    },
    {
        title:"文件",
        key:'file',
        route:'file',
        icon:"file",
        childItem:[]
    }
];

export default Menu;