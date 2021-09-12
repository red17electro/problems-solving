// lookup
// insert 
// delete 

class Hashtable {

    table = [];

    constructor(){
    }


    setValue(key, value){
        const hashKey = this.hashFunc(key);
        this.table[hashKey] = value;
    }

    hashFunc(key) {
        var hash = 0;
        for (let i = 0; i < key.length; i++) {
          const chr = key.charCodeAt(i);
          hash  = ((hash << 5) - hash) + chr;
          hash |= 0; // Convert to 32bit integer
        }
        console.log(hash);
        return hash;
      };

    getValue(key) {
        const hashKey = this.hashFunc(key);
        return this.table[hashKey];
    }

}

console.log(1 << 5)
console.log('ben'.charCodeAt(0))

const ht = new Hashtable();

ht.setValue('firstName', 'world');
ht.getValue('hello')
ht.setValue('lastName', 'tim');

console.log(ht.getValue('lastName'));