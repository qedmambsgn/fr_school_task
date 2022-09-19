let array = [
    {
        orderId: 554,
        creationDate: "2017-03-25T10:35:20", // Saturday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 3, unitPrice: 3.00}
        ]
    },
    {
        orderId: 555,
        creationDate: "2017-03-25T11:24:20", // Saturday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 1, unitPrice: 3.00},
            {productId: 1746, name: 'Eraser', quantity: 1, unitPrice: 1.00}
        ]
    },
    {
        orderId: 453,
        creationDate: "2017-03-27T14:53:12", // Monday
        orderLines: [
            {productId: 5723, name: 'Pen', quantity: 4, unitPrice: 4.22},
            {productId: 9872, name: 'Pencil', quantity: 3, unitPrice: 3.12},
            {productId: 3433, name: 'Erasers Set', quantity: 1, unitPrice: 6.15}
        ]
    },
    {
        orderId: 431,
        creationDate: "2017-03-20T12:15:02", // Monday
        orderLines: [
            {productId: 5723, name: 'Pen', quantity: 7, unitPrice: 4.22},
            {productId: 3433, name: 'Erasers Set', quantity: 2, unitPrice: 6.15}
        ]
    },
    {
        orderId: 690,
        creationDate: "2017-03-26T11:14:00", // Sunday
        orderLines: [
            {productId: 9872, name: 'Pencil', quantity: 4, unitPrice: 3.12},
            {productId: 4098, name: 'Marker', quantity: 5, unitPrice: 4.50}
        ]
    }
];

const map = new Map([
    ["MONDAY", 0],
    ["TUESDAY", 0],
    ["WEDNESDAY", 0],
    ["THURSDAY", 0],
    ["FRIDAY ", 0],
    ["SATURDAY", 0],
    ["SUNDAY", 0]
])
const isBought = (id) => {

    for ( let i = 0; i<array.length; i++ ){
        for (let j = 0; j < array[i].orderLines.length; j++){
            if(array[i].orderLines[j].productId === id){
                let dayOfWeek = new Date(array[i].creationDate).getDay()
                let quantity = array[i].orderLines[j].quantity
                let value = 0;
                switch (dayOfWeek){
                    case 0:
                        value = map.get('SUNDAY')
                        map.set("SUNDAY", quantity+value)
                        break
                    case 1:
                        value = map.get('MONDAY')
                        map.set('MONDAY', quantity+value)
                        break
                    case 2:
                        value = map.get('TUESDAY')
                        map.set("TUESDAY", quantity+value)
                        break
                    case 3:
                        value = map.get('WEDNESDAY')
                        map.set("WEDNESDAY", quantity+value)
                        break
                    case 4:
                        value = map.get('THURSDAY')
                        map.set("THURSDAY", quantity+value)
                        break
                    case 5:
                        value = map.get('FRIDAY')
                        map.set("FRIDAY", quantity+value)
                        break
                    case 6:
                        value = map.get('SATURDAY')
                        map.set("SATURDAY", quantity+value)
                        break
                }
            }
        }
    }
    return map
}

console.log(isBought(9872))