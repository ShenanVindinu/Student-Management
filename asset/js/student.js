var students = [];

$("#CourseMgtSection").css({display: 'none'});

$("#studentMgt").eq(0).on('click', () => {
    $("#StudentMgtSection").css({display: 'block'});
    $("#CourseMgtSection").css({display: 'none'});
});

$("#CourseMgt").eq(0).on('click', () => {
    $("#CourseMgtSection").css({display: 'block'});
    $("#StudentMgtSection").css({display: 'none'});
});





$("#studentSubmit").eq(0).on('click', () => {

    var studentID = $("#ID").val();
    var FirstName = $("#firstName").val();
    var LastName = $("#lastName").val();
    var Address = $("#Address").val();
    var Program = $('input[name="flexRadioDefault"]:checked').val();

    console.log(studentID,FirstName,LastName,Address,Program);

    // var record = `<tr>
    //     <td class="student-ID">${studentID}</td>
    //     <td class="first-Name">${FirstName}</td>
    //     <td class="last-Name">${LastName}</td>
    //     <td class="student-address">${Address}</td>
    //     <td class="student-program">${Program}</td>
    // </tr>`;
    //
    // $('#studentTable').append(record);

    let student = {
        id: studentID,
        firstName: FirstName,
        lastName: LastName,
        address: Address,
        program: Program }

    students.push(student);
    console.log(students);

    loadTable();


});

// this way doesn't work'
// $("#studentTable").eq(0).on('click', 'tr',() => {
//     let index = $(this).index();
//     let value = $(this).find(".student-id-value").text();
//     let firstname = $(this).find
// });

$("#studentTable").eq(0).on('click', 'tr', function() {
    let index = $(this).index();
    let id = $(this).find(".student-ID").text();
    let firstname = $(this).find(".first-Name").text();
    let lastName = $(this).find(".last-Name").text();
    let Address = $(this).find(".student-address").text();
    let program = $(this).find(".student-program").text();

    $('#ID').val(id);
    $('#firstName').val(firstname);
    $('#lastName').val(lastName);
    $('#Address').val(Address);
    $(`input[name="flexRadioDefault"][value=${program}]`).prop('checked', true);

});

function loadTable() {

    $('#Student-table-tBody').empty();

    students.map((item) => {
        var record = `<tr>
            <td class="student-ID">${item.id}</td>
            <td class="first-Name">${item.firstName}</td>
            <td class="last-Name">${item.lastName}</td>
            <td class="student-address">${item.address}</td>
            <td class="student-program">${item.program}</td>
        </tr>`;

        $('#studentTable').append(record);


    })

}