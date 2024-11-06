function capitalizing (str) {
    const str1 = str.toLowerCase().split(" ").map(st => st[0].toUpperCase() + st.slice(1))
    console.log(str1)
}

const str = "I LOve u"
capitalizing(str)