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
