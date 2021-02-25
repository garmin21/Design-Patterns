/**
 * 工厂设计模式 
 *  简单工厂
 *      美式咖啡 拿铁咖啡 卡布奇诺咖啡
 *          
 *           咖啡工厂创建
 * 
 *              服务员    
 *          
 *               客户
 */

class Coffee{
    public name = '';
    constructor(name:string) {
        this.name = name
    }
}


class AmericanCoffee extends Coffee {}
class latte extends Coffee{}
class Cappuccino extends Coffee{}

class CoffeeFactory {
    static order(name: 'AmericanCoffee' | 'latte' | 'Cappuccino'){
        switch (name) {
            case 'AmericanCoffee':
                return new AmericanCoffee('美式咖啡');
            case 'latte':
                return new latte('拿铁咖啡');
            case 'Cappuccino':
                return new Cappuccino('卡布奇诺咖啡');
            default:
                return null;
        }
    }
}


console.log(CoffeeFactory.order('AmericanCoffee'));
console.log(CoffeeFactory.order('latte'));
console.log(CoffeeFactory.order('Cappuccino'));


/**
 * 优点：根据条件咖啡工厂就会创建对应的咖啡实例
 * 
 * 
 * 缺点：一但有新的咖啡，就需要修改源码，违背了程序设计的开闭原则
 */

