// import data from './data.json'
const data = require('./data.json')
//grab the category from each object
const allCategories = data.map(obj => obj.category)

//grab all unique categories, transform to an array
const categorySet = new Set(allCategories)
const categoriesUnique = Array.from(categorySet)

const categoriesWithCounts = data.reduce((obj, cat) => {
    const category = cat.category
    if (!obj[category]) {
        obj[category] = 0
    }
    obj[category] = obj[category]+=1
    return obj
}, {})

console.log(categorySet)
console.log(categoriesUnique)
console.log(categoriesWithCounts)

// export default data