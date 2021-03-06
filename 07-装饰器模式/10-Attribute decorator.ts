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