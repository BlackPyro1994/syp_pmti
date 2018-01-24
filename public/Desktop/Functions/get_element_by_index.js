function get_element_by_index(Object, index) {
    console.log("function get_element_by_index("+Object+","+index+")");

    return Object.slice(index, index + 1);
}