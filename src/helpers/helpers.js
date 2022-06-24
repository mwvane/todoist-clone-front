export default class Helpers {
    static getID(array) {
        let id = 0;
        for (let item of array) {
            if (item.id > id) {
                id = item.id
            }
        }
        return id + 1
    }

    static findIndexById(id, array) {
        return array.findIndex(item => item.id === id)
    }

    static getItemById(id, array) {
        return array.find(item => item.id === id)
    }

    static saveToStorage(key, val) {
        localStorage.setItem(key, JSON.stringify(val))
    }

    // static readFromStorage(key) {
    //     let data = localStorage.getItem(key)
    //     if (!data) {
    //         return null
    //     }
    //     data = JSON.parse(data)
    //     data = data.map(obj => {
    //         obj.questions = obj.questions.map(question => Question.create(question))
    //         return obj;
    //     })
    //     return data;
    // }

    static fileToBase64(file) {
        return new Promise((res, rej) => {
            let reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = (e) => {
                res(e.target.result)
            };
        })

    }
    static getUniqueString(text) {
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        for (let i = 0; i < 6; i++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    
}
