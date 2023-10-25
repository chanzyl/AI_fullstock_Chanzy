// 对象
var obj = {
    name: '冷少', // 键值对
    age: 18,
    health: 100,
    smoke: function () {
        console.log('i am smoking, cool!');
        this.health--; // == obj.health--; this只能放在对象里面{}才能生效
    },
    drink: function () {
        console.log('it is cool!');
        obj.health++;
    },

}

// obj.girlFriend = '刘亦菲' // 无则添加，有则修改
// delete obj.girlFriend
obj.smoke()
obj.smoke() 
obj.drink()
console.log(obj.health);