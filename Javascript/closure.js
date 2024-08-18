function outerFn(){
    let outerVar ="I am from outer fn"
    function innerFn(){
        console.log(outerVar)
    }

    return innerFn
}

let fn =outerFn()
fn()