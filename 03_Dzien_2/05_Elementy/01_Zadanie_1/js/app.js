const links = document.querySelectorAll(".links li");

// DEKLARATYWNA SCIEZKA
// function getDataInfo(nodes) {
// 	return [...nodes].flatMap((node) => Object.values({ ...node.dataset }));
// }

// IMPERATYWNA SCIEZKA
function getDataInfo(nodes) {
    const newArray = [];

    for (let index = 0; index < nodes.length; index++) {
        const dataset = nodes[index].dataset;
        for (const key in dataset) {
            if (Object.hasOwnProperty.call(dataset, key)) {
                const value = dataset[key];
                newArray.push(value);
            }
        }
    }

    return newArray;
}

console.log(getDataInfo(links));