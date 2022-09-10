class CategoryModel {
    constructor(
        category,
        attendance,
        price,
        totalPrice,
        recipientAmount
    ){
        this.category = category;
        this.attendance = attendance;
        this.price = price;
        this.totalPrice = totalPrice;
        this.recipientAmount = recipientAmount;
    }

    toJson(){
        return {
            category: this.category,
            attendance: this.attendance,
            price: this.price,
            totalPrice: this.totalPrice,
            recipientAmount: this.recipientAmount
        }
    }
}

exports.modules = CategoryModel