import {test as b} from './modb'

export function test(){
    document.querySelector('.a').innerHTML = "Hello Vue1"
}
export function test1(){
    document.querySelector('.c').innerHTML = "Hello Vue3"
    b()
}

