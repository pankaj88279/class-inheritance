class A{
//property
x=20;

//construtor

//mathod
}
class B extends A{

    // 1.property

    y=20;
    // 2.construtor

    // 3.mathod
}
class C extends B{
    // 1.property

    z=20;
    // 2.construtor

    // 3.mathod

}
let obj=new C();
console.log(obj.x+obj.y+obj.z)