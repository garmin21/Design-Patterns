## 装饰器模式
1. 在不改变其原有的结构和功能为对象添加新功能的模式其实就叫做装饰器模式
2. 举例就是新房建好后的装修
3. 装饰比继承更加灵活，可以实现装饰者和被装饰者之间的松耦合
4. 被装饰者可以使用装饰者动态地增加和撤销功能
5. 装饰器是一种特殊的类型声明，它能被附加到类的声明、方法、属性或参数上，可以修改类的行为
6. 常见的装饰器有类装饰器，属性装饰器，方法装饰器，参数装饰器
7. 装饰器的写法分为普通装饰器和装饰器工厂


## 装饰器
```ts

/**
 * 简单了解装饰器: 书写一个画板，可以画圆--画矩形
 */

// 定义一个形状接口
export interface Shape{
    draw(): void
}

// 定义两个形状
class round implements Shape{
    draw(){
        return '绘制了一个圆'
    }
}
class Rectangle implements Shape{
    draw(){
        return `绘制了一个矩形`
    }
}


// 定义一个有颜色的装饰器形状
abstract class ColorShape{
    constructor(public shape: Shape){}
    abstract draw(): void
}

// 定义两个颜色

class RedShape extends ColorShape{
    draw(){
        return `${this.shape.draw()}添加颜色红色`
    }
}

class GreenShape extends ColorShape{

    draw() {
        return `${this.shape.draw()}添加颜色绿色`
    }
}

// 使用
console.log(new GreenShape(new round()).draw());
console.log(new RedShape(new Rectangle()).draw());
;


```

## 类装饰器

```ts
// 类装饰器
namespace c {
    interface Person{
        cat: Function,
        www: string
    }
    
    function log(object: Function) {
        console.log('Function Person', object);
        object.prototype.cat = function() {
            console.log('碎觉');
        }
        object.prototype.www = '类装饰器';
    }
    
    @log
    class Person{
        constructor(){}
    }
    
    
    const p: Person = new Person();
    
    console.log(p.www)
    p.cat();
}


```


## 传递参数


```ts

// 装饰器工厂
namespace b {
    interface Person {
        cat: Function,
        www: string
    }

    function log(aims: string) {
        return function (object: Function) {
            console.log('Function Person', object);
            object.prototype.cat = function () {
                console.log('碎觉');
            }
            object.prototype.www = aims;
        }
    }



    @log('我是一只小喵咪')
    class Person {
        constructor() { }
    }


    const p: Person = new Person();

    console.log(p.www)
    p.cat();
}

```


## 属性装饰器

```ts

// 属性装饰器
namespace G {

    // 装饰静态属性

    function ageStaticDecorator(target: any, key: any) {
        console.log(`类的构造函数 : ${target}`, `装饰的属性名 : ${key}`)
    }

    // 装饰实例属性

    function nameDecorator(target:any, key: any) {
        console.log(`类的原型: ${target}`,`装饰的属性名 : ${key}`)
    }


    // 装饰静态方法


    function showStaticDecorator(target:any, key: any, desc: any){
        console.log(`类的构造函数: ${target}, 方法名: ${key}, 属性描述符: ${desc}`)
    }


    // 装饰实例方法

    function runDecorator(target:any, key: any, desc: any){
        console.log(`类的原型: ${target}, 方法名: ${key}, 属性描述符: ${desc}`)
    }



    class Person {

        @ageStaticDecorator // 3
        static age:number;

        @nameDecorator // 1
        public name: string | undefined;

        @showStaticDecorator // 4
        static show() {
            console.log('开门')
        }
        @runDecorator // 2
        public run() {
            console.log(`跑步`)
        }
    }

}


// 执行步骤分别是 实例属性，实例方法 在然后到 静态属性，静态方法
```


## example

```ts
// 书写俩个例子装饰器


// 只读属性装饰器
function readonly(target: any, keyName: string) {
    Object.defineProperty(target, keyName, {
        writable: false // 修改属性为只读的
    })
}


// 警告装饰器

function smokesDesc(target:any, key:any, desc: any) {
    let oldFn = desc.value;
    desc.value = function(...args: any[]) {
        const message = `警告信息: 类名${target.constructor.name} 方法名${key}`;
        console.warn(message);
        return oldFn(...args)
    }
}

// 只读

class Father {

    @readonly
    public money!: number;

    @smokesDesc
    public smokes() {
        console.log('抽烟')
    }
}

const f = new Father();

f.smokes()


```