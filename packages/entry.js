import '../packages/style/stylesheets/base.less'
import 'mint-ui/lib/style.css';
import Button from '../packages/button'
import Actionsheet from '../packages/actionsheet'
import Checklist from '../packages/checklist'
import Switch from '../packages/switch'
import Radio from '../packages/radio'
import Filed from '../packages/field'
import Header from '../packages/header'
import Navbar from '../packages/navbar'
import Toast from '../packages/toast'
import Indicator from '../packages/indicator'
import MessageBox from '../packages/messagebox'
import Popup from '../packages/popup'
import Swipe from '../packages/swipe'
import SwipeItem from '../packages/swipe-item'
import Tabbar from '../packages/tabbar'
import TabItem from '../packages/tab-item'

const install = function (Vue) {
    if (install.installed) return
    Vue.component(Button.name, Button)
    Vue.component(Actionsheet.name, Actionsheet)
    Vue.component(Checklist.name, Checklist)
    Vue.component(Switch.name, Switch)
    Vue.component(Radio.name, Radio)
    Vue.component(Filed.name, Filed)
    Vue.component(Header.name, Header)
    Vue.component(Navbar.name, Navbar)
    Vue.component(Popup.name, Popup)
    Vue.component(Swipe.name, Swipe)
    Vue.component(SwipeItem.name, SwipeItem)
    Vue.component(Tabbar.name, Tabbar)
    Vue.component(TabItem.name, TabItem)

    // Vue.use(Toast)
    // Vue.use(Indicator);
    // Vue.use(MessageBox);
    Vue.$messagebox = Vue.prototype.$messagebox = MessageBox;
    Vue.$toast = Vue.prototype.$toast = Toast;
    Vue.$indicator = Vue.prototype.$indicator = Indicator;
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

module.exports = {
    install,
    Button,
    Actionsheet,
    Checklist,
    Switch,
    Radio,
    Filed,
    Header,
    Navbar,
    Toast,
    Indicator,
    MessageBox,
    Popup,
    Swipe,
    SwipeItem,
    Tabbar,
    TabItem
}
