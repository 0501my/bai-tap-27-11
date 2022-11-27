import {MenuManager} from "./menuManager";

export class DishManager {
    listDish: MenuManager[] = []

    add(menu: MenuManager): void {
        this.listDish.push(menu)
    }

    edit(id: number, t: MenuManager): void {
        let index = this.findById(id)
        if (index === -1) {
            console.log(`không có`)
        } else {
            this.listDish[index] = t;
        }
    }

    findById(id: number) {
        for (let i = 0; i < this.listDish.length; i++) {
            if (id === this.listDish[i].id) {
                return i
            }
        }
        return -1
    }

    remove(id: number): void {
        let index = this.findById(id)
        if (index === -1) {
            console.log(`không có món ăn này`)
        } else {
            this.listDish.splice(index, 1)
        }
    }

    findByType(type: string) {
        // let result = this.listDish.filter(dish => dish.type == type)
        // return result
        return this.listDish.filter(element => element.type.toLowerCase().includes(type.toLowerCase()))
    }

    findByName(t: string) {
        return this.listDish.filter(element => element.dishName.toLowerCase().includes(t.toLowerCase()))
    }

    sortPriceUp() {
        let result = this.listDish.slice().sort((a, b) => a.price - b.price)
        return result
    }

    show(): MenuManager[] {
        return this.listDish;
    }

    findByIndex(index: number): MenuManager {
        return this.listDish[index];
    }

    removeByType(type: string) {
         this.listDish = this.listDish.filter(element => element.type != type)
    }

}