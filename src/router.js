import homepage from "./views/homepage.vue"
import aboutpage from "./views/aboutpage.vue"
import counter from "./views/counter.vue"

export const routes =[
    {
        path :'/',
        component: homepage,
    },

    {
        path :'/aboutpage',
        component: aboutpage,
    },

    {
        path :'/counter',
        component: counter,
    },
]