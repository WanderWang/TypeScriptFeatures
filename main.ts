import * as immutable from 'immutable';

var map = immutable.Map<immutable.Map<string, string>>({})
var c = map.get("xxx").get("yyy")


type User = {

    hero: Hero,

    a: string,

    heros: Hero[]

}

type Address = {

    zipcode: string;

    location: string;
}

type Hero = {

    name: string;

    weapon: number;
}


var u: User;



class Config<T> {

    constructor(private data: T) {


    }

    value(): T {
        return this.data;
    }


    get<A extends keyof T, B extends keyof T[A]>(a: A, b: B) {
        return new Config(this.data[a][b]);
    }

    get2<A extends keyof T>(a: A): Config<T[A]> {
        return new Config(this.data[a]);
    }
}




function create<T>(a: T): Config<T> {
    return new Config(a);
}

var config = create(u);

var t1 = config.get("hero", "weapon")
var t2 = config.get2("hero").get2("name")
var t3 = config.get2("heros").value()