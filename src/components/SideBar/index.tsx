import React,{useState, useMemo} from 'react';
import {Layout, Menu, Icon} from 'antd'
import Route, {useRouter} from 'next/router'
import {TMenuItem} from '../../libs/types/menu'
import MenuData from '../../libs/constant/menu'

const {Sider} = Layout;
const {SubMenu} = Menu;

const selectMenuItem=(
    menu: TMenuItem[], 
    routes: string[],
    result = '/',
    openCumu: string[] = [])=>{
    
    // console.log("in selectMenuItem")
    const firstRoute = routes.shift();
    
    if(firstRoute) {
        
        const idx = menu.find(e=>e.route===firstRoute);
        // console.log("idx="+idx)
        if (idx){
            if (idx.childItem.length > 0){
                openCumu.push(`${result}${idx.route}/`);
                // console.log("openCumu="+openCumu);
            }
            return selectMenuItem(idx.childItem, routes, `${result}${idx.route}/`);
        } else {
            return `${result}${firstRoute}/` 
        }
    } else {
        return result; 
    }
}

const generateMenu=(menu: TMenuItem[], base = '/')=>{
    return menu.map(e=>{
        const route= `${base}${e.route}/`;
        const noTrailingRoute = `${base}${e.route}`;

        if(e.childItem.length == 0) {
            return (
                <Menu.Item key={route} onClick={()=>{Route.push(noTrailingRoute)}}>
                    <span>
                        {e.icon ? <Icon type={e.icon}/>:null}
                        <span>{e.title}</span>
                    </span>
                </Menu.Item>
            )
        } else {
            return (
                <SubMenu key={route}
                    title={<span>
                        {e.icon? <Icon type={e.icon}/>:null}
                        <span>{e.title}</span>
                    </span>}
                    >
                    {generateMenu(e.childItem, route)}
                </SubMenu>
            )
        }
    })
}

export default (props) => {
    const [selected, setSelected] = useState("")
    const [openKey, setOpenKey] = useState<string[]>([]);
    
    const router = useRouter();

    // console.log("route="+router.pathname);

    useMemo(()=>{
    const openCumu : string[] = [];
    const select = router ?
        selectMenuItem(MenuData, router.pathname.split('/').filter(e=>e.length>0), '/', openCumu):
        [''];
    setSelected(select);
    setOpenKey(e=>[...e,...openCumu]);
    }, [router]);

    // console.log("selected="+selected)

    const MenuChild=useMemo(()=>generateMenu(MenuData),[]);
    
    return (
        <Sider collapsed={props.collapsed} onCollapse={props.onCollapse}>
            <Menu 
                theme='dark'
                selectedKeys={[selected]}
                mode='inline'
                openKeys={openKey}
                onOpenChange={e=>{setOpenKey([...e])}}
            >
                {MenuChild}
            </Menu>
        </Sider>        
    )
};