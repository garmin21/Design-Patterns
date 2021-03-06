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

