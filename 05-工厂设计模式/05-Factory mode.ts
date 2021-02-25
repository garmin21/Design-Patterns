/**
 * 工厂模式
 *     由对应的工厂创建对应的咖啡
 */

abstract class coffee {
    public name = '';
    constructor(name: string) {
        this.name = name;
    }
}

class AmericanCoffees extends Coffee {};
class lattes extends Coffee {};
class Cappuccinos extends Coffee {};

abstract class CoffeeFactorys {
    constructor(name: string) {}
}

class AmericanCoffeesFactory{
    createdCoffee() {
        return new AmericanCoffees('美式咖啡')
    }
}

class lattesFactory{
    createdCoffee() {
        return new lattes('拿铁咖啡')
    }
}

class CappuccinosFactory{
    createdCoffee() {
        return new Cappuccinos('卡布奇诺咖啡')
    }
}


/**
 * 服务员
 */
class Waiter{
    static order(name: 'AmericanCoffee' | 'latte' | 'Cappuccino'){
        switch (name) {
            case 'AmericanCoffee':
                return new AmericanCoffeesFactory().createdCoffee();
            case 'Cappuccino':
                return new CappuccinosFactory().createdCoffee();
            case 'latte':
                return new lattesFactory().createdCoffee();
            default:
                return null;
        }
    }
}


/**
 * 这个工厂和简单工厂区别不是很大
 */