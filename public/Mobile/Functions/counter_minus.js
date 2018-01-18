function counter_minus() {
    console.log("counter_minus()");
    if (count > 0) {
        count--;
    }
    delete_last_semester();
    
    //update_rules();
}