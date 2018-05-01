import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Todo2 from '@/components/Todo2'
import Todo1 from '@/components/Todo1'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      
    },

    {
      path: '/todo2',
      name: 'Todo2',
      component: Todo2,
      
    },
    {
      path: '/',
      name: 'Todo1',
      component: Todo1,
      
    }

  ]
})
