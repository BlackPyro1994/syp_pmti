function show_semester_content(global_sem_id) {
    console.log("show_semester_content(" + global_sem_id + ")");
    $("#div_semester").append(semester_array[global_sem_id]);
}