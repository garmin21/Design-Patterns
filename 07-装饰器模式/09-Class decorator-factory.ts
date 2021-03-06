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