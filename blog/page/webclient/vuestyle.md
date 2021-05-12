<p style="text-align:center;">vue风格指南笔记</p>
=

[toc]

## 1、优先级 A：必要的(规避错误)

### 1、组件名为多个单词
**组件名应该始终是多个单词的，根组件 App 以及 \<transition>、\<component> 之类的 Vue 内置组件除外。**
这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。
### 2、组件数据
**组件的 data 必须是一个函数。**
当在组件中使用 data 属性的时候 (除了 new Vue 外的任何地方)，它的值必须是返回一个对象的函数。
### 3、Prop 定义
**Prop 定义应该尽量详细。**
在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。
```js
props: {
  status: String
}
// 更好的做法！
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}
```
## 4、为 v-for 设置键值
**总是用 key 配合 v-for。**
在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态。甚至在元素上维护可预测的行为，比如动画中的对象固化 (object constancy)，也是一种好的做法。
```html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
##5、避免 v-if 和 v-for 用在一起
**永远不要把 v-if 和 v-for 同时用在同一个元素上。**
一般我们在两种常见的情况下会倾向于这样做：
* 为了过滤一个列表中的项目 (比如 v-for="user in users" v-if="user.isActive")。在这种情形下，请将 users 替换为一个计算属性 (比如 activeUsers)，让其返回过滤后的列表。

* 为了避免渲染本应该被隐藏的列表 (比如 v-for="user in users" v-if="shouldShowUsers")。这种情形下，请将 v-if 移动至容器元素上 (比如 ul, ol)。

```html
<ul>
  <li
    v-for="user in activeUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>
```
## 6、为组件样式设置作用域
**对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。**

这条规则只和单文件组件有关。你不一定要使用 scoped attribute。设置作用域也可以通过 CSS Modules，那是一个基于 class 的类似 BEM 的策略，当然你也可以使用其它的库或约定。

**不管怎样，对于组件库，我们应该更倾向于选用基于 class 的策略而不是 scoped attribute。**

这让覆写内部样式更容易：使用了常人可理解的 class 名称且没有太高的选择器优先级，而且不太会导致冲突。

```html
<template>
  <button class="button button-close">X</button>
</template>

<!-- 使用 `scoped` attribute -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>
```
```html
<template>
  <button :class="[$style.button, $style.buttonClose]">X</button>
</template>

<!-- 使用 CSS Modules -->
<style module>
.button {
  border: none;
  border-radius: 2px;
}

.buttonClose {
  background-color: red;
}
</style>
```
```html
<template>
  <button class="c-Button c-Button--close">X</button>
</template>

<!-- 使用 BEM 约定 -->
<style>
.c-Button {
  border: none;
  border-radius: 2px;
}

.c-Button--close {
  background-color: red;
}
</style>
```
### 7、私有属性名
**使用模块作用域保持不允许外部访问的函数的私有性。如果无法做到这一点，就始终为插件、混入等不考虑作为对外公共 API 的自定义私有属性使用 \$_ 前缀。并附带一个命名空间以回避和其它作者的冲突 (比如 $\_yourPluginName_)。**

```js
var myGreatMixin = {
  // ...
  methods: {
    $_myGreatMixin_update: function () {
      // ...
    }
  }
}
```
```js
// 甚至更好！
var myGreatMixin = {
  // ...
  methods: {
    publicMethod() {
      // ...
      myPrivateFunction()
    }
  }
}

function myPrivateFunction() {
  // ...
}

export default myGreatMixin
```
## 2、优先级 B 的规则：强烈推荐 (增强可读性)
### 1、组件文件
**只要有能够拼接文件的构建系统，就把每个组件单独分成文件。**
当你需要编辑一个组件或查阅一个组件的用法时，可以更快速的找到它。

```sh
components/
|- TodoList.js
|- TodoItem.js
```

```sh
component
|- TodoList.vue
|- TodoItem.vue
```
### 2、单文件组件文件的大小写
**单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。**

```sh
components/
|- MyComponent.vue
```
```sh
components/
|- my-component.vue
```
### 3、基础组件名
**应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V。**
```sh
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue
```
```sh
components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue
```
```sh
components/
|- VButton.vue
|- VTable.vue
|- VIcon.vue
```
### 4、单例组件名
**只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性。**
这不意味着组件只可用于一个单页面，而是每个页面只使用一次。这些组件永远不接受任何 prop，因为它们是为你的应用定制的，而不是它们在你的应用中的上下文。如果你发现有必要添加 prop，那就表明这实际上是一个可复用的组件，_只是目前在每个页面里只使用一次_。
```sh
components/
|- TheHeading.vue
|- TheSidebar.vue
```
### 5、紧密耦合的组件名
**和父组件紧密耦合的子组件应该以父组件名作为前缀命名。**
```sh
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue
```
```sh
components/
|- SearchSidebar.vue
|- SearchSidebarNavigation.vue
```
### 6、组件名中的单词顺序
**组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。**
```sh
components/
|- SearchButtonClear.vue
|- SearchButtonRun.vue
|- SearchInputQuery.vue
|- SearchInputExcludeGlob.vue
|- SettingsCheckboxTerms.vue
|- SettingsCheckboxLaunchOnStartup.vue
```
### 7、自闭合组件
**在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。**
```html
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent/>
```
```html
<!-- 在 DOM 模板中 -->
<my-component></my-component>
```
### 8、模板中的组件名大小写
**对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 PascalCase 的——但是在 DOM 模板中总是 kebab-case 的。**
```html
<!-- 在单文件组件和字符串模板中 -->
<MyComponent/>
```
```html
<!-- 在 DOM 模板中 -->
<my-component></my-component>
```

### 9、JS/JSX 中的组件名大小写
**JS/JSX 中的组件名应该始终是 PascalCase 的，尽管在较为简单的应用中只使用 Vue.component 进行全局组件注册时，可以使用 kebab-case 字符串。**
```js
Vue.component('MyComponent', {
  // ...
})
```
```js
Vue.component('my-component', {
  // ...
})
```
```js
import MyComponent from './MyComponent.vue'
export default {
  name: 'MyComponent',
  // ...
}
```
### 10、完整单词的组件名
**组件名应该倾向于完整单词而不是缩写。**
```sh
components/
|- StudentDashboardSettings.vue
|- UserProfileOptions.vue
```
### 11、Prop 名大小写
**在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX 中应该始终使用 kebab-case。**
```js
props: {
  greetingText: String
}
```
```html
<WelcomeMessage greeting-text="hi"/>
```
### 12、多个 attribute 的元素
**多个 attribute 的元素应该分多行撰写，每个 attribute 一行。**

```html
<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
>
```
```html
<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>
```
### 13、模板中简单的表达式
**组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。**
```html
<!-- 在模板中 -->
{{ normalizedFullName }}
```
```html
// 复杂表达式已经移入一个计算属性
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```
### 14、简单的计算属性
**应该把复杂计算属性分割为尽可能多的更简单的属性。**
```html
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}
```
### 15、带引号的 attribute 值
**非空 HTML attribute 值应该始终带引号 (单引号或双引号，选你 JS 里不用的那个)。**
```html
<input type="text">
```
```html
<AppSidebar :style="{ width: sidebarWidth + 'px' }">
```
### 16、指令缩写

**指令缩写 (用 : 表示 v-bind: 、用 @ 表示 v-on: 和用 # 表示 v-slot:) 应该要么都用要么都不用。**
```html
<input
  :value="newTodoText"
  :placeholder="newTodoInstructions"
>
```
```html
<input
  v-bind:value="newTodoText"
  v-bind:placeholder="newTodoInstructions"
>
```
```html
<input
  @input="onInput"
  @focus="onFocus"
>
```
```html
<input
  v-on:input="onInput"
  v-on:focus="onFocus"
>
<template v-slot:header>
  <h1>Here might be a page title</h1> 
</template>

<template v-slot:footer>
  <p>Here's some contact info</p>
</template>
```
```html
<template #header>
  <h1>Here might be a page title</h1> 
</template>

<template #footer>
  <p>Here's some contact info</p>
</template>
```
## 3、优先级 C 的规则：推荐 (将选择和认知成本最小化)
### 1、组件/实例的选项的顺序
**组件/实例的选项应该有统一的顺序。**
这是我们推荐的组件选项默认顺序。它们被划分为几大类，所以你也能知道从插件里添加的新属性应该放到哪里。

- 1、副作用 (触发组件外的影响)
  - el
- 2、全局感知 (要求组件以外的知识)
  - name
  - parent
- 3、组件类型 (更改组件的类型)
  - functional
- 4、模板修改器 (改变模板的编译方式)
  - delimiters
  - comments
- 5、模板依赖 (模板内使用的资源)
  - components
  - directives
  - filters
- 6、组合 (向选项里合并属性)
  - extends
  - mixins
- 7、接口 (组件的接口)
  - inheritAttrs
  - model
  - props/propsData
- 8、本地状态 (本地的响应式属性)
  - data
  - computed
- 9、事件 (通过响应式事件触发的回调)
  - watch
  - 生命周期钩子 (按照它们被调用的顺序)
    - beforeCreate
    - created
    - beforeMount
    - mounted
    - beforeUpdate
    - updated
    - activated
    - deactivated
    - beforeDestroy
    - destroyed
- 10、非响应式的属性 (不依赖响应系统的实例属性)
   - methods
- 11、渲染 (组件输出的声明式描述)
   - template/render
   - renderError

### 2、元素 attribute 的顺序
**元素 (包括组件) 的 attribute 应该有统一的顺序。**
这是我们为组件选项推荐的默认顺序。它们被划分为几大类，所以你也能知道新添加的自定义 attribute 和指令应该放到哪里。
- 1、定义 (提供组件的选项)
  - is
- 2、列表渲染 (创建多个变化的相同元素)
  - v-for
- 3 、条件渲染 (元素是否渲染/显示)
  - v-if
  - v-else-if
  - v-else
  - v-show
  - v-cloak
- 4、渲染方式 (改变元素的渲染方式)
  - v-pre
  - v-once
- 5、全局感知 (需要超越组件的知识)
  - id
- 6、唯一的 attribute (需要唯一值的 attribute)
  - ref
  - key
- 7、双向绑定 (把绑定和事件结合起来)
  - v-model
- 8、其它 attribute (所有普通的绑定或未绑定的 attribute)
- 9、事件 (组件事件监听器)
  - v-on
- 10、内容 (覆写元素的内容)
  - v-html
  - v-text
### 3、组件/实例选项中的空行
你可能想在多个属性之间增加一个空行，特别是在这些选项一屏放不下，需要滚动才能都看到的时候。
```js
props: {
  value: {
    type: String,
    required: true
  },

  focused: {
    type: Boolean,
    default: false
  },

  label: String,
  icon: String
},

computed: {
  formattedValue: function () {
    // ...
  },

  inputClasses: function () {
    // ...
  }
}
```
```js
// 没有空行在组件易于阅读和导航时也没问题。
props: {
  value: {
    type: String,
    required: true
  },
  focused: {
    type: Boolean,
    default: false
  },
  label: String,
  icon: String
},
computed: {
  formattedValue: function () {
    // ...
  },
  inputClasses: function () {
    // ...
  }
}
```
### 4、单文件组件的顶级元素的顺序
**单文件组件应该总是让 \<script>、\<template> 和 \<style> 标签的顺序保持一致。且 \<style> 要放在最后，因为另外两个标签至少要有一个。**
```html
<!-- ComponentA.vue -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>

<!-- ComponentB.vue -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>
```
```html
<!-- ComponentA.vue -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>

<!-- ComponentB.vue -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```
## 4、优先级 D 的规则：谨慎使用 (有潜在危险的模式)
### 1、没有在 v-if/v-else-if/v-else 中使用 key
**如果一组 v-if + v-else 的元素类型相同，最好使用 key (比如两个 <div> 元素)。**
```html
<div
  v-if="error"
  key="search-status"
>
  错误：{{ error }}
</div>
<div
  v-else
  key="search-results"
>
  {{ results }}
</div>
```
### 2、scoped 中的元素选择器
**元素选择器应该避免在 scoped 中出现。**
在 scoped 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。
```html
<template>
  <button class="btn btn-close">X</button>
</template>

<style scoped>
.btn-close {
  background-color: red;
}
</style>
```
### 3、隐性的父子组件通信
**应该优先通过 prop 和事件进行父子组件之间的通信，而不是 this.$parent 或改变 prop。**

一个理想的 Vue 应用是 prop 向下传递，事件向上传递的。遵循这一约定会让你的组件更易于理解。然而，在一些边界情况下 prop 的变更或 this.$parent 能够简化两个深度耦合的组件。

问题在于，这种做法在很多简单的场景下可能会更方便。但请当心，不要为了一时方便 (少写代码) 而牺牲数据流向的简洁性 (易于理解)。
```js
Vue.component('TodoItem', {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  template: `
    <input
      :value="todo.text"
      @input="$emit('input', $event.target.value)"
    >
  `
})
```
```js
Vue.component('TodoItem', {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  template: `
    <span>
      {{ todo.text }}
      <button @click="$emit('delete')">
        X
      </button>
    </span>
  `
```
### 4、非 Flux 的全局状态管理
**应该优先通过 Vuex 管理全局状态，而不是通过 this.$root 或一个全局事件总线。**

通过 this.$root 和/或全局事件总线管理状态在很多简单的情况下都是很方便的，但是并不适用于绝大多数的应用。Vuex 提供的不仅是一个管理状态的中心区域，还是组织、追踪和调试状态变更的好工具。
```js
// store/modules/todos.js
export default {
  state: {
    list: []
  },
  mutations: {
    REMOVE_TODO (state, todoId) {
      state.list = state.list.filter(todo => todo.id !== todoId)
    }
  },
  actions: {
    removeTodo ({ commit, state }, todo) {
      commit('REMOVE_TODO', todo.id)
    }
  }
}
```
```html
<!-- TodoItem.vue -->
<template>
  <span>
    {{ todo.text }}
    <button @click="removeTodo(todo)">
      X
    </button>
  </span>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: mapActions(['removeTodo'])
}
</script>
```