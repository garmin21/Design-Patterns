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

