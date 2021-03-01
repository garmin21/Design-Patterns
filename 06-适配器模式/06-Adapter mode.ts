/**
 * 适配器模式:
 *  适配器模式又称包装器模式将一个类的接口转化为用户需要的另一个接口，用于解决类
 * (对象)之间接口不兼容问题。
 */



// 以生活举例：电源插座：家用电压是220v ，然后某种电器他所适配的电压是80v ， 
// 这个就 需要通过一个, 适配器，帮助我们转化电压。


// 需要适配的插座

class Socket {
    output() {
        return '220v';
    }
}

// 适配器

class Adapter{
    public socket:any;
    constructor(socket: Socket){
        this.socket = socket
    }

    /**
     * 转化
     */
    transform() {
        /**
         * 经过一系列的操作，将电流转为 80v
         */
        const res = this.socket.output();
        return res === '220v' ? '80v' : '220v';
    }
}


// 使用

const a = new Adapter(new Socket);

console.log(a.transform());