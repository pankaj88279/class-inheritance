class A{
    //1properties

    property (){
        console.log('thise property is a ')

    }
    //2 construtor
    constructor(){
        console.log('thise construtor b')
    }
    //3 method
   mathod(){
    console.log('thise mathod is c')
   }
}

class B extends A{
//1.property
 first(){
    console.log('class first')
 }

//2.constrotur
second(){
    console.log('class second')
}

//3.mathod
thierd(){
    console.log('class thierd')
}

}
let obj=new B();
let objA=new A();
obj.thierd()
obj.second()
obj.first()