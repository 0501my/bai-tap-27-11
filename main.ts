import {MenuManager} from "./model/menuManager";
import {DishManager} from "./model/dishManager";


let input = require("readline-sync")
let menuManager = new DishManager()
let cafe = new MenuManager(1, "capuchino", 25000, 'coffee', "thức uống", 2)
let tea = new MenuManager(2, "tra dao", 20000, "tea", "giảm stress", 3)
let juice = new MenuManager(3, "nuosc ep dua hau", 30000, "juice", "hoa quả", 4)
let snacks = new MenuManager(4, "bim bim", 40000, "snacks", "đồ ăn trẻ con", 5)
let cook = new MenuManager(5, "dua bo", 50000, "cook", "cơm rang", 6)

menuManager.add(cafe);
menuManager.add(tea);
menuManager.add(juice);
menuManager.add(snacks);
menuManager.add(cook);
let types = ["coffee", "tea", "juice","snacks","cook"]
function main() {
    let menu = `---------Menu sản phẩm---------
1. hiện danh sách món ăn
2. thêm món ăn theo mã
3. sửa món ăn theo mã
4. xóa món ăn theo mã
5. tìm món ăn theo tên
6. hiện các loại món ăn, chọn và hiện ra các món ăn loại đó
7. sắp xếp món ăn theo giá tăng dần 
8. hiện các loại món ăn, chọn và xóa hết món của loại đó
0. Thoát`
    let choice = -1
    do {
        console.log(menu)
        choice = +input.question(`Enter choice : `)
        switch (choice) {
            case 1:
                show()
                break;
            case 2 :
                addDish()
                break;
            case 3:
                editDish();
                break;
            case 4:
                removeDish()
                break;
            case 5:
                findByNameDish()
                break;
            case 6:
                findByPrice()
                break;
            case 7:
                sortUp()
                break;
            case 8:
                clearType()
                break;
            case 0:
                break;

        }
    } while (choice !== 0)
}

main()

function show() {
    console.log(`-------danh sách món ăn-----`)
    console.log(menuManager.show())
}

function addDish() {
    let id = +input.question(`Enter id : `)
    let dishName = input.question(`Enter dish Name : `)
    let price = input.question(`Enter price : `)
    let typeIndex = +input.question(`Choice type : \n 1. coffee \n 2.tea \n 3.juice \n 4.snack \n 5.cook\n`)
    let type = types[typeIndex -1]
    let describe = input.question(`Enter describe : `)
    let amount = input.question(`Enter amount : `)
    let menu = new MenuManager(id, dishName, price, type, describe, amount)
    menuManager.add(menu)
}
function editDish(){
    let id = +input.question(`Enter id muon sua : `)
    let dishName = input.question(`Enter dish Name : `)
    let price = input.question(`Enter price : `)
    let type = input.question(`Enter type : `)
    let describe = input.question(`Enter describe : `)
    let amount = input.question(`Enter amount : `)
    let menu = new MenuManager(id, dishName, price, type, describe, amount)
    menuManager.edit(id,menu)
}
function removeDish(){
    let id = +input.question(`Enter id muon xoa : `)
    menuManager.remove(id)
}
function findByNameDish(){
    let name = input.question(`nhap ten mon an muon tim : `)
    console.log(menuManager.findByName(name))
}
function findByPrice() {
    console.log(types)
    let type = input.question(`nhap loai muon tim : `)
    console.log( menuManager.findByType(type))
}
function sortUp(){
    console.log(menuManager.sortPriceUp())
}
function clearType() {
    let typeIndex = +input.question(`Choice type : \n 1. coffee \n 2.tea \n 3.juice \n 4.snack \n 5.cook\n`)
    let type2 = types[typeIndex - 1];
    menuManager.removeByType(type2)

}

