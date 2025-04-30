import { Observable, ObservableArray } from '@nativescript/core';

interface menuItem {
    name: string,
    description: string,
    price: number
}

interface menuDay {
    day: string,
    items: menuItem[]
}

const meatPie: menuItem = {
    name: "Dario's Meat Pie",
    description: "Savory meatpie ordered from Dario's.",
    price: 2.25
};

const friedChicken: menuItem = {
    name: "Fried Chicken",
    description: "Fried chicken with fries.",
    price: 8.00
};

const barbecuePlate: menuItem = {
    name: "BBQ Plate",
    description: "BBQ chicken or pork with a side (e.g., coleslaw or potato salad).",
    price: 12.00
};

const jamaicanPattyBeef: menuItem = {
    name: "Jamaican Beef Patty",
    description: "Spicy beef filling in a golden flaky crust.",
    price: 2.25
};

const hotPocketHamCheese: menuItem = {
    name: "Hot Pocket (Ham & Cheese)",
    description: "Microwaveable hotpocket filled with ham and cheese.",
    price: 3.00
};

const pizzaSlice: menuItem = {
    name: "Pizza Slice (Pepperoni or Cheese)",
    description: "A slice of pepperoni or cheese pizza.",
    price: 3.50
};

const naturalJuiceWatermelon: menuItem = {
    name: "Natural Juice (Watermelon)",
    description: "Sweet and refreshing juice made from fresh watermelon.",
    price: 1.25
};

const naturalJuiceLime: menuItem = {
    name: "Natural Juice (Lime)",
    description: "Refreshing homemade lime juice.",
    price: 1.25
};

const naturalJuiceCoconut: menuItem = {
    name: "Natural Juice (Coconut)",
    description: "Cool and hydrating coconut water.",
    price: 1.25
};

const naturalJuiceTamarind: menuItem = {
    name: "Natural Juice (Tamarind)",
    description: "Sweet and tangy tamarind juice.",
    price: 1.25
};

export class CafeteriaMenuViewModel extends Observable {
    public menu: ObservableArray<menuDay>;

    constructor() {
        super();
        this.menu = new ObservableArray<menuDay>();
        this.loadMenuData();
        this.notifyPropertyChange("menu", this.menu);
    }

    private loadMenuData() {
        const mondayMenu: menuDay = {
            day: "Monday",
            items: [
                friedChicken,
                meatPie,
                naturalJuiceWatermelon,
                naturalJuiceLime,
                naturalJuiceCoconut
            ]
        };

        const tuesdayMenu: menuDay = {
            day: "Tuesday",
            items: [
                barbecuePlate,
                jamaicanPattyBeef,
                naturalJuiceLime,
                naturalJuiceTamarind,
                naturalJuiceWatermelon
            ]
        };

        const wednesdayMenu: menuDay = {
            day: "Wednesday",
            items: [
                pizzaSlice,
                hotPocketHamCheese,
                naturalJuiceCoconut,
                naturalJuiceLime,
                naturalJuiceTamarind
            ]
        };

        const thursdayMenu: menuDay = {
             day: "Thursday",
             items: [
                 friedChicken,
                 barbecuePlate,
                 naturalJuiceWatermelon,
                 naturalJuiceCoconut,
                 naturalJuiceLime
             ]
         };

         const fridayMenu: menuDay = {
             day: "Friday",
             items: [
                 meatPie,
                 jamaicanPattyBeef,
                 pizzaSlice,
                 naturalJuiceTamarind,
                 naturalJuiceWatermelon,
                 naturalJuiceCoconut
             ]
         };

        this.menu.push(mondayMenu);
        this.menu.push(tuesdayMenu);
        this.menu.push(wednesdayMenu);
        this.menu.push(thursdayMenu);
        this.menu.push(fridayMenu);
    }
}