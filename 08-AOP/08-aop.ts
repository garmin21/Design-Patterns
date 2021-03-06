/**
 * 埋点: 在目标之前发生叫 before , 在目标发生之后叫 after。
 */


// 开始碎觉之前
function before(beforeFn: Function) {
    return function(target:any, methodName: any, desc: any) {
        const oldFn = desc.value; // 缓存老的函数
        desc.value = function (...args: any[]) {
            beforeFn();
            return oldFn.apply(this, ...args)
        }
    }
}


// 开始碎觉之后
function after(afterFn: Function) {
    return function(target:any, methodName: any, desc: any) {
        const oldFn = desc.value;
        desc.value = function() {
            oldFn.apply(this,arguments);
            const res = afterFn.apply(this, arguments);
            return res
        }
    }
}


class Person {

    // 你有一个碎觉的行为
    @before(() => {console.log('睡觉之前我先要洗漱')})
    @after(() => {console.log('碎觉了我在看会手机')})
    public sleep() {
        console.log('开始碎觉啦，晚安')
    }
}

const p = new Person();

p.sleep();